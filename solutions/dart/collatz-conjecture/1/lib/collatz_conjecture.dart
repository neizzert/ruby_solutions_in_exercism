class CollatzConjecture {
    int steps ( n){
        if (n <= 0) throw  new ArgumentError('Only positive integers are allowed'); 
        int steps = 0;

        while (n != 1) {
            if (n % 2 == 0){
                steps += 1;
                n /= 2;
            } 
            else {
              steps += 1;
              n = n * 3 + 1;
            } 
        }
      return steps;
    }
}