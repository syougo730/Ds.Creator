const http = require('http');
const fs = require('fs');//file system
const hostname ='127.0.0.1';
const port = 3000;


var admin = require("firebase-admin");

var serviceAccount = require("serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");


/********************************
 login認証
*********************************/
// Add the Firebase products that you want to use
require("firebase/auth");
//var firebaseui = require('firebaseui');


/********************************
 DB接続
*********************************/
//require("firebase/firestore");

var fbase;
try{
    fbase = firebase.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
} catch(e){
    console.log(e);
}

/********************************
 DB接続
*********************************/
const { Firestore } = require('@google-cloud/firestore');
// Create a new client
const firestore = new Firestore();




const server = http.createServer(
    (req,res) => {
        fs.readFile('./public/index.html','UTF-8',
            (error,data)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        );
        
    }
)

server.listen(port, hostname, ()=>{
    console.log('Server running at http://'+hostname+':'+port+'/');
});
