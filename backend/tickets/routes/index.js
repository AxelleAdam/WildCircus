const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

/* GET home page. */
app.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

app.get("/contact", function(req, res, next) {
  res.render("index", { title: "contact" });
});

// Création de la méthode de transport de l'email
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  service: "Gmail",
  auth: {
    user: "betinvestwild@gmail.com",
    pass: "toto123456!"
  }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  const file = req.body.file;

  let HelperOptions = {};

  HelperOptions = {
    from: `${email}`,
    to: "betinvestwild@gmail.com",
    subject: subject,
    html: `<h4>${subject}</h4> <br/>
    <h3>Vous avez reçu un message de ${name}, vous pouvez le contacter à cette adresse ; ${email}</h3> 
    <br/>
    <p>${message}</p>
    <br/> ${file}`
  };

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(8088, function() {
  console.log(`API root available at: http://localhost:8088/`);
});
