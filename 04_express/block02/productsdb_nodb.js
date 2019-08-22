PRODUCTS DB

Create a products DB that stores our products and divides them by categories.
You should be able to create a CRUD (Create, Read, Update, Delete) app for adding categories as well as products. 
all movies should have at least name , price , color and description, they should be editables.
all data must be passed through the body using postman instead of params through the url.

API:

| Method | URL                 | Action                                     |
| ------ | ------------------- | ------------------------------------------ |
| POST   | /category/add       | Add a  new category                        |
| POST   | /category/delete    | Remove category                            |
| POST   | /category/update    | Update category                            |
| GET    | /category/categories| Display all categories                     |
| GET    | /category/products  | display the categories with all products   |
| GET    | /category/:category | display one category with all its products |
| POST   | /product/add        | Add product                                |
| POST   | /product/delete     | Delete product                             |
| POST   | /product/update     | Update name, price, color or description   |


***Your solution goes to the current folder***