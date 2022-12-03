const { ObjectId } = require("mongodb");
const { getDb } = require("../Utils/dbConnect");

module.exports.getAllAuthors = async (req, res) => {
    // Use "async" when something will take long to render so the coding can continue to load below this line.
    const db = getDb();
    const authorCollection = db.collection('authors');
    const query = {};
    // Searches Parameters for spefic groups
    const cursor = authorCollection.find(query);
    // Cursor Finds data based on query
    const result = await cursor.toArray();
    // displays what the cursor could find out of the query to display as an array.
    res.send(result)
    // displays results

}
module.exports.getSingleAuthor = async (req, res) => {
    const db = getDb();
    const authorCollection = db.collection('authors');
    const id = req.params.id
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        // it's an ObjectID 
        const query = { _id: ObjectId(id) };
        // Searches Parameters for spefic groups
        const cursor = authorCollection.find(query);
        // Cursor Finds data based on query
        const result = await cursor.toArray();
        // displays what the cursor could find out of the query to display as an array.
        res.send(result)
    } else {
        // nope   
        res.status(403).send({ message: "error" })
    }

}

module.exports.addAuthor = async (req, res) => {
    const db = getDb();
    const authorCollection = db.collection('authors');
    const author = req.body;
    //    Creates information into the body
    const result = await authorCollection.insertOne(author)
    //    Inserted it into the Collection
    res.send(result)
    // displays results
}

module.exports.deleteAuthor = async (req, res) => {
    const db = getDb();
    const authorCollection = db.collection('authors');
    const id = req.params.id;

    // it's an ObjectID 
    const query = { _id: ObjectId(id) }
    //    Finds Specific Parameter, in the case the "id"
    const result = await authorCollection.deleteOne(query)
    //    Inserted it into the Collection
    res.send(result)
    // displays results  

}

module.exports.updateAuthor = async (req, res) => {
    const db = getDb();
    const authorCollection = db.collection('authors');
    const id = req.params.id;
    // Finds Specific Parameter, in the case the "id"
    const data = req.body;
    // Sending the updated data to the body of the DB
    const filter = { _id: ObjectId(id) }
    // Filer, looks for the specific id within the DB
    const options = { upsert: true } // if the id is found/true within the DB, update+insert
    const updatedData = { $set: data } // setting the updated data within the DB
    const result = await authorCollection.updateOne(filter, updatedData, options) //this tells us to update the speific parameters
    res.send(result) //displays results
}