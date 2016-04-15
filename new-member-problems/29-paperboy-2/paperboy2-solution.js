function Route(nhood, numHouses, per50, delTime) {
  this.paperboysNeeded = function() {
    var boys = Math.ceil(numHouses / Math.floor(delTime * 60 / per50 * 50) - 2);
    return (boys <= 0) ? "You and Stripes can handle the work yourselves" :
    boys + " paperboy" + Array(Math.min(boys,2)).join("s") + " needed for " + nhood;
  };
}