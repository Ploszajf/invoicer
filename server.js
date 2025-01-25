const express = require("express")
const http = require("http")

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app);
app.use(express.json())

let sellers = []
let buyers = []

app.post('/sellerData', (req, res) => {
    const data = req.body;
    sellers.push(data)
    console.log(sellers)
    res.send('Data received successfully');
});

app.post('/buyerData', (req, res) => {
    const data = req.body;
    buyers.push(data)
    console.log(sellers)
    res.send('Data received successfully');
});

app.use(express.static("static"))
server.listen(port, () => console.log("http://127.0.0.1:3000"))