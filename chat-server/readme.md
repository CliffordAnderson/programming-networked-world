# Introduction to Client-Server Applications in NetsBlox

In the previous examples, we utilized the room concept to communicate across different NetsBlox instances, but today we're going to explore messaging without using rooms. We will build a *client-server application* that can handle a variable number of users, which is perfect for scenarios where you do not know the exact number of users you'll have in advance.

Instead of using roles, we will send messages using a *public role ID*. This ID is unique to each specific user in the network, allowing different projects to communicate while maintaining the role assignment.

First, we will make a simple exchange of messages between two programs with the public role IDs. To do this, we will follow these steps:
1. Set up the environment to receive a message using the built-in message type.
2. Save the message for a specific time (e.g., two seconds).
3. Send a message to a specific role using the public role ID.
4. Receive and display the message.

## Key Takeaways from this Lesson

- Public Role IDs are unique addresses that allow different projects and roles to communicate without needing a room or role.
- Client-server applications can handle a variable number of users without needing to change roles.
- Registering clients with a server allows the server to send messages to all participants in a chatroom.
- When designing messaging systems, consider the included information (e.g., user IDs, usernames) to improve the user experience.
- The public role ID system can be further developed to display messages in various formats, such as colors or organized logs.