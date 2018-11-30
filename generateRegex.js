const fs = require("fs");
const words = require("./gendered-words.js");
const genders = { m: [], f: [] };

for (let i in words) {
	if (words[i][0]) {
		genders.m.push("\\b" + words[i][0] + "\\b");
	}
	if (words[i][1]) {
		genders.f.push("\\b" + words[i][1] + "\\b");
	}
}
genders.m = genders.m.join("|");
genders.f = genders.f.join("|");

fs.writeFile(
	"./regex.js",
	"module.exports = " + JSON.stringify(genders),
	err => {
		if (err) {
			console.log(err);
		}
		console.log("regex.js generated!");
	}
);
