# Introduction to Map, Keep, and Combine for Processing Lists

Welcome back to Programming for a Networked World! Today, we will be exploring an alternative to using `for` loops to process lists. We will be discussing three powerful blocks known as _map_, _keep_, and _combine_. These blocks provide powerful abstractions for working with lists and apply a specific operation, or a more general function, to each item in the list.

The _map_ block has two slots: a ring where we put an operator, and a slot for the list. It applies the operation in the ring to each item in the list in turn and returns a new list. For example, we can use the map block to double each item in a list of numbers from 1 to 10. If we want to filter a list by applying a Boolean operator to each item, we can use the _keep_ block. This block helps us to create a new list containing only the items that passed our Boolean operator or filter test. For instance, we can use the keep block to filter out odd numbers from a list of numbers from 1 to 10.

Additionally, we can use the _combine_ block to perform an operation that combines all the elements of a list together. A common example would be to calculate the sum of all items in a list. To do this, we use the plus operator, leaving both slots open. These three tools (map, keep, combine) are not only powerful, but they can also be combined to efficiently process long lists very quickly.

## Key takeaways from this lesson

- Map, keep, and combine provide an efficient way to process lists, as alternatives to using `for` loops.
- The _map_ block applies an operation to each item in a list in turn, and returns a new list.
- The _keep_ block filters a list based on a particular Boolean operator or test.
- The _combine_ block performs an operation that combines all the elements of a list together, such as calculating a sum.
- These three blocks can be combined to process long lists quickly and creatively in various programming scenarios.