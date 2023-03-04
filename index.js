import express from "express";
const app = express();
app.use(express.static("public"));
app.use(express.json());
//middleware
app.use((req,res,next)=>{
    console.log("ada req masuk");
    next();
});
//route 
app.get("/api/ganteng",(_req,res)=>{
    res.send("Aku sayang jenong...love you co muchh");
});

app.listen(3000,()=>{
    console.log("gasss");
})