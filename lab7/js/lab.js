/* index.js - Lab 7 Javascript
 * Author: Ashley Hom and Cho Wing Koon
 * Created: 1 November
 * License: Public Domain
*/

// Create a new function that reference and compare Strings
// Refered to the codes in this link: https://www.tutorialspoint.com/case-sensitive-sort-in-javascript

function compare(a,b){
    return a.localeCompare(b);
}

// Create a new function to sort name
function sortName(){
    // get user input for name
    var userName = window.prompt("What is your name?");
    // change user name to lower case
    // var lowerName = userName.toLowerCase();
    // console.log("lowerName = ", lowerName);
    // split the string to array
    var splitName = userName.split("");
    console.log("splitName = ", splitName);
    // sort letters in the array and compare letters
    var compareName = splitName.sort(compare);
    var sortedName = compareName.sort();
    console.log("sortedName = ", sortedName);
    // join array back to string
    var newName = sortedName.join("");
    console.log("newName = ", newName);
    // print out new sorted name
    console.log("sortedName = ", newName);
    // return the new sorted name
    return newName;
}

// Print output
document.writeln("Here is your new sorted name: ", sortName(), "</br>");
