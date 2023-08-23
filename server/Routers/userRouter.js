/**
 * ************************************
 *
 * @module userRouter
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description user Router
 *
 * ************************************
 */

import express from 'express';

const userRouter = express.Router();

import userController from '../Controllers/userController.js';
import plantController from '../Controllers/plantController.js';

/**
 * @name userRouter.get
 * @description Takes login data and sends to userController.login express middleware to verify authenticity
 * If authentic, sets an SSID cookie and then gets plants.
 */
userRouter.post('/login', userController.login, userController.setSSIDCookie, plantController.getPlants, (req, res) => {
  if (res.locals.success) {
    return res.status(200).send(res.locals.data);
  }
  else {
    return res.status(400).send('Unsuccessful Login.');
  }
});

/**
 * @name userRouter.post
 * @description Sends a post request to create a user and add to MongoDB
 */
userRouter.post('/createUser', userController.createUser, (req, res) => {
  return res.status(200).send('User created. Please log in.');
});

/**
 * @name userRouter.patch
 * @description sends a patch request with a new password.. updates new password in database
 * TODO:
 */
userRouter.patch('/updateUser', userController.updateUser, (req, res) => {
  return res.status(400);
});

/**
 * @name userRouter.delete
 * @description sends a delete request to delete a user... removes the user from database
 * TODO:
 */
userRouter.delete('/deleteUser', userController.deleteUser, (req, res) => {
  return res.status(400);
});

export default userRouter;
