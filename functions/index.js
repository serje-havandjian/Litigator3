const functions = require('firebase-functions');
const express = require('express');
const app = express();



const cors = require('cors')({origin: true});
app.use(cors);




app.get('/', (req, res) => {


 res.send([
   {
       "id": 1,
       "title": "Jeff vs. State of Kentucky",
       "trialDate": "5/27/23",
       "jurisdiction": {
           "id": 1,
           "name": "Los Angeles"
       },
       "opposingCounsels": [
           {
               "id": 1,
               "name": "Clark Hill LLP"
           }
       ]
   },
   {
       "id": 2,
       "title": "Serje vs. Sioux City, Iowa",
       "trialDate": "1/25/25",
       "jurisdiction": {
           "id": 1,
           "name": "Los Angeles"
       },
       "opposingCounsels": [
           {
               "id": 1,
               "name": "Clark Hill LLP"
           }
       ]
   },
   {
       "id": 3,
       "title": "Serje vs. Sioux Falls, South Dakota",
       "trialDate": "3/17/24",
       "jurisdiction": {
           "id": 2,
           "name": "Bogota"
       },
       "opposingCounsels": [
           {
               "id": 2,
               "name": "Gibson Dunn"
           }
       ]
   },
   {
       "id": 4,
       "title": "Jeff vs. Oregon, Missouri",
       "trialDate": "10/27/26",
       "jurisdiction": {
           "id": 3,
           "name": "Dallas"
       },
       "opposingCounsels": [
           {
               "id": 3,
               "name": "Blank & Rome LLP"
           }
       ]
   },
   {
       "id": 5,
       "title": "Jeff vs. State of Kentucky",
       "trialDate": "5/27/23",
       "jurisdiction": {
           "id": 1,
           "name": "Los Angeles"
       },
       "opposingCounsels": [
           {
               "id": 1,
               "name": "Clark Hill LLP"
           }
       ]
   },
   {
       "id": 6,
       "title": "Serje vs. Sioux City, Iowa",
       "trialDate": "1/25/25",
       "jurisdiction": {
           "id": 1,
           "name": "Los Angeles"
       },
       "opposingCounsels": [
           {
               "id": 1,
               "name": "Clark Hill LLP"
           }
       ]
   },
   {
       "id": 7,
       "title": "Serje vs. Sioux Falls, South Dakota",
       "trialDate": "3/17/24",
       "jurisdiction": {
           "id": 2,
           "name": "Bogota"
       },
       "opposingCounsels": [
           {
               "id": 2,
               "name": "Gibson Dunn"
           }
       ]
   },
   {
       "id": 8,
       "title": "Jeff vs. Oregon, Missouri",
       "trialDate": "10/27/26",
       "jurisdiction": {
           "id": 3,
           "name": "Dallas"
       },
       "opposingCounsels": [
           {
               "id": 3,
               "name": "Blank & Rome LLP"
           }
       ]
   },
   {
       "id": 9,
       "title": "Serje vs. Sioux City, Iowa",
       "trialDate": "1/25/25",
       "jurisdiction": {
           "id": 1,
           "name": "Los Angeles"
       },
       "opposingCounsels": [
           {
               "id": 1,
               "name": "Clark Hill LLP"
           }
       ]
   },
   {
       "id": 10,
       "title": "Serje vs. Sioux Falls, South Dakota",
       "trialDate": "3/17/24",
       "jurisdiction": {
           "id": 2,
           "name": "Bogota"
       },
       "opposingCounsels": [
           {
               "id": 2,
               "name": "Gibson Dunn"
           }
       ]
   },
   {
       "id": 11,
       "title": "Jeff vs. Oregon, Missouri",
       "trialDate": "10/27/26",
       "jurisdiction": {
           "id": 3,
           "name": "Dallas"
       },
       "opposingCounsels": [
           {
               "id": 3,
               "name": "Blank & Rome LLP"
           }
       ]
   }
]);
});


app.get('/deadlines', (req, res) => {


   res.send([
     {
         "id": 1,
         "title": "Responsive Pleading Due"
     },
     {
       "id": 2,
       "title": "Discovery Responses Due"
   },
   {
       "id": 3,
       "title": "Date of Deposition"
   }
 ]);
 });


 app.get('/milestones', (req, res) => {


   res.send([
     {
         "id": 1,
         "title": "Analyze Complaint"
     },
     {
       "id": 2,
       "title": "Research Causes of Action and Grounds For Demurrer"
   },
   {
       "id": 3,
       "title": "Complete First Draft of Demurrer"
   },
   {
       "id": 4,
       "title": "Provide Demurrer To Partner"
   },
   {
       "id": 5,
       "title": "Provide Demurrer To Client"
   },
   {
       "id": 6,
       "title": "Finalize Request For Judicial Notice, Client Declaration, And Other Related Documents"
   },
   {
       "id": 7,
       "title": "File And Serve Demurrer"
   }
 ]);
 });


 app.get('/altMilestones', (req, res) => {


   res.send([
     {
         "id": 1,
         "title": "Request Extension From Opposing Counsel"
     },
     {
       "id": 2,
       "title": "File Ex Parte Motion To Extend Responsive Pleading Deadline"
   },
   {
       "id": 3,
       "title": "File Answer and Move For Judgment On The Pleadings"
   }
 ]);
 });





 exports.app = functions.https.onRequest(app);


// const loginRouter = require('./login');
// app.use('/api/login', loginRouter);


