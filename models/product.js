const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Product {
  constructor(id, title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  // save product object to db
  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // update
      dbOp = db
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      //create new
      dbOp = db.collection("products").insertOne(this);
    }

    return dbOp
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Get all products
  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        // console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
