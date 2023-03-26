# Introduction to Zipping Lists for Charting

Welcome back to *Programming for a Networked World*. In today's lesson, we're going to explore how to work with lists in order to format our data for charting. Our main focus will be on combining two lists, a list of numbers and a list with a mathematical function applied to those numbers, into a matrix. This operation is called *zipping the lists*.

To start, we'll create a custom block called `join list` to combine our initial list of numbers and the list with a mathematical function applied to them. We will do this by iterating through each item in one list and adding it to another, then returning a combined list. It's important to ensure that the lists have the same length, or we might encounter unexpected results. 

We will then use this newly-created block to format our data for charting linear and exponential growth. Alternatively, you can use community-contributed libraries, such as the `zip` library provided by Brian, to perform the same function without writing the code yourself. 

## Key takeaways from this lesson:

- Zipping lists involves taking two lists of numbers and combining them into a matrix, which can be useful for charting data with an x-axis and a y-axis.
- Creating a custom block like `join list` helps us combine lists into a matrix.
- Ensuring that the input lists have the same length is crucial to avoid unexpected results when zipping lists.
- Using existing community-contributed libraries, like the `zip` library, can save time and effort when writing code.
- Formatting data properly is essential when working with charting functions.