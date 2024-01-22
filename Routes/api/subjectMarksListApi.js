const express= require('express');
const router= express.Router();
const subjectMarksListController=require('../../Controllers/subjectMarksListController');

router.post('/',subjectMarksListController.handleNewUser);

module.exports= router; 