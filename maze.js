var lose = 0;
 
window.onload = function() {
    $("start").onclick = start;
    $("start").onmouseover = starting;
    $("end").onmouseover = end;
    var boundaries = $$("div#maze div.boundary");
    for (var g = 0; g < boundaries.length; i++) {
        boundaries[i].onmouseover = passboundaries;
    }
};


function passboundaries() {
    if (lose === 1) {
        lose = true;
        $("status").textContent = "Better luck next time!";
        var boundaries = $$("div#maze div.boundary");
        for (var x = 0; x < boundaries.length; i++) {
            boundaries[i].addClassName("youlose");
        }
    }
}


function starting() {
    if(lose === 0) {
        lose = 1;
        $("status").textContent = "Good Luck!";
    }
}
 
function start() {
    lose = 1;
    $("status").textContent = "Good Luck!";
    
    var boundaries = $$("div#maze div.boundary");
    for (var a = 0; a < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}
 
function end() {
    if(lose === 1) {
        $("status").textContent = "Congratulations!";
        lose = 0;
    }
}
 
