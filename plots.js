// 12.1.2 Inspect a Plotly.js Chart
Plotly.newPlot("plotArea", [{ x: [1, 2, 3], y: [10, 20, 30] }]);

Plotly.newPlot("plotArea", [{ x: [5, 10, 15], y: [10, 20, 30] }]);

// 12.1.3 Create a Bar Chart
var trace = {
	x: ["burrito", "pizza", "chicken"],
	y: [10, 18, 5],
	type: "bar"
};

// Choose Layout Options
var layout = {
	title: "Luncheon Survey",
	xaxis: { title: "Food Option"},
	yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);

// Skill Drill:
var trace = {
	x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
	y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
	type: "bar"
};
var data = [trace];
var layout = {
	title: "'Bar' Charts",
	xaxis: { title: "Drinks" },
	yaxis: { title: "% of Drinks Ordered" }
};
Plotly.newPlot("plotArea", data, layout);

// 12.1.4 Create a Pie Chart
var trace = {
	labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
	values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
	type: 'pie'
};
var data = [trace];
var layout = {
	title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);

// Skill Drill: Create a Scatter Plot

var trace1 = {
	x: [1, 2, 3, 4],
	y: [10, 15, 13, 17],
	mode: 'lines+markers',
	type: 'scatter',
	name: 'A',
	marker: {size: 12}
};

var trace2 = {
	x: [2, 3, 4, 5],
	y: [16, 5, 11, 9],
	mode: 'lines+markers',
	type: 'scatter',
	name: 'B',
	marker: {size: 12}
};

var trace3 = {
	x: [1, 2, 3, 4],
	y: [12, 9, 15, 12],
	mode: 'lines+markers',
	type: 'scatter',
	name: 'C',
	marker: {size: 12}
};

var data = [trace1, trace2, trace3]

var layout = {
	title: "'Scatter' Plot",
	legend: {
		y: 0.5,
		yref: 'paper',
		font: {
			family: 'Arial, sans-serif',
			size: 20,
			color: 'grey'
		}
	},
};

Plotly.newPlot("plotArea", data, layout);

// 12.2.1 Functional JavaScript

// map() transformation
var numbers = [1, 2, 3, 4, 5]
var doubled = numbers.map(function (num) {
	return num * 2;
});
doubled

// Skill Drill: Add 5 to each number in the following array
var numbers = [0, 2, 4, 6, 8]
var add5 = numbers.map(function (hi) {
	return hi + 5;
});
add5

// map() transformation 2
var cities = [
	{
		"Rank": 1,
		"City": "San Antonio",
		"State": "Texas",
		"Increase_from_2016": "24208",
		"population": "1511946"
	},
	{
		"Rank": 2,
		"City": "Phoenix",
		"State": "Arizona",
		"Increase_from_2016": "24036",
		"population": "1626078"
	},
	{
		"Rank": 3,
		"City": "Dallas",
		"State": "Texas",
		"Increase_from_2016": "18935",
		"population": "1341075"
	}
];

var cityNames = cities.map(function (city) {
	return city.City;
});
console.log(cityNames);

// Skill Drill: Modify code to extract population of each city

var cityPop = cities.map(function (city) {
	return city.population;
});
console.log(cityPop);

// The filter() Method
var numbers = [1, 2, 3, 4, 5];

var larger = numbers.filter(function (num) {
	return num > 1;
});

console.log(larger);

// filter() example 2:
var familyAge = [2, 3, 39, 37, 9];

var olderThanFive = familyAge.filter(function (age) {
	return age > 5;
});

console.log(olderThanFive);

// Skill Drill: Filter results to include only animals whose species name starts with letter "s"
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var letterS = words.filter(function (word) {
	return /^s/.test(word);
});
console.log(letterS);