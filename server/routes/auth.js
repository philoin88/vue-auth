const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    let { email, password, firstName, lastName } = req.body;
    let newUser = { email, password, firstName, lastName };
    let result = await User.create(newUser);

    res.json({
      isSuccess: true,
      message: 'User created successfully.',
      result,
    });
  } catch (err) {
    console.log('/register - err', err);

    res.json({
      isSuccess: false,
      message: err.message || 'Error during registration.',
    });
  }
});

module.exports = router;
