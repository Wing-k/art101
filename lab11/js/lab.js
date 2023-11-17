/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
   Requirements: jQuery must be loaded for this script to work.
   Author: Ashley Hom and Cho Wing Koon
   Date created: 17 November 2023
*/

// Sorts the characters of a string in alphabetical order.
function sortName(inputName) {
    // We have to convert our string to an array and back again to sort it
    return inputName.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
    // get value of input field
    const name = $("#user-name").val();
    // now let's sort it
    nameSorted = sortName(name);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + nameSorted + '</p></div>');
});

