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

# 12.1.3
Create a Bar Chart
Roza can now create a basic line chart in Plotly. She knows how to create a new graph, place it in an HTML document, and format the data for Plotly.

A line chart isn't suitable for all data visualizations, however. For example, a line chart will generally do a better job of displaying trends, but a bar chart may be more appropriate to visualize how data is distributed across a number of categories.

Roza has decided to build on her foundations and explore other types of graphs available in Plotly. She'll begin with some other charts, such as a bar chart, a scatter plot, and a pie chart.

A chart is hard to decipher without appropriate labels. Roza will therefore also learn to customize other elements of her charts, such as axis labels and titles.
To help Roza improve her visualization skills using Plotly, we'll use an example of ordering food for a department luncheon.

The 33 people in the department are surveyed about their lunch preferences. They were asked to choose burritos, pizza, or chicken for the department lunch. 10 voted for burritos, 18 for pizza, and 5 for chicken. Let's help Roza plot the results.

NOTE
The terms graph, chart, and plot are used interchangeably here.

A bar graph displaying the lunch preferences: 10 people prefer
burritos, 18 prefer pizza, and 5 prefer
chicken.

Now look at the code used to create this bar chart.

var trace = {
   x: ["burrito", "pizza", "chicken"],
   y: [10, 18, 5],
   type: "bar"
};
Plotly.newPlot("plotArea", [trace]);
There are several differences between the code seen here and the code from the first chart we created.

Plotly.newPlot("plotArea", [{x:[1,2,3], y:[10,20,30]}]);
The data is no longer contained inside the Plotly.newPlot() method. The object that contains the x and y arrays is instead assigned to the variable "trace." This variable, trace, is the second argument of the newPlot(). Note, however, that the contents of the variable have been enclosed inside an array. The effect is still the same: an object contained inside an array.
The trace object now specifies the chart as a bar chart with type: "bar".
Note that it makes sense to assign the data to a variable, as it would be very unwieldy to place an entire dataset inside the Plotly.newPlot() function call.



Troubleshooting
Every programmer runs into errors: troubleshooting is part of the job! If a plot doesn't render in the browser, try inspecting the browser console. In Chrome, you would click on View in the menu, followed by Developer, then JavaScript Console:

The Chrome console can be accessed by clicking through these menu
items: View, Developer, JavaScript
Console.



Choose Layout Options
So far, so good! But something is still missing. The chart would be vastly improved by including a title and axis labels. A good data visualization practice is to make graphs as clear as possible to viewers. Adding a title and labeling the axes will help them understand what they see. Let's first add a title to the graph.

Take a look at our code.

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey"
};

Plotly.newPlot("plotArea", [trace], layout);
What do you notice that's different?

There is an object assigned to the variable layout. It contains the key title and the value "Luncheon Survey".
Plotly.newPlot()now has a third argument: layout, which refers to the object we just discussed.


The chart now has a title:The bar chart now includes a title, Luncheon
Survey.

This is a great addition, but our chart is still missing axis labels. From glancing at this chart, we know that the label on the x-axis for each column is the food item. What about the y-axis, though? It's difficult to determine at a glance what the numbers mean. For example, does "10" for burrito indicate that 10 types of burritos were ordered? Labeling the axes on a chart helps avoid this ambiguity.

Take a look at the code. What do you notice?

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea", trace, layout);
In the same layout object, two key-value pairs have been added. The first key, xaxis, denotes the axis label for the x-axis. Its value, {title: "Food Option"}, is itself an object whose key is title and whose value is Food Option. The same format holds for the y-axis label.

The Bar chart now includes a title ("Luncheon Survey") as well as
labels for the x-axis and y-axis, Food Option and Number of Respondents,
respectively.

SKILL DRILL
Open VS Code and create a new bar chart with Plotly. This graph will chart several beverages and the percentage of the total number of orders they comprise in a popular nonalcoholic bar. Here is your data:

Drinks: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"]

Percent of Drinks Ordered: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6]

Be sure to give the plot a title and label the axes.

Roza decides to create a "bar" chart of popular beverages in a nonalcoholic bar, as well. This is her code:

var trace = {
 x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
 y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
 type: "bar"
};
var data = [trace];
var layout = {
 title: "'Bar' Chart",
 xaxis: { title: "Drinks"},
 yaxis: { title: "% of Drinks Ordered"}
};
Plotly.newPlot("plotArea", data, layout);
Bar chart of popular 'bar' drinks

