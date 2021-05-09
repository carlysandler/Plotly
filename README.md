# Plotly
Building an interactive dashboard using `Plotly.js` to explore data on the biodiversity of belly buttons--Dashboard delployed

## Deliverable 1: Create a Horizontal Bar Chart (35 points)
Deliverable 1 Instructions
Using your knowledge of JavaScript, Plotly, and D3.js, create a horizontal bar chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. The horizontal bar chart will display the sample_values as the values, the otu_ids as the labels, and the otu_labels as the hover text for the bars on the chart.

### D1 Requirements
You will earn a perfect score for Deliverable 1 by completing all requirements below:

Code is written to create the arrays when a sample is selected from the dropdown menu (10 pt)
Code is written to create the trace object in the buildCharts() function, and it contains the following: (10 pt)
The y values are the otu_ids in descending order
The x values are the sample_values in descending order
The hover text is the otu_labels in descending order.
Code is written to create the layout array in the buildCharts() function that creates a title for the chart (5 pt)
When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and the bar chart has the following: (10 pt)
The top 10 sample_values are sorted in descending order
The top 10 sample_values as values
The otu_ids as the label

## Deliverable 2: Create a Bubble Chart
Using your knowledge of JavaScript, Plotly, and D3.js, create a bubble chart that will display the following when an individual’s ID is selected from the dropdown menu webpage:

### D2 Requirements 
You will earn a perfect score for Deliverable 2 by completing all requirements below:

The code for the trace object in the buildCharts(); function does the following: (10 pt)
Sets the otu_ids as the x-axis values
Sets the sample_values as the y-axis values
Sets the otu_labels as the hover-text values
Sets the sample_values as the marker size
Sets the otu_ids as the marker colors
The code for the layout in the buildCharts(); function does the following: (10 pt)
Creates a title
Creates a label for the x-axis
The text for a bubble is shown when hovered over
When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard. All three charts should also be working according to their requirements when a sample is selected from the dropdown menu (10 pt)

## Deliverable 3: Create a Cauge Chart
Using your knowledge of JavaScript, Plotly, and D3.js, create a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu.
### D3: Requirements
You will earn a perfect score for Deliverable 3 by completing all requirements below:

The code to build the gauge chart does the following: (10 pt)
Creates a title for the chart.
Creates the ranges for the gauge in increments of two, with a different color for each increment.
Adds the washing frequency value on the gauge chart.
The indicator shows the level for the washing frequency on the gauge.
The gauge is added to the dashboard.
The gauge fits in the margin of the <div> element.
When the webpage loads, the bar and bubble chart are working according to the requirements in Deliverable 1 and 2, respectively, and the gauge chart is working according to the requirements listed for this Deliverable (10 pt)

## Deliverble 4: Customize the Dashboard
Customize your dashboard with three of the following:
Add an image to the jumbotron.
Add background color or a variety of compatible colors to the webpage.
Use a custom font with contrast for the colors.
Add more information about the project as a paragraph on the page.
Add information about what each graph visualizes, either under or next to each graph.
Make the webpage mobile-responsive.
Change the layout of the page.
Add a navigation bar that allows you to select the bar or bubble chart on the page.
When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and the three charts should be working according to their requirements.
When a sample is selected, the dashboard should display the data in the panel and all three charts according to their requirements.
Deliverable 4 Requirements
You will earn a perfect score for Deliverable 4 by completing all requirements below:

The webpage has three customizations. (10 pt)
When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and all three charts should be working according to the requirements when a sample is selected from the dropdown menu (5 pt)