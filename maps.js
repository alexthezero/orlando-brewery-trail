const locationCoords = {
  "sideward": [28.5442, -81.3500],
  "twelve-talons": [28.5392, -81.3479],
  "ivanhoe-park": [28.5636, -81.3745],
  "ivanhoe-lager-house": [28.5436, -81.3979],
  "ten10": [28.5639, -81.3656],
  "redlight-redlight": [28.5685, -81.3451],
  "hourglass": [28.5245, -81.3486],
  "rockpit": [28.5149, -81.3792],
  "tactical": [28.5662, -81.3283],
  "park-pizza": [28.3736, -81.2628],
  "brewlando": [28.4808, -81.2984],
  "brew-theory": [28.5489, -81.3846],
  "broken-strings": [28.5404, -81.3948],
  "cask-larder": [28.4312, -81.3081],
  "crooked-can": [28.5653, -81.5864],
  "ny-beer-project": [28.4386, -81.5981],

  "pub-raglan-road": [28.3707, -81.5183],
  "pub-fiddlers-green": [28.5932, -81.3577],
  "pub-claddagh-cottage": [28.5230, -81.3466],
  "pub-hagan-oreillys": [28.4455, -81.6270],
  "pub-liam-fitzpatricks": [28.7843, -81.3587],
  "pub-kitty-osheas": [28.4244, -81.4644],

  "sports-nbc-sports-grill": [28.4727, -81.4678],
  "sports-city-works": [28.3703, -81.5187],
  "sports-yard-house": [28.4439, -81.4704],
  "sports-drafts-westgate": [28.4264, -81.4753],
  "sports-millers-ale-house": [28.4660, -81.4588],
  "sports-gators-dockside": [28.4850, -81.4300],
  "sports-toms-watch-bar": [28.4431, -81.4720],
  "sports-twin-peaks": [28.4448, -81.4700],
  "sports-american-social": [28.4488, -81.4807],
  "sports-the-porch": [28.6046, -81.3656],
  "sports-stadium-club": [28.3585, -81.4932]
};

let trailMapInstance = null;
let trailMapLayer = null;

function modeMapTitle() {
  if (typeof activeMode !== "undefined" && activeMode === "pubs") return "Irish Pub Map";
  if (typeof activeMode !== "undefined" && activeMode === "sports") return "Sports Bar Map";
  return "Brewery Map";
}

function modeMapDescription() {
  if (typeof activeMode !== "undefined" && activeMode === "pubs") {
    return "Tap a label to see the pub details and open it in Apple Maps.";
  }
  if (typeof activeMode !== "undefined" && activeMode === "sports") {
    return "Tap a label to see the sports bar details and open it in Apple Maps.";
  }
  return "Tap a label to see the brewery details and open it in Apple Maps.";
}

function ensureTrailMapSection() {
  let section = document.getElementById("trailMapCard");
  if (section) return section;

  section = document.createElement("section");
  section.id = "trailMapCard";
  section.className = "trail-map-card";
  section.innerHTML = `
    <div class="trail-map-header">
      <div>
        <h3 id="trailMapTitle">${modeMapTitle()}</h3>
        <p id="trailMapDescription">${modeMapDescription()}</p>
      </div>
      <span id="trailMapCount" class="trail-map-count">0 pins</span>
    </div>
    <div id="trailMap" aria-label="Orlando trail map"></div>
    <div id="trailMapFallback" class="map-fallback-list"></div>
  `;

  const list = document.getElementById("breweryList");
  if (list && list.parentNode) {
    list.insertAdjacentElement("afterend", section);
  }

  return section;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildFallbackList(items) {
  const fallback = document.getElementById("trailMapFallback");
  if (!fallback) return;

  fallback.innerHTML = items.map((item, index) => `
    <div>
      <strong>${index + 1}.</strong>
      <a href="${mapsUrl(item.address)}" target="_blank" rel="noopener">${escapeHtml(item.name)}</a>
      <span class="meta"> — ${escapeHtml(item.area)}</span>
    </div>
  `).join("");
}

function renderTrailMap() {
  const section = ensureTrailMapSection();
  if (!section || typeof currentItems !== "function") return;

  const items = currentItems().filter((item) => locationCoords[item.id]);
  const title = document.getElementById("trailMapTitle");
  const description = document.getElementById("trailMapDescription");
  const count = document.getElementById("trailMapCount");

  if (title) title.textContent = modeMapTitle();
  if (description) description.textContent = modeMapDescription();
  if (count) count.textContent = `${items.length} pins`;

  buildFallbackList(items);

  if (typeof L === "undefined") {
    const mapEl = document.getElementById("trailMap");
    if (mapEl) {
      mapEl.innerHTML = "<div class='notice'>Map tiles could not load. Use the location links below to open each stop in Apple Maps.</div>";
    }
    return;
  }

  if (!trailMapInstance) {
    trailMapInstance = L.map("trailMap", {
      scrollWheelZoom: false,
      tap: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(trailMapInstance);

    trailMapLayer = L.layerGroup().addTo(trailMapInstance);
  }

  trailMapLayer.clearLayers();

  const bounds = [];

  items.forEach((item, index) => {
    const coords = locationCoords[item.id];
    bounds.push(coords);

    const shortName = item.name
      .replace(" Brewing Co.", "")
      .replace(" Brewing Company", "")
      .replace(" Irish Pub", "")
      .replace(" Sports Bar", "")
      .replace(" & Restaurant", "")
      .replace(" & Grill", "");

    const icon = L.divIcon({
      className: "",
      html: `<div class="pin-label"><span class="pin-number">${index + 1}</span><span>${escapeHtml(shortName)}</span></div>`,
      iconAnchor: [14, 14]
    });

    const popup = `
      <div class="map-popup-title">${escapeHtml(item.name)}</div>
      <div class="map-popup-area">${escapeHtml(item.area)}<br>${escapeHtml(item.address)}</div>
      <a class="map-popup-link" href="${mapsUrl(item.address)}" target="_blank" rel="noopener">Open in Apple Maps</a>
    `;

    L.marker(coords, { icon }).bindPopup(popup).addTo(trailMapLayer);
  });

  setTimeout(() => {
    trailMapInstance.invalidateSize();
    if (bounds.length) {
      trailMapInstance.fitBounds(bounds, { padding: [30, 30], maxZoom: 12 });
    } else {
      trailMapInstance.setView([28.5383, -81.3792], 10);
    }
  }, 120);
}

if (typeof renderBreweries === "function") {
  const renderBeforeMap = renderBreweries;
  renderBreweries = function (...args) {
    renderBeforeMap.apply(this, args);
    renderTrailMap();
  };

  renderTrailMap();
}
