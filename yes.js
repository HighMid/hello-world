'use strict';

document.addEventListener("DOMContentLoaded", function() {
    alert('Sorry for annoying you. . .');
    let user = username();
    let team = chooseteam(user);
    teamunits(team);

});


function username()
{
    let user = prompt('But who are you?!');
    if(user == null || user == ''){

        console.log("No name given. . . worst case, wasn't named at birth :c.")

        alert("Well if you're not gonna tell me thats fine.")
        user = prompt("But if you don't tell me now I'll just have to call you Batman.")

        console.log("Don't really like naming people myself...it's kinda weird.")

        if(user == null || user == '' || user == ' '){
        user = 'Batman';
        }   
    }
    console.log("User name = " + user);

    alert('Ok, nice to meet you, ' + user + '.');
    console.log("Let's send this back to main. " + user);

    return user;
    
}

function chooseteam(name)
{
    let count = 0;
    let fLetter;
    alert("Hey " + name + " so we have a bit of a situation here...");

    while(true){
        
        let team = prompt("These three teams...which one would you join...?");
        if (team !== null && team !== ''){
            fLetter = team.charAt(0).toLowerCase();
        }else{
            fLetter = '';
        }
        

        switch (fLetter){

            case "y":
                alert("Mmm, yellow is kinda sus...not implying anything of course...");
                alert("WELCOME TO YELLOW TEAM !");
                team = 'yellow';
                return team;

            case "r":
                alert("Seems like a leader type animal...yeah I can see that.");
                alert("WELCOME TO RED TEAM !");
                team = 'red';
                return team;

            case "b":
                alert("Now you're just doing your own thing huh...I respect that.");
                alert("WELCOME TO BLUE TEAM !");
                team = 'blue';
                return team;

            default:

                if (count > 0){
                    
                    let random = RNG(1 , 3);
                    switch (random){

                        case 1:

                            alert("Well I knew you were up to no good so Yellow it is . . .")
                            alert("WELCOME TO YELLOW TEAM !")
                            team = 'yellow';
                            return team; 

                        case 2:

                            alert("Cmon man why couldn't you just say you LOVE red team !")
                            alert("WELCOME TO RED TEAM !")
                            team = 'red';
                            return team; 
                        
                        case 3:

                            alert("Well I think BLUE fits you fine! I mean look at him!")
                            alert("WELCOME TO BLUE TEAM !")
                            team = 'blue';
                            return team;
                    }
                    

                }

                alert("You know, I think you're a part of the secret team that no one can see. =)");
                alert("BUT, I need one of these teams (Y/R/B)! I'll just randomly assign you next time.")
                console.log(count);
                count++;
                
        }
    }
}

function teamunits(team)
{

    let numberOfUnits = parseInt(prompt("How many units (images) do you want for the " + team + " team? (Choose a number between 1 and 8)"), 10);

    // Check if the entered value is within the desired range
    while(true){
    if (isNaN(numberOfUnits) || numberOfUnits < 1 || numberOfUnits > 8) {
        numberOfUnits = parseInt(prompt("Uhh look I said between 1 and 8, I'm too lazy to kick you out so I'll keep you here until you get it right."));
                
    }else{

        break;
    }
}
    let unitContainer = document.getElementById(team + "-units");
    unitContainer.innerHTML = ""; // Clear previous units

    for (let i = 0; i < numberOfUnits; i++) {
        let unitImg = document.createElement("img");
        unitImg.src = "mixedteamunit.png"; // Use the provided image
        unitImg.alt = team + " team unit " + (i + 1);
        unitImg.classList.add("team-unit-image");
        unitContainer.appendChild(unitImg);
    }
}

function RNG(min, max) //  Generates a number between 1 and 3, including both. Because who doesn't love randomness!
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(RNG(1, 3));  //  Generates a number between 1 and 3, including both. Because who doesn't love randomness!


// function teamunitsproto(team)
// {
//     let numberOfUnits = prompt("How many units (images) do you have for the " + team + " team?");

//     if (!numberOfUnits || isNaN(numberOfUnits)) {
//         alert("Please enter a valid number!");
//         return;
//     }

//     let unitContainer = document.getElementById(team + "-units");
//     unitContainer.innerHTML = ""; // Clear previous units

//     for (let i = 0; i < numberOfUnits; i++) {
//         let unitImg = document.createElement("img");
//         unitImg.src = team + "team.png"; // Assuming the image naming remains consistent
//         unitImg.alt = team + " team unit " + (i + 1);
//         unitImg.classList.add("team-unit-image");
//         unitContainer.appendChild(unitImg);
//     }
// }