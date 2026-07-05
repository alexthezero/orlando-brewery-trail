const pubStops = [
  {
    id: "pub-raglan-road",
    name: "Raglan Road Irish Pub & Restaurant",
    area: "Disney Springs / Lake Buena Vista",
    address: "1640 E Buena Vista Dr, Lake Buena Vista, FL 32830",
    category: "orlando",
    tags: ["Irish Pub", "Food", "Live Music"],
    food: true,
    vibe: "Large Irish pub at Disney Springs with Irish food, beer flights, whiskey, cocktails, and live Irish entertainment.",
    website: "https://www.raglanroad.com/food-index",
    menuNote: "Raglan Road publishes a full drinks menu. Beer selections and prices can change, so use this as a strong guide and verify before ordering.",
    drinks: [
      { name: "Guinness", style: "Nitro Stout", abv: "4.3%", profile: "Creamy, roasted, dry, coffee-like, and smooth with a classic nitro finish." },
      { name: "Smithwick's", style: "Irish Red Ale", abv: "3.8%", profile: "Malty, lightly sweet, smooth, balanced, and easy-drinking." },
      { name: "Harp", style: "Irish Lager", abv: "4.5%", profile: "Clean, crisp, lightly grainy, and refreshing." },
      { name: "Kilkenny", style: "Nitro Cream Ale", abv: "4.3%", profile: "Creamy, red-ale-like, smooth, malt-forward, and lightly bitter." },
      { name: "Magners Apple Cider", style: "Irish Cider", abv: "4.5%", profile: "Apple-forward, crisp, gently sweet, and refreshing." },
      { name: "Magners Pear Cider", style: "Irish Pear Cider", abv: "4.5%", profile: "Pear-forward, fruitier and softer than apple cider, with a crisp finish." },
      { name: "Tri Wishes by Crooked Can", style: "Irish Red Ale", abv: "5.5%", profile: "Local red ale with caramel malt, light toast, and balanced bitterness." },
      { name: "Bloomsday by Orange Blossom", style: "Pale Ale", abv: "6.0%", profile: "Lightly hoppy, citrusy, balanced, and locally brewed in Orlando." },
      { name: "Hit the Haze by Crooked Can", style: "New England IPA", abv: "6.1%", profile: "Juicy, hazy, tropical, softer bitterness, and fruit-forward hop flavor." },
      { name: "High Stepper by Crooked Can", style: "American IPA", abv: "7.0%", profile: "Bolder hop bitterness with citrus, pine, and a firmer finish." },
      { name: "Yuengling Lager", style: "Traditional Lager", abv: "4.5%", profile: "Amber lager with mild caramel malt, light bitterness, and crisp finish." },
      { name: "Allagash White", style: "Belgian-style Wheat Ale", abv: "5.0%", profile: "Wheat-soft, citrusy, lightly spicy, and refreshing." }
    ]
  },
  {
    id: "pub-fiddlers-green",
    name: "Fiddler’s Green Irish Pub & Eatery",
    area: "Winter Park",
    address: "544 W Fairbanks Ave, Winter Park, FL 32789",
    category: "bonus",
    tags: ["Irish Pub", "Food", "Entertainment"],
    food: true,
    vibe: "Long-running Central Florida Irish pub with food, live entertainment, rotating taps, bottles, whiskey, and cocktails.",
    website: "https://fiddlersgreen.pub/drink-specials-2",
    menuNote: "Fiddler’s Green publishes that beer is available on draft and bottle, with rotating taps. Ask your server for the exact current beer board.",
    drinks: [
      { name: "Rotating Draft Beer", style: "Current Tap Board", abv: "Varies", profile: "Ask the server what is on tap; this is the freshest beer option and changes over time." },
      { name: "Bottled Beer Selection", style: "Bottle Beer", abv: "Varies", profile: "Good backup if the draft board does not fit your taste; availability changes." },
      { name: "Irish Stout Option", style: "Stout", abv: "Varies", profile: "Expect roasted malt, coffee, cocoa, creaminess, and a dry finish if available." },
      { name: "Irish Red / Amber Option", style: "Red Ale", abv: "Varies", profile: "Malt-forward, smooth, caramel-like, and less bitter than an IPA." },
      { name: "Lager Option", style: "Lager", abv: "Varies", profile: "Crisp, light-bodied, easy-drinking, and refreshing." },
      { name: "IPA / Pale Ale Option", style: "Hoppy Ale", abv: "Varies", profile: "Citrus, pine, tropical fruit, or resin hop notes depending on the current selection." }
    ]
  },
  {
    id: "pub-claddagh-cottage",
    name: "Claddagh Cottage Irish Pub",
    area: "Curry Ford / Orlando",
    address: "Claddagh Cottage Irish Pub, Orlando, FL",
    category: "orlando",
    tags: ["Irish Pub", "Traditional", "Cozy"],
    food: true,
    vibe: "Cozy Orlando Irish pub known for traditional Irish hospitality, Irish food, and neighborhood-pub energy.",
    website: "https://www.google.com/search?q=Claddagh+Cottage+Irish+Pub+Orlando",
    menuNote: "Public beer details are not consistently posted in a readable menu. Treat this as a planning guide and check the current board in person.",
    drinks: [
      { name: "Current Irish Beer Tap", style: "Irish Beer", abv: "Varies", profile: "Ask for the current Irish tap; expect stout, red ale, lager, or cider depending on availability." },
      { name: "Stout Option", style: "Irish Stout", abv: "Varies", profile: "Roasty, creamy, coffee-like, smooth, and dry." },
      { name: "Irish Red Option", style: "Irish Red Ale", abv: "Varies", profile: "Toasty malt, light caramel, smooth body, and balanced bitterness." },
      { name: "Cider Option", style: "Hard Cider", abv: "Varies", profile: "Crisp fruit, apple or pear character, and a lighter finish." },
      { name: "Local Craft Tap", style: "Rotating Craft Beer", abv: "Varies", profile: "Flavor depends on the tap; could be hoppy, malty, sour, or light and crisp." }
    ]
  },
  {
    id: "pub-hagan-oreillys",
    name: "Hagan O’Reilly’s Irish Pub & Restaurant",
    area: "Winter Garden",
    address: "16112 Marsh Rd, Winter Garden, FL 34787",
    category: "bonus",
    tags: ["Irish Pub", "Food", "Sports"],
    food: true,
    vibe: "Irish pub and restaurant in the Winter Garden area with food, drinks, and pub-style sports atmosphere.",
    website: "https://www.google.com/search?q=Hagan+O%27Reilly%27s+Irish+Pub+Winter+Garden+beer+menu",
    menuNote: "A stable public beer list was not available in plain text. Use these beer lanes as a checklist and confirm the current menu at the pub.",
    drinks: [
      { name: "Current Draft Beer", style: "Rotating Draft", abv: "Varies", profile: "Ask what is currently on draft; this is the best way to find the freshest pour." },
      { name: "Irish Stout", style: "Stout", abv: "Varies", profile: "Creamy, roasty, dark, and smooth with coffee or cocoa notes." },
      { name: "Irish Red Ale", style: "Red Ale", abv: "Varies", profile: "Malt-driven, caramel, toast, low-to-medium bitterness, and easy finish." },
      { name: "Light Lager", style: "Lager", abv: "Varies", profile: "Crisp, clean, light-bodied, and game-day friendly." },
      { name: "IPA / Pale Ale", style: "Hoppy Ale", abv: "Varies", profile: "Citrus, pine, or tropical hop notes with more bitterness than lager." }
    ]
  },
  {
    id: "pub-liam-fitzpatricks",
    name: "Liam Fitzpatrick’s Irish Restaurant & Pub",
    area: "Lake Mary",
    address: "951 Market Promenade Ave, Lake Mary, FL 32746",
    category: "bonus",
    tags: ["Irish Pub", "Restaurant", "Nearby Bonus"],
    food: true,
    vibe: "Irish restaurant and pub north of Orlando with a full food menu and pub drinks.",
    website: "https://www.google.com/search?q=Liam+Fitzpatrick%27s+Irish+Restaurant+Pub+beer+menu",
    menuNote: "Included as a nearby bonus stop. Public beer menu details can change, so confirm the current draft and bottle list before ordering.",
    drinks: [
      { name: "Current Irish Draft", style: "Irish Beer", abv: "Varies", profile: "Good first ask if you want the most pub-style choice: stout, red ale, lager, or cider." },
      { name: "Stout Option", style: "Stout", abv: "Varies", profile: "Dark, creamy, roasted, coffee-like, and smooth." },
      { name: "Red Ale Option", style: "Irish Red", abv: "Varies", profile: "Caramel malt, soft toast, low bitterness, and pub-friendly balance." },
      { name: "Lager Option", style: "Lager", abv: "Varies", profile: "Clean, crisp, and easy to pair with food." },
      { name: "Cider Option", style: "Hard Cider", abv: "Varies", profile: "Fruit-forward, lightly sweet, and crisp." }
    ]
  },
  {
    id: "pub-kitty-osheas",
    name: "Kitty O’Shea’s Irish Pub & Buffalo Bar",
    area: "International Drive / Convention Area",
    address: "9840 International Dr, Orlando, FL 32819",
    category: "orlando",
    tags: ["Irish Pub", "Hotel Bar", "I-Drive"],
    food: true,
    vibe: "Irish pub-style hotel bar near the convention corridor, useful if you are already around I-Drive or Rosen Centre.",
    website: "https://www.google.com/search?q=Kitty+O%27Shea%27s+Irish+Pub+Buffalo+Bar+Orlando",
    menuNote: "Hotel pub menus can change often. Confirm the current beer list when you arrive.",
    drinks: [
      { name: "Current Draft Beer", style: "Rotating Draft", abv: "Varies", profile: "Ask for the current draft board; likely the best fresh beer option." },
      { name: "Irish Stout Option", style: "Stout", abv: "Varies", profile: "Creamy, roasty, dry, and classic pub-style when available." },
      { name: "Domestic Lager Option", style: "Lager", abv: "Varies", profile: "Light, crisp, familiar, and easy-drinking." },
      { name: "Import Lager Option", style: "Import Lager", abv: "Varies", profile: "Clean, slightly maltier, and more full-flavored than light domestic lager." },
      { name: "IPA / Craft Option", style: "Craft Beer", abv: "Varies", profile: "Hop-forward, citrusy, piney, or tropical depending on the tap." }
    ]
  }
];

