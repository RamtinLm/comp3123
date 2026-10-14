/*
Purpose:
Routes for /books/computers
The "/books/computers" part comes from app.use() in index.js
*/

const express = require("express")
const router = express.Router()


// GET, POST, PUT on http://localhost:8081/books/computers/game-dev
router.route("/game-dev")
    .get((req, res) => {
        res.send("GET - /books/computers/game-dev")
    })
    .post((req, res) => {
        res.send("POST - Add a game-dev book")
    })
    .put((req, res) => {
        res.send("PUT - Update a game-dev book")
    })


// GET http://localhost:8081/books/computers/java
router.route("/java")
    .get((req, res) => {
        res.send("GET - /books/computers/java")
    })


// GET http://localhost:8081/books/computers/python
router.route("/python")
    .get((req, res) => {
        res.send("GET - /books/computers/python")
    })


// Export the router so index.js can use it
module.exports = router
