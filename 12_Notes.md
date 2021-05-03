# 12.0.2
Module 12 Roadmap
Looking Ahead
Module 12 Roadmap image

In this module, you will use Plotly.js, a JavaScript data visualization library, to create an interactive data visualization for the web. The completed work will be displayed in a portfolio you create.

To be successful in this module, you'll need to be familiar with HTML and basic JavaScript.

What You Will Learn
By the end of this module, you will be able to: 

Create basic plots with Plotly, including bar charts, line charts, and pie charts.
Use D3.json() to fetch external data, such as CSV files and web APIs.
Parse data in JSON format.
Use functional programming in JavaScript to manipulate data.
Use JavaScript's Math library to manipulate numbers.
Use event handlers in JavaScript to add interactivity to a data visualization.
How to use interactivity to enhance your visualizations.
Deploy an interactive chart to GitHub Pages.
Planning Your Schedule
Here's a quick look at the lessons and assignments you'll cover in this module. You can use the time estimates to help pace your learning and plan your schedule.

Introduction to Module 12 (15 mins)
Getting Started with Plotly (1 hour)
Transform Data with JavaScript (4 hours)
Retrieve External Data (4 hours)
JavaScript Events (3 hours)
Deployment (15 mins)
Application (5 hours)

# 12.1.2
Inspect a Plotly.js Chart
Roza is raring to start her project. She knows that she wants to create engaging and dynamic charts. It's her task to identify the best way to share her information with her audience.

Her first step is to master the basics of Plotly. For example, if she can create a basic chart in Plotly, she can build on her knowledge to create more advanced ones. Furthermore, she needs to identify the types of charts she can create with Plotly. Knowing the available options will enable her to select an appropriate visualization type for a dataset.

Throughout her journey, Roza will keep in mind how to best convey data to her volunteers and other researchers. For volunteers who are interested in selling their bacteria to Improbable Beef, what is the best way to visualize the types of bacteria that colonize their bellies? Some of them will be suitable for synthetic beef production, while others will not. Learning to use Plotly will be an important first step.

Let's begin!
To get started, download the data you'll need for this project. Click the following link to download index.html and plot.js.

Download the data files (Links to an external site.)

Open index.html in your browser. You should see the following chart:\A basic Plotly
chart

This is a simple line chart with three data points. Notice that gridlines are supplied automatically.

Next, place your mouse over the top right corner of the chart, and you'll see the following menu appear. It has options such as zoom, zoom out, and pan. This menu also comes with the Plotly library and will be available for every visualization you create.

Plotly menu appears when the mouse hovers over the top right corner of
the
screen.

Next, open index.html in VS Code. You should see the following code.

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Basic Charts</title>
   <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
<body>
   <div id="plotArea"></div>
   <script src="plots.js"></script>
</body>
</html>
Let's break the code down:

The first <script> tag links to a file called plotly-latest.min.js, which is downloaded from an online host. This file contains the JavaScript code that makes up the Plotly library. Such a link is called a CDN.
CDN stands for Content Delivery Network. In short, a CDN provides links to downloadable resources, such as Plotly library code. An alternative to using CDNs is to download the file and use it locally, but using this particular CDN ensures that the most up-to-date version of Plotly is always delivered.
The <div> with the ID plotArea refers to the div in which the chart will be displayed. You can also give the div another id of your choice.
The second <script> tag refers to the file named plots.js, which contains the JavaScript code.
Open plots.js. You will see the following line of code.

Plotly.newPlot("plotArea", [{x: [1,2,3], y:[10,20,30]}]);
A chart was created with a single line of code! The Plotly.newPlot() method creates a new chart, as its name indicates. This method has two arguments:

The first argument in Plotly,newPlot() is "plotArea". Recall that this corresponds to the ID of the <div> tag in the HTML document.
The second argument is an array, as indicated by the square brackets. Inside the array is an object, as notated by the curly brackets, in which values of x and y are specified. The x and y values are contained inside arrays as well.


IMPORTANT
The formatting matters in Plotly! Make sure that your data is enclosed inside an outer array.



SKILL DRILL
Open VS Code and use Plotly to create a line chart of your own.

Play around with the div ID, the JavaScript file name, and the data array. Then verify the results by opening index.html with your browser. You should see a chart. If the chart doesn't render, try opening the developer/debugging console.

Make sure that you are comfortable with creating a line chart with Plotly before moving on.

© 2020 - 2021 Trilogy Education Services, a 2U, Inc. brand. All Righ