# 12.1.4
Create a Pie Chart
Let’s summarize what we’ve done so far:
Create a new line chart in Plotly with a single line of code.
Create a bar chart.
Add layout options, such as title and axis labels.
Roza’s joy is uncontained. She can create a beautiful chart in JavaScript with only a few lines of code. She would like to learn to create other types of charts as well. Let’s help her do that.
Since the bar dataset is the percentage of total sales comprised by each drink, Roza believes that a pie chart may be helpful in providing an instant view of the relative popularity of each drink. So she creates a pie chart of the bar data:

var trace = {
  x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: 'pie'
};
var data = [trace];
var layout = {
  title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);
But it doesn't render.



Roza modifies her code:

var trace = {
 labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
 "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
 values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
 type: 'pie'
};
var data = [trace];
var layout = {
 title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);
What did she do differently? In trace, the keys for the data are now assigned appropriately. Instead of x and y, they are labels and values. This is what the pie chart looks like:Plotly pie chart showing the relative sales percentages of popular
drinks at a nonalcoholic
bar.

She now has a clearer view of the relative contribution of each drink to total sales. Encouraged and empowered, Roza decides to consult the Plotly.js documentation to see what other visualizations are possible with Plotly. Fortunately, Plotly is a well-documented library, and the documentation is easy to read.

SKILL DRILL
Use the Plotly documentation (Links to an external site.) to create a scatter plot from scratch. Be sure to label your axes.

Roza now has a good grasp of creating basic charts with Plotly. This will help her decide which type of chart to use when visualizing data of belly button critters. For example, which type of chart might she use if she were to display the top ten most commonly found bacteria in a person's belly button?

# 12.2.1
Functional JavaScript
Roza is now familiar with creating various types of charts in Plotly. In order to visualize the data effectively, she needs to be able to manipulate the data. For example, out of the entire belly button dataset, she may wish to select only the data that pertain to one individual. She may also wish to sort data, so that she can display a data subset in ascending or descending order.

Roza's next step is to delve into JavaScript to take advantage of its power in manipulating datasets. Roza will be able to do things like filter the data that meet her specific criteria and to apply a transformation to each element in the dataset, often with just a few lines of code.
The first technique we'll use to transform data is the map() method. The map()method in JavaScript applies a transformation to each element in an array. Like a for loop, it can perform an operation to every element of an array.



Here is an example in which all the numbers of an array are doubled:

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);
In this code, an array named numbers contains five integers:var numbers = [1,2,3,4,5];. Let's break down the rest of the code in more detail:

The numbers array calls the map()method.
Inside the map() method, there is another function. This function is anonymous, meaning that the function does not have a name. When map() is called, it in turn calls this anonymous function.
The anonymous function takes a parameter, named num, and returns the number multiplied by 2. Its sole task is to perform this single action.
For every element in the array, the map() method calls the anonymous function, which doubles the value of the element.
The map()method returns an array of doubled values, which is assigned the variable doubled.
Here, the map()function becomes a method of the numbers array. It then takes in an anonymous function whose sole task is to double the value of num, its argument.

Behind the scenes, an iterative process similar to a for loop takes place. The anonymous function takes in each integer of the numbers array and doubles it. Finally, the variable doubled is an array of integers whose values are twice their original values.

Try running the code in your browser console and view the results for doubled. You should see the following:

The map() operation returns an array whose values are twice those of
the original
array.

IMPORTANT
In the anonymous function inside the map()method, the parameter name num is arbitrary. It could have been named anything else, such as integer or carPrice. For example, the following two examples would be equally valid:

var doubled = numbers.map(function(integer) {
return integer * 2;
});
As would this:

var doubled = numbers.map(function(carPrice) {
return carPrice * 2;
});


SKILL DRILL
Open VS Code and use map() to add 5 to each number in the following array:

var numbers = [0,2,4,6,8];

Verify your results in your browser console.

Roza now is able to perform a transformation, such as addition or multiplication, to every element of an array with map(). While a for loop could have done the same job, the map()syntax is cleaner and less cumbersome. Additionally, there are fewer variables involved in a map than in a for loop, meaning fewer opportunities for the coder to make a mistake. How would this be useful for Roza's project? Imagine that part of her dataset is an array of decimal numbers. If she wanted to round down each number in the array to the nearest whole number, she could use map() to create and display an array of the whole numbers on the page.

Here's another way to use map(). In this example,map() is used to extract a specific property from each object in an array.

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
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

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);
Note the following:

cities is an array of objects. Each object has multiple properties, such as Rank, City, and State.
The map() method is used to extract only the City property of each object, i.e., San Antonio, Phoenix, and Dallas. During each iteration, the anonymous function inside map() returns only that property of each object.
cityNames is an array of only these city names.
SKILL DRILL
Open your text editor and browser. Modify the code in the previous example to extract the population of each city, instead of the city name.

