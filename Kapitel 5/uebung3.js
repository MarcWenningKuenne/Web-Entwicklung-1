"use strict";


function getDay(){
    let weekday = "noch kein Tag gefunden";
    let weekdayAsNumber = new Date().getDay();
    switch(weekdayAsNumber){
        case 0:
            weekday = "Sunday";
            break;
        case 1:
            weekday = "Monday";
            break;
        case 2:
            weekday = "Thuesday";
            break;
        case 3:
            weekday = "Wednesday";
            break;
        case 4:
            weekday = "Thursday";
            break;
        case 5:
            weekday = "Friday";
            break;
        case 6:
            weekday = "Saturday";
            break;
    }
    document.getElementById("wochentag").innerHTML = "Der aktuelle Wochentag ist " + weekday + "!"
}