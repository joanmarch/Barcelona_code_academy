## Exercise 1

Create two React components, one of them will be the parent component and the other will be the child component.

The parent component will render the child component passing a prop to it (this will be your name that you first assign in the parent component using the 
keyword `this`). 

The child component needs to return the following message: "Hello 'the name you passed as a prop', I am  the child component!"

## Exercise 2

Create a parent component inside which you define two arrays of equal length, the first will have 5 firstnames and the second 5 lastnames.

Create 2 children components – one to display the firstnames and one to display the lastnames so that they are rendered side by side with matching order.

## Exercise 3 

Create 3 class components, Main, List, and Item.

In Main declare an array of categories; you should pass this array as it is to List, 
then in List you should map through the array and for each iteration you should pass each element of the array to Item in which you render it.

## Exercise 4

Refactor the previous exercise, this time using only functional components.

## Exercise 5

Refactor the eCommerce clone you did in the previous block to use props.

You should now use the Main/List/Item pattern which will be App/ProductsList/SingleProduct components for the lists of products. 

Declare the list of products in App and pass it to ProductsList.

Loop in ProductsList and for each iteration render the product in SingleProduct. 

> Optional with props or `useContext`
