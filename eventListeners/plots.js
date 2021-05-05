// Retrieve data from an external file - `samples.json`
d3.json("samples.json").then(function (data) {
	console.log(data);
});

// Extract the weekly washing frquency from the metadata array
d3.json("samples.json").then(function (data) {
	wfreq = data.metadata.map(person => person.wfreq);
	console.log(wfreq);
});

// Sort the wfreq array in descending order
d3.json("samples.json").then(function (data) {
	wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a);
	console.log(wfreq);
});

// Filter for non null values in sorted array
d3.json("samples.json").then(function (data) {
	wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a);
	filteredWfreq = wfreq.filter(element => element != null);
	console.log(filteredWfreq);
});

// Use Object.entries() and forEach() to print all the metadata of first person in samples.json() - (ID 940)
d3.json("samples.json").then(function (data) {
	firstPerson = data.metadata[0];
	Object.entries(firstPerson).forEach(([key, value]) => { console.log(key + ':' + value); });
});
