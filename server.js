const express = require("express")
const http = require("http")
const cors = require("cors")

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app);

app.get('/data', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", true)
})

app.use(express.static("static"))
server.listen(port, () => console.log("http://127.0.0.1:3000"))