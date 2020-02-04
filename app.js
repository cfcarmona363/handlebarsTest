const express = require ('express')
const exhbs=require('express-handlebars')
const app = express()


app.engine('handlebars', exhbs({
  defaultLayout:'main'
}))

app.set('view engine', 'handlebars' )

app.get('/', (req, res)=>{
  res.render('index',{
    greeting: "Welcome to my Home Page",
    showName: false
  })
})

app.get('/about', (req, res)=>{
  res.render('about',{
    greeting: "Welcome to my About Page"
  })
})

const port=5005

app.listen(port, ()=>{
  console.log(`server started on ${port}`)
})