let activeMode = "breweries";

function currentItems() {
  return activeMode === "pubs" ? pubStops : breweries;
}

function currentModeLabel() {
  return activeMode === "pubs" ? "Irish Pub Trail" : "Orlando Brewery Trail";
}

function insertModeSwitcher() {
  const hero = document.querySelector(".hero");
  if (!hero || document.querySelector(".mode-switcher")) return;

  const switcher = document.createElement("div");
  switcher.className = "mode-switcher";
  switcher.innerHTML = `
    <button class="mode-btn active" type="button" data-mode="breweries">Breweries</button>
    <button class="mode-btn" type="button" data-mode="pubs">Pubs</button>
  `;

  hero.appendChild(switcher);

  switcher.querySelectorAll(".mode-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeMode = button.dataset.mode;
      switcher.querySelectorAll(".mode-btn").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      currentFilter = "all";
      filterButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.filter === "all");
      });

      searchInput.value = "";
      updateModeCopy();
      renderBreweries();
    });
  });
}

function updateModeCopy() {
  const h1 = document.querySelector("h1");
  const h2 = document.querySelector(".hero-card h2");
  const heroCopy = document.querySelector(".hero-copy");
  const searchLabel = document.querySelector(".search-label");
  const notice = document.querySelector(".notice");

  if (activeMode === "pubs") {
    if (h1) h1.textContent = "Orlando Irish Pub Trail";
    if (h2) h2.textContent = "Track Orlando-area Irish pubs, beer options, notes, and your favorite pours.";
    if (heroCopy) heroCopy.textContent = "Switch between breweries and pubs anytime. Your progress saves automatically on this device.";
    if (searchLabel) searchLabel.textContent = "Search Irish pubs";
    if (searchInput) searchInput.placeholder = "Try Disney Springs, Winter Park, Guinness, stout...";
    if (notice) notice.innerHTML = "<strong>Quick note:</strong> Pub beer lists rotate often. For exact availability, call or check the current menu before driving over. Please enjoy responsibly and use a designated driver or rideshare.";
  } else {
    if (h1) h1.textContent = "Orlando Brewery Trail";
    if (h2) h2.textContent = "Track every brewery stop, save notes, and build your own Orlando beer trail.";
    if (heroCopy) heroCopy.textContent = "Check off breweries as you visit them. Your progress saves automatically on this device.";
    if (searchLabel) searchLabel.textContent = "Search breweries";
    if (searchInput) searchInput.placeholder = "Try Milk District, Lake Nona, food, airport...";
    if (notice) notice.innerHTML = "<strong>Quick note:</strong> Hours, food options, drink menus, and special releases change often. Always check the brewery before driving over. Please enjoy responsibly and use a designated driver or rideshare.";
  }
}

