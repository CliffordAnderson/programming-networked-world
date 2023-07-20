# Introduction to Named Entity Recognition (NER)

Welcome to today's session on natural language processing. We will focus on a technique called *Named Entity Recognition (NER)* to extract information from news headlines. We will be using two RPCs: the first retrieving news articles from the New York Times, and the second one will be the Core NLP library containing the Named Entity Recognition Annotator (NER). Our goal will be to extract the names of people mentioned in the most popular news headlines of the past week.

To process the information, we will use higher-order functions working with lists such as *map*, *keep*, and *combine*. Using these functions, we will efficiently extract and filter the required data. After setting up our RPCs, extracting titles, and combining them into a single list, we will call the Core NLP library to receive a list of named entities.

From the list of entities, we will filter it to keep only those that are marked as "persons" using the condition that `NER` value equals "PERSON". Finally, by mapping over the rows in the list and taking the value portion of each column, we will be left with a table consisting of the names of people, their confidence scores, and other relevant information about where those items are found in the text.

## Key takeaways from this lesson:

- Named Entity Recognition (NER) is a technique used to extract information, such as names of people, from text data.
- RPCs (Remote Procedure Calls) can be used to retrieve information from external sources, in this case, The New York Times articles and the Core NLP library.
- Higher order functions such as *map*, *keep*, and *combine* are essential for efficient list processing in order to extract and filter required data.
- Filtering data based on conditions can help focus on relevant information; for example, keeping only the named entities marked as persons.
- Mapping over the rows and columns of result lists can help extract just the value portion and present the required data in a clear and concise table form.
