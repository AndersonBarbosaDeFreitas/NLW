import express from "express";

const app = express();

app.get('/users', (resquest, response) => {
    response.json({ message: "Hello World!" });
})

app.listen(3333);