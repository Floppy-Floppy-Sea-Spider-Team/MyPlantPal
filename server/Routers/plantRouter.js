/**
 * ************************************
 *
 * @module plantRouter
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description plant router
 *
 * ************************************
 */

import express from 'express';

const plantRouter = express.Router();

import plantController from '../Controllers/plantController.js';
import userController from '../Controllers/userController.js';

/**
 * @name PlantRouter-GetPlant
 * @description Gets the Plant information from data base based on user (cookies)
 */
plantRouter.get('/getplants', userController.getSSIDCookie, plantController.getPlants, (req, res) => {
  return res.status(200).send(res.locals.data);
})

/**
 * @name PlantRouter-CreatePlant
 * @description Grabs plant information from UI based on user and creates a plant and uploads to MongoDB
 */
plantRouter.post('/createplant', userController.getSSIDCookie, plantController.createPlant, (req, res) => {
  return res.status(200).send('Plant added');
})

/**
 * @name PlantRouter-UpdatePlant
 * @description Gets the plant information and lets the user modify certain parts of the plant information
 * Send that information back as a patch
 * TODO:
 */
plantRouter.patch('', plantController.updatePlant, (req, res) => {
  return res.status(400)
})

/**
 * @name PlantRouter-deletePlant
 * @description User identifies what plant to find and deletes its from the datahbase
 */
plantRouter.delete('/deleteplant', userController.getSSIDCookie, plantController.deletePlant,  plantController.getPlants, (req, res) => {
  return res.status(200).send(res.locals.data);
})

export default plantRouter;
