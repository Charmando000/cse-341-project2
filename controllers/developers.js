const Developer = require('../models/Developer');

const getAllDevelopers = async (req, res) => {
  try {
    const developers = await Developer.find();

    res.status(200).json(developers);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getSingleDeveloper = async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);

    if (!developer) {
      return res.status(404).json({
        message: 'Developer not found'
      });
    }

    res.status(200).json(developer);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createDeveloper = async (req, res) => {
  try {
    const developer = new Developer(req.body);

    const savedDeveloper = await developer.save();

    res.status(201).json(savedDeveloper);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const updateDeveloper = async (req, res) => {
  try {
    const updatedDeveloper = await Developer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedDeveloper) {
      return res.status(404).json({
        message: 'Developer not found'
      });
    }

    res.status(200).json(updatedDeveloper);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteDeveloper = async (req, res) => {
  try {
    const deletedDeveloper = await Developer.findByIdAndDelete(req.params.id);

    if (!deletedDeveloper) {
      return res.status(404).json({
        message: 'Developer not found'
      });
    }

    res.status(200).json({
      message: 'Developer deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllDevelopers,
  getSingleDeveloper,
  createDeveloper,
  updateDeveloper,
  deleteDeveloper
};