const mongoose = require('mongoose');
const contacts = require('./routes/contacts');
const express = require('express');
const app = express();


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://ibneakram:..099009@test-phone.k8isfpu.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test-coder").collection("contacts");
//   console.log(collection);
//   console.log("err is ",err);
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect('mongodb+srv://ibneakram:..099009@test-phone.k8isfpu.mongodb.net/?retryWrites=true&w=majority/phonebook')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/contacts', contacts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));