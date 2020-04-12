const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
//const gcs = require('@google-cloud/storage')();
//const os = require('os');
//const path = require('path');
//const spawn = require('child-process-promise').spawn;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// exports.onInputChange=functions.storage.object().onArchive(event=>{
//     console.log(event);
//     return;
//})

 exports.symptomsUpload = functions.https.onRequest((req, res) => {
     cors(req, res, () => {
        if(req.method !== 'POST'){
            return res.status(500).json({
                message: 'Not allowed'
            })
        }
        res.status(200).json({
            message: 'Hat geklappt'
        })
     })
 });