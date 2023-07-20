# Developing a Parental Filter Using NetBlox and Twitter Feed

Welcome back! In this lesson, we will explore how to create a parental filter using NetBlocks by obtaining a feed from Twitter and filtering out any bad words in the tweets. You will have control over the sensitivity level, which determines how carefully the text should be filtered.

Our first step is to access Twitter, search for a specific topic, and retrieve a specified number of tweets to analyze. We will then remove any metadata and Twitter handles from the text to focus solely on the content of the tweets. To accomplish this, we use *variables* and *maps* to process the tweets and filter out unwanted information.

Next, we will use the Parallel Dots' *getAbuse* function to evaluate each tweet's content for any abusive language. We will set an abuse score based on the returned probability, compare it to a set sensitivity level and categorize the tweet as either “abusive” or “non-abusive.” We will then present the results using a customizable interface letting users choose their desired topic and sensitivity level, showcasing which tweets passed through our filter and which ones were redacted due to inappropriate content.

### Key Takeaways
- Accessing and filtering Twitter feeds using NetBlox.
- Removing metadata and Twitter handles from the tweets to concentrate on their content.
- Checking for abusive language using the Parallel Dots' *getAbuse* function.
- Categorizing tweets based on a set sensitivity level, comparing it with their abuse score.
- Creating a customizable interface allowing users to select their topic and sensitivity level for filtering tweets.
