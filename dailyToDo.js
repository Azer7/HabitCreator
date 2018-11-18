// var data;
// $.get(data.json, function(e) {
// data = e;
// });
var days = [];

class notDay {
    constructor() {
        this.didntLookAtScreen = false;        
        this.submittedSleep = false;
        this.drunk = false;
        this.submittedDrunk = false;
    }
}

function resetData() {
    for(var i = 0; i < 31; i++) {
        days.push(new notDay());
    }
}
resetData();

function initDailyToDo(){
    var myCheck = $("#mycheck");
    var myCheck2 = $("#mycheck2");
    var d = new Date()
    var currentDay = d.getDate();
    if (days[currentDay].submittedSleep){
        myCheck.prop('disabled', true);        
    } else {
        myCheck.prop('disabled', false);        
    }

    if(days[currentDay].submittedDrunk) {
        myCheck2.prop('disabled', true);
    } else {
        myCheck2.prop('disabled', false);        
    }
    
}

function submitDaily() {
    var myCheck = $("#mycheck");
    var myCheck2 = $("#mycheck2");
    var d = new Date()
    var currentDay = d.getDate();
    days[currentDay].submittedSleep = myCheck.is(":checked");
    days[currentDay].submittedDrunk = myCheck2.is(":checked");
    initDailyToDo();
}




