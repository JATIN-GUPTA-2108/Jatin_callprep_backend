require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT
const dbConnect=require('./Config/dbConnect')


dbConnect();
app.use(express.json());


app.use('/getSudentDetails',require('./Routes/api/getAllStudentsApi'))
app.use('/subjectMarks',require('./Routes/api/subjectMarksApi'))
app.use('/subjectMarksLi',require('./Routes/api/subjectMarksListApi'))




mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
}); 