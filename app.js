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
    website: "https://sidewardbrewing.com/location/taproom/",
    menuNote: "Published tap list changes often. These are current/featured options pulled into the app as a starting guide.",
    drinks: [
      { name: "Punks in the Waiting Room", style: "House Lager", abv: "5.0%", profile: "Crisp, clean, light malt, easy-drinking and refreshing." },
      { name: "Moon Boots", style: "Flagship IPA", abv: "7.0%", profile: "Hop-forward with citrus, pine, medium bitterness, and a clean malt backbone." },
      { name: "Work Friends", style: "Porter", abv: "4.8%", profile: "Smooth roasted malt with cocoa, coffee-like bitterness, and a dry finish." },
      { name: "Triple Dry Hopped Space Wizard", style: "NEIPA", abv: "7.5%", profile: "Hazy, juicy, tropical, soft-bodied, with Citra, Simcoe, and Nelson Sauvin hop character." },
      { name: "Sideward Cider", style: "Semi-dry Hard Apple Cider", abv: "6.8%", profile: "Apple-forward, lightly tart, semi-dry, crisp, and naturally gluten free." },
      { name: "High Volume: RED ALERT", style: "Fruited Sour", abv: "5.5%", profile: "Tart berry and tropical fruit with strawberry, raspberry, dragon fruit, lemon, vanilla, and oat milk." },
      { name: "Ignite", style: "West Coast IPA", abv: "7.5%", profile: "Bright citrus and pine bitterness with a sharper, crisp finish." },
      { name: "Dagger", style: "Dry Hopped Oat Lager", abv: "4.9%", profile: "Clean lager base with soft oat body and a light hop aroma." }
    ]
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
    website: "https://www.twelvetalons.com/",
    menuNote: "Twelve Talons rotates beer, cider, and mead. Check their taproom/socials before going for the exact current board.",
    drinks: [
      { name: "Rotating House Beer", style: "Craft Beer", abv: "Varies", profile: "Ask for the current house pour; flavor can range from crisp and malty to hoppy and bitter." },
      { name: "Rotating Cider", style: "Hard Cider", abv: "Varies", profile: "Apple-forward, crisp, usually lighter-bodied; sweetness and tartness vary by batch." },
      { name: "Rotating Mead", style: "Honey Wine", abv: "Varies", profile: "Honey-driven, floral, sometimes sweet, sometimes dry depending on the pour." },
      { name: "Seasonal Sour / Fruited Pour", style: "Rotating Specialty", abv: "Varies", profile: "Tart, bright, and fruit-forward when available; best for adventurous drinkers." }
    ]
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
    website: "https://ivanhoeparkbrewing.com/our-brews/",
    menuNote: "Core and year-round options are included. Special releases rotate.",
    drinks: [
      { name: "Park Hopp’r Golden Pilsner", style: "Golden Pilsner", abv: "5.0%", profile: "Crisp, clean, lightly bready, refreshing, with a gentle hop snap." },
      { name: "Joyland American IPA", style: "American IPA", abv: "7.0%", profile: "Citrus and pine hop character with medium bitterness and a clean finish." },
      { name: "Bungalow Belgian Witbier", style: "Belgian Witbier", abv: "4.8%", profile: "Soft wheat body with orange peel, spice, coriander-like notes, and a refreshing haze." },
      { name: "Toboggan Blonde Ale", style: "Blonde Ale", abv: "5.0%", profile: "Light, approachable, mildly biscuity, and easy-drinking." },
      { name: "Tupac ShaPorter", style: "American Porter", abv: "7.3%", profile: "Roasty, chocolatey, coffee-like, medium-bodied, and smooth." },
      { name: "Guavacation Sour", style: "Berliner Weisse", abv: "3.6%", profile: "Light, tart, tropical, and guava-forward with a low-ABV profile." },
      { name: "Ball Drop 2020 Saison", style: "Farmhouse Ale", abv: "5.7%", profile: "Dry, lightly fruity, peppery, and yeast-driven." }
    ]
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
    website: "https://ivanhoeparkbrewing.com/our-brews/",
    menuNote: "Lager House offerings can rotate, but Ivanhoe Park core beers are a reliable starting point.",
    drinks: [
      { name: "Park Hopp’r Golden Pilsner", style: "Golden Pilsner", abv: "5.0%", profile: "Crisp, bright, lightly grainy, and refreshing." },
      { name: "Toboggan Blonde Ale", style: "Blonde Ale", abv: "5.0%", profile: "Mild malt sweetness, light body, and an easy finish." },
      { name: "Joyland American IPA", style: "American IPA", abv: "7.0%", profile: "Hop-forward with citrus and pine notes." },
      { name: "Rotating Lager House Pour", style: "Lager / Seasonal", abv: "Varies", profile: "Expect cleaner, lager-forward profiles when available: crisp, smooth, and balanced." }
    ]
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
    website: "https://ten10brewingcompany.com/index.php/beers/",
    menuNote: "Ten10 currently asks guests to call for the current beer list, so this section is a taproom flavor guide rather than a guaranteed live menu.",
    drinks: [
      { name: "Current Draft List", style: "Rotating Tap List", abv: "Call to confirm", profile: "The brewery asks guests to call for the latest beer list; flavor profile depends on the current board." },
      { name: "Rotating IPA / Pale Ale", style: "Hop-forward Ale", abv: "Varies", profile: "Usually citrusy, piney, or tropical with moderate to assertive bitterness." },
      { name: "Rotating Lager / Blonde", style: "Easy-drinking Beer", abv: "Varies", profile: "Lighter, crisp, clean, and best for a first stop or casual pint." },
      { name: "Rotating Dark Beer", style: "Porter / Stout / Brown", abv: "Varies", profile: "Roasted malt, chocolate, coffee, caramel, or nutty notes depending on the batch." }
    ]
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
    website: "https://www.redlightredlightbrewpub.com/",
    menuNote: "Redlight Redlight promotes 30+ independent beers on tap, so this is organized by tap style instead of one fixed list.",
    drinks: [
      { name: "Crisp Lager Tap", style: "Lager / Pilsner", abv: "Varies", profile: "Clean, refreshing, lightly bready, and low-to-moderate bitterness." },
      { name: "Hop-heavy Ale Tap", style: "IPA / Pale Ale", abv: "Varies", profile: "Citrus, pine, resin, tropical fruit, and stronger hop bitterness." },
      { name: "Sour / Wild Tap", style: "Sour Beer", abv: "Varies", profile: "Tart, bright, fruity, funky, or acidic depending on the keg." },
      { name: "Dark Beer Tap", style: "Porter / Stout / Dark Ale", abv: "Varies", profile: "Chocolate, roast, coffee, caramel, and fuller malt body." },
      { name: "Wine / Non-beer Option", style: "Wine / Alternate Pour", abv: "Varies", profile: "Good option for someone who does not want beer; flavor depends on current selection." }
    ]
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
    website: "https://hourglassbrewing.com/",
    menuNote: "Hourglass lists 40+ taps across its locations and rotates heavily. These are recognizable Hourglass-style menu lanes to help you choose.",
    drinks: [
      { name: "Turbo YEET", style: "Rotating Hourglass Release", abv: "Ask taproom", profile: "Check the tap board for current style; Hourglass releases often lean bold, creative, and experimental." },
      { name: "Apricaustic", style: "Fruit-forward Release", abv: "Ask taproom", profile: "Likely the fruit-forward lane; expect bright stone-fruit character when available." },
      { name: "Morlock", style: "Dark / Strong Release", abv: "Ask taproom", profile: "A good target if you like richer malt, roast, or stronger specialty pours." },
      { name: "Blueberry Permeation", style: "Fruit Beer / Specialty", abv: "Ask taproom", profile: "Blueberry-led, bright, fruit-forward, and likely tart or jammy depending on batch." },
      { name: "Honeybell Wit", style: "Witbier", abv: "Ask taproom", profile: "Citrusy, wheat-soft, refreshing, and lightly spiced." }
    ]
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
    website: "https://rockpitbrewing.com/our-beers/",
    menuNote: "RockPit has both brewery and distillery options. Their online beer page is not reliably readable in plain text, so check the current board before going.",
    drinks: [
      { name: "Current Beer Board", style: "Rotating House Beer", abv: "Varies", profile: "Ask the bartender for the current lineup; good first move if you want the freshest beer." },
      { name: "Rotating IPA", style: "IPA", abv: "Varies", profile: "Citrus, pine, resin, or tropical hop character depending on batch." },
      { name: "Rotating Dark Beer", style: "Porter / Stout", abv: "Varies", profile: "Roasted malt, cocoa, coffee, caramel, and heavier body." },
      { name: "Distillery Pour", style: "Spirit / Cocktail", abv: "Varies", profile: "For non-beer drinkers; expect stronger spirit-forward or cocktail-style profiles." }
    ]
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
    website: "https://www.tacticalbeer.com/beers",
    menuNote: "Tactical says the tasting room tap list rotates regularly. Recent releases are included as a flavor guide.",
    drinks: [
      { name: "Guavango Montoya", style: "Fruited Sour", abv: "Ask taproom", profile: "Guava, mango, and marshmallow; tropical, tart, juicy, and fluffy-sweet." },
      { name: "Raspburied", style: "Fruited Sour", abv: "Ask taproom", profile: "Raspberry, ube, and vanilla; bright berry tartness with creamy vanilla and subtle nutty notes." },
      { name: "Island Orange Whip", style: "Orange Cream Sour", abv: "Ask taproom", profile: "Orange cream, citrus zest, vanilla swirl, tropical sweetness, and a tangy finish." },
      { name: "Vincent Mango", style: "Mango Ginger Sour", abv: "Ask taproom", profile: "Ripe mango, tropical sweetness, and a subtle ginger finish." },
      { name: "Deep Seeded", style: "Berry Cream Sour", abv: "Ask taproom", profile: "Strawberries and cream feel with ripe berry character and a refreshing tart finish." }
    ]
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
    website: "https://parkpizzalakenona.com/park-pizza-brewery/",
    menuNote: "Current brewery page selections are included, plus core on-tap beers.",
    drinks: [
      { name: "Sandia Fresca", style: "Berry Watermelon Sour", abv: "4.0%", profile: "Tart, fruity, watermelon-bright, berry-sweet, and refreshing." },
      { name: "Lemondrop Ale", style: "Lemon Shandy", abv: "5.0%", profile: "Lemon-forward, light, crisp, sweet-tart, and patio-friendly." },
      { name: "Standard Lager", style: "American Lager", abv: "4.5%", profile: "Light body, slightly sweet malt from flaked corn, bright dry finish." },
      { name: "IPA", style: "Classic American IPA", abv: "6.8%", profile: "Floral, piney, citrus-forward hops with a toasty malt backbone." },
      { name: "Blonde Ale", style: "Blonde Ale", abv: "5.5%", profile: "Light-bodied and effervescent with white wine must, elderflower, and cassis notes." },
      { name: "Belgian Wit", style: "Belgian Wheat Beer", abv: "5.0%", profile: "Orange peel, coriander, alligator pepper, hazy wheat softness, and a peppery finish." }
    ]
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
    website: "https://www.brewlando.com/brews",
    menuNote: "Core brews and recent spotlight releases are included.",
    drinks: [
      { name: "Jernigan's Hazy IPA", style: "Hazy IPA", abv: "6.8%", profile: "Citrus, passionfruit, melon, tropical fruit, dank aroma, and balanced hoppiness." },
      { name: "Belle Isle Blonde", style: "Golden Ale", abv: "5.1%", profile: "Light, refreshing, mild sweetness, warm malt, and easy finish." },
      { name: "Red Lake Ale", style: "Irish Red", abv: "5.2%", profile: "Malty, gently bitter, red malt richness, and balanced roasted barley character." },
      { name: "Black Hammock Porter", style: "Porter", abv: "6.0%", profile: "Dark roasted malt, smooth body, and a duskier chocolate/coffee-like finish." },
      { name: "Independence Pilsner", style: "Pre-Prohibition Pilsner", abv: "4.9%", profile: "Biscuit-forward malt, subtle corn sweetness, spicy floral hops, and crisp finish." },
      { name: "Hop Patriot", style: "Hazy DIPA", abv: "8.8%", profile: "Berries, mango, marmalade, peach, lychee, citrus rind, pine resin, and pillowy body." },
      { name: "Coupe D’Or", style: "Belgian Table Beer", abv: "2.9%", profile: "Complex malt, wheat, rye, floral hops, berries, white wine notes, Belgian farmhouse yeast, and dry finish." }
    ]
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
    website: "https://www.brew-theory.com/",
    menuNote: "Brew Theory’s public site does not expose a stable plain-text drink list. Use this as a menu-style guide and check the venue for the current board.",
    drinks: [
      { name: "Current Draft Board", style: "Rotating Drafts", abv: "Varies", profile: "Flavor depends on current availability; start here for the freshest local pour." },
      { name: "Rotating Hazy / IPA", style: "IPA", abv: "Varies", profile: "Fruit-forward or hop-forward, with citrus, tropical, pine, or resin notes." },
      { name: "Rotating Lager", style: "Lager", abv: "Varies", profile: "Crisp, clean, light-bodied, and easy to pair with food." },
      { name: "Rotating Sour / Seltzer", style: "Sour / Seltzer", abv: "Varies", profile: "Bright, tart, fruity, or sparkling depending on the board." }
    ]
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
    website: "https://www.brokenstringsbrewery.com/",
    menuNote: "Broken Strings is a rotating taproom operated by Three Odd Guys Brewing. Current taps should be checked before visiting.",
    drinks: [
      { name: "Rotating Craft Beer Selection", style: "Taproom Board", abv: "Varies", profile: "The main move here; the tap list changes, so ask what is freshest or locally brewed." },
      { name: "Game Day Lager / Light Pour", style: "Lager / Blonde", abv: "Varies", profile: "Clean, crisp, low-fuss, and good before or after downtown events." },
      { name: "Rotating IPA", style: "IPA", abv: "Varies", profile: "Hop-forward with citrus, pine, tropical fruit, or resin depending on keg." },
      { name: "Rotating Dark / Malt Beer", style: "Porter / Stout / Brown", abv: "Varies", profile: "Chocolate, coffee, caramel, roast, or nutty malt character." }
    ]
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
    website: "https://www.caskandlarder.com/",
    menuNote: "Airport menus and seasonal bar programs change often. Use this as a pre-flight guide, then check the posted menu at MCO.",
    drinks: [
      { name: "House-brewed Beer", style: "Rotating Brewhouse Beer", abv: "Varies", profile: "Cask & Larder serves award-winning house-brewed beers; flavor depends on current airport menu." },
      { name: "Southern-style Ale", style: "Ale", abv: "Varies", profile: "Often a balanced, food-friendly profile: malt, gentle hops, and easy finish." },
      { name: "Seasonal Bar Cocktail", style: "Cocktail", abv: "Varies", profile: "Seasonal, culinary-inspired, and usually stronger than the beer options." },
      { name: "Airport Pint Option", style: "Draft Beer", abv: "Varies", profile: "Best for a quick pre-flight pour; ask what is fresh and fast." }
    ]
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
    website: "https://crookedcan.com/brews/core/",
    menuNote: "Core Crooked Can beers are included; seasonal taps rotate.",
    drinks: [
      { name: "Tip Of The Hat", style: "Amber Lager", abv: "Ask taproom", profile: "Toasty malt, light caramel, clean lager finish, and balanced drinkability." },
      { name: "High Stepper", style: "American IPA", abv: "Ask taproom", profile: "Hop-forward, citrusy, piney, and bitter enough for IPA fans." },
      { name: "Florida Sunshine", style: "Lager", abv: "Ask taproom", profile: "Clean, bright, crisp, and easy-drinking." },
      { name: "Florida Sunshine Mango", style: "Mango Lager", abv: "Ask taproom", profile: "Light lager base with tropical mango sweetness and a refreshing finish." },
      { name: "Cloud Chaser", style: "Hefeweizen", abv: "Ask taproom", profile: "Soft wheat body, banana/clove-style yeast character, and gentle sweetness." },
      { name: "Workaholic", style: "American Pale Ale", abv: "Ask taproom", profile: "Balanced hops, citrus, light malt, and moderate bitterness." },
      { name: "Space Cowboi", style: "Hazy Double IPA", abv: "Ask taproom", profile: "Big hazy body, tropical hops, fuller mouthfeel, and stronger ABV feel." },
      { name: "Hit The Haze", style: "Hazy IPA", abv: "Ask taproom", profile: "Juicy, soft, tropical, and low bitterness compared with classic IPAs." },
      { name: "Sixth Man Lager", style: "Lager", abv: "Ask taproom", profile: "Light, clean, game-day friendly, and easy to pair with food hall options." }
    ]
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
    website: "https://www.nybeerproject.com/locations/orlando",
    menuNote: "The Orlando page may block automated reads, so this section stays as a brewpub flavor guide until you want me to manually add exact beers from a screenshot/menu.",
    drinks: [
      { name: "Current Brewpub Tap List", style: "Rotating House Beers", abv: "Varies", profile: "Ask what is brewed in-house and what is newest on draft." },
      { name: "Rotating IPA", style: "IPA", abv: "Varies", profile: "Citrus, pine, tropical, or resin hop profile depending on the current beer." },
      { name: "Rotating Lager / Pilsner", style: "Lager", abv: "Varies", profile: "Crisp, refreshing, light-bodied, and easy with food." },
      { name: "Rotating Dark Beer", style: "Porter / Stout", abv: "Varies", profile: "Roasted malt, chocolate, coffee, and a fuller finish." },
      { name: "Seasonal / Specialty Beer", style: "Seasonal", abv: "Varies", profile: "Changes with releases; can be fruity, spiced, sour, strong, or dessert-inspired." }
    ]
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

