const express = require('express');
// const app = require('../app');
const tourController = require('./../controllers/tourController');

// ROUTES
const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour); //chain two different middleware

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
