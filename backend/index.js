import express from "express";

const app = express();

app.get("/", async (req, res) => {
    res.send("Hello Mr Lofoneh");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})