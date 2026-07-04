const breweries = [
  {
    id: "sideward",
    name: "Sideward Brewing Co.",
    area: "Milk District",
    address: "210 N Bumby Ave, Suite C, Orlando, FL 32803",
    category: "orlando",
    tags: ["Taproom", "Kitchen", "Patio"],
    food: true,
    vibe: "Family-owned Orlando brewery with a full kitchen in the Milk District.",
    website: "https://sidewardbrewing.com/"
  },
  {
    id: "twelve-talons",
    name: "Twelve Talons Beerworks",
    area: "Milk District",
    address: "2807 E South Street, Orlando, FL 32803",
    category: "orlando",
    tags: ["Microbrewery", "Cider", "Mead"],
    food: true,
    vibe: "Boutique craft brewery, cidery, and meadery with rotating pours.",
    website: "https://www.twelvetalons.com/"
  },
  {
    id: "ivanhoe-park",
    name: "Ivanhoe Park Brewing Co.",
    area: "Ivanhoe Village",
    address: "1300 Alden Road, Orlando, FL 32803",
    category: "orlando",
    tags: ["Taproom", "Events", "Local Favorite"],
    food: false,
    vibe: "Independent craft brewery and tasting room in historic Ivanhoe.",
    website: "https://ivanhoeparkbrewing.com/"
  },
  {
    id: "ivanhoe-lager-house",
    name: "Ivanhoe Park Lager House",
    area: "Parramore / Downtown",
    address: "23 N Orange Blossom Trail, Orlando, FL 32805",
    category: "orlando",
    tags: ["Lagers", "Second Location", "Downtown"],
    food: false,
    vibe: "Ivanhoe Park's lager-focused downtown tasting room.",
    website: "https://ivanhoeparkbrewing.com/"
  },
  {
    id: "ten10",
    name: "Ten10 Brewing Company",
    area: "Mills 50 / Ivanhoe",
    address: "1010 Virginia Drive, Orlando, FL 32803",
    category: "orlando",
    tags: ["Taproom", "Kitchen", "Urban Trail"],
    food: true,
    vibe: "Neighborhood brewery near the Orlando Urban Trail.",
    website: "https://ten10brewingcompany.com/"
  },
  {
    id: "redlight-redlight",
    name: "Redlight Redlight Brewpub",
    area: "Audubon Park",
    address: "2810 Corrine Drive, Orlando, FL 32803",
    category: "orlando",
    tags: ["Brewpub", "Food", "Craft Beer Bar"],
    food: true,
    vibe: "Independent craft beer spot with house-brewed beer and food.",
    website: "https://www.redlightredlightbrewpub.com/"
  },
  {
    id: "hourglass",
    name: "Hourglass Brewing - District",
    area: "Hourglass District / Curry Ford West",
    address: "2500 Curry Ford Road, Suite 4, Orlando, FL 32806",
    category: "orlando",
    tags: ["Taproom", "Eclectic", "Curry Ford"],
    food: false,
    vibe: "Orlando taproom from the Central Florida brewery in the Hourglass District.",
    website: "https://hourglassbrewing.com/"
  },
  {
    id: "rockpit",
    name: "RockPit Brewing & Distilling",
    area: "SoDo",
    address: "10 W Illiana Street, Orlando, FL 32806",
    category: "orlando",
    tags: ["Brewery", "Distillery", "Dog Friendly"],
    food: true,
    vibe: "Laid-back neighborhood brewery and distillery in SoDo.",
    website: "https://rockpitbrewing.com/"
  },
  {
    id: "tactical",
    name: "Tactical Brewing Co.",
    area: "Baldwin Park",
    address: "4882 New Broad Street, Orlando, FL 32814",
    category: "orlando",
    tags: ["Veteran-founded", "Baldwin Park", "Events"],
    food: false,
    vibe: "Veteran-founded brewery near Lake Baldwin.",
    website: "https://www.tacticalbeer.com/"
  },
  {
    id: "park-pizza",
    name: "Park Pizza & Brewing Co.",
    area: "Lake Nona",
    address: "6941 Lake Nona Blvd, Orlando, FL 32827",
    category: "orlando",
    tags: ["Brewpub", "Pizza", "Lake Nona"],
    food: true,
    vibe: "Wood-fired pizza and house-brewed beer in Lake Nona.",
    website: "https://parkpizzalakenona.com/"
  },
  {
    id: "brewlando",
    name: "Brewlando Brewing",
    area: "Southeast Orlando",
    address: "6820 Hoffner Ave, Orlando, FL 32822",
    category: "orlando",
    tags: ["Large Taproom", "20+ Brews", "Events"],
    food: true,
    vibe: "Main Brewlando brewery with a broad in-house lineup.",
    website: "https://www.brewlando.com/"
  },
  {
    id: "brew-theory",
    name: "Brew Theory Marketplace",
    area: "Creative Village",
    address: "400 Pitman Street, Orlando, FL 32801",
    category: "orlando",
    tags: ["Marketplace", "Production", "Downtown"],
    food: true,
    vibe: "Brew Theory's Orlando marketplace and beverage production location.",
    website: "https://www.brew-theory.com/"
  },
  {
    id: "broken-strings",
    name: "Broken Strings Taproom",
    area: "West Church / Stadium District",
    address: "1012 W Church Street, Orlando, FL 32805",
    category: "orlando",
    tags: ["Taproom", "Soccer Stop", "Downtown"],
    food: false,
    vibe: "Local taproom between Camping World Stadium and Inter&Co Stadium.",
    website: "https://www.brokenstringsbrewery.com/"
  },
  {
    id: "cask-larder",
    name: "Cask & Larder",
    area: "Orlando International Airport",
    address: "MCO, Southwest gates 100-129, Orlando, FL",
    category: "orlando",
    tags: ["Airport", "Brewhouse", "Food"],
    food: true,
    vibe: "Southern comfort eatery and brewhouse inside Orlando International Airport.",
    website: "https://www.caskandlarder.com/"
  },
  {
    id: "crooked-can",
    name: "Crooked Can Brewing Company",
    area: "Winter Garden",
    address: "426 W Plant Street, Winter Garden, FL 34787",
    category: "bonus",
    tags: ["Nearby Bonus", "Plant Street Market", "Food Hall"],
    food: true,
    vibe: "Popular Greater Orlando brewery inside Plant Street Market.",
    website: "https://crookedcan.com/"
  },
  {
    id: "ny-beer-project",
    name: "NY Beer Project Orlando",
    area: "Winter Garden",
    address: "9230 Miley Drive, Winter Garden, FL 34787",
    category: "bonus",
    tags: ["Nearby Bonus", "Brewpub", "Food"],
    food: true,
    vibe: "Large brewpub-style stop in the Winter Garden area.",
    website: "https://www.nybeerproject.com/locations/orlando"
  }
];

