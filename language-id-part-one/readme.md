# Frequency Analysis in NetBlox

Welcome back! In today's lesson, we'll be exploring *frequency analysis* in NetBlox, a technique often used in cryptography. In this class, we'll use it to identify the language of a document without looking at the content, just the frequency of certain letters.

First, we'll need two data sources: one with the frequency of letters in various languages, and a source for texts to analyze. We'll start by pulling in our data source on letter frequencies from a list available on GitHub. With that, we can get an overview of how often different letters should appear in different languages' texts. Next, we'll use Project Gutenberg as our source for text documents. Using built-in RPCs, we can search for and retrieve the full text of a book in the NetSplox environment.

Once we have both sources, we'll work on analyzing the letter frequencies in the chosen book. We'll create a block in NetSplox to count the frequency of each letter (A to Z) in the given text, then calculate the percentage of each letter's appearance. This will give us a list we can compare against our expected letter frequencies for different languages.

## Key takeaways from this lesson:
- Frequency analysis can be used to identify the language of a document by analyzing the frequency of letters.
- We can use data sources like GitHub and Project Gutenberg to access lists of language letter frequencies and text documents, respectively.
- Creating a block in NetBlox allows us to analyze and calculate letter frequencies and percentages in a given text.
- Comparing our analyzed text with lists of language letter frequencies can help us determine the language of the document.
- In the next lesson, we'll learn how to plot the results of our frequency analysis and use them to identify the text's language.
