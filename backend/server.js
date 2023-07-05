const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/users')
const mongoose = require('mongoose');
const app = express()

// middleware
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
app.use(express.json())



// routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)



// connect to db
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => {
    // listening
    app.listen(process.env.PORT, ()=>{
        console.log('connected to db AND backend listening on port');
    })
 })
 .catch((err) => {
    console.log(err);
 })


