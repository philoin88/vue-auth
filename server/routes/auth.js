const express = require('express');
const router = express.Router();
const User = require('../models/User');

/**
 * @desc    회원 가입
 * @access  Public
 * @author  Robin
 */
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

/**
 * @desc    로그인
 * @access  Public
 * @author  Robin
 */
router.post('/login', async (req, res) => {
  let { email, password } = req.body;

  try {
    let isLoggedIn = false;
    let user = await User.findOne({ email }).select('+password');

    if (user) {
      isLoggedIn = await user.comparePassword(password);
    }

    if (isLoggedIn) {
      let token = user.getJwtToken();
      res.json({
        user,
        token,
        message: 'Login successfully.',
        isSuccess: true,
      });
    } else {
      throw { message: 'There\'s no user with this email.' };
    }
  } catch (err) {
    console.log(`${req.method} ${req.originalUrl} - err`, err);

    res.json({
      message: err.message,
      isSuccess: false,
    });
  }
});

module.exports = router;
