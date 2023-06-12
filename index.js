const express = require('express');
const app = express();
const mongoose= require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

const { result } = require('lodash');
const { render } = require('ejs');
const port = 5000;

//connect to mongodb
const dbURI = 'mongodb+srv://sakib:J6sVzB4S1twbtff1@cluster0.vfnkcgm.mongodb.net/nodetutes?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser:true, useUnifiedTopology:true })
.then((result) => {
  console.log('connection to db')
}).catch((err) => console.log(err));
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));


app.get('/', (req, res) => {
  res.redirect('/blogs');
});


app.get('/about', (req, res) => {
  res.render('about');
});

app.use('/blogs',blogRoutes);



app.use((req, res) => {
  res.status(404).render('404');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
