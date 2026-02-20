import 'dart:math' as math; 

class DifferenceOfSquares {
   squareOfSum(int n) {
      int sum = 0;
      for (int i = 0; i <= n; i++) sum += i;

      return math.pow(sum, 2);
   }
   
   sumOfSquares(int n) {
      num sum = 0;
      for (int i = 0; i <= n; i++) sum += math.pow(i, 2);
      return sum;     
   }

   differenceOfSquares(int n) => squareOfSum(n) - sumOfSquares(n); 
}