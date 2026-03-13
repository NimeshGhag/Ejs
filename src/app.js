const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index", { message: "Hello from EJS!" });
// });

app.get("/",(req,res)=>{
    res.render("index",{messages:[
        "Hello from EJS!",
        "Welcome to the EJS tutorial.",
        "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript."
    ]})
})



module.exports = app;
