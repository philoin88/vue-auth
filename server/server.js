require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/db')
const app = express();
const port = process.env.PORT || 3000;

// Connect DB
db.connect();

// Express 설정
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

// Middleware 설정
app.use(cors());
app.use(morgan('common'));

// Routes 설정
const auth = require('./routes/auth.js');
app.use('/api/auth', auth)

// 서버 실행
app.listen(port, () => console.log(`${port} is connected!`))
