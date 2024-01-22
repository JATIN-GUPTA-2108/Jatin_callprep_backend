
const express = require('express')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose');


const dbconnect= async () => {
    
    try {
        await mongoose.connect(process.env.DATABASE_URI).then(()=>{
            console.log('connected to db');

        });
        
    } catch (err) {
        console.error(err);
    }
}

module.exports = dbconnect