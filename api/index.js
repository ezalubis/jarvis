import express from "express";
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log("ada req masuk");
    next();
});
//route 
app.get("/api/ganteng",(_req,res)=>{
    res.send("ep");
});

app.listen(3000,()=>{
    console.log("gasss");
})