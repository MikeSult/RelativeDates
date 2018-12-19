//
// setStartDateBeta.js
//
// defines startMonday used in RelativeDates.js
//
// var startMonday = new Date("Sept 26, 2016"); // Fall Quarter 2016
//var startMonday = new Date("Sept 25, 2017"); // Fall Quarter 2017
var startMonday = new Date("Jan 8, 2018"); // Winter Quarter 2018
//var startMonday = new Date("Apr 9, 2018"); // Spring Quarter 2018

// multiple uses of overlapping courses i.e. end of spring/early summer/summer sessions
var baseURL = "http://www.guitarland.com/RelativeDates/";
// var baseURL = "";

var startMonday1 = new Date("Jan 9, 2017"); // Winter Quarter 2017
var url_1 = baseURL + "RelativeDates.html";

var startMonday2 = new Date("Feb 6, 2017"); // Winter Quarter 2017 four week offset
var url_2 = baseURL + "RelativeDateExamples.html";

var startMonday3 = new Date("Mar 6, 2017"); // Winter Quarter 2017 8 week offset
var url_3 = baseURL + "RelativeDatesDemo.html";

var startMondayList = [[url_1,startMonday1], [url_2,startMonday2], [url_3,startMonday3]];

console.log("startMondayList[0]="+startMondayList[0]+"\n\nstartMondayList[1]="+startMondayList[1]+"\n\nstartMondayList[2]="+startMondayList[2]);