function renderDrinkMenu(brewery) {
  const drinks = brewery.drinks || [];
  if (!drinks.length) return "";

  return `
    <details class="drink-menu">
      <summary>
        <span>Drink Menu & Flavor Profiles</span>
        <small>${drinks.length} options</small>
      </summary>
      ${brewery.menuNote ? `<p class="menu-note">${brewery.menuNote}</p>` : ""}
      <div class="drink-grid">
        ${drinks.map((drink) => `
          <article class="drink-card">
            <div class="drink-topline">
              <h4>${drink.name}</h4>
              <span>${drink.abv || "ABV varies"}</span>
            </div>
            <p class="drink-style">${drink.style || "Drink"}</p>
            <p class="drink-profile">${drink.profile}</p>
          </article>
        `).join("")}
      </div>
    </details>
  `;
}

function renderBreweries() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = breweries.filter((brewery) => {
    const itemState = breweryState(brewery.id);
    const drinkText = (brewery.drinks || [])
      .map((drink) => `${drink.name} ${drink.style} ${drink.abv} ${drink.profile}`)
      .join(" ");

    const haystack = [
      brewery.name,
      brewery.area,
      brewery.address,
      brewery.category,
      brewery.vibe,
      brewery.menuNote,
      drinkText,
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
          <a href="${brewery.website}" target="_blank" rel="noopener">Menu</a>
        </div>
      </div>

      ${renderDrinkMenu(brewery)}

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
    lines.push("   Drink menu:");
    (brewery.drinks || []).forEach((drink) => {
      lines.push(`   - ${drink.name} (${drink.style}, ${drink.abv}): ${drink.profile}`);
    });
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
