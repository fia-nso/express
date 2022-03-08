

const express = require('express')


const path = require("path");

const app = express()

const port = 8081


let date = new Date()
let hour = date.getHours();
let day = date.getDay();

// app.use(express.static('src'));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

  app.get('/closed',(req, res) => {
    res.render('closed')
    // res.send(path.join(__dirname, 'views'))
  })

  app.get('/contact',(req, res) => {
    if((day >= 1 && day <= 5) && (hour >= 9 && hour <= 17)){
      res.render('contact')
  }
  else{
      res.redirect('/closed');
  }
  })

  app.get('/services',(req, res) => {
    if((day >= 1 && day <= 5) && (hour >= 9 && hour <= 17)){
      res.render('services')
  }
  else{
      res.redirect('/closed');
  }
  })

  app.get('/',function (req, res) {
    if((day >= 1 && day <= 5) && (hour >= 9 && hour <= 17)){
        res.render('index')
    }
    else{
        res.redirect('/closed');
    }
        
    })

    app.listen(port, () => console.log('use'))