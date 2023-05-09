module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://www.speedlify.dev/",
		"https://www.google.com/",
		"https://yannicknana.fr/"
	]
};