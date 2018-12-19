//
// setStartDate6Week.js
//
// defines startMonday used in RelativeDates.js
//
// var startMonday = new Date("Jan 9, 2017"); // Winter Quarter 2017
// var startMonday = new Date("May 22, 2017"); // Spring Quarter 2017
//var startMonday = new Date("July 3, 2017"); // Summer Quarter 2017
//var startMonday = new Date("May 21, 2018"); // late Spring Quarter 2018
var startMonday = new Date("July 2, 2018"); // Summer Quarter 2018

// multiple uses of overlapping courses i.e. end of spring/early summer/summer sessions
var baseURL = "file:///Users/michaelsult1/Documents/HTML/RelativeDates/";

var startMonday1 = new Date("July 3, 2017"); // Winter Quarter 2017
var url1 = baseURL + "RelativeDates.html";

var startMonday2 = new Date("July 3, 2017"); // Winter Quarter 2017 two week offset
var url2 = baseURL + "RelativeDateExamples.html";

var startMonday3 = new Date("July 3, 2017"); // Winter Quarter 2017 four week offset
var url3 = baseURL + "RelativeDateExamples.html";

var startMondayList = [[url1,startMonday1], [url2,startMonday2], [url3,startMonday3]];

//console.log("startMondayList[0]="+startMondayList[0]+"\nstartMondayList[1]="+startMondayList[1]);