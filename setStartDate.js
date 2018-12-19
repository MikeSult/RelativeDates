//
// setStartDate.js
//
// defines startMonday used in RelativeDates.js
//
// var startMonday = new Date("Sept 26, 2016"); // Fall Quarter 2016
//var startMonday = new Date("Sept 25, 2017"); // Fall Quarter 2017
//var startMonday = new Date("Jan 8, 2018"); // Winter Quarter 2018
//var startMonday = new Date("Apr 9, 2018"); // Spring Quarter 2018
var startMonday = new Date("Sept 24, 2018"); // Fall Quarter 2018

// multiple uses of overlapping courses i.e. end of spring/early summer/summer sessions
var baseURL = "file:///Users/michaelsult1/Documents/HTML/RelativeDates/";

var startMonday1 = new Date("Jan 9, 2017"); // Winter Quarter 2017
var url1 = baseURL + "RelativeDates.html";

var startMonday2 = new Date("Jan 23, 2017"); // Winter Quarter 2017 two week offset
var url2 = baseURL + "RelativeDateExamples.html";

var startMonday3 = new Date("Feb 6, 2017"); // Winter Quarter 2017 four week offset
var url3 = baseURL + "RelativeDateExamples.html";

var startMondayList = [[url1,startMonday1], [url2,startMonday2], [url3,startMonday3]];

console.log("startMondayList[0]="+startMondayList[0]+"\nstartMondayList[1]="+startMondayList[1]);