var express = require('express')
var app = express()
 

app.set("view engine","ejs")

app.use(express.static('./public'));
 
app.get('/', function (req, res) {
  res.render("about")
})

// rendering my landing pages and other pages
app.get('/project', function (req, res) {
  res.render("project")
})

app.get('/XP', function (req, res) {
  res.render("XP")
})

app.get('/contact', function (req, res) {
  res.render("contact")
})


app.use(express.static('./public'));

app.listen(3000)
