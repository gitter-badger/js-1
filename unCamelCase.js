function unCamelCase(string) {
	var sentence;
	for (var i = 0; i < string.length; i++) {
		if (i == 0)
			sentence = string[i].toUpperCase();
		else if (string[i] == string[i].toUpperCase())
			sentence += " " + string[i].toLowerCase();
		else
			sentence += string[i];
	}
	return sentence += ".";
}