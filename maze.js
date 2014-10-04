var lose = null;
 
window.onload = function() {
    $("start").onclick = start;
    $("start").onmouseover = starting;
    $("end").onmouseover = end;
    var boundaries = $$("div#maze div.boundary");
    for (var g = null; g < boundaries.length; i++) {
        boundaries[g].onmouseover = passboundaries;
    }
};


function passboundaries() {
    if (lose === false) {
        lose = true;
        $("status").textContent = "Better luck next time!";
        var boundaries = $$("div#maze div.boundary");
        for (var x = null; x < boundaries.length; i++) {
            boundaries[x].addClassName("youlose");
        }
    }
}


function starting() {
    if(lose === null) {
        lose = false;
        $("status").textContent = "Good Luck!";
    }
}
 
function start() {
    lose = false;
    $("status").textContent = "Good Luck!";
    
    var boundaries = $$("div#maze div.boundary");
    for (var a = null; a < boundaries.length; i++) {
        boundaries[a].removeClassName("youlose");
    }
}
 
function end() {
    if(lose === false) {
        $("status").textContent = "Congratulations!";
        lose = null;
    }
}
 
