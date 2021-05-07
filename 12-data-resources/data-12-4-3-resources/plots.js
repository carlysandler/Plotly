 BCGVF// Dynamically Generate Dropdown Menu Items
function init() {
	var selector = d3.select("#selDataset");
  
	d3.json("samples.json").then((data) => {
	  console.log(data);
	  var sampleNames = data.names;
	  sampleNames.forEach((sample) => {
		selector
		  .append("option")
		  .text(sample)
		  .property("value", sample);
	  });
  })}
  
init();
  
// Add optionChanged() function to trigger HTML
// newSample-refers to value of selected menu opton
// this.value === newSample
function optionChanged(newSample) {
	buildMetadata(newSample);
	buildCharts(newSample);
}

// Declare: `buildMetadata()`
function buildMetadata(sample) {
	d3.json("samples.json").then((data) => {
		var metadata = data.metadata;
		var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
		var result = resultArray[0];
		var PANEL = d3.select("#sample-metadata");

		PANEL.html("");
		PANEL.append("h6").text(result.location);
	});
}

// SKILL DRILL: Modify the `buildMetadata() function to populate the `Demographic Info` panel with the rest of the demographic data when a menu option is selected...
