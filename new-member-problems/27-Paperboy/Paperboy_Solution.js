function cheapestQuote(newspapers) {
    var total = 0, bundleCost = [[40, 3.85],[20, 1.93],[10, 0.97],[5, 0.49],[1, 0.10]];
    for (i = 0; i < 5; i++) {
        total += calcCost(newspapers, bundleCost[i][0], bundleCost[i][1]);
        newspapers = newspapers % bundleCost[i][0];
    }
    return total;
}

function calcCost(newspapers, bundle, cost) {
    if (newspapers < bundle) return 0;
    return +((Math.floor(newspapers / bundle) * cost).toFixed(2));
}
