# Using Map, Keep, and Combine for Processing Lists

This lesson will explore an alternative to using for loops to process lists. We will discuss three powerful blocks known as map, keep, and combine. These blocks provide powerful abstractions for working with lists, allowing you to specify an operation to transform, filter, or merge data.

The map block has two slots: a ring where we put an operator and a slot for the list. It applies the operation in the ring to each item in the list in turn and returns a new list. For example, the map block can double each item in a list of numbers from 1 to 10. 

If we want to filter a list by applying a Boolean operator to each item, we can use the keep block. This block helps us to create a new list containing only the items that passed our Boolean operator or filter test. For instance, we can use the keep block to filter out odd numbers from a list of numbers from 1 to 10.

Additionally, we can use the combine block to perform an operation combining all list elements. A common example would be calculating the sum of all items in a list. We use the plus operator to do this, leaving both slots open. After combining all the elements using the plus operator, we get the sum as a value in return.

These three tools (map, keep, combine) are not only powerful but they can also be combined to process long lists very quickly and efficiently.

## Key Takeaways

- Map, keep, and combine provide an alternative approach to using for loops for processing lists.
- The map block applies an operation to each item in a list and returns a new list of all the outputs.
- The keep block filters a list based on a particular Boolean operator or test.
- The combine block performs an operation that combines all the elements of a list together, such as calculating a sum.
