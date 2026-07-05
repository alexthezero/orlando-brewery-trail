function shortenSportsTabLabel() {
  const sportsButton = document.querySelector('[data-mode="sports"]');
  if (sportsButton) {
    sportsButton.textContent = "Sports";
  }
}

shortenSportsTabLabel();

if (typeof addSportsModeButton === "function") {
  const originalAddSportsModeButton = addSportsModeButton;
  addSportsModeButton = function (...args) {
    originalAddSportsModeButton.apply(this, args);
    shortenSportsTabLabel();
  };
}
