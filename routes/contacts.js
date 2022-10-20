const {Contact, validate} = require('../models/contact'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const contacts = await Customer.find().sort('fname');
  res.send(contacts);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let contact = new Contact({ 
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone
  });
  contact = await contact.save();
  
  res.send(contact);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const contact = await Contact.findByIdAndUpdate(req.params.id,
    { 
      fname: req.body.fname,
      lname: req.body.lname,
      phone: req.body.phone
    }, { new: true });

  if (!contact) return res.status(404).send('The contact with the given ID was not found.');
  
  res.send(contact);
});

router.delete('/:id', async (req, res) => {
  const contact = await Contact.findByIdAndRemove(req.params.id);

  if (!contact) return res.status(404).send('The customer with the given ID was not found.');

  res.send(contact);
});

module.exports = router; 