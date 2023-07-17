## Street Maps

Welcome back to our class, Programming for a Networked World. In this lesson, we will be delving deeper into the concept of mapping, specifically focusing on Google Street View within NetsBlox. 

Google Street View, as you may already know, allows you to view images of various locations around the world. Our project for today will involve building a city explorer. We will create a list of cities, select a random city from this list, and display it in NetsBlox. This could potentially be the foundation for a game, such as a 'guess the city' game. 

To begin, we will revisit the RPC tab and bring out our usual call block. Here, you will notice an option for Google Street View. Upon expanding this, you will see several options including 'get info', 'get info from address', 'get view', 'get view from address', 'is available', and 'is available from address'. For our project, we will be using 'get view from address' and 'is available from address'. The aim is to input the name of a city along with a few additional pieces of information, and receive an image of that city in return. To test this out, we will use 'get view from address' and fill in the slots provided. 

For our first test, we will use Nashville as our city. We will then use the Sensing tab to get the height and width of the stage. The fields of view, heading, and pitch are specific to the Google Street Images RPC. For our purposes, we will fill these in with 90, 90, and 0 respectively. Upon running this, we should receive an image of Nashville. To explore other cities, we need to have their names. We could create our own list of city names, or we could use a pre-existing list. 

For this project, we will use a list from GitHub that contains hundreds, possibly thousands, of city names from a mapping service. To bring this data into Netsblocks, we will use the URL block under the Sensing tab. However, the data comes back as a large string in JSON format, which is not ideal for our purposes. To convert this data into a more usable format, we will use a library called HTTP under the Libraries tab. This library contains a tool called Listify, which will convert our string data into a list of lists format. We can then use this data to pull out the names of the cities for our project. 

## Learning Outcomes

* Understanding how to use Google Street View within Netsblocks.
* Learning how to build a city explorer by creating a list of cities and displaying a random city in Netsblocks.
* Exploring the different options available under Google Street View.
* Understanding how to import data from an external source, such as GitHub, into NetsBlox
* Learning how to convert string data into a list of lists format using the HTTP library and the Listify tool.
