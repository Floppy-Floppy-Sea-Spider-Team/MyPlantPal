/**
 * ************************************
 *
 * @module userController
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Controls authenticating and tracking user details and passwords
 *
 * ************************************
 */

import cookieParser from 'cookie-parser';
import User from '../models/userModel.js';

const userController = {};

/**
 * @name userController.login
 * @description Takes input user info and tries to match it up to MongoDB
 * If successful, set id and success true
 * If not successful, set success false
 */
userController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const data = await User.find({ username: username });
    if (data[0].password === password) {
      res.locals.id = data[0].id;
      res.locals.success = true;
      return next();
    } else {
      res.locals.success = false;
      return next();
    }
  } catch (err) {
    return next({
      log: `userController.login ERROR : ${err}`,
      message: {
        err: 'userController.login ERROR wrong input',
      },
    });
  }
};

/**
 * @name userController.createUser
 * @description Creates a user and adds them to MongoDB
 */
userController.createUser = async (req, res, next) => {
  try {
    console.log('request :', req.body);
    const { username, password } = req.body;
    const data = await User.create({ username: username, password: password });
    res.locals.data = data;
    console.log('response :', res.locals.data);
    return next();
  } catch (err) {
    return next({
      log: `userController.createUser ERROR : ${err}`,
      message: {
        err: 'userController.createUser ERROR wrong input',
      },
    });
  }
};

/**
 * @name userController.setSSIDCookie
 * @description Creates a cookie with the users ID
 */
userController.setSSIDCookie = async (req, res, next) => {
  try {
    res.cookie('id', res.locals.id, { httpOnly: true });
    return next();
  } catch (err) {
    return next({
      log: `userController.setSSIDCookie ERROR : ${err}`,
      message: {
        err: 'userController.setSSIDCookie ERROR',
      },
    });
  }
};

/**
 * @name userController.getSSIDCookie
 * @description Retrieves the user's SSID cookie and saves it to res.locals.id
 */
userController.getSSIDCookie = async (req, res, next) => {
  try {
    const SSID = req.cookies.id;
    res.locals.id = SSID;
    return next();
  } catch (err) {
    return next({
      log: `userController.getSSID ERROR : ${err}`,
      message: {
        err: 'userController.getSSID ERROR',
      },
    });
  }
};

/**
 * @name userController.deleteUser
 * @description retrieves the user id and removes it from MongoDB
 * TODO:
 */
userController.deleteUser = async (req, res, next) => {};

/**
 * @name userController.updateUser
 * @description retrieves user information and updates MongoDB
 * TODO:
 */
userController.updateUser = async (req, res, next) => {};

export default userController;
