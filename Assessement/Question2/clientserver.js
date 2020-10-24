const app = require("express")();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/clientPage.html");
})

app.listen(3335, ()=>{
    console.log("Client App running at 3335");
})