function itemMatchesCurrentFilter(item, itemState, query) {
  const drinkText = (item.drinks || [])
    .map((drink) => `${drink.name} ${drink.style} ${drink.abv} ${drink.profile}`)
    .join(" ");

  const haystack = [
    item.name,
    item.area,
    item.address,
    item.category,
    item.vibe,
    item.menuNote,
    drinkText,
    ...item.tags
  ].join(" ").toLowerCase();

  const matchesSearch = !query || haystack.includes(query);

  const matchesFilter =
    currentFilter === "all" ||
    (currentFilter === "visited" && itemState.visited) ||
    (currentFilter === "unvisited" && !itemState.visited) ||
    (currentFilter === "food" && item.food) ||
    item.category === currentFilter;

  return matchesSearch && matchesFilter;
}

renderBreweries = function () {
  const query = searchInput.value.trim().toLowerCase();
  const items = currentItems();

  const filtered = items.filter((item) => itemMatchesCurrentFilter(item, breweryState(item.id), query));

  breweryList.innerHTML = "";

  if (!filtered.length) {
    breweryList.innerHTML = `
      <article class="notice">
        No ${activeMode === "pubs" ? "pubs" : "breweries"} match that search/filter yet. Try clearing the search or switching back to All.
      </article>
    `;
    updateStats();
    return;
  }

  filtered.forEach((item) => {
    const itemState = breweryState(item.id);

    const card = document.createElement("article");
    card.className = `brewery-card ${itemState.visited ? "visited" : ""}`;
    card.innerHTML = `
      <div class="brewery-header">
        <label class="check-wrap" aria-label="Mark ${item.name} visited">
          <input type="checkbox" ${itemState.visited ? "checked" : ""} data-id="${item.id}" />
          <span class="fake-check" aria-hidden="true"></span>
        </label>

        <div>
          <h3 class="brewery-title">${item.name}</h3>
          <p class="meta"><strong>${item.area}</strong><br>${item.address}</p>
          <p class="meta">${item.vibe}</p>
          <div class="tags">
            ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>

        <div class="card-actions">
          <a href="${mapsUrl(item.address)}" target="_blank" rel="noopener">Map</a>
          <a href="${item.website}" target="_blank" rel="noopener">Menu</a>
        </div>
      </div>

      ${renderDrinkMenu(item)}

      <textarea class="notes" data-note-id="${item.id}" placeholder="Add notes: favorite drink, parking, food, who you went with...">${itemState.notes || ""}</textarea>
    `;

    breweryList.appendChild(card);
  });

  bindCardEvents();
  updateStats();
};

