const express = require("express");

const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

const dbConnect = require("./utlis/dbConnect");

const usersRoutes = require('./routes/v1/users.routes');

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

dbConnect();

app.use('/user', usersRoutes);

app.all('*', (req, res) => {

  res.send('NO ROUTE FOUND');

})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`);

});


