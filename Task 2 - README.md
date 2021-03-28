# api-test
This is a BDD test automation for testing customer app API using python, behave and allure-behave reports.


## PRE-REQUISITES ##

Please install Python 3.9.1 or above in your machine before you execute this test. For instructions on how to install, go to https://www.python.org/downloads/. 


## How to run it ##

1. After clonning the repo...

2. Setup the environment
```
cd to the directory 'api-test'.
activate your virtualenv - Please refer https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/ for more details
run: pip install -r requirements.txt in your terminal.
```
3. Run the test
To run the test with allure reports inputs
```
	behave -f allure_behave.formatter:AllureFormatter -o AllureReports
```
To run without allure reports inputs
	behave --no-capture

4. Generate allure-report from inputs generated in step 4.

Due to the time limitation couldn't complete the steps for generating the allure reports from the inputs generated from API test run. More details 
on the allure reports are available in the below link
https://docs.qameta.io/allure/



## Test Details ##
Scenario : This is testing the API based on the given input and ensures that customer details are matching correctly. 
Expected Result : This test is executed for 3 different customers and expectation is that customer details will exactlly match when API is compared against 
example table on the .feature file.

Below is the logic applied for preparing the examples table. 
### customer size is: Small, when # of employees is <= 100; Medium when it is <= 1000; Big otherwise. 

### Assumption : I think upper limit for small <=10 is a typo as I see it is 100 in UI test. I have used 100 for the timebeing. 
### If we need to change the upper limit of small to <=10 then it needs to be updated in the Examples table of the feature file 
### as well as key value in the utilities/properties.ini.
