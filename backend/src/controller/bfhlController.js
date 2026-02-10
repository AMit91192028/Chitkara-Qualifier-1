const {
  calculateFibonacci,
  filterPrimes,
  calculateLCM,
  calculateHCF
} = require('../Services/math');

const { generateResponse } = require('../Services/ai.service');

const handleBfhl = async (req, res) => {
  const key = Object.keys(req.body)[0];
  const value = req.body[key];
  let data;

  if (key === 'fibonacci') {
    if (!Number.isInteger(value) || value < 0) {
      return res.status(400).json({
        is_success: false,
        error: 'Fibonacci requires a non-negative integer'
      });
    }
    data = calculateFibonacci(value);
  } 
  else if (key === 'prime') {
    if (!Array.isArray(value) || !value.every(num => Number.isInteger(num))) {
      return res.status(400).json({
        is_success: false,
        error: 'Prime requires an array of integers'
      });
    }
    data = filterPrimes(value);
  } 
  else if (key === 'lcm') {
    if (
      !Array.isArray(value) ||
      value.length === 0 ||
      !value.every(num => Number.isInteger(num) && num > 0)
    ) {
      return res.status(400).json({
        is_success: false,
        error: 'LCM requires a non-empty array of positive integers'
      });
    }
    data = calculateLCM(value);
  } 
  else if (key === 'hcf') {
    if (
      !Array.isArray(value) ||
      value.length === 0 ||
      !value.every(num => Number.isInteger(num) && num > 0)
    ) {
      return res.status(400).json({
        is_success: false,
        error: 'HCF requires a non-empty array of positive integers'
      });
    }
    data = calculateHCF(value);
  } 
  else if (key === 'AI') {
    if (typeof value !== 'string' || value.trim() === '') {
      return res.status(400).json({
        is_success: false,
        error: 'AI requires a non-empty string question'
      });
    }
    data = await generateResponse(value);
  } 
  else {
    return res.status(400).json({
      is_success: false,
      error: 'Invalid key'
    });
  }

  return res.status(200).json({
    is_success: true,
    official_email: process.env.OFFICIAL_EMAIL,
    data: data
  });
};

module.exports = { handleBfhl };
