class ResistorColorDuo {
   var valueColor = const  {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'grey': 8,
      'white': 9
   };

   value(List<String> colors) {
      if (colors.length == 1) {
         return valueColor[colors[0]];
      }
      else {
         return int.parse(valueColor[colors[0]].toString() + valueColor[colors[1]].toString());
      }
   }
}