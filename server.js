const express = require("express")
const router = require("./router/index");

const app = express()

//middleware
app.use("/static", express.static("static"))
app.use(express.urlencoded({extended: true}))
app.use(router);

// run your application, so it listens on port 4444
app.listen(4444, () => {
    console.log("Server is Listening on port 4444")
})