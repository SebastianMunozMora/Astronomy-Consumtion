var dateButtons = {}
//get number of days in a month
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

/*function addDay(id,jsondata) {
//add linebreak after 7
    jsondata.day = id+1;
    if (num >= 7){
        var linebreak = document.createElement("br");
        document.getElementById("datepick").appendChild(linebreak);
        num = 0;
    }
    num++;
//create buttons
    var div = document.createElement("div");
    div.className = "divday";
    var btn = document.createElement(//add linebreak after 7
    if (num >= 7){
        var linebreak = document.createElement("br");
        document.getElementById("datepick").appendChild(linebreak);
        num = 0;
    }
    num++;
//create buttons
    var btn = document.createElement("BUTTON");
    var textNode = document.createTextNode(date.day);
    btn.appendChild(textNode);
    btn.className = "daybutton";
    btn.id = id;
    //console.log(date.day)
    btn.onclick = function () {buttonFunction(id,date)}
    document.getElementById("datepick").appendChild(btn);
    
    //document.getElementById(id).onclick = function () { buttonFunction(btn.id,date);}"BUTTON");
    //var textNode = document.createTextNode(jsondata.day);
    //btn.appendChild(textNode);
    btn.className = "daybutton";
    btn.id = id;
    //btn.src = jsondata.url
    btn.style.backgroundImage = "url("+jsondata.url+")"; 
    div.appendChild(btn)
    document.getElementById("datepick").appendChild(btn);
    console.log(jsondata.url)
}*/
function calendarDays(date,days){
    num = 0;
    for (var i = 1; i <= days; i++) {
        addDayNumber(i,date)
    }
}
function addDayNumber(i,date) {
        date.day = i;
        //add linebreak after 7
        if (num >= 7) {
            var linebreak = document.createElement("br");
            document.getElementById("datepick").appendChild(linebreak);
            num = 0;
        }
        num++;
        //create buttons
        var btn = document.createElement("BUTTON");
        var textNode = document.createTextNode(date.day);
        btn.appendChild(textNode);
        btn.className = "daybutton";
        btn.id = i;
        btn.onclick = function () {date.day = i; buttonFunction(i, date);};
        document.getElementById("datepick").appendChild(btn);
}

function buttonFunction(id,dates) {
    date.day = id;
    console.log("ButtonFunction date :"+makeDate(dates));
    requestApodUrl(makeDate(dates), updateGui, id);
}

function monthSelect(months) {
    var optn = document.createElement("option")
    optn.text = months
    optn.value = months
    var select = document.getElementById("month")
    select.appendChild(optn)
}

function yearSelect(years) {
    var optn = document.createElement("option")
    optn.text = years
    optn.value = years
    var select = document.getElementById("year")
    select.appendChild(optn)
}
function resetCalendar() {
    var dayDiv = document.getElementById("datepick");
    while (dayDiv.firstChild) {
        dayDiv.removeChild(dayDiv.firstChild);
    }
}