Have you noticed that the syntax for the map() method is far cleaner and involves fewer variables than a for loop? Additionally, whereas a for loop gives specific instructions on start and end points of the loop, map() does not. A for loop is imperative, meaning that its code is more detailed on the specific operations involved in it. The map() method, on the other hand, is more abstract, and does not specify things such as stop and end points.

However, the map() method does something that a for loop does not always do: it calls another function. These are some of the features of the functional programming paradigm, which as we have seen, may lead to fewer errors and complications.

The filter() Method
Another functional programming technique is the filter() method. Like the map() method, it accepts another function as its parameter. Like map(), filter() performs an operation on every element in the original array. Unlike map(), however, filter()does not necessarily return an array whose length is the same as the original array.



Let's see what this means in an example. Run the following code in your console. What does larger return?

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);
It returns an array of integers that are larger than 1: [2,3,4,5].This example is remarkably similar to the last one, with one major difference.

First, the similarities:

The numbers array uses the filter() method.
The filter() method, in turn, takes an anonymous function as its argument. The anonymous function's sole task is to take in a parameter, called num.
The filter()method operates on each element of the numbers array. So how does it differ from map()?

The map() method transforms every element of the original array, and so the size of the transformed array is the same as that of the original array.

The filter() method, on the other hand, returns an array of values that meet certain criteria. Values in the original array that do not fulfill the condition are filtered out. In this case, specifically, the anonymous function called by filter() returns true if an argument is larger than 1, and false if it does not. The filter() method runs the anonymous function on every element of the original numbers array. Only numbers that are larger than 1 are returned: [2,3,4,5]. So whereas applying map() to the numbers array would have returned an array with five elements, applying this specific filter returned an array of only four elements.



Now test your skills in the following Skill Drill.

SKILL DRILL
You are given the following array:

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

Filter the results to include only animals whose species name starts with the letter "s."

Arrow Functions
Let's do a quick review of arrow functions.

REWIND
An arrow function in JavaScript is syntactic sugar. That is, an arrow function does the same thing as a standard JavaScript function, but it streamlines the syntax used to accomplish the same task.

The anonymous function inside map() and filter() can be simplified as an arrow function. Here's an example:

var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);
The map() method performs the identical operation as before: it doubles each element in the numbers array. However, the anonymous function inside map() has been replaced by an arrow function. Contrast the two:

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
sortedAge returns the array [2,3,9,37,39]. Like map() and filter(), sort()takes in an anonymous function. During each iteration, the anonymous function, an arrow function in this case, compares one element of the array (a) with another element in the array (b). From a, it subtracts b. If the result is negative (i.e., b is larger than a) then it stays put. If the result of the subtraction is positive, the order of the two elements is reversed. Look at a modified version of this example.

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
Let's break down this code.

The variables a and b are replaced by anElement and anotherElement.
The first two elements that are compared might be 3 and 2. The variable anElement is assigned to 3, and anotherElement to 2.
The arrow function performs the subtraction anElement - anotherElement, or 3 - 2.
Since the result is positive (3 - 2 = 1), the order of the two numbers is reversed.
The sort()method compares another pair of elements in the array, for example 37 and 39.
Since 37 - 39 is a negative number, their ordering is kept.
The process is repeated until the array is sorted.
Appending reverse() to the above sorts the array in descending order. Try it in your browser console.



Let's reflect briefly on how Roza might apply the sort() function. Each of her volunteers carries a variety of bacterial species in his or her belly button. There is also information on the number of bacteria found for each species. The dashboard Roza has in mind will display the most common bacterial species, by count, in the navel. If Improbable Beef is looking for people who carry a large number of a certain bacterial species, Roza's volunteers should be able to quickly use the dashboard to figure out whether they are eligible to sell their bacteria to the company. To accomplish this goal, she should sort the most common species of bacteria with sort(), and then display the results on the webpage.

The slice() Method
Roza also needs to be able to select a subset of the data. In her project, for example, she might perform a transformation on an array, filter it, sort it, and then display only the top five results.

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
In this example, the slice()method returns the first two elements of the integer array: [0,1]. The first argument is the position of where to begin the selection. Here, it is at index position 0. The next argument, 2, denotes the position of the array where the slicing ceases. In other words, the slice()method begins selecting the array at index position 0, and stops right before reaching index position 2. So here, it returns elements at index positions 0 and 1, but not 2.

SKILL DRILL
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

Use slice() to select the first three elements of the words array.

To slice to the end of an array, you can omit the second argument:

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
The elements sliced here are['orangutan', 'salamander']. Great job!

Roza is now able to create charts with Plotly as well as manipulate datasets with JavaScript. She's now ready to combine these skills in order to create a Plotly chart whose underlying data has been filtered, sliced, mapped, or sorted by JavaScript.