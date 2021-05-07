const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// Retrieve full_name of Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Access latitude of Vandenberg Airforce Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));


// Skill Drill: Use `map()` to print only the latitude and longiture coordinate of each SpaceX launch station
d3.json(url).map((a, b) => console.log(a.spaceXResults.location.latitude, b.spaceXResults.location.longittude));

