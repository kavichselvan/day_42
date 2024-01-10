const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/books', booksRoute);
// app.use((req, res, next) => {
//     console.log("I'm a middleware!!");
//     next();//route
// })

mongoose.connect('mongodb+srv://kavich:kavichselvan@cluster0.xcywowq.mongodb.net/class?retryWrites=true&w=majority');

const con = mongoose.connection; //to get the connection status

try {
    con.on("open", () => {
      console.log("MongoDB connected!!!!");
    });
  } catch (error) {
    console.log("Error: " + error);
  }


app.get('/', (req, res) => {
    res.send("Hello GUVIB46!!! - from get method!!"); 
})

app.listen(4000);