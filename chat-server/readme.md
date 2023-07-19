# Client-Server Applications in NetsBlox

In this video, you will continue your exploration of networking within NetsBlox in this session. Unlike previous examples where you used a room with various roles, you will not do that this time. This is because when you're building certain types of applications, such as a client-server application, you don't always know the number of users you will have. You don't want to have to create new roles or delete roles as users come and go. So in this particular application, you will be messaging each other back and forth with another way of passing information between NetsBlox programs called a public role ID.

To start, you will set up the environment to receive the message. You will use the network category where you have all your message-passing blocks. You can use the "when I receive message" handler to handle messages you receive over the network. You can select the built-in message type for now. When you receive the message, you can keep it simple and save it for two seconds. Now you need someone to send you a message that you can then display.

When you want to send a message, you can do so. However, the problem is you're not sharing a project. So it's not going to be helpful to say to others in the room or everyone in a room, because you're actually not in a room together at this point. You're just in completely separate NetsBloxprojects. So how do you actually get the message to the other person? In NetsBlox and under the network category, there is a service that can be useful here. It's the public roles service. This lets you get a public role ID.

In the past, when you were communicating within a room, you had multiple roles, and you were using the role ID or role name to communicate with one another. Now, even if different projects had roles with the same name, resolving this role name was no problem because you knew it was within the room. But as you're not using a room here, you need some absolute or unique address for the specific project or role to which you want to send a message. If you call the "get public role ID," this will return a public role ID or this kind of unique role or this unique address for your specific role and project.

The public role ID is just like an email. You actually have to learn that address from the other person. They have to be able to give it to you in some way. Otherwise, you can't communicate with them. So, in this case, you will ask them. You could have them email your address. There are other ways to share it. But you do need to know what their public role ID is going to be to start the chain of communication. You will create a variable for the chat server ID and set that chat server to the other person's public role.

## Key Takeaways

1. In a client-server application, you don't always know the number of users you will have, so you don't want to create new roles or delete roles as users come and go.
1. You can pass information between NetsBlox programs using a public role ID.
1. You can use the "when I receive message" handler to handle messages that you receive over the network.
1. The public roles service in NetsBlox lets you get a public role ID, which is a unique address for your specific role and project.
1. You need to know the other person's public role ID to start the chain of communication. You can create a variable for this and set it to the other person's public role.
