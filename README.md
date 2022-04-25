# Graduate Credit Assignment
For the graduate credit assignment, I chose for option 1.
> Option #1: Create a Practice Set
> 
> Pretend that you are teaching this course. What Practice problem would you assign that would help students learn the content for a given week? Good practice problems let students exercise one particular element from the lesson and apply it to a new case.
> 
> As an example, here's a practice problem (Links to an external site.) from earlier in this course. It uses Repl.it to provide NodeJS starter code that students can complete and submit under their own account. Stackblitz offers similar functionality for Angular. The best practice problems are short and to the point, and give the students practice with one basic concept.
> 
> A good practice problem will state what technical skill it's exercising, and it will include clear instructions for the student. And, you should include a solution to the problem as well, so that we can see that you understand it. Submit your problem as a URL (to github, or repl.it or another similar tool) or as Text directly in Canvas.

# Where can I find the practice set?
I created a folder within routes called api. In there you'll find taskRoute.js and taskRouteCorrectAnswers.js. In the former is the practice file in which a student has to fill in the missing spots. I've added an exercise introduction text and listed the type of methods that can be used for each operation. In the latter, you'll find the correct answers were the student can compare his/her answers with.

# How to run application
Clone this repo to your own development environment and run `npm start` in the terminal. If you make any changes in the code and need to reload, run `Ctrl + C` in the terminal to stop the current node process and then run `npm start` again.

# How to test my code?
There are two ways to test the code. There is already an added client-side JavaScript code that performs all the CRUD operations in a row and logs it to the console. Another option is to use Postman. In Postman you can do *GET*, *CREATE*, *UPDATE* and *DELETE* requests when fetching the localhost:3000 URL.
