# Creating Custom Blocks in NetsBlocks

Hello everyone, and welcome back to our series on programming for a network world. Today we're going to talk about *custom blocks*. When you're working in NetsBlocks and you wish there were a block for a specific function that doesn't exist in the palette, you can create your own custom block. This helps to encapsulate the complexity of your program, making it more modular and easier to understand.

In this lesson, we will work on a project about the weather. We will combine two *network functions* (RPCs) in NetsBlocks: one to find our geospatial location using the name of a city, and the other to use that location to provide us with an icon representing the current weather conditions. We will start by creating variables for latitude and longitude and utilize the *geolocation* and *weather* RPCs. Once we have the necessary information, we will create a *custom block* that takes the name of a city as input and gives us a weather icon as output.

There are two ways to create a custom block in NetsBlocks: by clicking "custom" and then "make a block" in the palette or by right-clicking on the script and choosing "make a block." You have several options to customize the block's appearance and define the input it receives. In our example, we created a custom block called "weather icon for location," where the input is the location text. This block can be used to look up weather for any city by providing the name of the city as input.

## Key takeaways from this lesson:
- Custom blocks help encapsulate the complexity of your program, making it modular and easier to understand.
- You can combine network functions (RPCs) in NetsBlocks to create custom blocks that perform specific tasks.
- Creating custom blocks involves specifying the block's appearance, input type, and the computations it performs.
- Custom blocks can be used within larger programs for more efficient computations and clearer organization.
- Geolocation and weather RPCs can be combined in a custom block to provide weather information based on a city name input.