# Introduction to Message Passing in NetsBlox

In today's lesson, we will be learning about *message passing* in NetsBlox and building a texting application. Our goal is to send a text message to someone who's not actually inside our own project. To achieve this, we will work with NetsBlox environments called *roles* and use the *Send Message* block to communicate between them, similar to how email works. 

We start by setting up roles, in our case, a Sender role and a Receiver role, and inviting a partner to join one of the roles. We will then create a distributed program where one person writes the sender part, and the other writes the receiver part. To send messages between roles, we will use a block called *Send Message*, choose a message type, and target it to the specific role we want the message to be sent to.

We can also utilize custom message types to send complex messages containing various fields of information. However, it is crucial to ensure both sender and receiver roles have the same custom message types defined so that they understand and process the messages correctly.

## Key takeaways from this lesson
- Message passing in NetsBlox allows communication between different projects.
- Roles are used to set up different NetsBlox environments that can communicate using messages.
- The *Send Message* block is used to send messages between roles with specified message types.
- Custom message types can be defined to send complex messages containing various fields of information.
- It is crucial to have the same custom message types defined in both sender and receiver roles to ensure correct communication.