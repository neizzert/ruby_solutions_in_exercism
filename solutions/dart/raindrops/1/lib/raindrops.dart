class Raindrops {
   String convert (int n) {
      String answer = '';
      String wordKey = 'Pling';
      String wordKey2 = 'Plang';
      String wordKey3 = 'Plong';

      if ( n % 3 == 0) answer += wordKey;
      if ( n % 5 == 0) answer += wordKey2;
      if  ( n % 7 == 0) answer += wordKey3;
      if ( n % 3 != 0 && n % 5 != 0 && n % 7 != 0) answer = n.toString();
      return answer;
   }
}
