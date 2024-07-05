# E-commerce API

This is an E-commerce API built with Node.js, Express, and MongoDB. The API allows for managing products and creating orders with inventory management.

## Features

- **Product Management**: Create, read, update, and delete products.
- **Order Management**: Create orders and update inventory.
- **Inventory Management**: Automatically check and update inventory when orders are placed.
- **Error Handling**: Custom error handling for routes and validation.

## API Endpoints

### Create a New Order

**Endpoint**: `/api/orders`  
**Method**: `POST` 

### Retrieve a List of All Products
**Endpoint**:`/api/products`
**Method**: `GET`.

### Retrieve a Specific Product by ID

**Endpoint**: `/api/products/:productId`
**Method**: `GET`

### Update Product Information

**Endpoint**: `/api/products/:productId`
**Method**: `PUT`

### Delete a Product

**Endpoint**: `/api/products/:productId`
**Method**: `DELETE`

 ### Search a product
 
**Endpoint**: `/api/products?searchTerm=iphone`
**Method**: `GET`


## Order Management API Endpoints
### Create a New Order

*Endpoint*: `/api/orders`
**Method**: `POST`

### Retrieve All Orders
**Endpoint**: `/api/orders`
*Method*: `GET`

### Retrieve Orders by User Email
**Endpoint**: `/api/orders?email=level2@programming-hero.com`
**Method**: `GET`


## Clone the repository
git clone https://github.com/your-username/ecommerce-api.git
cd ecommerce-api
npm install

## Set up environment variables
1.create .env


