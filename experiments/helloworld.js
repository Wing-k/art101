/* index.js 
 * Author: Wing Koon
 * Created: 15 November
 * License: Public Domain
*/

console.log("Javescript is working");

var button = $(".button").append("<button id='my-button'>Press for changes</button>");

$("#my-button").click(function(){
    console.log("Button clicked");
    // var name = prompt("What is your name?");
    var name = $("#input").val();
    console.log("Prompt returned: " + name);
    newText = "Hello " + name + "!";
    $('#title').html(newText);
})

var num = 15
if (num % 3 == 0) {
    console.log('The numbe ${num) is divisible by 3')
}
else {
    console.log('The number ${num) is NOT divisible by 3')
}


function sortingHat(name) {
    var length = name.length
    var remainder = length % 4
    if (remainder == 0) {
        house = "Griffinhedge";
    }
    else if (remainder == 1) {
        house = "Ravenbunge";
    }
    else if (remainder == 2) {
        house = "Huggeyguys";
    }
    else {
        house = "Sylitherface";
    }
    return house
}

var myHouse  = sortingHat("");

for (var index=1; index <=120; index++){
    console.log(index);
    if(index%15 == 0){
      console.log("FizzBuzz");
    }
    else if(index%3 == 0){
      console.log("Fizz");
    }
    else if(index%5 == 0){
      console.log("Buzz");
    }
  
    else {
      console.log(index);
    }
  }