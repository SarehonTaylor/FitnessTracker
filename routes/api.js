const router = require('express').Router()
const Workout = require('../models/workout.js')


//post
router.post('/api/workouts',(req,res)=> {
    Workout.create({
       })
       .then((dbworkout)=>{
       res.json(dbworkout)    
       })
       .catch((err)=>{
           res.json(err)
       })
})

//put


// get route 1

// get route 2


// delete route