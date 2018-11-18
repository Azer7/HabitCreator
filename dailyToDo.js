//resetData();
var input = $("#hoursSlept")

input.change(function() {
    var num = parseInt(this.value, 10),
        min = 0,
        max = 24;

    if (isNaN(num)) {
        this.value = "";
        return;
    }

    this.value = Math.max(num, min);
    this.value = Math.min(num, max);
});


function initDailyToDo(){
    console.log("I am here");
    var myCheck = $("#mycheck");
    var myCheck2 = $("#mycheck2");
    var myInput = $("#hoursSlept")
    var d = new Date()
    var currentDay = d.getDate();
    if (days[currentDay].submittedScreen){
        myCheck.prop('disabled', true);      
    } else {
        myCheck.prop('disabled', false);        
    }

    if(days[currentDay].didntLookAtScreen) {
        myCheck.prop("checked", true)  
    } else {
        myCheck.prop("checked", false)  
    }

    if(days[currentDay].submittedDrunk) {
        myCheck2.prop('disabled', true);        
    } else {
        myCheck2.prop('disabled', false);        
    }
    
    if(days[currentDay].drunk) {
        myCheck2.prop("checked", true);
    } else {
        myCheck2.prop("checked", false);
    }

    if(days[currentDay].submittedTimeSlept){
        myInput.prop('disabled', true);
    } else {
        myInput.prop('disabled', false);
    }
    
    if(days[currentDay].timeSlept) {
        myCheck2.val(days[currentDay].timeSlept);
    } 
}

function submitDaily() {
    var myCheck = $("#mycheck");
    var myCheck2 = $("#mycheck2");
    var myInput = $("#hoursSlept");
    var d = new Date()
    var currentDay = d.getDate();
    days[currentDay].didntLookAtScreen = myCheck.is(":checked");
    days[currentDay].drunk = myCheck2.is(":checked");
    days[currentDay].timeSlept = myInput.val() ? myInput.val() : 0;
    days[currentDay].submittedScreen = true;
    days[currentDay].submittedDrunk = true;
    days[currentDay].submittedSleepTime = true;
    
    localStorage.days = JSON.stringify(days);
    updatePoints();
    initDailyToDo();
}