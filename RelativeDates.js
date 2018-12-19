//
// RelativeDates.js
//
// to create documentation:
// %: cd ~/Documents/HTML/RelativeDates
// %: documentation build RelativeDates.js -f html -o docs

var relativeDatesMap = {};
var numberOfWeeks = 22; // default Date map will have 21 weeks (n-1)

/**
 * This function checks to see if the date is a Monday, if not it returns the previous Monday
 * @param {date} date  js date object
 * @returns (date) if date is a monday it returns date otherwise it return the previous monday as a date object
 */
function getMonday(date) {
	// check to see if date is a monday 
	// if not, backup to the previous monday
	var checkDay  = new Date(date);
	var weekDay = checkDay.getDay();
	var offsetDays = 0;
	var Monday;
	
	if(weekDay != 1) { // not monday
	    offsetDays = 1 - weekDay;
	    var msg = "The entered date " + checkDay.toDateString() + " is not a monday. "
	    Monday = new Date(checkDay.setDate( checkDay.getDate() + offsetDays) ); 	    
	    msg += "An adjustment has been made to set monday to " + Monday.toDateString();
	    console.log(msg);
	    document.getElementById("startMonday").value = Monday.toDateString();
	}
	else {
	    Monday = new Date(date);
	}
	
	return Monday;
}

/**
 * this function creates the associative array with keys like 'week_1_mon'
 * and values of the date for that monday.
 * @param {date} startDate
 * @param {number} howManyWeeks the number of weeks to create the associative array
 * @returns {object} dictionary of date marker (index keys) and dates (values)
 */
function createRelativeDateDict(startDate, howManyWeeks) {
	
	var marker = "";
	// check to see if startDate is a monday 
	// if not, backup to the previous monday
	var checkDay  = new Date(startDate);
	var weekDay = checkDay.getDay();
	var offsetDays = 0;
	var firstMonday = getMonday(startDate);

	var futureDate;
	var offset = 0;
	var msg; "";
	
	for(let i=1; i < howManyWeeks; i++) {
	    marker = "week" + i + "_mon";
	    if(i==1) {
	       futureDate = new Date(firstMonday.setDate( firstMonday.getDate() ) );
	    }
        else {
	       futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1) );
	    }
	    relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_tue";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_wed";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_thu";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_fri";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_sat";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_sun";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	   
	}
	return relativeDatesMap;
}





/**
 * this function creates the associative array with keys like 'week_1_mon'
 * and values of the date for that monday.  This includes a week 0.
 * @param {date} startDate
 * @param {number} howManyWeeks the number of weeks to create the associative array
 * @returns {object} dictionary of date marker (keys) and dates (values)
 */
function createRelativeDateDict2(startDate, howManyWeeks) {
	
	var marker = "";
	var checkDay  = new Date(startDate);
	// we want one week earlier than the startDate
	// so we can have week0 markers if needed
	checkDay = new Date(checkDay.setDate( checkDay.getDate() - 7) );
	var weekDay = checkDay.getDay();
	var offsetDays = 0;
	var firstMonday;
	
	// check to see if startDate is a monday 
	// if not, set firstMonday to the monday of startDate's week
	if(weekDay != 1) { // not monday
	    offsetDays = 1 - weekDay;

	    //----------------------------
	    // question to self when reviewing this code month after I've written it:
	    // isn't checkDay now one week earlier than the user entered startDate?
	    // as per the code at the top of the function
	    // maybe the message is wrong? i.e. "The entered (date - 7 days) is not a monday
	    //----------------------------

	    var msg = "The entered date " + checkDay.toDateString() + " is not a monday. ";
	    firstMonday = new Date(checkDay.setDate( checkDay.getDate() + offsetDays) ); 	    
	    msg += "An adjustment has been made to set the first monday to " + firstMonday.toDateString();
	    console.log(msg);
	    document.getElementById("startMonday").value = firstMonday.toDateString();
	    
	}
	else {
	    firstMonday = new Date(startDate);
	}
		
	var futureDate;
	var offset = 0;
	var msg; "";
	
	// includes week0 i.e. the week before the firstMonday
	for(let i=0; i < howManyWeeks; i++) {
	    marker = "week" + i + "_mon";
	    if(i==1) {
	       futureDate = new Date(firstMonday.setDate( firstMonday.getDate() ) );
	    }
        else {
	       futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1) );
	    }
	    relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_tue";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_wed";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_thu";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_fri";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_sat";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	
	   marker = "week" + i + "_sun";
	   futureDate = new Date(firstMonday.setDate( firstMonday.getDate() + 1 ) );
	   relativeDatesMap[marker] = futureDate.toDateString();
	   
	}
	return relativeDatesMap;
}



/**
 * this function is a debugging utility
 * @returns {string} text readout of the map keys and values
 */
