const express = require("express")
const http = require("http")

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app);
app.use(express.json())

let sellers = []
let buyers = []
let invoiceData = []

app.post('/sellerData', (req, res) => {
    const data = req.body;
    sellers.push(data)
    console.log(sellers)
    res.send('Data received successfully');
});

app.post('/buyerData', (req, res) => {
    const data = req.body;
    buyers.push(data)
    console.log(buyers)
    res.send('Data received successfully');
});

app.post('/invoiceData', (req, res) => {
    const data = req.body;
    invoiceData[0] = data.Seller
    invoiceData[1] = data.Buyer
    console.log(invoiceData)
    res.send('Data received successfully');
});

app.get('/indexData', (req, res) => {
    res.json([sellers, buyers]);
});

app.use(express.static("static"))
server.listen(port, () => console.log("http://127.0.0.1:3000"))