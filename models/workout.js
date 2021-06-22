// bring in mongoodb const schema
const mongoose = require('mongoose');
//put everything for schema think mysql
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: type: Date,
    default: Date.now
},

exercises: [
{
    type: {
        type: String,
        trim: true,
        required: 'Enter a type'
    },
    name: {
        type: String,
        trim: true,
        required: 'Enter a name for your exercise'
    },
    distance: {
        type: Number,
        required: 'Enter a distance'
    },
    duration: {
        type: Number,
        required: 'Enter an amount'
    },
    weight: {
        type: Number,
        required: 'Enter a type'
    },
    reps: {
        type: Number,
        required: 'Enter an amount'
    },
    sets: {
        type: Number,
        required: 'Enter an amount'
            }
        },
    ]
});
    
const Workout = mongoose.model('Workout', workoutSchema);


module.exports = Workout