updateStats = function () {
  const items = currentItems();
  const visited = items.filter((item) => breweryState(item.id).visited).length;
  const total = items.length;
  const percent = total ? Math.round((visited / total) * 100) : 0;

  visitedCount.textContent = visited;
  progressLabel.textContent = `${percent}% complete`;
  progressBar.style.width = `${percent}%`;

  totalCount.textContent = total;
  orlandoCount.textContent = items.filter((item) => item.category === "orlando").length;
  bonusCount.textContent = items.filter((item) => item.category === "bonus").length;

  const summaryLabels = document.querySelectorAll(".summary-grid p");
  if (summaryLabels.length >= 3) {
    summaryLabels[0].textContent = activeMode === "pubs" ? "Total pubs" : "Total stops";
    summaryLabels[1].textContent = activeMode === "pubs" ? "Orlando-area pubs" : "Orlando stops";
    summaryLabels[2].textContent = activeMode === "pubs" ? "Nearby bonus pubs" : "Nearby bonus";
  }
};

function exportCurrentChecklist() {
  const items = currentItems();
  const lines = [];
  lines.push(currentModeLabel());
  lines.push("--------------------------------");
  lines.push("");

  items.forEach((item) => {
    const itemState = breweryState(item.id);
    lines.push(`${itemState.visited ? "✅" : "⬜"} ${item.name}`);
    lines.push(`   Area: ${item.area}`);
    lines.push(`   Address: ${item.address}`);
    lines.push("   Drink menu:");
    (item.drinks || []).forEach((drink) => {
      lines.push(`   - ${drink.name} (${drink.style}, ${drink.abv}): ${drink.profile}`);
    });
    if (item.menuNote) {
      lines.push(`   Menu note: ${item.menuNote}`);
    }
    if (itemState.notes) {
      lines.push(`   Notes: ${itemState.notes}`);
    }
    lines.push("");
  });

  exportText.value = lines.join("\n");
  exportDialog.showModal();
}

function replaceExportButton() {
  const oldButton = document.getElementById("exportBtn");
  if (!oldButton) return;

  const newButton = oldButton.cloneNode(true);
  oldButton.parentNode.replaceChild(newButton, oldButton);
  newButton.addEventListener("click", exportCurrentChecklist);
}

insertModeSwitcher();
replaceExportButton();
updateModeCopy();
renderBreweries();
