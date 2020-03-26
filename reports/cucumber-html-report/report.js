$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/TestCase.feature");
formatter.feature({
  "line": 2,
  "name": "Testing the practice automation website",
  "description": "",
  "id": "testing-the-practice-automation-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC-01_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "open the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "testing-the-practice-automation-website;automation-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "testing-the-practice-automation-website;automation-website;;1"
    },
    {
      "cells": [
        "vignesh@gmail.com",
        "9869868@7\u0026"
      ],
      "line": 15,
      "id": "testing-the-practice-automation-website;automation-website;;2"
    },
    {
      "cells": [
        "vicky@gmail.com",
        "sanjeev!@#$"
      ],
      "line": 16,
      "id": "testing-the-practice-automation-website;automation-website;;3"
    },
    {
      "cells": [
        "kpvic@gmail.com",
        "admin^%$#"
      ],
      "line": 17,
      "id": "testing-the-practice-automation-website;automation-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation"
    },
    {
      "line": 3,
      "name": "@TC-01_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "open the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user enters \"vignesh@gmail.com\" and \"9869868@7\u0026\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterationStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 5413840913,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 18211018722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vignesh@gmail.com",
      "offset": 17
    },
    {
      "val": "9869868@7\u0026",
      "offset": 41
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7330186698,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2057311140,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7081638687,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation"
    },
    {
      "line": 3,
      "name": "@TC-01_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "open the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user enters \"vicky@gmail.com\" and \"sanjeev!@#$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterationStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3393821943,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
