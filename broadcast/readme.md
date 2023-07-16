# Broadcast Blocks in NetsBlox

Welcome back! In this section, we'll discuss the *broadcast block* that allows you to send messages across projects and let other sprites or blocks pick up those messages. Just like broadcasting in daily life, you can broadcast a message in Nets blocks, and other blocks will pick up that message and respond to it.

First, we'll demonstrate how to send a broadcast message and receive it across two sprites using Ada and Alonzo as an example. We'll set up a simple message, broadcast it when a specific key is pressed, and configure Alonzo to pick up the message and respond to it. Programs often use broadcast blocks to coordinate events or set conditions, making them ideal for game development scenarios.

In our second exercise, we'll create a simple game where a spaceship needs to avoid falling asteroids. A "game over" event will be broadcast when the spaceship collides with an asteroid. To achieve this, we'll be programming the motion of the asteroid and the spaceship controls. We'll then demonstrate how to detect a collision between the two objects and broadcast the "game over" event, stopping the game.

## Key takeaways from this lesson:

* The *broadcast block* allows messages to be sent across projects and picked up by other sprites or blocks.
* You can set up a message to be broadcasted and configure the recipient sprite to respond to it accordingly.
* Broadcasts are great for coordinating events or setting conditions, especially in games.
* Our example game shows how to program the motion of objects (a spaceship and falling asteroids) and set up controls for moving them in response to key press events.
* We demonstrated how to detect a collision and broadcast a "game over" event, making the game stop due to the collision.
