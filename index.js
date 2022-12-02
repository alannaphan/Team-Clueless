// This is the start of your backend server. We will write server side code here

//this is a node package that will help us create a server
const express = require("express");
//this node package will allow you to read and write to files
const fs = require("fs");
//filename of likes database
const dbPath = "./likes.json";
const file = require(dbPath);
//this is the main app. Apps can get complicated. For now, think of it as a place to store your routes
const app = express();

//this is the port we are going to listen on. Backend programs listen on ports to get information from other computers
const PORT = 8000;

/**
 * This is a route. Routes help the computer understand what the user is trying to access.
 * 
 * For example, if the user makes a GET request to "/" (which we learn later is http://localhost:8000/),
 * the computer will run the function beside it. 
 */
app.get("/", function(req, res) {
    //`res` is an object with methods. The `json` method allows us to send information back to users in the form of json
    res.setHeader("Access-Control-Allow-Origin", "*") //don't worry about this, just a security thing to allow us to test without problems. If you are curious; CORS is the term to look up.
    res.json({
        ping: "pong"
    })
})

/**
 * Returns the animal names and likes from database and sorts them based on number of likes
 */
app.get("/likes", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*") //don't worry about this, just a security thing to allow us to test without problems. If you are curious; CORS is the term to look up.
    
    // read data from json database. Send error if fail
    fs.readFile(dbPath, (err, jsonString) => {
        if (err) {
            console.log("File read failed:" + err);
            res.sendStatus(500);
        }

        const data = JSON.parse(jsonString);
        const likedAnimals = data.LikedAnimals;

        // sort the likedAnimals array based on likes
        const sorted = likedAnimals.sort((a, b) => b.likes - a.likes);
        console.log(sorted);
        res.send(sorted);

    })
});

/**
 * Increases the number of liked of animalName by 1
 */
app.post("/api/like/:animalName", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // retrieves the value of path parameter animalName
    const animalName = req.params.animalName;

    // loop through the objects in the LikedAnimals array and increase likes by 1
    file.LikedAnimals.forEach(i => {
        if(i.name === animalName) {
            i.likes += 1;
        }
    });

    // write changes to the JSON database
    fs.writeFile(dbPath, JSON.stringify(file), function writeJSON(err) {
        if (err) {
            res.sendStatus(500);
        }
        console.log(JSON.stringify(file));
        res.send(JSON.stringify(file));
    })
})

/*
 * Remember how before I talked about listening on a port? We do that here. Our app "pauses" and waits for requests to come in.
 * 
 * These requests can be from browsers, other computers in the cloud, or even your fridge!
 */
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})