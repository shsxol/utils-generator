const express= require("express")


const app = express()

const indexRouter= require("./routes");
app.use("/", indexRouter);


app.listen(8000, () => { // call back=function bhitra function call  garnu
    console.log("server running in port 8000")

});