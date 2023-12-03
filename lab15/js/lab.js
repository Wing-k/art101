/*
   lab.js - Lab 15
   Requirements: jQuery must be loaded for this script to work.
   Author: Ashley Hom and Cho Wing Koon
   Date created: 1 December 2023
*/

const ENDPOINT = "https://yesno.wtf/api";

// attach an event listener
$("#activate").click(function(){
    $.ajax({
        "url": ENDPOINT,
        "type": "GET",
        "dataType": "json",
        success: function(data) {
            console.log(data.answer);
            text = data.answer;
            $("#output").append("<p>" + text);
        },
        error: function(data) {
            console.log("Error");
        }
    })
})

