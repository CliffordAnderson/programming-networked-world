# Introduction to Collaborative Whiteboard in NetsBlox

In this lesson, we are going to explore networking concepts in *NetsBlox* by creating a shared whiteboard. Our goal is to allow multiple users to draw on the same stage and see each other's drawings in real-time. We will do this by using messages to pass content to each other with specific message types.

First, we will start by developing a simple drawing application for a single user. This involves creating a sprite as our pen and using a forever loop to make it follow our cursor. We will then add logic to draw on the screen when the mouse is down and stop drawing when it is released. 

Once we have a simple drawing application, we can start thinking about the networking components. We will create new roles, invite other users, and handle messages for starting the drawing process and passing the drawn content. To avoid conflicts, we will use separate sprites for each user's drawing.

## Key takeaways from this lesson:

- A shared whiteboard can be created in NetsBlox by exchanging messages with specific message types.
- A simple drawing application can be created using a sprite as the pen, and making it follow the cursor while handling mouse events.
- The networking components involve creating new roles, inviting users, and sending and handling messages to synchronise the drawing.
- Separate sprites should be used for each user's drawing to avoid conflicts.
- Debugging and optimising performance are essential parts of the development process.