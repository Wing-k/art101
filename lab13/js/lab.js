/*
   lab.js - Lab 13
   Requirements: jQuery must be loaded for this script to work.
   Author: Ashley Hom and Cho Wing Koon
   Date created: 24 November 2023
*/

function FizzBuzz(Max) {
    //create empty string
    longString = "";

    for (var index=1; index <=Max; index++){
        str = "";

        //if number is a multiple of 3
        if(index%3 == 0) {
            str += "Fizz"; 
        }

        //if number is a multiple of 5
        if(index%5 == 0) {
            str += "Buzz"
        }

        //if number is a multiple of 7
        if(index%7 == 0) {
            str += "Boom"
        }

        //if number is a multiple of 4
        if(index%9 == 0) {
            str += "Bang"
        }

        //logic referred to lecture
        if (str != "") { 
            //add exclamation point if string has a word
            str += "!"; 
        } 

        longString += index + " " + str + "<br>"; 
    }

    $("#output").html(longString);
}

$("#run").click(function(){
    // get value of input field
    const input = $("#max").val();
    //run the FizzBuzz() function
    FizzBuzz(input);
});