function showFullMap() {
    var fullMapText = "Date Map for First Monday = " + relativeDatesMap["week1_mon"];
    
    for(let i=1; i<numberOfWeeks; i++) {
        marker = "week" + i + "_mon";
        fullMapText += "<br>week" + i + "_mon = " + relativeDatesMap[marker];
        marker = "week" + i + "_tue";
        fullMapText += "<br>week" + i + "_tue = " + relativeDatesMap[marker];
        marker = "week" + i + "_wed";
        fullMapText += "<br>week" + i + "_wed = " + relativeDatesMap[marker];
        marker = "week" + i + "_thu";
        fullMapText += "<br>week" + i + "_thu = " + relativeDatesMap[marker];
        marker = "week" + i + "_fri";
        fullMapText += "<br>week" + i + "_fri = " + relativeDatesMap[marker];
        marker = "week" + i + "_sat";
        fullMapText += "<br>week" + i + "_sat = " + relativeDatesMap[marker];
        marker = "week" + i + "_sun";
        fullMapText += "<br>week" + i + "_sun = " + relativeDatesMap[marker];
        
        fullMapText += "<br>"
    }
    return fullMapText;
}


/**
 * this function replaces a marker with its associated value
 * @param {string} marker
 * this makes a change in the document.
 */
function replaceMarker(marker) {
    var msg = "replaceMarker() marker=" + marker;
//    console.log(msg);

    var markerNames = document.getElementsByName(marker);
    if (markerNames != undefined)  {
        for(let count=0; count<markerNames.length; count++)  {
            markerNames[count].innerHTML = relativeDatesMap[marker]
        }
    }
}

/**
 * this function replaces any of tha markers with their associated values
 *
 * this function makes changes in the page
 */
function replaceRelativeDates() {
//    console.log("replaceRelativeDates2()");
    var marker;
    var markerID;
    var markerNames = [];
    
    for(let i=1; i<numberOfWeeks; i++) {
        marker = "week" + i + "_mon";
        replaceMarker(marker);

        marker = "week" + i + "_tue";
        replaceMarker(marker);

        marker = "week" + i + "_wed";
        replaceMarker(marker);

        marker = "week" + i + "_thu";
        replaceMarker(marker);

        marker = "week" + i + "_fri";
        replaceMarker(marker);

        marker = "week" + i + "_sat";
        replaceMarker(marker);

        marker = "week" + i + "_sun";
        replaceMarker(marker);
    }
}
// end new code ------------------------------------------------------------



/**
 * this function replaces marker found in the dictionary with their value
 * @param {string} textInput
 * @param {string} delimitChar
 * @returns {string} the text with the replacements inserted
 */
function addRelativeDates(textInput, delimitChar) {
    var delimit = "";
    var possibleText; "";
    if(delimitChar == undefined)
        delimit = "*"; // default
    console.log(delimit);
    var arr = textInput.split(delimit);
    var fixedText = "";
    for(let i=0; i<arr.length; i++) {
        if(arr[i].includes("week") && arr[i].includes("_") ) {
            possibleText = relativeDatesMap[arr[i]];
            if(possibleText != undefined)
                fixedText += relativeDatesMap[arr[i]];
            else
                fixedText += arr[i];
        }
        else {
            fixedText += arr[i];
        }
    }
    return fixedText;
}

/**
 * this function adds spans where there were marker like '*week_1_mon*'
 * this is an intermediate step in the replacement process.
 * @param {string} markedText the input text that has markers
 * @returns {string} the spans have been inserted into the string.
 */
function processMarkers(markedText) {
    var spanCode = "";
    var spanElement = "";
    var delimit = "*";
    var possibleText; "";

    var arr = markedText.split(delimit);
    var fixedText = "";
    for(let i=0; i<arr.length; i++) {
        if(arr[i].includes("week") && arr[i].includes("_") ) {
            possibleText = relativeDatesMap[arr[i]];
            if(possibleText != undefined) {
                spanElement = "<span id='" + arr[i] + "' name='" + arr[i] + "'>*" + arr[i] +  "*</span>"; 
                spanCode += spanElement;
            }
            else {
                spanCode += arr[i];
            }
        }
        else {
            spanCode += arr[i];
        }
    }
    return spanCode;
}

/**
 * this function checks to see if there is a referrer to this document (linked from <a href> tag)
 * NOT USED
 * @param {string} startMondayList
 * changes the startMonday date, this does not work as planned because many sites 
 * (like Canvas) supress the referrer info.
 */
function checkForReferrer(startMondayList) {
    var myReferrer = document.referrer;
    var foundReferrer = false;
    console.log("myReferrer="+myReferrer);
    // if myReferrer is on the startDate list, use it's custom startDate
    for(var i=0; i<startMondayList.length; i++) {
        if(startMondayList[i][0] === myReferrer) {
            startMonday = startMondayList[i][1];
            foundReferrer = true;
            break;
        }
    }
    if(!foundReferrer) {
        startMonday = startMondayList[2][1];  // default, first date in list.
    }
}

/**
 * this function does the entire process of adding spans then substitution of the dates
 * it process the entire html page
 */
function addDatesToPage() {
//    checkForReferrer(startMondayList); // sets startMonday
    createRelativeDateDict(startMonday, numberOfWeeks);
    var pageText = document.body.innerHTML;
    var processedPage = processMarkers(pageText);
    document.body.innerHTML = processedPage;
    replaceRelativeDates();
}

/**
 * this function does the entire process of adding spans then substitution of the dates
 * it process the entire html page
 */
function addDatesToPage2() {
    checkForReferrer(startMondayList); // sets startMonday
    createRelativeDateDict(startMonday, numberOfWeeks);
    var pageText = document.body.innerHTML;
    var processedPage = processMarkers(pageText);
    document.body.innerHTML = processedPage;
    replaceRelativeDates();
}
