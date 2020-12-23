const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  let isAuthenticated = false;
  let headers = req.headers || {};
  let authorization = headers.authorization || '';
  let bearerToken = authorization.split('Bearer ').pop() || '';

  if (bearerToken) {
    try {
      let decodedToken = jwt.verify(bearerToken, process.env.JWT_SECRET);

      if (decodedToken) {
        req.user = decodedToken;
        isAuthenticated = true;
      }
    } catch (err) {
      console.log(`${req.method} ${req.originalUrl} - err`, err);
    }
  }

  if (isAuthenticated) {
    next();
  } else {
    res.status(400).json({
      message: 'Not Authenticated.',
      isSuccess: false,
    });
  }
};

module.exports = checkAuth;
