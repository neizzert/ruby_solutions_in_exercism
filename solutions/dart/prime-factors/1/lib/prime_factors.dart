class PrimeFactors {
     List <int>  factors(int n)  {
      int divisor = 2;
      var factors = <int>[];
      while (n > 1) {
        if (n % divisor == 0) {
            factors.add(divisor);
            n ~/= divisor; 
            if (n % divisor != 0) divisor +=1;
        }
        else divisor += 1;
    }
    return factors;
  }
}
