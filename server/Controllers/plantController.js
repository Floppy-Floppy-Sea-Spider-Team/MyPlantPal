/**
 * ************************************
 *
 * @module PlantController
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Source of controllers for editing and changing state of individual plant cards
 *
 * ************************************
 */

import Plant from '../models/plantModel.js';
import User from '../models/userModel.js';

const plantController = {};

/**
 * @name plantController.getPlants
 * @description Grabs plant information from the database
 */
plantController.getPlants = async (req, res, next) => {
  try {
    const data = await Plant.find({user: res.locals.id})
    res.locals.data = data;
    return next();
  } catch (err) {
    return next ({
      log: `plantController.getPlants ERROR : ${err}`,
      message : {
        err : 'plantController.getPlants ERROR wrong input'
      }
    })
  }
}

/**
 * @name plantController.createPlant
 * @description Creates plant using information and adds to MongoDB
 */
plantController.createPlant = async (req, res, next) => {
  console.log('Creating plant...');
  try {
    const { body } = req;

    body.user = res.locals.id;
    console.log('body', body)
    const data = await Plant.create(body);
    console.log('data', data)
    res.locals.data = data;

    const plantId = data.id;
    const user = await User.findById(data.user);
    user.plants.push(plantId);
    await user.save();
    return next();
  }
  catch(err) {
    return next({
      log: `plantController.createPlant ERROR : ${err}`,
      message : {
        err : 'plantController.createPlant ERROR wrong input'
      }
    })
  }
}

/**
 * @name plantController.deletePlant
 * @description Grabs the plant based on the name and deletes it from the Mongo DB database
 * TODO: works on postman, currently not connected to front end,
 */
plantController.deletePlant = async (req, res, next) => {
  try {
    const { name } = req.body;
    const plant = await Plant.findOneAndDelete({name: name});
    return next();
  } catch (err) {
    return next({
      log: `plantController.deletePlant ERROR : ${err}`,
      message : {
        err : 'plantController.deletePlant ERROR'
      }
    })
  }
}

/**
 * @name plantController.updatePlant
 * @description gets plant information and modifies it in MongoDB
 * TODO:
 */
plantController.updatePlant = async (req, res, next) => {
  try {

    return next();
  } catch (err) {
    return next({
      log: `plantController.updatePlant ERROR : ${err}`,
      message : {
        err : 'plantController.updatePlant ERROR'
      }
    })
  }
}

export default plantController;
