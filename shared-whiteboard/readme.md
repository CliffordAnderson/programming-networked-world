# Collaborative Whiteboard

In this video, you will continue exploring networking concepts in NetsBlox by developing a shared whiteboard. You will interact dynamically and graphically with each other's programs. The goal is to make it possible for one person to write something on the stage, and then for that to show up on another person's computer and vice versa. This will be achieved by using messages to pass content to each other with particular message types. 

To start, you will create a shared whiteboard example. You will start by trying to draw on your screen by yourself. You will create a sprite to represent the pen you're using to draw. The sprite will follow your cursor, and you will draw when the mouse is down. When the mouse is released, you will stop drawing. You will also create a new role and invite another person to it. 

However, you will discover that the clicked green flag only kicks off the process on your computer. If you're working with a process that's on someone else's computer, the green flag won't have any effect. You must send a message indicating that your program is starting. You will send a message over the network called 'start' to everyone in the room. 

Next, you will need to communicate what should be drawn or what has been drawn by the other person. You will create a new message type called 'draw' with two fields, 'Xs' and 'Ys,' representing the X locations and Y locations you drew on. When you're drawing, you will start collecting a small segment of the line you drew, and then you will send it to the other people involved. 

Finally, you will create another sprite to capture the messages coming from the other person's pen and draw them on your board. You will use a for loop to iterate through the list of Xs and Ys and draw them. At the end of it, you will take the pen up. 

## Key Takeaways

1. A shared whiteboard can be created in NetsBlox by exchanging messages with specific message types.
1. A simple drawing application can be created using a sprite as the pen and making it follow the cursor while handling mouse events.
1. The networking components involve creating new roles, inviting users, and sending and handling messages to synchronize the drawing.
1. Separate sprites should be used for each user's drawing to avoid conflicts.
1. Debugging and optimizing performance are essential parts of the development process.

