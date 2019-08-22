## Exercise 1 

Create a component called Counter that will only update if the number of click's is odd and ignore the click with even number. 

You are going to need a button, and a text that displays the counter increasing when the number of clicks is odd:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_B129F1F5CCCDE7FA1BDACCD2F4F756ABC4E298094B0A789416A13B24C0A2AC85_1505311683294_image.png)

***Your solution goes to the ex01 folder***

## Exercise 2

Create a euro to dollar (and viceversa) convertor. It needs to take the input from one component and then render the converted value from a child component.

It is up to you which component does the actual conversion...

Extra:
- Use an external API to get real exchanges rates, you can use this one: https://exchangeratesapi.io/

> Use js fetch to get the data from the API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

***Your solution goes to the ex02 folder***

## Exercise 3

Create a form that gets email and password and a component with an alert initially not visible. When submit it should check in an array of users if the email exists and if so, if the corresponding password is correct. 

If email and password are correct you should display a positive message with a green background otherwise negative message and red background but in both cases a series of messages:

    This message will desappear in 3
    This message will desappear in 2
    This message will desappear in 1
    This message will desappear in 0

and make the alert component invisible again i.e. unmount it.

> Use `setInterval` to display every message for 1 second


***Your solution goes to the ex03 folder***

## Exercise 4

Create a cart component that will display a list of products in cart. For the products you can use the same array from the products page but with a new key value pair for the quantity.

Requirements:

- you have to use React Hooks for this exercise
- you should display the total cost of the products
- you should be able to change the product's quantity
- you should display a free shipping green message once the total gets to 500€ or more, otherwise not eligible for a free shipping red message.

***Your solution goes to the ex04 folder***




