const express = require("express")
const mongoose = require("mongoose")

const app = express()


mongoose.connect('mongodb+srv://user:senha@cluster0-z8ksc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get("/", (req, res) => {
    return res.send("Hello "+ req.query.name)
})
app.listen(3333)