const STORAGE_KEY = "orlandoBreweryTrailChecklistV1";

const breweryList = document.getElementById("breweryList");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const visitedCount = document.getElementById("visitedCount");
const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");
const totalCount = document.getElementById("totalCount");
const orlandoCount = document.getElementById("orlandoCount");
const bonusCount = document.getElementById("bonusCount");
const exportBtn = document.getElementById("exportBtn");
const resetBtn = document.getElementById("resetBtn");
const exportDialog = document.getElementById("exportDialog");
const exportText = document.getElementById("exportText");
const copyBtn = document.getElementById("copyBtn");

let currentFilter = "all";
let state = loadState();

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function breweryState(id) {
  if (!state[id]) {
    state[id] = { visited: false, notes: "" };
  }
  return state[id];
}

function mapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function renderBreweries() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = breweries.filter((brewery) => {
    const itemState = breweryState(brewery.id);
    const haystack = [
      brewery.name,
      brewery.area,
      brewery.address,
      brewery.category,
      brewery.vibe,
      ...brewery.tags
    ].join(" ").toLowerCase();

    const matchesSearch = !query || haystack.includes(query);

    const matchesFilter =
      currentFilter === "all" ||
      (currentFilter === "visited" && itemState.visited) ||
      (currentFilter === "unvisited" && !itemState.visited) ||
      (currentFilter === "food" && brewery.food) ||
      brewery.category === currentFilter;

    return matchesSearch && matchesFilter;
  });

  breweryList.innerHTML = "";

  if (!filtered.length) {
    breweryList.innerHTML = `
      <article class="notice">
        No breweries match that search/filter yet. Try clearing the search or switching back to All.
      </article>
    `;
    updateStats();
    return;
  }

  filtered.forEach((brewery) => {
    const itemState = breweryState(brewery.id);

    const card = document.createElement("article");
    card.className = `brewery-card ${itemState.visited ? "visited" : ""}`;
    card.innerHTML = `
      <div class="brewery-header">
        <label class="check-wrap" aria-label="Mark ${brewery.name} visited">
          <input type="checkbox" ${itemState.visited ? "checked" : ""} data-id="${brewery.id}" />
          <span class="fake-check" aria-hidden="true"></span>
        </label>

        <div>
          <h3 class="brewery-title">${brewery.name}</h3>
          <p class="meta"><strong>${brewery.area}</strong><br>${brewery.address}</p>
          <p class="meta">${brewery.vibe}</p>
          <div class="tags">
            ${brewery.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>

        <div class="card-actions">
          <a href="${mapsUrl(brewery.address)}" target="_blank" rel="noopener">Map</a>
          <a href="${brewery.website}" target="_blank" rel="noopener">Website</a>
        </div>
      </div>

      <textarea class="notes" data-note-id="${brewery.id}" placeholder="Add notes: favorite beer, parking, food, who you went with...">${itemState.notes || ""}</textarea>
    `;

    breweryList.appendChild(card);
  });

  bindCardEvents();
  updateStats();
}

