'use strict';


//Antra užduotis

var skaiciai = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27];
console.log(skaiciai);
var sum = 0; //pradinė vertė
var avg = 0; //pradinė vertė
for(var i = 0; i < skaiciai.length; i++){
  //didziausias
  var max = Math.max.apply(null, skaiciai);
  //maziausias
  var min = Math.min.apply(null, skaiciai);

  sum += skaiciai[i];
}
console.log(skaiciai);
console.log('Skaičių suma: '+ sum.toFixed(2));
console.log('Skaičių vidurkis: '+ (sum / skaiciai.length).toFixed(2));
console.log('Didžiausias skaičius: '+ max);
console.log('Mažiausias skaičius: '+ min);
