const calculateFibonacci = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const filterPrimes = (arr) => {
  return arr.filter(num => isPrime(num));
};

const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const lcm = (a, b) => {
  return Math.abs(a * b) / gcd(a, b);
};

const calculateLCM = (arr) => {
  return arr.reduce((acc, num) => lcm(acc, num));
};

const calculateHCF = (arr) => {
  return arr.reduce((acc, num) => gcd(acc, num));
};

module.exports = {
  calculateFibonacci,
  filterPrimes,
  calculateLCM,
  calculateHCF
};
