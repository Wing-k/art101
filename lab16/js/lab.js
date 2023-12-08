/*
   lab.js - Lab 16
   Requirements: jQuery must be loaded for this script to work.
   Author: Ashley Hom and Cho Wing Koon
   Date created: 6 December 2023
*/

const ENDPOINT = "https://xkcd.com/info.0.json";

// Using the core $.ajax() method 

$("#comic").click(function(){
    $.ajax({
        // The URL for the request (from the api docs)
        url: ENDPOINT,
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(comicObj) {
            // do stuff
            console.log("working");
            const title = comicObj.title;
            const img = comicObj.img;
            const alt = comicObj.alt;
            $("#output").append("<p>" + title + "</p>");
            $("#output").append("<img src='" + img + "'/>");
            $("#output").append("<p>" + alt + "</p>");
        },
        // What we do if the api call fails
        error: function(request, error) { 
            // do stuff
            console.log("Error:", request, error);
        }
    })
})



