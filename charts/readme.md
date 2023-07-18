## Data Visualization in NetsBlox

Welcome back! In this lesson, we'll continue exploring lists, focusing on data visualization. We will use NetsBlox to access a dataset collected at the Manaloa Observatory in Hawaii, which tracks the level of carbon dioxide in the atmosphere. This dataset provides an ideal example since Manaloa's location makes it less affected by local environmental factors, giving us a better representation of the global atmosphere as a whole.

To get started, we'll first use an RPC to fetch the data from the Manaloa Observatory. We can do this by navigating to the *Network* tab and selecting the Manaloa carbon dioxide data from the Climate options. This data will be provided in the form of a list in NetsBlox. However, visualizing the trend from this list can be challenging. To better visualize this data, we will use the _GNU plot charting service_, a free and open-source library for plotting data available within NetsBlox.

By default, the plot we generate may look quite plain. We can tweak its options like title and axis labels to make it more informative. To do this, we first create a variable called _chart options_ to capture the plot's default information. We can then use the structured data library to modify the desired elements. Finally, we call the GNU plot with our new options and data to generate the updated visualization.

### Key takeaways from this lesson:
- Remote Procedure Calls (RPCs) allow us to work with and visualize data sets in NetsBlox.
- The Manaloa Observatory dataset provides a reliable representation of atmospheric global carbon dioxide levels.
- The GNU plot charting service in NetsBlox helps us create visualizations for our data.
- We can improve the default plot by customizing its options, such as title and axis labels.
- Utilizing the structured data library lets us modify the plotting options easily.
