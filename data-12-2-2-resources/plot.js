// Verify data is correctly read in
console.log(cityGrowths);

// First, sort and Select the Cities
var sortedCities = cityGrowths.sort((a, b) => a.Increased_from_2016 - b.Increased_from_2016).reverse();

// Next, select only the top five cities by population growth
var topFiveCities = sortedCities.slice(0,5);

// Create Arrays of City Names and Growth Figures
var topFiveCityNames = topFiveCities.map(city => city.City);
// convert population increase values from strings to integers
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Final task: Create Bar Chart with the Arrays
var trace = {
	x: topFiveCityNames,
	y: topFiveCityGrowths,
	type: "bar"
};
var data = [trace];
var layout = {
	title: "Most Rapidly Growing Cities",
	xaxis: { title: "City" },
	yaxis: { title: "Population Growth, 2016-2017" }
};
Plotly.newPlot("bar-plot", data, layout);