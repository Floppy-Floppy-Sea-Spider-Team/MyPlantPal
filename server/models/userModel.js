/**
 * ************************************
 *
 * @module userModel
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description The Scheme for the user models, and relevant data to be added to them
 *
 * ************************************
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

import Plant from './plantModel.js';

/**
 * @name userSchema
 * @description Schema for users
 * Requires a username and a password... plants will start out empty
 */
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plants: [{
    type: Schema.Types.ObjectId,
    ref: 'Plant'
  }],
})

const User = mongoose.model('User', userSchema);

export default User;
