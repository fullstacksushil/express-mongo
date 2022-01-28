App Deployed on Heroku https://express-mongo-getir.herokuapp.com
## The Challenge
Create a RESTful API with a single endpoint that fetches the data in the
provided MongoDB collection and return the results in the requested format.

## Requirements
 * The code should be written in Node.js using express framework
 * The endpoint should just handle HTTP POST requests.
 * The application should be deployed on AWS or Heroku. You don’t need to use any API Gateway, Load Balancers or any other layer than the developed application.
 * The up to date repo should be publicly available in Github, Bitbucket or equivalent.

## Instruction
 * This app uses dotenv file for configuration.create a .env file with DB_HOST config vars

```console
node app.js
```


### Get all Products

```console
curl -X POST -H "Content-Type: application/json" https://express-mongo-getir.herokuapp.com/products
```

### Add new Product

```console
curl -X POST -H "Content-Type: application/json" --data-raw '{
  "title": "Huawei p1",
  "price": 12000,
  "description": "old phone"
}' https://express-mongo-getir.herokuapp.com/addproduct
```
