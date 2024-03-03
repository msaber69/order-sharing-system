### Project Description

This project is an online order management system designed to facilitate ordering and payment processes for customers at a Bowling Park. It allows customers to choose, order, and pay for items from a catalog of products, with options for individual or group payments. The system also provides management capabilities for catalog/order managers (agents) to add, update, and remove products from the catalog.

### Architecture diagram

![alt text](<Screenshot 2024-03-03 at 19.32.00.png>)

### Features

- **Product Catalog Management**: Agents can manage the product catalog by adding, updating, and removing products.
- **Order Placement**: Customers can select products from the catalog, place orders, and choose payment options.
- **QR Code Integration**: Each bowling alley has a unique QR code, which customers can scan to initiate orders and sessions.
- **Payment Options**: Customers can choose between different payment options, including individual, group, or specific amount payments.
- **Concurrency Management**: The system handles concurrency between payment sessions to prevent conflicts.
- **Payment Gateway Integration**: Integration with an external payment gateway (Stripe) for processing payments securely.
- **Order Notifications**: Notifications are sent to update customers on remaining amounts and payment statuses.
- **Scalability**: The system is designed to handle orders during peak times efficiently.
- **Receipts and Invoices**: Receipts and invoices are generated and sent to customers via email upon successful payment.

### Installation

To run the application on your local machine, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/msaber69/order-sharing-system.git
   cd order-sharing-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   - Create a `.env` file in the root directory.
   - Define environment variables such as database connection details, Stripe API key, and other configurations.

4. **Run the Application**:
   ```bash
   cd backend/src
   ts-node server.ts
   ```

5. **Access the Application**:
   Open a web browser and navigate to `http://localhost:3000`.

### Postman Collection

To test the implemented services using Postman, follow these steps:

1. **Download Postman**: If you haven't already, download and install Postman from [the official website](https://www.postman.com/downloads/).

2. **Import Postman Collection**: Import the provided Postman collection file (/order-sharing-system/postman Project/Order-Sharing-System Collection.postman_collection.json) containing pre-configured requests to call the implemented services.

3. **Configure Environment Variables**: Set up environment variables in Postman for base URLs and other configurations needed to make requests.

4. **Execute Requests**: Run the requests in the Postman collection to test the functionality of the implemented services.

### Endpoints

Below are some of the endpoints available in the application:

- **GET /products**: Get a list of all products in the catalog.
- **POST /orders**: Place a new order.
- **GET /orders/:orderId**: Get details of a specific order by order ID.
- **POST /payments**: Initiate a payment process for an order.
- **POST /notifications**: Receive notifications about order updates and payment statuses.

Refer to the provided Postman collection for more details on available endpoints and request payloads.

