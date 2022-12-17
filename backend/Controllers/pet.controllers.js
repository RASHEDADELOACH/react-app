const Pet = require("../models/Pet");

exports.addPet = async (req, res) => {
  try {
    const check = await Pet.find({name: req.body.name})
    if(check.length > 0){
      res.status(400).json({
        message: "The name already exists",
        status: false
      })
    }else{
      const result = await Pet.create(req.body);
    console.log(result);
    res.status(200).json({
      status: true,
      message: "Data inserted successfully",
      data: result,
    });
    }
    
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err,
    });
  }
};

exports.getAllPetsAdopted = async (req, res) => {
  try {
    console.log("Hello");
    const result = await Pet.find({ adopted: true });
    res.status(200).json({
      status: true,
      message: "Data fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err,
    });
  }
};
exports.getAllPets = async (req, res) => {
  try {
    const result = await Pet.find({ adopted: false });
    const sortedResult = result.sort((a,b)=> a.type.localeCompare(b.type))
    res.status(200).json({
      status: true,
      message: "Data fetched successfully",
      data: sortedResult,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err,
    });
  }
};
exports.getPetDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Pet.findById(id);

    res.status(200).json({
      status: true,
      message: "Data fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err,
    });
  }
};

module.exports.updateAdopted = async (req, res) => {
  try {
    const id = req.params.id;
    const updateDoc = req.body;
    const result = await Pet.findByIdAndUpdate(id, updateDoc);

    res.status(200).json({
      status: true,
      message: "Data updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err,
    });
  }
};

module.exports.updatePet = async (req, res) => {
  try {
    const id = req.params.id;
    const updateDoc = req.body;
    const result = await Pet.findByIdAndUpdate(id, updateDoc);

    res.status(200).json({
      status: true,
      message: "Data updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err,
    });
  }
};

module.exports.deletePet = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Pet.findByIdAndDelete(id);
  
      res.status(200).json({
        status: true,
        message: "Data deleted successfully",
        data: result,
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        message: err,
      });
    }
  };
