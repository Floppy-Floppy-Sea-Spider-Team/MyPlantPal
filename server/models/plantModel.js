/**
 * ************************************
 *
 * @module plantModel
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description The Schema for the plants themselves and what data to be added to them
 *
 * ************************************
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

import User from './userModel.js';

/**
 * @name plantSchema
 * @description Schema for plants
 * requires a name... currently name, type, and user works;
 * TODO: add funcitonality to other parts of Schema
 *  Plants are currently UNIQUE per DATABASE... Goal -> Unique per User
 *  Photos need to be added... type is NOT Image
 */
const plantSchema = new Schema({
  name: { type: String, required: true, unique: true },
  species: { type: String },
  lastWatered: { type: String },
  frequency: { type: Number },
  cycle: {type: String},
  lastPotted: { type: String },
  sunlight: { type: String },
  photo: { type: String },
  // dateAdded: { type: String },
  user: {
    type : Schema.Types.ObjectId,
    ref: 'User',
    required : true
  }
})

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;
