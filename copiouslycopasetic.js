
// Copiously Copasetic

function smallestWhileGreater(inArray, greaterThanValue) {
	if (inArray.length) {
		var i = 0;
		var lowest = NaN;
		for (i = 0; i < inArray.length; i++) {
			if (inArray[i] <= greaterThanValue) continue;

			// equal or greater -> see if lowest is greater
			// if lowest is greater, set lowest to value
			if (lowest > inArray[i] || isNaN(lowest)) {
				lowest = inArray[i];
			}
		}
		return lowest;
	} else {
		return -1;
	}
}

function fuzzyMatch(matchNumber, comparisonNumber, withinPercent) {
	var fuzzyLow = comparisonNumber - (comparisonNumber * withinPercent);
	var fuzzyHigh = comparisonNumber * (1+withinPercent);

	if (matchNumber > fuzzyHigh || matchNumber < fuzzyLow) {
		return false;
	} else {
		return true;
	}
}

