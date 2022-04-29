const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(bodyParser.json({ type: 'application/json' }))

const PORT = process.env.PORT || 3001;

const uri =
  "mongodb+srv://confledis:1234@cluster0.sd33g.mongodb.net/confledis?retryWrites=true&w=majority";

mongoose.connect(uri).then(()=> {
  console.log("database is connected")
}).catch(err => {
  console.log(console.log(err))
});

/*mongoose.connect("mongodb://127.0.0.1:27017/confledisDB").then(()=> {
mongoose.connect("mongodb://database_service/confledisDB").then(()=> {
  console.log("database is connected")
}).catch(err => {
  console.log(console.log(err))
});*/

app.listen(PORT, function(){
  const today = new Date()
  console.log("Server started on port "+PORT+" "+today);
})


const produitRoute = require("./routes/produit.route")


const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/product", produitRoute);