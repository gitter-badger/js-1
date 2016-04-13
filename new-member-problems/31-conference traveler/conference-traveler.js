function conferencePicker (citiesVisited, citiesOffered) {
	// create a new shouldVisit array from our filtered citiesOffered array
	var shouldVisit = citiesOffered.filter(function (curr) {
	// because our citiesOffered array is already ordered from most relevant to least,
	// we can iterate through it from left to right, returning only cities that do not
	// match any visited cities, knowing that they will be returned in order of relevance
		return (citiesVisited.indexOf(curr) == -1);
	})
	// if our shouldVisit array is not empty, we can return the first city in our array
	// since it is the most relevant
	if (shouldVisit.length > 0) {
		return shouldVisit[0]
	} else {
	// if our array is empty, then we know that no cities match our relevance parameters
	// and we can return the following string to affirm this conclusion:
		return ('No worthwhile conferences this year!')
	}
}