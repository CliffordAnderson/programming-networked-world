# Creating Translation Fails with NetsBlox

Welcome to today's lesson, where we'll have some fun with song lyrics! We'll explore how to create our own *Translation Fails* using NetsBlox, which allows us to combine two built-in RPCs, Genius, and Google Translate.

In the first part of the lesson, we learn how to use the Genius RPC to obtain song lyrics by searching a song title, finding the song ID, and then calling Genius to fetch the lyrics. We also learn how to tokenize the lyrics into segments by line, so that each verse is an item in a list. 

Next, we move on to the Google Translate RPC, which will help us shuffle the song lyrics between multiple languages, ultimately resulting in a mixed-up version of the lyrics. We'll start by getting a list of supported languages and randomly selecting destination languages for our translations.

Finally, we'll put it all together, iterating through each verse of the song lyrics list and repeatedly translating between languages before translating it back to English. By doing so, we will create that mixed-up effect in the lyrics, which can lead to some amusing results!

## Key Takeaways
- Genius RPC allows us to fetch song lyrics by searching song titles and obtaining song IDs.
- Tokenizing lyrics into segments by line helps us manipulate them easily during experimentation.
- Google Translate RPC is used for translating text between multiple languages.
- Mixing song lyrics between languages can create amusing and unexpected results, known as "Translation Fails."
