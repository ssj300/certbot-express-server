import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import os from 'os'

const ON_AWS = os.userInfo().username == 'ec2-user'
import shelljs from 'shelljs'

let port_http = 80

if (ON_AWS) {
	console.log("ON_AWS direct port 80 to 3000")

	port_http = 3000
	shelljs.exec('sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000')
}

let app = express()
export let HTTP_SERVER = http.createServer(app).listen(port_http) //the http server is used for certbots...  and redirecting to ssl

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public/static'))
app.use('/static', express.static(__dirname + '/public/static'))
app.use(function (req, res, next) {
	let time = new Date().toLocaleString()
	res.status(404).send(`<center>LOST ${time}</center>`)
});