// Linked to index.html via plc tag

// Use `d3.selectAll().on("change", );` - create an event listener that triggers the custom function every time a change takes place to the HTML element specified
d3.selectAll("body").on("change", updatePage);

function updatePage() {
	// select dropdown menu with id:selectOption
	var dropdownMenu = d3.selectAll("#selectOption").node();
	// assign id of dropdown menu to varaible
	var dropdownMenuID = dropdownMenu.id;
	// assign value of dropdown menu option to variable
	var selectedOption = dropdownMenu.value;

	// Print the id value and valyue of chosen menu option each time updatePage is triggered
	console.log(dropdownMenuID);
	console.log(selectedOption);
	console.log(d3.selectAll("#menu").node().id);
};


