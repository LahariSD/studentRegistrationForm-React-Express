const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin'); // Set Referrer Policy header
  next();
});


// Dummy database to store registered users
let users = [];

const players = [
  { name: "Mahendra Singh Dhoni", role: "Wicketkeeper/Batsman" },
  { name: "Virender Sehwag", role: "Batsman" },
  { name: "Sachin Tendulkar", role: "Batsman" },
  { name: "Gautam Gambhir", role: "Batsman" },
  { name: "Virat Kohli", role: "Batsman" },
  { name: "Yuvraj Singh", role: "All-rounder/Batsman" },
  { name: "Suresh Raina", role: "All-rounder/Batsman" },
  { name: "Harbhajan Singh", role: "Bowler/All-rounder" },
  { name: "Zaheer Khan", role: "Bowler" },
  { name: "Ashish Nehra", role: "Bowler" },
  { name: "Munaf Patel", role: "Bowler" }
];


app.post('/register', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: 'User registered successfully', user: newUser });
});

app.get('/getPlayers', (req, res) => {
  res.json(players);
})

app.get('/getUsers', (req, res) => {
  if (!users.length) return res.json({message: "NO one Registered Yet!"})
  else return res.json(users);
})

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
