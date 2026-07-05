const sportsStops = [
  {
    id: "sports-nbc-sports-grill",
    name: "NBC Sports Grill & Brew",
    area: "Universal CityWalk",
    address: "6000 Universal Blvd, Orlando, FL 32819",
    category: "orlando",
    tags: ["Sports Bar", "Food", "CityWalk"],
    food: true,
    vibe: "Big sports restaurant and bar at Universal CityWalk with stadium-style viewing, food, beer, and cocktails.",
    website: "https://www.universalorlando.com/web/en/us/things-to-do/dining/nbc-sports-grill-and-brew/menu.html",
    menuNote: "Theme-park and CityWalk drink menus change. Use this as a beer-style guide and check the current menu at the bar.",
    drinks: [
      { name: "Current Draft Board", style: "Rotating Draft Beer", abv: "Varies", profile: "Ask what is freshest on draft; likely the best move before a game." },
      { name: "Local Craft IPA", style: "IPA", abv: "Varies", profile: "Citrus, pine, tropical fruit, and a firmer bitter finish." },
      { name: "Light Domestic Lager", style: "Lager", abv: "Varies", profile: "Clean, crisp, light-bodied, and easy to drink during a long game." },
      { name: "Import Lager", style: "Lager", abv: "Varies", profile: "Crisp with a little more malt character than a light domestic." },
      { name: "Stout / Dark Beer", style: "Stout / Porter", abv: "Varies", profile: "Roasted malt, coffee, cocoa, and a fuller body when available." },
      { name: "Hard Cider / Seltzer", style: "Cider / Seltzer", abv: "Varies", profile: "Crisp, fruity, lighter, and a good non-beer-style option." }
    ]
  },
  {
    id: "sports-city-works",
    name: "City Works Eatery & Pour House",
    area: "Disney Springs",
    address: "1486 E Buena Vista Dr, Lake Buena Vista, FL 32830",
    category: "orlando",
    tags: ["Sports Bar", "90 Drafts", "Food"],
    food: true,
    vibe: "Large Disney Springs sports bar and pour house known for a very large draft beer selection and big-screen sports viewing.",
    website: "https://www.cityworksrestaurant.com/locations/disney-springs/",
    menuNote: "City Works is draft-heavy and rotates taps. Exact beers change, so use the official menu for the live board.",
    drinks: [
      { name: "Local Florida Draft", style: "Craft Beer", abv: "Varies", profile: "Usually fresh, regional, and more characterful than a national lager." },
      { name: "Hazy IPA", style: "New England IPA", abv: "Varies", profile: "Juicy, tropical, soft-bodied, and lower bitterness than a West Coast IPA." },
      { name: "West Coast IPA", style: "IPA", abv: "Varies", profile: "Pine, grapefruit, resin, and a sharper bitter finish." },
      { name: "Pilsner / Lager", style: "Lager", abv: "Varies", profile: "Clean, crisp, light malt, and highly refreshing." },
      { name: "Amber / Red Ale", style: "Amber Ale", abv: "Varies", profile: "Caramel malt, toast, light sweetness, and moderate bitterness." },
      { name: "Stout / Porter", style: "Dark Beer", abv: "Varies", profile: "Roasted malt, chocolate, coffee, and a richer mouthfeel." },
      { name: "Sour / Fruited Beer", style: "Sour", abv: "Varies", profile: "Tart, bright, fruit-forward, and more adventurous." }
    ]
  },
  {
    id: "sports-yard-house",
    name: "Yard House Orlando",
    area: "ICON Park / International Drive",
    address: "8367 International Dr, Orlando, FL 32819",
    category: "orlando",
    tags: ["Sports Bar", "100+ Taps", "Food"],
    food: true,
    vibe: "Beer-heavy restaurant and sports-watching spot near ICON Park with a massive tap list and full food menu.",
    website: "https://www.yardhouse.com/locations/fl/orlando/orlando-i-drive-360/8387",
    menuNote: "Yard House tap lists vary by location and season. Check the location beer menu for the exact live lineup.",
    drinks: [
      { name: "House / Local Draft", style: "Craft Draft", abv: "Varies", profile: "Fresh draft option; profile depends on what is currently tapped." },
      { name: "Hazy IPA", style: "IPA", abv: "Varies", profile: "Juicy, tropical, soft, and hop aromatic with lower perceived bitterness." },
      { name: "Classic IPA", style: "IPA", abv: "Varies", profile: "Citrus, pine, floral hops, and a stronger bitter finish." },
      { name: "Belgian Wit / Wheat", style: "Wheat Beer", abv: "Varies", profile: "Soft wheat body, citrus, spice, and a refreshing finish." },
      { name: "Golden Lager", style: "Lager", abv: "Varies", profile: "Clean, light-bodied, crisp, and food-friendly." },
      { name: "Stout", style: "Dark Beer", abv: "Varies", profile: "Coffee, cocoa, roast, and a fuller finish." },
      { name: "Sour / Fruit Beer", style: "Sour", abv: "Varies", profile: "Tart, fruit-forward, bright, and refreshing." }
    ]
  },
  {
    id: "sports-drafts-westgate",
    name: "Drafts Sports Bar & Grill",
    area: "Westgate Lakes / Turkey Lake",
    address: "9500 Turkey Lake Rd, Orlando, FL 32819",
    category: "orlando",
    tags: ["Sports Bar", "Draft Beer", "Resort"],
    food: true,
    vibe: "Sports bar and grill at Westgate Lakes with HDTV sports, burgers, sandwiches, draft beer, bottled beer, and cocktails.",
    website: "https://www.westgateresorts.com/hotels/florida/orlando/westgate-lakes-resort/dining/drafts-sports-bar-grill/",
    menuNote: "Drafts advertises an extensive selection of draft and bottled beers plus cocktails. Exact beers may change.",
    drinks: [
      { name: "Draft Beer Selection", style: "Rotating Draft Beer", abv: "Varies", profile: "Ask what is currently on draft; best for a fresh pint with the game." },
      { name: "Bottled Beer Selection", style: "Bottle Beer", abv: "Varies", profile: "Stable backup option when the draft board is not your style." },
      { name: "Light Lager", style: "Lager", abv: "Varies", profile: "Clean, crisp, light, and easy for game-watching." },
      { name: "Craft IPA", style: "IPA", abv: "Varies", profile: "Hoppy, citrusy, piney, and moderately to strongly bitter." },
      { name: "Amber Ale", style: "Amber / Red Ale", abv: "Varies", profile: "Caramel malt, toast, smooth body, and balanced bitterness." },
      { name: "Sports Bar Cocktail", style: "Cocktail", abv: "Varies", profile: "Stronger mixed-drink option when you are not in a beer mood." }
    ]
  },
  {
    id: "sports-millers-ale-house",
    name: "Miller’s Ale House - Orlando",
    area: "Multiple Orlando Locations",
    address: "Miller's Ale House, Orlando, FL",
    category: "orlando",
    tags: ["Sports Bar", "Chain", "Food"],
    food: true,
    vibe: "Florida-born casual sports bar chain with multiple Orlando-area locations, TVs, wings, burgers, cocktails, and beer.",
    website: "https://millersalehouse.com/locations/",
    menuNote: "Miller’s beer availability varies by location. Use the location menu or ask the bartender for the current taps.",
    drinks: [
      { name: "Current Draft Beer", style: "Draft Beer", abv: "Varies", profile: "Ask what is currently tapped; this is the cleanest way to choose at a specific location." },
      { name: "Domestic Light Lager", style: "Lager", abv: "Varies", profile: "Very light, crisp, low bitterness, and easy-drinking." },
      { name: "Import Lager", style: "Lager", abv: "Varies", profile: "Crisp, slightly fuller malt, and a clean finish." },
      { name: "Craft IPA", style: "IPA", abv: "Varies", profile: "Hoppy, citrusy, piney, and more bitter than lager." },
      { name: "Wheat Beer", style: "Wheat Ale", abv: "Varies", profile: "Soft, citrusy, lightly sweet, and refreshing." },
      { name: "Hard Seltzer / Cider", style: "Seltzer / Cider", abv: "Varies", profile: "Lighter, fruit-forward, crisp, and not malt-heavy." }
    ]
  },
  {
    id: "sports-gators-dockside",
    name: "Gator’s Dockside - Orlando Area",
    area: "Orlando Area",
    address: "Gator's Dockside, Orlando, FL",
    category: "orlando",
    tags: ["Sports Bar", "Wings", "Food"],
    food: true,
    vibe: "Florida sports bar chain known for wings, TVs, game-day atmosphere, beer, and casual bar food.",
    website: "https://www.gatorsdockside.com/locations/",
    menuNote: "Gator’s beer lists vary by location and promotion. Confirm the active taps at the location you choose.",
    drinks: [
      { name: "Game-Day Draft", style: "Rotating Draft", abv: "Varies", profile: "The current draft special or fresh tap; ask what is popular that day." },
      { name: "Light Lager", style: "Lager", abv: "Varies", profile: "Crisp, simple, cold, and built for wings and sports." },
      { name: "Amber Lager / Ale", style: "Amber Beer", abv: "Varies", profile: "Toasty, caramel malt, light sweetness, and smooth finish." },
      { name: "IPA", style: "IPA", abv: "Varies", profile: "Citrus, pine, resin, and stronger hop bitterness." },
      { name: "Wheat / Belgian-style Beer", style: "Wheat Beer", abv: "Varies", profile: "Soft, citrusy, lightly spicy, and refreshing." },
      { name: "Cider / Seltzer", style: "Cider / Seltzer", abv: "Varies", profile: "Fruit-forward, crisp, and lighter than beer." }
    ]
  },
  {
    id: "sports-toms-watch-bar",
    name: "Tom’s Watch Bar Orlando",
    area: "International Drive / Attractions Area",
    address: "Tom's Watch Bar, Orlando, FL",
    category: "orlando",
    tags: ["Sports Bar", "Watch Parties", "Big Screens"],
    food: true,
    vibe: "Modern sports-watch bar concept built around big screens, watch parties, food, beer, and cocktails.",
    website: "https://tomswatchbar.com/locations/",
    menuNote: "Menus can vary by Tom’s Watch Bar location. Use this as a drink guide and check the current Orlando menu when available.",
    drinks: [
      { name: "Current Draft List", style: "Draft Beer", abv: "Varies", profile: "Ask for the current draft board; best choice for fresh beer." },
      { name: "Stadium Lager", style: "Lager", abv: "Varies", profile: "Clean, crisp, light-bodied, and easy for long games." },
      { name: "Craft IPA", style: "IPA", abv: "Varies", profile: "Hop-forward with citrus, pine, or tropical notes." },
      { name: "Mexican-style Lager", style: "Lager", abv: "Varies", profile: "Crisp, lightly sweet corn/grain character, refreshing with lime." },
      { name: "Seltzer / Ready-to-drink Option", style: "Seltzer", abv: "Varies", profile: "Light, fizzy, fruit-forward, and easy to sip." },
      { name: "Game-Day Cocktail", style: "Cocktail", abv: "Varies", profile: "Mixed-drink option; usually sweeter, stronger, and more flavor-forward than beer." }
    ]
  },
  {
    id: "sports-twin-peaks",
    name: "Twin Peaks Orlando",
    area: "International Drive",
    address: "8350 International Dr, Orlando, FL 32819",
    category: "orlando",
    tags: ["Sports Bar", "Cold Beer", "Food"],
    food: true,
    vibe: "Sports bar and lodge-style restaurant on International Drive with TVs, food, beer, and cocktails.",
    website: "https://twinpeaksrestaurant.com/locations/orlando/",
    menuNote: "Twin Peaks beer offerings can change by location. Check the Orlando location menu for current bottles and drafts.",
    drinks: [
      { name: "29° Draft Beer", style: "Cold Draft Beer", abv: "Varies", profile: "Extra-cold sports-bar pour; crisp, refreshing, and easy-drinking." },
      { name: "Domestic Lager", style: "Lager", abv: "Varies", profile: "Light, clean, familiar, and low bitterness." },
      { name: "Import Lager", style: "Lager", abv: "Varies", profile: "Crisp, slightly fuller-bodied, and maltier." },
      { name: "Craft IPA", style: "IPA", abv: "Varies", profile: "Citrus, pine, tropical, and hop-forward." },
      { name: "Amber / Seasonal Craft", style: "Seasonal Beer", abv: "Varies", profile: "Changes with the board; usually maltier, fruitier, darker, or more festive." },
      { name: "Hard Seltzer", style: "Seltzer", abv: "Varies", profile: "Light, bubbly, fruit-flavored, and lower body than beer." }
    ]
  },
  {
    id: "sports-american-social",
    name: "American Social Orlando",
    area: "Restaurant Row / Sand Lake",
    address: "7335 W Sand Lake Rd, Orlando, FL 32819",
    category: "orlando",
    tags: ["Sports Bar", "Upscale", "Food"],
    food: true,
    vibe: "High-energy restaurant and bar with sports viewing, cocktails, beer, brunch, and late-night atmosphere.",
    website: "https://americansocialbar.com/orlando/",
    menuNote: "American Social’s beer and cocktail lists can vary. Check the Orlando menu for current drafts and bottles.",
    drinks: [
      { name: "Local Draft", style: "Craft Draft", abv: "Varies", profile: "Regional beer option with more local flavor than national beer." },
      { name: "Lager / Pilsner", style: "Lager", abv: "Varies", profile: "Clean, crisp, light malt, and refreshing." },
      { name: "IPA", style: "IPA", abv: "Varies", profile: "Hop-forward, citrusy, piney, and bitter." },
      { name: "Wheat Beer", style: "Wheat Ale", abv: "Varies", profile: "Soft, citrusy, lightly sweet, and approachable." },
      { name: "Seltzer", style: "Hard Seltzer", abv: "Varies", profile: "Bubbly, fruit-forward, light, and easy to drink." },
      { name: "Signature Cocktail", style: "Cocktail", abv: "Varies", profile: "Stronger, sweeter, and more mixed-drink focused than beer." }
    ]
  },
  {
    id: "sports-the-porch",
    name: "The Porch Winter Park",
    area: "Winter Park",
    address: "643 N Orange Ave, Winter Park, FL 32789",
    category: "bonus",
    tags: ["Sports Bar", "Local Favorite", "Food"],
    food: true,
    vibe: "Indoor/outdoor neighborhood bar and restaurant in Winter Park with sports, pub food, brunch, beer, and cocktails.",
    website: "https://theporchwinterpark.com/",
    menuNote: "The Porch is a nearby bonus stop. Beer selections rotate; check the current bar menu before ordering.",
    drinks: [
      { name: "Current Draft Beer", style: "Draft Beer", abv: "Varies", profile: "Ask for the current draft lineup; the board changes." },
      { name: "Light Lager", style: "Lager", abv: "Varies", profile: "Cold, crisp, clean, and easy with bar food." },
      { name: "Local Craft Beer", style: "Craft Beer", abv: "Varies", profile: "Regional flavor; profile could be hoppy, malty, tart, or light depending on the tap." },
      { name: "IPA", style: "IPA", abv: "Varies", profile: "Citrus, pine, tropical, and more bitter." },
      { name: "Cider / Seltzer", style: "Cider / Seltzer", abv: "Varies", profile: "Fruity, crisp, and lighter than beer." },
      { name: "Brunch Cocktail", style: "Cocktail", abv: "Varies", profile: "Sweet, bright, and mixed-drink focused, especially during brunch." }
    ]
  },
  {
    id: "sports-stadium-club",
    name: "Stadium Club at Caribe Royale",
    area: "Lake Buena Vista / World Center",
    address: "8101 World Center Dr, Orlando, FL 32821",
    category: "orlando",
    tags: ["Sports Bar", "Resort", "Big Screens"],
    food: true,
    vibe: "Upscale resort sports bar experience with immersive screens, game-day food, beer, cocktails, and watch-party energy.",
    website: "https://www.cariberoyale.com/dining/stadium-club/",
    menuNote: "Resort menus can change seasonally. Check the current Stadium Club drinks menu for exact beer availability.",
    drinks: [
      { name: "Current Draft Board", style: "Draft Beer", abv: "Varies", profile: "Best starting point for a fresh beer during a game." },
      { name: "Premium Lager", style: "Lager", abv: "Varies", profile: "Crisp, smooth, light malt, and very drinkable." },
      { name: "Craft IPA", style: "IPA", abv: "Varies", profile: "Bold hops, citrus, pine, and a sharper bitter finish." },
      { name: "Wheat / Blonde Ale", style: "Light Ale", abv: "Varies", profile: "Soft, easy, lightly fruity or citrusy, and refreshing." },
      { name: "Dark Beer", style: "Porter / Stout", abv: "Varies", profile: "Roasted malt, coffee, cocoa, and fuller body when available." },
      { name: "Sports Bar Cocktail", style: "Cocktail", abv: "Varies", profile: "Higher-impact mixed drink with sweet, citrus, or spirit-forward flavors." }
    ]
  }
];

