const express = require('express');
const router = express.Router();
const User = require('../models/User');
const checkAuth = require('../utils/checkAuth');

/**
 * @desc    회원 가입
 * @access  Public
 * @author  Robin
 */
router.post('/register', async (req, res) => {
  try {
    let { email, password, firstName, lastName } = req.body;
    let newUser = { email, password, firstName, lastName };
    let user = await User.create(newUser);
    let token = user.getJwtToken();

    res.json({
      user,
      token,
      message: 'User created successfully.',
      isSuccess: true,
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
      throw { message: 'Email or Password is not matched.' };
    }
  } catch (err) {
    console.log(`${req.method} ${req.originalUrl} - err`, err);

    res.json({
      message: err.message,
      isSuccess: false,
    });
  }
});

/**
 * @desc    유저 정보 불러오기
 * @access  Public
 * @author  Robin
 */
router.post('/user', checkAuth, async (req, res) => {
  try {
    let _id = req.user._id
    let user = await User.findOne({ _id });
  
    res.json({
      user,
      message: 'Find the user successfully.',
      isSuccess: true,
    });

  } catch (err) {
    console.log(`${req.method} ${req.originalUrl} - err`, err);

    res.json({
      message: 'Failed to find the user.',
      isSuccess: false,
    });
  }
});

module.exports = router;
