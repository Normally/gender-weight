const genders = require("./regex.js");

module.exports = value => {
	let m = (value.match(new RegExp(genders.m, "gi")) || []).length;
	let f = (value.match(new RegExp(genders.f, "gi")) || []).length;
	return !(m + f) ? 0 : (f / (m + f)) * 2 - 1;
};

