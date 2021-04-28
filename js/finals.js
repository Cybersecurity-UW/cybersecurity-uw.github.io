var goal = 0;
var current = 0;
var finalweight = 0;
var result = 0;
var temp1 = 0;
var temp2 = 0;
var temp3 = 0;

function finals() {
    document.getElementById("finals").innerHTML = "";
    current = document.getElementById("current").value;
    goal = document.getElementById("goal").value;
    finalweight = document.getElementById("weight").value;
    current = current / 100;
    goal = goal / 100;
    finalweight = finalweight / 100;
    temp1 = 1 - finalweight;
    temp2 = current * temp1;
    temp3 = goal - temp2;
    result = temp3 / finalweight;
    result = result * 100;
    result = result.toFixed(2);
    var resultsP = document.createElement("div");
    resultsP.className = "heading wow animated fadeInUp headingLight";
    resultsP.style = "font-size: large";
    goal = goal * 100;
    if (result > 100) {
        resultsP.innerHTML = "   F in the Chat: You will need to get at least " + result + "% to get an " + goal + "%";
    } else if (result > 90) {
        resultsP.innerHTML = "   You can do this, study hard! You will need to get at least " + result + "% to get an " + goal + "%";
    } else if (result > 80) {
        resultsP.innerHTML = "   No need to stress you already came this far! You will need to get at least " + result + "% to get an " + goal + "%";
    } else if (result > 70) {
        resultsP.innerHTML = "   This is gonna be a peice of cake! You will need to get at least " + result + "% to get an " + goal + "%";
    } else {
        resultsP.innerHTML = "   What a show off! You will need to get at least " + result + "% to get an " + goal + "%";
    }
    document.getElementById("finals").appendChild(resultsP);
}