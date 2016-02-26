"use strict";
/*
	Log users into training peaks. 
*/

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var browser = new webdriver.Builder()	
		.usingServer()
		.withCapabilities({'browserName': 'chrome' })
		.build();

function logIn (username, password) {
	// body...
	browser.get('http://home.trainingpeaks.com/login');
	browser.findElement(webdriver.By.id('Username')).sendKeys(username);
	browser.findElement(webdriver.By.id('Password')).sendKeys(password);
	browser.findElement(webdriver.By.id('btnSubmit')).click();
	browser.sleep(9000);
};
// browser.custom.logIn = logIn;

/*
	Logged in and loaded. Recording manual.
*/

// browser.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
// browser.executeScript('document.getElementsByClassName(\'addWorkout Run future\')[0].click()'); //switch workout type here
// browser.findElement(webdriver.By.id('totalTimeCompletedField')).sendKeys('1:00:00');
// browser.findElement(webdriver.By.id('hrAvgField')).sendKeys('150');
// browser.findElement(webdriver.By.id('close')).click();

/*
	Workout recorded. Open and test if tTSS was recorded properly
*/
// browser.sleep(2000);
// browser.executeScript('document.getElementsByClassName(\'workoutSelected\')[0].click()');



module.exports = browser; 

/*
Class names:
addWorkout Run future
addWorkout Bike future
addWorkout Swim future
addWorkout Swim future
addWorkout Crosstrain future
addWorkout DayOff future
addWorkout MountainBike future
addWorkout Strength future
addWorkout Custom future
addWorkout XC-Ski future
addWorkout Rowing future
addWorkout Other future
addWorkout Walk future

ID of Inputs:
totalTimeCompletedField	
hrAvgField
close
*/


/*
Inject this as javascript to open the day to edit: document.getElementsByClassName('addWorkout')[70].click()
*/

/*
Here is the xpath expression that works in chrome browser
$x("//div[@class='addWorkout']")[70].click()
*/

/*
This is today. It has 2 divs. The second is under class 'addWorkout wrapper'. In that div there is an add workout div to select.
var a = document.getElementsByClassName('dayWidth dayContainer day today');
*/

/*
This lists all of the add workout buttons in an array. Use .item to find index. The monday of the visible week is index 70. 
var b = document.getElementsByClassName('addWorkout')
*/
