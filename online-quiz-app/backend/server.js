const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./db');
const User = require('./models/userModel');
require('dotenv').config()

app.use(express.json({ limit: "10mb" }));
conn();
app.use(cors());

// Test request
app.get('/', (req, res) => res.send('Hi'));

// All user authentication & modification routes
app.use('/api/user', require('./routes/userRoutes'));

// All quiz related routes
app.use('/api/quiz', require('./routes/quizRoutes'));

app.listen(process.env.PORT, console.log(`Serving on ${process.env.PORT}`));