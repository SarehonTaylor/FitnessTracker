// bring in mongoodb const schema
const mongoose = require('mongoose');
//put everything for schema think mysql
const Schema = require mongoose.Schema;

const workoutSchema = new Schema ({
    day: type: Date,
    default: Date.now
},

exercises: [
{
    type: {
        type: String,
        trimL true,
        required: 'Enter a type"'
    }


]