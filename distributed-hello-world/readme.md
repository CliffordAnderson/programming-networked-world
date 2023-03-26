# Introduction to Peer-to-Peer Networking in NetsBlox

Today, we'll begin exploring *peer-to-peer networking* in *NetsBlox*. We'll learn how to pass a message from one NetsBlox program to another by creating a *Distributed Hello World* program. This program will involve two applications in which one application sends a "Hello, World" message to another application on a different computer that then displays the message.

We'll start by writing the sender application using the *Send Message* block found in the *Network* category. By selecting the first dropdown, we can enter "Hello, World" in the built-in message type provided by NetsBlox. Next, we'll introduce the concept of a *room* composed of multiple *roles*, which represent subprojects within the distributed application. In this case, the first computer will have the sender application and the second computer will have the receiver application.

To create the receiver application, we'll first need to give permission to edit the code if working collaboratively. Once the permission is granted, we can use the *When I Receive* block from the Network category to create the receiver. We just need to make the receiver display the content of the received message. Finally, in the sender application, we must select the recipient from the dropdown list, allowing the "Hello, World" message to be sent and displayed on the receiver's screen.

## Key Takeaways from this Lesson

- Peer-to-peer networking in NetsBlox enables us to create programs that communicate between devices.
- The Distributed Hello World program demonstrates how to pass a message from one application to another on different computers.
- Rooms and roles are crucial concepts when working with distributed applications, enabling us to structure multiple components within an application.
- The Send Message block allows us to send a message, while the When I Receive block allows us to handle the incoming message.
- Collaborative editing in NetsBlox requires permission from the project owner for security purposes.