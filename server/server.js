const axios = require('axios');
const express = require('express');
var cors = require('cors');

const environment = {
  CLIENT_ID: '5b7befd83734aff07fe4',
  CLIENT_SECRET: ''
}

var app = express();
app.use(cors())

app.get('/my-oauth', function (req, res) {
  const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token'
  const CLIENT_ID = environment.CLIENT_ID
  const CLIENT_SECRET = environment.CLIENT_SECRET
  const CODE = req.query.code

  axios({
    method: 'post',
    url: GITHUB_AUTH_ACCESSTOKEN_URL,
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: CODE
    }
  })
  .then(function (response) {
  	res.end(JSON.stringify({result: `http://localhost:4200?${response.data}`}));
    console.log('Success ' + response)
  })
  .catch(function (error) {
    console.error('Error ' + error.message)
  })
});

app.listen(3000, function () {
  console.log('my-oauth listening on port 3000!');
});
