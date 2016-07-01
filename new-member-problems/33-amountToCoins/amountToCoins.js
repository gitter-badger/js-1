function amountToCoins(amount, levels){
	levels = levels.sort(function(a, b){return b-a});
	var count = {};
	for (level of levels){
		count[level] = 0;
	};
	while (amount > 0) {
		for (level of levels) {
			if (level <= amount) {
				count[level]++;
				amount -= level;
				break;
			}
		}
	}
	return count;
}
