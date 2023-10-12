'use strict';

alert('Sorry for annoying you. . .');

function username()
{
    let user = prompt('But who are you?!');
    if(user == null || user == ''){

        alert("Well if you're not gonna tell me thats fine")
        user = prompt("But if you don't tell me now I'll just have to call you Batman.")

        if(user == null || user == ''){
        user = 'Batman';
        }   
    }
    alert('Oh nice to meet you ' + user);
    console.log('What the nugget are you looking over here for!' + user);

    return user;
    
}

function chooseteam()
{
    let team = prompt("These three teams...which one would you join...?");
    let fLetter = team.charAt(0).toLowerCase();
    switch (fLetter){
        case "y":
            alert("Mmm, yellow is kinda sus...not implying anything of course...");
            team = 'yellow';
            break;
        case "r":
            alert("Seems like a leader type animal...yeah I can see that.");
            team = 'red';
            break;
        case "b":
            alert("Now you're just doing your own thing huh...I respect that.");
            team = 'blue';
            break;
        default:
            alert("You know, I think you're a part of the secret team that no one can see. =)");
            break;
    }

    return team;
}
