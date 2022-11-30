// This is the start of your backend server. We will write server side code here

//this is a node package that will help us create a server
const express = require("express")

//this is the main app. Apps can get complicated. For now, think of it as a place to store your routes
const app = express()

//this is the port we are going to listen on. Backend programs listen on ports to get information from other computers
const PORT = 8000

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
 * Remember how before I talked about listening on a port? We do that here. Our app "pauses" and waits for requests to come in.
 * 
 * These requests can be from browsers, other computers in the cloud, or even your fridge!
 */
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})