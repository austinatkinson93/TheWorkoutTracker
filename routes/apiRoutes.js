var express = require("express");
var router = express.Router();
const db = require("../models");

router.get("/workouts", (req, res)=>{
    db.Workout.find({})
        .then(response=>{
            res.json(response)
        })
        .catch(err => {
            res.json(err);
          });
});

router.post("/workouts", (req, res)=>{
    db.Workout.create(req.body)
        .then(response=>{
            res.json(response)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/workouts/:id", (req, res)=>{
    db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: req.body } })
        .then(response=>{
            res.json(response)
        })
        .catch(err => {
            res.json(err);
        });
})

module.exports = router;