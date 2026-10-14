/*
Purpose:
Routes for /books
Each HTTP method on the same path has its own handler
*/

const express = require("express")
const router = express.Router()


// GET, POST, PUT on http://localhost:8081/books
router.route("/")
    .get((req, res) => {
        res.send("GET - Get a random book")
    })
    .post((req, res) => {
        res.send("POST - Add a book")
    })
    .put((req, res) => {
        res.send("PUT - Update a book")
    })


// Export the router so index.js can use it
module.exports = router
