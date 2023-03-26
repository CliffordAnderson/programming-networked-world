# Introduction to Dynamic Mapping

Welcome back to _Programming for a Networked World_. In today's lesson, we are going to explore how to create a more dynamic map, allowing users to scroll and zoom around the map to explore different areas. We will be using latitude, longitude, and zoom levels to achieve this.

First, we'll start by displaying a map on the stage and setting the latitude and longitude using geolocation. We'll create variables for _latitude_, _longitude_, and _zoom_ to fill in the map. To make the map more dynamic and allow users to choose the city they want to view, we can use the _ask_ block from the Sensing category. We'll use events to control when the map is shown on stage.

To allow users to scroll through the map, we'll add event listeners for up, down, left, and right arrow keys. To move the map, we need to adjust the latitude and longitude based on the zoom level, which can be done by capturing the difference between the max and min latitude or longitude values currently displayed. The scroll amount should provide a sense of continuity when moving through the map.

## Key Takeaways from this Lesson

- Geolocation can be used to set the latitude and longitude for a dynamic map.
- Variables for latitude, longitude, and zoom can help create a customized map view.
- Using the _ask_ block, users can choose the city they want to view on the map.
- Event listeners can be used to allow scrolling through the map using arrow keys.
- Adjusting latitude and longitude based on the zoom level ensures continuity while scrolling.