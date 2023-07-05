const express = require('express')
const { createWorkout,getWorkouts,getSingleWorkout,deleteWorkout,updateWorkout } = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')


const router = express.Router();

// require auth for all workout routes
router.use(requireAuth)

// GET all wourkouts
router.get('/', getWorkouts)


// Get a single workout
router.get('/:id', getSingleWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router;