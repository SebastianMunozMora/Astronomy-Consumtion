var d, date, day, month, year;
var months = ["January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];

function getMonths (){
    var monthsnum = {}
    for (var i = 0; i < 12; i++){
        monthsnum[i] = i+1
        monthSelect(monthsnum[i])
    }
    return monthsnum
}

function getYears (){
    var years = {}
    for (var i = 0; i <= 24; i++){
        years[i] = i+1995
        yearSelect(years[i]) 
    }
    return years
}

function currentDate() {
    d = new Date();
    day = d.getDate();
    month = d.getMonth();
    year = d.getFullYear();
    date = numberFormat(day) + "/" + months[month] + "/" + year;
    setTimeout("currentDate()", 500);
    postMessage(date);
}

function getCurrentDate() {
    var d = new Date();
    parts = {
        day: d.getDate(),
        month: d.getMonth(),
        year: d.getFullYear()
    }
    rawDate = {
        parts: {
            day: day,
            month: month,
            year: year
        },
        date: makeDate(this.parts)
    };
    return rawDate;
}

function numberFormat(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

function foratYMD(dd, mm, yy) {
    return yy + "-" + mm + "-" + dd;
}

function makeDate({ day, month, year }) {
    return foratYMD(numberFormat(day), numberFormat(month + 1), year);
}

function makeDateObj({ day, month, year }, param){
    var dateObj = {}
    if (param){
        dateObj = {
            day: numberFormat(day),
            month: months[month],
            year: year 
        }
    } else{
        dateObj = {
            day: numberFormat(day),
            month: numberFormat(month+1),
            year: year 
        }
    }
    return dateObj;
}
currentDate();