const Tour = require('./../models/tourModel');

// Get All Tours
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });

  } catch (err) {
    res.status(200).json({
      status: 'fail',
      message: err
    });
  }
}

// Get a Specific Tour
exports.getTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });

  } catch (err) {
    res.status(200).json({
      status: 'fail',
      message: err
    });
  }
}

// Add a New Tour
exports.createTour = async (req, res) => {
  console.log('create tour');
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch(err)  {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

// Update a Specific Tour
exports.updateTour = async (req, res) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

// Delete a Specif Tour
exports.deleteTour = async (req, res) => {
  try {
    const { id } = req.params;

    await Tour.findByIdAndDelete(id);

    res.status(204).json({
      status: 'success',
      data: null
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}