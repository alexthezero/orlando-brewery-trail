function mapsUrl(address) {
  return `https://maps.apple.com/?q=${encodeURIComponent(address)}`;
}

if (typeof renderBreweries === "function") {
  renderBreweries();
}
