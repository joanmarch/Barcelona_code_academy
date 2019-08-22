EXERCISE 1

    Write a multylanguage HelloWorld app with Express. To do so you need to use
    req.params property to get the lanaguage the user wants the message to be printed in. Make sure that if the URL 
    does not specify any language then the app will default to English.
    For this exercise and all the next to come your app will listen to localhost:3001 instead of checking for a file
     in a folder like we have done so far.
    Example of usage:
        > URL Message
        > /NL Hallo Wereld
        > /HI नमस्ते दुनिया
        > /FR Bonjour le monde
        > /ES Hola Mundo
        > /IT Ciao Mondo
        > /CH 你好，世界
        > /JP こんにちは世界
        > /AR مرحبا بالعالم
        > /EN Hello world
        > / NL: Hello world, HI: नमस्ते दुनिया, ..., EN: Hello world.
    Set Up Steps:
    npm init
    npm install --save express (you might need to do sudo)
    in package.json add the following
    "scripts": {
    "start": "nodemon server.js",
    },
    now, when your code is ready, you should be able to use npm start to launch your app
    remember to set the app to listen to localhost:3001

***Your solution goes to ex01 folder***



EXERCISE 2

    Extend the previous exercise and add the possibility to add a new language.
    Example of usage:
        > URL Message
        > /DE Hello World in DE not found
        > /DE/Hallo_Welt DE added with message "Hallo Welt"
        > /DE Hallo Welt
    Note:
    Pay attention to the fact that the URL is encoded to ASCII code so it only accepts most common English charactes and not spaces. That is why we use the underscore instead of a space! For more information about the encoding of URL you can visit the W3Schools source.

***Your solution goes to ex02 folder***



EXERCISE 3

    Extend the previous exercise and add the possibility to remove a language. In fact let s make the app start with no language saved in memory
    Example of usage:
        > URL Message
        > /DE Hello World in DE not found
        > /DE/Hallo_Welt DE added with message "Hallo Welt"
        > /DE Hallo Welt
        > /DE/remove DE removed
        > /DE Hello World in DE not found

***Your solution goes to ex03 folder***



EXERCISE 4

    Extend the previous exercise and add the possibility to update a language.
    Example of usage:
        > URL Message
        > /DE Hello World in DE not found
        > /DE/HalloWelt DE added with message "HalloWelt"
        > /DE HalloWelt
        > /DE/Hallo_Welt Action fobidden, DE is already present in the system
        > /DE/update/Hallo_Welt DE updated from "HalloWelt" to "Hallo Welt"
    Note:
    By completing this exercise you will have your first CRUD app! Congratulations!

***Your solution goes to ex04 folder***



EXERCISE 5

    Write a bank account app. The server needs to be able to create accounts and for a single account we should be able to deposit, 
    withdraw, get the balance and delete the account.
    If no account ID is passed nothing should be created/deposited/withdrawn
    Working app example: https://bcs-bank-app.herokuapp.com

    
    API:
| URL (String)                    | Return (String)                                  | Comments                                                |
| ------------------------------- | ------------------------------------------------ | --------------------------------------------------------|
| /account/new/:accountID/:amount | account nr :accountID created with :amount euros | GET; it must be unique no matter the number of calls    |
| /:accountID/withdraw/:amount    | :amount euros taken from account nr :accountID   | GET; if :accountID not found return "Account not found" |
| /:accountID/deposit/:amount     | :amount euros added to account nr :accountID     | GET; if :accountID not found return "Account not found" |
| /:accountID/balance             | The balance of account nr :accountID is ## euros | GET; if :accountID not found return "Account not found" |
| /:accountID/delete              | Account nr :accountID deleted                    | GET; if :accountID not found return "Account not found" |
| /*                              | 404 resource not found                           | What to do in case we match anything else                |

***Your solution goes to ex05 folder***









