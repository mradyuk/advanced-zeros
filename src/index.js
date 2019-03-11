module.exports = function getZerosCount(number, base) {

  if (base < 2 || base > 256) {
    return;
  }

  
  var noz = Number.MAX_VALUE;
  // Now we can break the Base B as a product of primes :
  // B = a^p1 * b^p2 * c^p3 * …
  //Then the number of trailing zeroes in N factorial in Base B is given by the formulae
  // min{1/p1(n/a + n/(a*a) + ….), 1/p2(n/b + n/(b*b) + ..), ….}.
  var j = base;
  for (var i = 2; i <= base; i++) {
    if (j % i === 0) {
      var p = 0;
      while (j % i === 0) {
         j = j / i;     
         p++;
      }
      var c = 0;
      var z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      noz = Math.min(noz, Math.floor(c / p))
    }
  }
  return noz;
}