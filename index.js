const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


// const routes = require('./Routes/api')
// set up express app
const app = express();

//connecting to dataBase MongoDB 
 mongoose.connect('mongodb://faheel:illusion.1@ds153392.mlab.com:53392/ninjas')
// mongoose.connect('mongodb://localhost/ninjago');
//mongoose Promise is depricated thats why we are over writing that promise
mongoose.Promise = global.Promise;

app.use(cors());
app.all('/*', callback);
function callback(eq, res, next){
 res.header("Access-Control-Alllow-Origin", "*");
 res.header("Access-Control-Alllow-Origin", "X-Requested-With");
next();
}


app.use(bodyParser.json())
//initalize api
app.use('/api',require('./Routes/api'));

// error handling middleware 
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
})

//listen for app
app.listen(process.env.port || 4000,function(){
    console.log('now listning for requests @ 4000' )
})