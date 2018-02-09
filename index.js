var cool = require('cool-ascii-faces');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.redirect(
    'https://api.instagram.com/oauth/authorize/?client_id=fbb804594cf34b04ad987b77a38bfd5e&redirect_uri=https://pacific-ridge-82311.herokuapp.com/instagram&response_type=token'
  ))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/instagram', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))