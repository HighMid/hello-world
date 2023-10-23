'use strict';

alert("Hello again friend . . .");


function getName(){

    let name = "";
    name = prompt("Who the in the 5 Nuggets are you?!");

    if (name == "" || name == null){

        alert("Not this again . . .");

        console.log("Oh boy we got ourselves a different one . . .")

        name = prompt("Look . . . I'll just have to call you Pinhead Larry if you don't give me a name!");


        if (name == "" || name == null){
            name = "Pinhead Larry"
            console.log("Well I guess this person is " + name);
        }

    }

    alert("Pleasure to meet you " + name + " !");

    console.log("Let's return " + name + " back to main.")

    return name;
    
}

function IsGamer(name){

}