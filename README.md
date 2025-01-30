# COMP3133 Restaurant Lab

This project is a REST API for managing restaurant data using Node.js, Express, and MongoDB.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/oHastee/Comp3133_Restaurant_Lab.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Comp3133_Restaurant_Lab
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and configure your MongoDB connection.
5. Seed the database:
   ```sh
   node seed.js
   ```
6. Start the server:
   ```sh
   npm start
   ```

The server should now be running on `http://localhost:3000`.

## API Endpoints

### Week 4

#### Get All Restaurants
```http
GET http://localhost:3000/restaurants
```
Returns a list of all restaurants.

#### Get Restaurants by Cuisine
```http
GET http://localhost:3000/restaurants/cuisine/Japanese
GET http://localhost:3000/restaurants/cuisine/Bakery
GET http://localhost:3000/restaurants/cuisine/Italian
```
Returns a list of restaurants filtered by cuisine type.

#### Get Restaurants Sorted
```http
GET http://localhost:3000/restaurants?sortBy=ASC
GET http://localhost:3000/restaurants?sortBy=DESC
```
Returns a list of restaurants sorted in ascending or descending order by name.

#### Get a Specific Restaurant
```http
GET http://localhost:3000/restaurants/Delicatessen
```
Returns a restaurant matching the name "Delicatessen".

## Future Weeks
We will be adding more features and endpoints in weeks 5 and 6.

## License
This project is licensed under the ISC License.

## Author
Developed by Oscar Piedrasanta Diaz

