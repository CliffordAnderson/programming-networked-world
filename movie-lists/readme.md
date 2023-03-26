# Programming for a Networked World: Movie Database Project

Welcome back to our series on programming for a networked world. In this lesson, we will be working on a project that queries an online movie database to find films with specific words in their titles. This project combines several programming concepts we've previously discussed, including *for loops*, *lists*, and *variables*. By the end of this exercise, you will be able to connect with data sources across the internet using *Netbox*'s capabilities.

We will use the *call block* from the red category to connect our project to the movie database API (*Application Programming Interface*), which provides the rulebook for interacting with another system. In Netbox, we can use the call block to make *remote procedure calls* to an API in order to request and retrieve information from it. In our project, we will use the call block to search for movie titles matching a given keyword, then display those in a list.

To achieve this, we will build our program block by block, using a for loop to iterate through the list of movie IDs we receive from our search query. We will then make additional *remote procedure calls* to receive the actual titles of the movies corresponding to those IDs. Finally, our program will write the movie titles on the stage. Throughout this course, we will explore many other remote procedure calls available in *NetsBlocks*.

## Key takeaways from this lesson:

- Combining programming concepts like for loops, lists, and variables can lead to more sophisticated programs.
- Using the call block in Netbox allows us to connect with APIs and make remote procedure calls.
- APIs provide the rulebook for interacting with other systems and retrieving data.
- In our project, we use a for loop to iterate through a list of movie IDs and make subsequent remote procedure calls to retrieve movie titles.
- This project demonstrates Netbox's ability to connect with data sources across the internet.