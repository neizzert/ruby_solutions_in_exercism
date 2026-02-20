String reverse(String word) {
   String answer = '';
  
   for (int index = word.length - 1; index >= 0; index--) answer += word[index];
   
   return answer;
}
