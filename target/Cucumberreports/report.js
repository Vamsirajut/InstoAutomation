$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Borrowcapacity.feature");
formatter.feature({
  "line": 2,
  "name": "Home loan borrowing capacity",
  "description": "",
  "id": "home-loan-borrowing-capacity",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Verify the home loan borrowing capacity using  home loan calculator",
  "description": "",
  "id": "home-loan-borrowing-capacity;verify-the-home-loan-borrowing-capacity-using--home-loan-calculator",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User selects personal details",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters his earnings",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters his expenses",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Work out how much I could borrow",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on start over",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Form gets cleared with default values",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Borrowcapacity.user_selects_personal_details()"
});
formatter.result({
  "duration": 39218581500,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.enter_earnings()"
});
formatter.result({
  "duration": 5411690553,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.enter_expenses()"
});
formatter.result({
  "duration": 6378858600,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.calculateLoanAndVerify()"
});
formatter.result({
  "duration": 10379654720,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.start_over()"
});
formatter.result({
  "duration": 5187019849,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.Form_gets_cleared_with_default_values()"
});
formatter.result({
  "duration": 421208115,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.closeBrowserForExp()"
});
formatter.result({
  "duration": 2055934464,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify message is displayed to call customercare when entering one dollar as living expenses",
  "description": "",
  "id": "home-loan-borrowing-capacity;verify-message-is-displayed-to-call-customercare-when-entering-one-dollar-as-living-expenses",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User selects personal details",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters one dollar as expense",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Work out how much I could borrow",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User gets message to call the customer care number",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Borrowcapacity.user_selects_personal_details()"
});
formatter.result({
  "duration": 37247266549,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.User_enters_one_dollar_as_expense()"
});
formatter.result({
  "duration": 5141181370,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.calculateLoanAndVerify()"
});
formatter.result({
  "duration": 10234301235,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.User_gets_message_to_call_the_customer_care_number()"
});
formatter.result({
  "duration": 5084243756,
  "status": "passed"
});
formatter.match({
  "location": "Borrowcapacity.closeBrowserForExp()"
});
formatter.result({
  "duration": 978289971,
  "status": "passed"
});
});