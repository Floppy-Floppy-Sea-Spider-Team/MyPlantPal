/**
 * ************************************
 *
 * @module ApiController
 * @authors
 * @date
 * @description To receive and manipulate data from plant API
 *
 * ************************************
 */

import fetch from 'node-fetch';

const apiController = {};

/**
 * @name apiController-GetPlantList
 * @description Gets the plant list from third-party API
 */

apiController.getPlantList = async (req, res, next) => {
  try {
    const plantListURI = 'https://perenual.com/api/species-list?page=1&key=sk-Kmjg64e5170fef1611959';
    const response = await fetch(plantListURI);
    const plantList = await response.json();
    res.locals.plants = plantList;
    return next();
  } catch (err) {
    return next({
      log: 'apiController.getPlantList: ' + res.locals.plants,
      message: { err: 'ERROR: Cannot access list of plants' }
    })
  }
}

/**
 * @name apiController-GetPlantInfo
 * @description Grabs plant information from third-party API
 */

apiController.getPlantInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plantInfoURI = `https://perenual.com/api/species/details/${id}?key=sk-Kmjg64e5170fef1611959`
    const respons2 = await fetch(plantInfoURI);
    const plantInfo = await response.json();
    res.locals.plant = plantInfo;
    return next();
  } catch (err) {
    return next({
      log: 'apiController.getPlantInfo: ' + res.locals.data,
      message: { err: 'ERROR: Cannot access the requested plant' }
    })
  }
}

export default apiController;
