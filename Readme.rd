Online Market
It is an simple web application where an user can register and log in to sell or buy any kind of products.
The aplication also allow unregistered users to check the products, but they need to register  to buy them.

The aplication uses the technologies MEAN. 

MongoDB - a document-based NoSQL database that stores data in JSON-like documents.
Express.js - a web application framework for Node.js that provides a simple and flexible way to create web applications and APIs.
Angular - a JavaScript framework for building single-page client applications.
Node.js - a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server side.


In order to run the applciation, you have to:

To run the server:
npm run build
to run the client side:
ng serve
to run the mongo db
docker run -p 5000:27017 -it --name my_mongo_container my_mongo_image

You can acces to the app:

 http://localhost:4200/


