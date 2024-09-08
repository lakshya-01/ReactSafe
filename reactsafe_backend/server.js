const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const Contactmodel = require('./models.js');

const app = express();
app.use(express.json());
app.use(cors());


try {
  mongoose.connect("mongodb+srv://Paresh:pareshjaisinghani@cluster0.rxwg4ag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
} catch(err) {
  console.log("error while connecting to mongodb"+err)
}
app.post('/contact', (req, res) => {
  Contactmodel.create(req.body)
    .then(contact => {
      res.json(contact);
    })
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running on PORT 3001");
});
