/**
 * ************************************
 *
 * @module apiRouter
 * @authors
 * @date
 * @description api router
 *
 * ************************************
 */

import express from 'express';

const apiRouter = express.Router();

import apiController from '../Controllers/apiController.js';

/**
 * @name apiRouter-GetPlantList
 * @description Gets the plant list from third-party API
 */

apiRouter.get('/plants', apiController.getPlantList, (req, res) => {
  return res.status(200).send(res.locals.plants);
})

/**
 * @name apiRouter-GetPlantInfo
 * @description Grabs plant information from third-party API
 */

apiRouter.get('/plants/:id', apiController.getPlantInfo, (req, res) => {
  return res.status(200).send(res.locals.plant);
})

export default apiRouter;
