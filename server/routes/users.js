const express = require('express');
const router = express.Router();
const User = require('../models/User');
const checkAuth = require('../utils/checkAuth');

/**
 * @desc    유저 목록 불러오기
 * @access  Private
 * @author  Robin
 */
router.get('/', checkAuth, async (req, res) => {
  try {
    let users = await User.find();

    res.json({
      users,
      message: 'Find users successfully.',
      isSuccess: true,
    });
  } catch (err) {
    console.log(`${req.method} ${req.originalUrl} - err`, err);

    res.json({
      message: 'Failed to find users.',
      isSuccess: false,
    });
  }
});

/**
 * @desc    유저 정보 불러오기
 * @access  Private
 * @author  Robin
 */
router.get('/:id', checkAuth, async (req, res) => {
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

/**
 * @desc    유저 등록
 * @access  Private
 * @author  Robin
 */
router.post('/', async (req, res) => {
  res.json({
    isSuccess: true,
  });
});

module.exports = router;
