# Introduction to Variable Scope in Programming

Welcome back to our series on programming for a networked world. Today's lesson focuses on *variable scope*. In programming languages, scope refers to the parts of the program that have access to a particular piece of information. When you create a variable, you need to think about which parts of your program should have access to that information and which should not. By defining the scope of your variable, you keep information restricted to its relevant context. Generally, it's better to limit the scope of your variables to avoid different program components from causing conflicts with one another.

We will start by creating a *global variable*, which is a variable that every block and sprite in the program have access to. Next, we'll explore creating variables with more limited scopes, such as *sprite variables* and *script variables*. Sprite variables are exclusive to individual sprites, while script variables are limited to specific stacks of blocks. Finally, we'll discuss *block variables*, which are created when making custom blocks and remain in scope only for the duration of your custom block.

Throughout this lesson, we'll cover the process of creating, setting, and using variables of different scopes. It's important to understand how variable scope affects your program and when to use the appropriate type of variable for the task at hand.

## Key takeaways from this lesson
- Variable scope is an important concept to understand in programming, describing which parts of a program have access to a variable.
- There are four types of variables: global variables, sprite variables, script variables, and block variables.
- Global variables have the widest scope and can be accessed by any part of the program, whereas sprite, script, and block variables have more limited scopes.
- Use variables with limited scopes, such as sprite, script, or block variables, to keep information restricted to its relevant context and avoid conflicts between program components.
- Understanding how to create, set, and use variables with different scopes is crucial for effective programming.