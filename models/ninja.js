const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// "geometry": {
//     "type": "Point",
//     "coordinates": [125.6, 10.1]
//   }
const GeoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})


//create ninja schema   
const ninjaSchema = new Schema({
    name :{
        type: String,
        required:[true,'name feild is required']
    },
    rank:{
        type: String
    },
    available:{
        type :Boolean,
        default:false
    },
    geometry:GeoSchema,

// add in geoLocation
});
const Ninja = mongoose.model('ninja',ninjaSchema); 

module.exports = Ninja;