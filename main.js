var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel");
var points = 0;

function showPanel(panelIndex, colorCode) {
    var fileToLoad = "";
    switch(panelIndex) {
        case 0:
        fileToLoad = "goalsPR.html";
        break;
        case 1:
        fileToLoad = "dailyToDo.html";
        break;
        case 2:
        fileToLoad = "rewards.html";
        break; 
    }

    $.get(fileToLoad, function(data) {
        $("#tabPanel").html(data);
        switch(panelIndex) {
            case 0:
            initGoalsPR();
            break;
            case 1:
            initDailyToDo();
            break;
            case 2:
            initRewards();
            break;
        }
    });

    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
});
tabButtons[panelIndex].style.backgroundColor=colorCode;
tabButtons[panelIndex].style.color="white";
tabPanels.forEach(function(node){
    node.style.display="none";
});
// tabPanels[panelIndex].style.display="block";
// tabPanels[panelIndex].style.backgroundColor=colorCode;
}


//code to store days data locally
var Day = {
    didntLookAtScreen: false,
    submittedSleep: false,
    drunk: false,
    submittedDrunk: false
}

var days = [];
if(localStorage.days == undefined) {
resetData();
} else {
days = JSON.parse(localStorage.days);
}

function resetData() {
localStorage.removeItem("days");
days = [];
for(var i = 0; i < 31; i++) {
    days.push(Object.assign({}, Day));
}
localStorage.days = JSON.stringify(days);
}

function updatePoints() {
    for(let day of days) {
        points += day.didntLookAtScreen * 50;
        points += day.drunk * 50;
    }
    $("#myBar").width(String(points) + "%");
}

showPanel(0,'#f44336');
updatePoints();
