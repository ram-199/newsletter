const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app =  express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), listFiles);
  });


app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})


app.post("/",(req,res)=>{
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
})
app.listen( process.env.PORT||3000,()=>{
    console.log('Server Running on 3000');
})

