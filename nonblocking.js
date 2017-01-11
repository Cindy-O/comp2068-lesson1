//link to fileSystem library
var fs = require('fs');

//get drinks
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks) {
  //if we get drinks, print them out
  console.log(drinks);
});

//drink heading
console.log('DRINKS:');

//food
var food = fs.readFile('food.txt', 'utf8', function(err, food) {
  //food heading
  console.log('\nFOOD:');

  //if we get good, print them out
  console.log(food);
});
