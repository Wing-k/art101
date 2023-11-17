/* index.js - Lab 10 Javascript
 * Author: Ashley Hom and Cho Wing Koon
 * Created: 15 November
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work
*/

function randomText() {
    const text = "The quick brown fox jumps over the lazy dog. Waltz, bad nymph, for quick jigs vex. Glib jocks quiz nymph to vex dwarf.";
    const min = 5;
    const max = 150;
    const randLength = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the random text
    const randStart = Math.floor(Math.random() * (text.length - randLength + 1));
    // Generate the random text
    return text.slice(randStart, randStart + randLength);
  }

function lorenText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 5;
    const max = 150;
    const randLength = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the random text
    const randStart = Math.floor(Math.random() * (text.length - randLength + 1));
    // Generate the random text
    return text.slice(randStart, randStart + randLength);
}

// click listener for button
$("#text-button").click(function(){
    // get new fake dialogue
    const newText = randomText();
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});