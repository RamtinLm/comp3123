// ======================================================
// PART 1 - Express Router Practice
// Books and Computers Routes
// ======================================================

const express = require("express")
const fs = require("fs")
const path = require("path")
const dateFormat = require("dateformat")

const books = require("./Books")
const computers = require("./Computers")
const user = require("./user.json")

const PORT = process.env.PORT || 8081

const app = express()


// Parse JSON request bodies for routes such as /login
app.use(express.json())


// Append one line to server_log.txt
const writeData = (data) => {
    data += "\n"

    fs.appendFile("server_log.txt", data, (error) => {
        if(error){
            return console.log("Could not write to log file:", error)
        }
        console.log("Log Saved!!")
    })
}


// Middleware: log every request with the date and URL
const logger = (req, res, next) => {
    const todays = dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
    const data = `[${todays}] - ${req.originalUrl}`

    writeData(data)
    next()
}

app.use(logger)


// Middleware: runs for every request, before the routes
const booksLogger = (req, res, next) => {
    console.log("Books logger was called")
    next()
}

app.use(booksLogger)


// The more specific path goes first
app.use("/books/computers", computers)
app.use("/books", books)



// ======================================================
// PART 2 - Lab 5 Class Exercise
// ======================================================


// ------------------------------------------------------
// Task 1 - Home Route
// GET http://localhost:8081/home
// ------------------------------------------------------
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"))
})


// ------------------------------------------------------
// Task 2 - Profile Route
// GET http://localhost:8081/profile
// ------------------------------------------------------
app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "user.json"))
})


// ------------------------------------------------------
// Task 3 - Login Route
// POST http://localhost:8081/login
// Body (JSON): { "username": "...", "password": "..." }
// ------------------------------------------------------
app.post("/login", (req, res) => {
    const { username, password } = req.body

    // Check the username first
    if(username !== user.username){
        return res.json({
            status: false,
            message: "User Name is invalid"
        })
    }

    // Then check the password
    if(password !== user.password){
        return res.json({
            status: false,
            message: "Password is invalid"
        })
    }

    res.json({
        status: true,
        message: "User Is valid"
    })
})


// ------------------------------------------------------
// Task 4 - Logout Route
// GET http://localhost:8081/logout/:username
// ------------------------------------------------------
app.get("/logout/:username", (req, res) => {
    const username = req.params.username

    res.send(`<b>${username} successfully logged out.</b>`)
})


// ------------------------------------------------------
// Task 5 - Test Route for Error Handling
// GET http://localhost:8081/error
// ------------------------------------------------------
app.get("/error", (req, res, next) => {
    next(new Error("Test error"))
})


// ------------------------------------------------------
// Task 5 - Error Handling Middleware
// Must be AFTER all the routes, and must have 4 parameters
// ------------------------------------------------------
app.use((err, req, res, next) => {
    console.log("Error caught:", err.message)
    res.status(500).send("Server Error")
})


// ------------------------------------------------------
// Start Server
// ------------------------------------------------------
app.listen(PORT, () => {
    console.log("Web server is listening at this port: " + PORT)
})
