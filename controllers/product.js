const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  console.log("get products");
  Product.fetchAll()
    .then((products) => {
      res.send({
        products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addProduct = (req, res, next) => {
  console.log(req.body);
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(null, title, price, description);
  product
    .save()
    .then((result) => {
      console.log(result);
      console.log("Created Product");
      res.send({ message: "product created", product });
    })
    .catch((err) => {
      console.log(err);
    });
};
