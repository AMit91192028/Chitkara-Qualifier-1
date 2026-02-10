const validateRequest = (req, res, next) => {
  const validKeys = ['fibonacci', 'prime', 'lcm', 'hcf', 'AI'];
  const keys = Object.keys(req.body);

  if (keys.length === 0) {
    return res.status(400).json({
      is_success: false,
      error: 'Request body cannot be empty'
    });
  }

  if (keys.length > 1) {
    return res.status(400).json({
      is_success: false,
      error: 'Only one key is allowed per request'
    });
  }

  const key = keys[0];
  if (!validKeys.includes(key)) {
    return res.status(400).json({
      is_success: false,
      error: 'Invalid key. Allowed keys: fibonacci, prime, lcm, hcf, AI'
    });
  }

  next();
};

module.exports = validateRequest;
