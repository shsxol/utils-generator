const express = require("express");
const router = express.Router();


router.get("/",(req,res,next) =>{       //error handling next to index to ui 
    try{
        res.json({msg: "hello from api"});
    }catch(err){
        next(err)
    }
    
});


module.exports = router;

//url/pattern matching  abc*def