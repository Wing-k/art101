/* index.js 
 * Author: Wing Koon
 * Created: 15 November
 * License: Public Domain
*/

console.log("Javescript is working");

var button = $(".button").append("<button id='my-button'>Press for changes</button>");

$("#my-button").click(function(){
    console.log("Button clicked")
    var name = $("#input").val()
    console.log("Prompt returned: " + name);
    newText = "Hello " + name + "!";
    $('#title').html(newText);
})
