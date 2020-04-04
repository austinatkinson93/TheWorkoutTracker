const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now()
  }, 
  exercises: [
      {
        type: {
            type: String,
            required: "Type is required"
        },
        name: {
            type: String,
            required: "Name is required"
        },
        duration: {
            type: Number,
            required: "Duration is required"
        },
        weight: Number,
        sets: Number,
        reps: Number,
        distance: Number,
      }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;