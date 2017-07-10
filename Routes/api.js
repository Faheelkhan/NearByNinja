const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')

//get list of ninjas from data base 
router.get('/ninjas',function(req,res,next){
// res.send({type:'GET'});
Ninja.geoNear(
    {type:'Point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
    {maxDistance:100000,spherical:true}
).then(function(ninjas){
    res.send(ninjas);
})
});

// add a new ninja from data base
router.post('/ninjas',function(req,res,next){
   //this method is node 
    // var ninja = new Ninja(req.body)
    // ninja.save();

    Ninja.create(req.body)
        .then(function(createdNinja){
           res.send(createdNinja)
        }).catch(next)

});

// update the ninja from data base
router.put('/ninjas/:id',function(req,res,next){
     Ninja.findByIdAndUpdate({_id :req.params.id},req.body).then(function(){
            Ninja.findOne({_id:req.params.id})
                .then(function(ninja){
                    res.send(ninja);
                })
     })
});

//delete ninja from data base
router.delete('/ninjas/:id',function(req,res,next){
    Ninja.findByIdAndRemove({_id :req.params.id})
        .then(function(res){
            res.send(ninja)
        })
// res.send({type:'DELETE'});
});

//get All Ninjas
router.get('/ninjas/getAll',function(req,res,next){
    Ninja.find({}).then(function(ninjas){
        res.send({data:ninjas});
    })

});

module.exports = router
