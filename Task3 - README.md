# ui-test
This is a BDD test automation for testing customer app wep pages using cypress, cucumber and gherkin.


## PRE-REQUISITES ##

The only pre-requisite to run this app is to have npm and Node.js installed in your machine. For instructions on how to install, go to https://nodejs.org/en/


## How to run it ##

1. After clonning the repo...

2. Setup the environment
```
cd to the directory 'ui-test'.
npm install
```
3. Run the test
To run the test in headless mode using electron browser
```
	npm run test
```
To run the test in headed mode using electron browser

```
	npm run headmode
```

### npm run headmode  --browser "edge" for changing the browser to edge. Use "chrome" for chrome browser and "edge" for edge browser.



## Test Details ##
Scenario - This is testing the web page based on the given input and ensures that customer details are matching correctly. 
Expected Result : This test is executed for 3 different customers and expectation is that customer details will exactlly match when web page is compared against 
example table of .feature file.

Below is the logic applied for preparing the examples table. 
### customer size is: Small, when # of employees is <= 100; Medium when it is <= 1000; Big otherwise. 

### Assumption : changed the lower limit of medium to >100 from >10 as the limit of small is less than or equal to 100.
### I have used upper limit for small as 100 for the timebeing. If we need to change the upper limit of small to <=10 then 
### it needs to be updated in the Examples table of the .feature file in the ui-test\cypress\integration\features folder. 