currentItems = function () {
  if (activeMode === "sports") return sportsStops;
  if (activeMode === "pubs") return pubStops;
  return breweries;
};

currentModeLabel = function () {
  if (activeMode === "sports") return "Orlando Sports Bar Trail";
  if (activeMode === "pubs") return "Irish Pub Trail";
  return "Orlando Brewery Trail";
};

function addSportsModeButton() {
  const switcher = document.querySelector(".mode-switcher");
  if (!switcher || switcher.querySelector('[data-mode="sports"]')) return;

  const sportsButton = document.createElement("button");
  sportsButton.className = "mode-btn";
  sportsButton.type = "button";
  sportsButton.dataset.mode = "sports";
  sportsButton.textContent = "Sports Bars";

  switcher.appendChild(sportsButton);

  sportsButton.addEventListener("click", () => {
    activeMode = "sports";
    switcher.querySelectorAll(".mode-btn").forEach((btn) => btn.classList.remove("active"));
    sportsButton.classList.add("active");

    currentFilter = "all";
    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === "all");
    });

    searchInput.value = "";
    updateModeCopy();
    renderBreweries();
  });
}

updateModeCopy = function () {
  const h1 = document.querySelector("h1");
  const h2 = document.querySelector(".hero-card h2");
  const heroCopy = document.querySelector(".hero-copy");
  const searchLabel = document.querySelector(".search-label");
  const notice = document.querySelector(".notice");

  if (activeMode === "sports") {
    if (h1) h1.textContent = "Orlando Sports Bar Trail";
    if (h2) h2.textContent = "Track Orlando sports bars, beer options, notes, and game-day stops.";
    if (heroCopy) heroCopy.textContent = "Switch between breweries, Irish pubs, and sports bars anytime. Your progress saves automatically on this device.";
    if (searchLabel) searchLabel.textContent = "Search sports bars";
    if (searchInput) searchInput.placeholder = "Try I-Drive, Disney Springs, lager, IPA, wings...";
    if (notice) notice.innerHTML = "<strong>Quick note:</strong> Sports bar beer lists and game schedules change often. Check the current menu before driving over. Please enjoy responsibly and use a designated driver or rideshare.";
    return;
  }

  if (activeMode === "pubs") {
    if (h1) h1.textContent = "Orlando Irish Pub Trail";
    if (h2) h2.textContent = "Track Orlando-area Irish pubs, beer options, notes, and your favorite pours.";
    if (heroCopy) heroCopy.textContent = "Switch between breweries and pubs anytime. Your progress saves automatically on this device.";
    if (searchLabel) searchLabel.textContent = "Search Irish pubs";
    if (searchInput) searchInput.placeholder = "Try Disney Springs, Winter Park, Guinness, stout...";
    if (notice) notice.innerHTML = "<strong>Quick note:</strong> Pub beer lists rotate often. For exact availability, call or check the current menu before driving over. Please enjoy responsibly and use a designated driver or rideshare.";
    return;
  }

  if (h1) h1.textContent = "Orlando Brewery Trail";
  if (h2) h2.textContent = "Track every brewery stop, save notes, and build your own Orlando beer trail.";
  if (heroCopy) heroCopy.textContent = "Check off breweries as you visit them. Your progress saves automatically on this device.";
  if (searchLabel) searchLabel.textContent = "Search breweries";
  if (searchInput) searchInput.placeholder = "Try Milk District, Lake Nona, food, airport...";
  if (notice) notice.innerHTML = "<strong>Quick note:</strong> Hours, food options, drink menus, and special releases change often. Always check the brewery before driving over. Please enjoy responsibly and use a designated driver or rideshare.";
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
    if (activeMode === "sports") {
      summaryLabels[0].textContent = "Total sports bars";
      summaryLabels[1].textContent = "Orlando-area bars";
      summaryLabels[2].textContent = "Nearby bonus bars";
    } else if (activeMode === "pubs") {
      summaryLabels[0].textContent = "Total pubs";
      summaryLabels[1].textContent = "Orlando-area pubs";
      summaryLabels[2].textContent = "Nearby bonus pubs";
    } else {
      summaryLabels[0].textContent = "Total stops";
      summaryLabels[1].textContent = "Orlando stops";
      summaryLabels[2].textContent = "Nearby bonus";
    }
  }
};

addSportsModeButton();
updateModeCopy();
renderBreweries();