function bindCardEvents() {
  document.querySelectorAll(".check-wrap input").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const id = event.target.dataset.id;
      breweryState(id).visited = event.target.checked;
      saveState();
      renderBreweries();
    });
  });

  document.querySelectorAll(".notes").forEach((textarea) => {
    textarea.addEventListener("input", (event) => {
      const id = event.target.dataset.noteId;
      breweryState(id).notes = event.target.value;
      saveState();
      updateStats();
    });
  });
}

function updateStats() {
  const visited = breweries.filter((brewery) => breweryState(brewery.id).visited).length;
  const total = breweries.length;
  const percent = total ? Math.round((visited / total) * 100) : 0;

  visitedCount.textContent = visited;
  progressLabel.textContent = `${percent}% complete`;
  progressBar.style.width = `${percent}%`;

  totalCount.textContent = total;
  orlandoCount.textContent = breweries.filter((brewery) => brewery.category === "orlando").length;
  bonusCount.textContent = breweries.filter((brewery) => brewery.category === "bonus").length;
}

function exportChecklist() {
  const lines = [];
  lines.push("Orlando Brewery Trail Checklist");
  lines.push("--------------------------------");
  lines.push("");

  breweries.forEach((brewery) => {
    const itemState = breweryState(brewery.id);
    lines.push(`${itemState.visited ? "✅" : "⬜"} ${brewery.name}`);
    lines.push(`   Area: ${brewery.area}`);
    lines.push(`   Address: ${brewery.address}`);
    if (itemState.notes) {
      lines.push(`   Notes: ${itemState.notes}`);
    }
    lines.push("");
  });

  exportText.value = lines.join("\n");
  exportDialog.showModal();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderBreweries();
  });
});

searchInput.addEventListener("input", renderBreweries);

exportBtn.addEventListener("click", exportChecklist);

copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(exportText.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1200);
});

resetBtn.addEventListener("click", () => {
  const confirmed = confirm("Reset all visited breweries and notes?");
  if (!confirmed) return;
  state = {};
  saveState();
  renderBreweries();
});

renderBreweries();
