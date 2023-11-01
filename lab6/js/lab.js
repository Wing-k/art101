/* index.js - Lab 6 Javascript
 * Author: Ashley Hom and Cho Wing Koon
 * Created: 27 October
 * License: Public Domain
*/

// Define variables
var myTransport = ["legs", "bus", "bike", "car"];

var myMainRide = 
{
  make: "Mercedes-Benz",
  model: "A-Class",
  color: "white",
  year: 2022,
  age: function() {
      return 2023 - this.year;
  }
}

// Outputs
document.writeln("Getting around using: " + myTransport + "<br>");

// Allow us to write objects to the document
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");