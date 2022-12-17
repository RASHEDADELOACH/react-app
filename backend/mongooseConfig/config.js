const mongoose = require("mongoose")
const dbConnection = () =>{
    mongoose.connect(
        process.env.ATLAS_URI,
        {
                useNewUrlParser: true,
                useUnifiedTopology: true,
             
        }
    ).then(db => console.log("Connected sucessfully "))
    .catch(err => console.log(err))
}
module.exports = dbConnection;