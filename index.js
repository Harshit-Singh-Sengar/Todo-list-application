import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
let newItems = [];
let newWorks = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/",(req, res)=>{
    res.render("index.ejs", { newListItem : newItems });
});

app.get("/work", (req, res) => {
    res.render("./work.ejs",{ newListWork : newWorks });
});



app.post("/",(req, res)=>{
 let newItem = req.body.newItem;
 newItems.push(newItem);
res.redirect("/");

    // res.render("index.ejs");
});

app.post("/work",(req, res)=>{
    let newWork = req.body.newWork;
    newWorks.push(newWork);
   res.redirect("/work");
   
       // res.render("index.ejs");
   });



app.listen(port, ()=>{
    console.log(`sever is running on the port ${port}`);
})