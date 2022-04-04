const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 9000
app.get("/", (request, response, next) => {     // next: ha itt végzett, hajtson-e végre műveletet vagy sem
    console.log("Request received")
    response.send("Thank you for your request! This is our response.")
});


app.get("/something", (request, response, next) => {     // next: ha itt végzett, hajtson-e végre műveletet vagy sem
    console.log("Request received on something endpoint.")
    response.send("Thank you for your request! This is our response. This is our response for something endpoint.")
});



app.get("/api/v1/users", (request, response, next) => {     // next: ha itt végzett, hajtson-e végre műveletet vagy sem
    console.log("Request received for users endpoint.")
    const users = [
        {
            name: "John", 
            surname: "Doe"
        }
    ]
    response.send(JSON.stringify(users)) // visszaküldi a frontendnek
});



app.listen(port () => {
    console.log(`http://127.0.0.1:${port}`);
})