const express = require("express");
const app = express();
const mailchimp =  require("@mailchimp/mailchimp_marketing");
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/frontend')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/frontend/public', 'index.html'));
});

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('frontend'));
// }

mailchimp.setConfig({
  apiKey: "cc6bce9c204a94c6867bf43464d3c053-us5",
  server: "us5",
});



app.post('/', async(req, res, next)=>{
    const {email} = req.body;
    if(!email){
        res.redirect('#');
        return;
    }

    const response = await mailchimp.lists.addListMember("2d534cebd7", {
     email_address: email,
     status: "subscribed",
   });
//    res.status(200).json(response);
   res.redirect('/success');

  });
  
// app.use(express.static("public"));

// app.use("/users/", require("./routes/usersRoute"));



app.listen(process.env.PORT || 3001, () => {
    console.log("express server is running on port 3001")
})

