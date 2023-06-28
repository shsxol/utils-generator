const express= require("express")
const morgan = require("morgan");
const ejs=require("ejs")
const cors= require("cors")


const app = express()

const indexRouter= require("./routes");
// setting up third party middle ware
app.use(morgan("short"))
app.use(cors());

// setting up ejs templating
app.set("view engine", "ejs")
app.set("views","./views")

// serving static files
app.use(express.static("public"))


// trying to test the application level error handler
app.get("/broken", (req,res,next) =>{
    throw new Error("Broken");
})
app.use("/", indexRouter);

// application level handling
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send("something went wrong");
}); 


app.listen(8000, () => { // call back=function bhitra function call  garnu
    console.log("server running in port 8000")

});