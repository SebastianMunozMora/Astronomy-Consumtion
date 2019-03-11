var mycurrentDate;
var monthDate,days;

window.onload = function() {
    startWebWorker();
    mycurrentDate = getCurrentDate();

    //mycurrentDate.parts.day;
    //console.log(mycurrentDate);
    requestApodUrl(makeDate(mycurrentDate.parts),updateGui);
    //updateGui(jsondata);
    monthDate = mycurrentDate
    //monthDate.parts.month = 0;
    var selectMonth = document.getElementById("month")
    var selectYear = document.getElementById("year")
    
    //days = daysInMonth(makeDateObj(monthDate.parts,false).month,makeDateObj(monthDate.parts,false).year)
    days = monthDate.parts.day
    //resetCalendar()
    getMonths()
    getYears()
    selectMonth.value = monthDate.parts.month+1
    selectYear.value = monthDate.parts.year
    calendarDays(monthDate.parts,days)
    
    calendarManager()
    //addDayNumber(undefined,monthDate.parts,days)
};
function calendarManager(){
    var selectMonth = document.getElementById("month")
    var selectYear = document.getElementById("year")
    selectMonth.onchange = function (){
        calendarChange()
    }
    selectYear.onchange = function (){
        calendarChange()
    }
}
function calendarChange(){
    var selectMonth = document.getElementById("month")
    var selectYear = document.getElementById("year")
    var monthOptions = selectMonth.options[selectMonth.selectedIndex].value
    var yearOptions = selectYear.options[selectYear.selectedIndex].value
    var newDate = {
        day: 2,
        month: monthOptions,
        year: yearOptions
    }
    newDate.month = Number(monthOptions)-1
    newDate.year = Number(yearOptions)
    var days = daysInMonth(newDate.month+1, newDate.year)
    resetCalendar(); 
    //console.log("month: " + newDate.month + " year: " + yearOptions + " days: " + days); 
    calendarDays(newDate,days)
}
function startWebWorker() {
    if (typeof(Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
            wd = new Worker("./scripts/date_web_worker.js");
            w = new Worker("./scripts/time_web_worker.js");
        }
        w.onmessage = function(event) {
            document.getElementById("clock").innerHTML = event.data;
        };
        wd.onmessage = function(event) {
            document.getElementById("calendar").innerHTML = event.data;
        }

    } else {
        alert("Web Worker not supported");
    }
}

function stopWorker() {
    w.terminate();
    wd.terminate();
    w = undefined;
    wd = undefined;
}

function updateCalendar(date,days){
    selectMonth.onchange = function (){resetCalendar(); calendarDays(date,days)}
    selectYear.onchange = function (){resetCalendar(); calendarDays(date,days)}
}
