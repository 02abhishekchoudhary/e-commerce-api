# E-Commerce-API
E-Commerce-api using Express and MongoDB. This is a basic CRUD application.


$ Stack Used
    NodeJS
    Express
    MongoDB

Into the project directory
Install NPM dependencies
npm install

Then start your app
npm start

The Server should now be running at http://localhost:5000/


Test My API’s using Postman


Here is the four operation you can perform on local host

1.  API to add products in the database
    URL [POST]: /products/create

2.  API to list products
    URL [GET] : /products

3.  API to update quantity of a product (can be incremented or decremented)
    URL [POST] : /products/:id/update_quantity/?number=100

4.  API to delete products
    URL [DELETE] : /products/:id
    
    
   
And now I show you how to perform operation using my hosted link:


1.  API to add products in the database

![POST](https://user-images.githubusercontent.com/88940367/201413612-dfd59e61-690b-41d9-b79e-0beee47f0eec.png)

2.  API to list products

![GET](https://user-images.githubusercontent.com/88940367/201413622-dae04e2e-6b7c-43c2-bdf8-071e4c5f228e.png)

3. API to update quantity of a product

![PUT](https://user-images.githubusercontent.com/88940367/201413618-c6a1963d-a78b-4c79-8c7b-fe0896e93ccc.png)

4.  API to delete products

![DELETE](https://user-images.githubusercontent.com/88940367/201413620-2bdb8570-169f-4c7e-8844-8a34fe6611d1.png)
