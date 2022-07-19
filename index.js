const express = require("express");
const app = express()

app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!!")
    console.dir(req)
})

app.listen(3000, () => {
    console.log("Hello World can you hear me on PORT 3000?!?!?!");
})