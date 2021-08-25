const express = require('express');
const app = express();
const path = require('path');
const data = require('./data/notes.data');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"));

// GET REQUEST
app.get('/', (req, res) => {
  // res.send('Hello World');
  res.render('index', {
    notes: data
  })
})


// ****** SERVER ********************************
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}......`)
});