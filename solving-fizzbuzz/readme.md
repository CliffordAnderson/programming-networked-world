## Solving FizzBuzz

In this subsection, we will be tackling a problem known as FizzBuzz. This problem originated from a children's game and gained a reputation about a decade ago as a challenging problem for aspiring programmers during coding interviews.

The rules of FizzBuzz are simple: count from 1 to 15, and whenever a number is cleanly divisible by 3, say "Fizz." If it's divisible by 5, say "Buzz." If it's divisible by both 3 and 5, say "FizzBuzz." 

We will solve this problem using the tools you already have in your toolkit. To begin, we will establish a loop with a counter to count the numbers as we go through. We will create a variable called "Count" and set it to 1. As we go through the loop, we increment the count by one each time. We will also set up our Boolean conditionals. We will use the modulus operator to test if a number is divisible by 3 or 5 without a remainder. If the remainder is 0, the number is divisible by 3 or 5. 

Next, we will integrate these Boolean conditionals into our program using conditional expressions. These expressions allow us to do something differently if a certain Boolean condition reports that it's true or false. We will use the "if" and "if then else" blocks to set up our conditions. However, we need to be careful with the order of our conditions. If we test for divisibility by 3 and 5 after testing for divisibility by 3 or 5, we will run into a problem. By definition, anything that's divisible by 3 or 5 will be met before we test whether it's divisible by both 3 and 5. Therefore, we need to place the condition for divisibility by both 3 and 5 at the top of our stack of blocks.

In conclusion, in this video, we will learn how to use Boolean operators in practice, how to differentiate when to use a conditional "if" or a conditional "if-then-else" block, and how to use modular arithmetic and the modulus operator in NetsBlocks programs. 

## Learning Outcomes

1. Understanding and solving the FizzBuzz problem.
2. Using a loop and a counter in programming.
3. Using Boolean conditionals and the modulus operator.
4. Differentiating between using a conditional "if" or a conditional "if-then-else."
5. Understanding the importance of the order of conditions in programming.
