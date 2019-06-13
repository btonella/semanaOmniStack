const express = require("express")
const mongoose = require("mongoose")
const config = require("../config")

const app = express()

mongoose.connect(`mongodb+srv://${config.user}:${config.password}@cluster0-z8ksc.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
})

app.use(require("./routes"))
app.listen(3333)
