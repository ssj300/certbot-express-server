import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import os from 'os'
import path from 'path'

const ON_AWS = os.userInfo().username == 'ec2-user'
import shelljs from 'shelljs'

let port_http = 80

if (ON_AWS) {
	console.log("ON_AWS direct port 80 to 3000")
	port_http = 3000
}

let app = express()
export let HTTP_SERVER = http.createServer(app).listen(port_http) //the http server is used for certbots...  and redirecting to ssl


// let p = __dirname + '../static' 
let static_path = path.resolve(__dirname + '/../static')
console.log(static_path)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(static_path))
// app.use('/static', express.static(__dirname + '/static'))
app.use(function (req, res, next) {
	let time = new Date().toLocaleString()
	res.status(404).send(`<center>LOST ${time}</center>`)
});