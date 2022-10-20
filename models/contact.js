const Joi = require('joi');
const mongoose = require('mongoose');

const Contact = mongoose.model('Contact', new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  lname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

function validateContact(contact) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(contact, schema);
}

exports.Contact = Contact; 
exports.validate = validateContact;