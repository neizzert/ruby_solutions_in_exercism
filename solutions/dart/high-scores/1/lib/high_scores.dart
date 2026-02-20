class HighScores {
   
   List <int> scores;
   int late = 0;
   List<int>  rever = [];
   List<int> orderedElements  = [];

   HighScores(this.scores) {
      late = scores[scores.length - 1];
      
      for (int i = 0 ;  i  <= scores.length - 1 ;  i++) orderedElements.add(scores[i]);


      orderedElements.sort();

      
      for (int i = orderedElements.length - 1;  i >= 0 ;  i--) rever.add(orderedElements[i]);
   }
   

   int personalBest () => orderedElements[orderedElements.length - 1];

   
   List <int> personalTopThree() {
      if (rever.length >= 3) return [rever[0], rever[1], rever[2]];
      else if (scores.length == 2) return [rever[0], rever[1]];
      else return [rever[0]];

   }

   int latest () => late;
    
}
