const express= require('express');
const router= express.Router();
const subjectMarksController=require('../../Controllers/subjectMarksController');

router.get('/',subjectMarksController.studentInfo);
router.post('/',subjectMarksController.handleNewUser);

module.exports= router; 