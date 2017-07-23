// ==UserScript==
// @name         Netflix Script
// @version      0.1
// @description  Automatically skip recaps, intros and click nexts on Netflix and Amazon video
// @author       Mshoshan
// @include      https://www.netflix.com/*
// @include      https://www.amazon.com/gp/video/*
// @grant        none
// ==/UserScript==
function find(){
 if (document.getElementsByClassName('skip-credits').length !== 0) {
     //skip credits and go to next episode @ netflix   
        document.getElementsByClassName('skip-credits')[0].firstElementChild.click();
    } else if (document.getElementsByClassName('postplay-still-container').length !== 0) {
        //skips openings if opinion is avialible @netflix 
        document.getElementsByClassName('postplay-still-container')[0].click();
    } else if (document.getElementsByClassName('countdown').length !== 0) {
        //skip credits and go to next episode @ amazon 
        document.getElementsByClassName('countdown')[0].click();
    } else {
        //console.log('ERROR');
    }
}

function shortCut(ent){///shortcuts for netflix only, will add amazon shortcuts 
    var keyCombo=String.fromCharCode(ent.charCode||ent.which).toUpperCase();
    if (ent.shiftKey) { keyCombo="Shift+"+keyCombo;}
    switch(keyCombo) {
    case "Shift+?"://help
        window.location="https://help.netflix.com/en";
        break;
    case "Shift+R"://DVD histore
        window.location="https://dvd.netflix.com/Queue?view=history&source=rh";
        break;
    case "Shift+H"://Streaming history
        window.location="http://account.netflix.com/WiViewingActivity?lnkctr=RRIQ";
        break;
    case "Shift+B":// browsing home
        window.location="https://www.netflix.com/browse";
        break;
    case "Shift+A"://account setting
        window.location="https://www2.netflix.com/YourAccount";
        break;
    case "Shift+P":// profile menu
        window.location="https://www2.netflix.com/profiles/manage";
        break;
    default:
        return;
    }
}
document.addEventListener('keypress', shortCut, false);
var intervalId = window.setInterval (find, 100);
