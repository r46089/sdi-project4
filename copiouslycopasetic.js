
// Copiously Copasetic

var smallestWhileGreater = function(inArray, greaterThanValue) {
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

var fuzzyMatch = function(matchNumber, comparisonNumber, withinPercent) {
	var fuzzyLow = comparisonNumber - (comparisonNumber * withinPercent);
	var fuzzyHigh = comparisonNumber * (1+withinPercent);

	if (matchNumber > fuzzyHigh || matchNumber < fuzzyLow) {
		return false;
	} else {
		return true;
	}
}

var isEmail = function(emailAddress) {
	var i;
	var sawAt = false;
	var sawDot = true;

	for (i = 0; i < emailAddress.length; i++) {
		if (emailAddress[i] == "@") {
			sawAt = true;
		}

		if (emailAddress[i] == "." && sawAt == true) {
			sawDot = true;
		}
	}

	if (sawAt == true && sawDot == true) {
		return true;
	} else {
		return false;
	}
}
