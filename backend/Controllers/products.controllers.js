const { getDb } = require("../Utils/dbConnect");
const jwt = require('jsonwebtoken');
const { ObjectId } = require("mongodb");
module.exports.getAllProducts = async (req, res) => {
    const db = getDb();
    const productCollection = db.collection('products');
    const query = {};
    const cursor = productCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
}
module.exports.getSingleProduct = async (req, res) => {
    const db = getDb();
    const productCollection = db.collection('products');
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const cursor = productCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
}
module.exports.deleteProduct = async (req, res) => {
    const db = getDb();
    const productCollection = db.collection('products');
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const result= productCollection.deleteOne(query);
    res.send(result);
}
module.exports.updateProduct = async (req, res) => {
    const db = getDb();
    const productCollection = db.collection('products');
    const id = req.params.id;
    const data = req.body;
    const filter = { _id: ObjectId(id) };
    const options = { upsert: true };
    const updateDoc = {
        $set: data
    };
    const result = await productCollection.updateOne(filter, updateDoc, options);
    res.send(result);
};
module.exports.addProduct = async (req, res) => {
    const db = getDb();
    const productCollection = db.collection('products');
    const product = req.body;
    const result = await productCollection.insertOne(product)
    res.send(result);
};