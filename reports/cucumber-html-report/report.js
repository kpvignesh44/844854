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
        "kpraj@gmail.com",
        "admin^%$#"
      ],
      "line": 17,
      "id": "testing-the-practice-automation-website;automation-website;;4"
    },
    {
      "cells": [
        "pvic91@gmail.com",
        "admin^%$#"
      ],
      "line": 18,
      "id": "testing-the-practice-automation-website;automation-website;;5"
    },
    {
      "cells": [
        "arya@gmail.com",
        "89dmin^%$#"
      ],
      "line": 19,
      "id": "testing-the-practice-automation-website;automation-website;;6"
    },
    {
      "cells": [
        "mahesh@gmail.com",
        "90admin^%$#"
      ],
      "line": 20,
      "id": "testing-the-practice-automation-website;automation-website;;7"
    },
    {
      "cells": [
        "sachin@gmail.com",
        "a09dmin^%$#"
      ],
      "line": 21,
      "id": "testing-the-practice-automation-website;automation-website;;8"
    },
    {
      "cells": [
        "raju@gmail.com",
        "admin^%$#"
      ],
      "line": 22,
      "id": "testing-the-practice-automation-website;automation-website;;9"
    },
    {
      "cells": [
        "sanjay@gmail.com",
        "89dmin^%$#"
      ],
      "line": 23,
      "id": "testing-the-practice-automation-website;automation-website;;10"
    },
    {
      "cells": [
        "gangji@gmail.com",
        "adjhmin^%$#"
      ],
      "line": 24,
      "id": "testing-the-practice-automation-website;automation-website;;11"
    },
    {
      "cells": [
        "bala@gmail.com",
        "aygvhdmin^%"
      ],
      "line": 25,
      "id": "testing-the-practice-automation-website;automation-website;;12"
    },
    {
      "cells": [
        "mala@gmail.com",
        "ajhbdmin^%$#"
      ],
      "line": 26,
      "id": "testing-the-practice-automation-website;automation-website;;13"
    },
    {
      "cells": [
        "kala@gmail.com",
        "ajkkdmin^%$#"
      ],
      "line": 27,
      "id": "testing-the-practice-automation-website;automation-website;;14"
    },
    {
      "cells": [
        "karthik@gmail.com",
        "hkujadmin^%$"
      ],
      "line": 28,
      "id": "testing-the-practice-automation-website;automation-website;;15"
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
  "duration": 4550885843,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 17962415960,
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
  "duration": 7385961838,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2072318098,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7319541179,
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
  "duration": 3422225100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 23128769108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vicky@gmail.com",
      "offset": 17
    },
    {
      "val": "sanjeev!@#$",
      "offset": 39
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7268645141,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2058087446,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7310320272,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;4",
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
  "name": "The user enters \"kpraj@gmail.com\" and \"admin^%$#\"",
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
  "duration": 3490208946,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 32914180735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kpraj@gmail.com",
      "offset": 17
    },
    {
      "val": "admin^%$#",
      "offset": 39
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7249380578,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2057047210,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7315777829,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;5",
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
  "name": "The user enters \"pvic91@gmail.com\" and \"admin^%$#\"",
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
  "duration": 4207151914,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 28591244726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pvic91@gmail.com",
      "offset": 17
    },
    {
      "val": "admin^%$#",
      "offset": 40
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7284523179,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2063261817,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7312301062,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;6",
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
  "name": "The user enters \"arya@gmail.com\" and \"89dmin^%$#\"",
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
  "duration": 3371373240,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 22021441695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arya@gmail.com",
      "offset": 17
    },
    {
      "val": "89dmin^%$#",
      "offset": 38
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7318091645,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 11924638976,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7315002655,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;7",
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
  "name": "The user enters \"mahesh@gmail.com\" and \"90admin^%$#\"",
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
  "duration": 3431236827,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 19377286914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mahesh@gmail.com",
      "offset": 17
    },
    {
      "val": "90admin^%$#",
      "offset": 40
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7317026489,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2056002444,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7315133298,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;8",
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
  "name": "The user enters \"sachin@gmail.com\" and \"a09dmin^%$#\"",
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
  "duration": 3435867481,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 21583051972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sachin@gmail.com",
      "offset": 17
    },
    {
      "val": "a09dmin^%$#",
      "offset": 40
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7326958380,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 14415512087,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7333107288,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;9",
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
  "name": "The user enters \"raju@gmail.com\" and \"admin^%$#\"",
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
  "duration": 4649277045,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 15837160243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raju@gmail.com",
      "offset": 17
    },
    {
      "val": "admin^%$#",
      "offset": 38
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7306795175,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2053643695,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7309950242,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;10",
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
  "name": "The user enters \"sanjay@gmail.com\" and \"89dmin^%$#\"",
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
  "duration": 3299818987,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 29761914381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjay@gmail.com",
      "offset": 17
    },
    {
      "val": "89dmin^%$#",
      "offset": 40
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7337396609,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2056353217,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7314471398,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;11",
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
  "name": "The user enters \"gangji@gmail.com\" and \"adjhmin^%$#\"",
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
  "duration": 3288918978,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 33843291782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gangji@gmail.com",
      "offset": 17
    },
    {
      "val": "adjhmin^%$#",
      "offset": 40
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7355543154,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 8098433870,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7069173981,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;12",
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
  "name": "The user enters \"bala@gmail.com\" and \"aygvhdmin^%\"",
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
  "duration": 3396728939,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 20105615084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bala@gmail.com",
      "offset": 17
    },
    {
      "val": "aygvhdmin^%",
      "offset": 38
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7280456632,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2057060803,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7068157910,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;13",
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
  "name": "The user enters \"mala@gmail.com\" and \"ajhbdmin^%$#\"",
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
  "duration": 3295132829,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 18100414659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mala@gmail.com",
      "offset": 17
    },
    {
      "val": "ajhbdmin^%$#",
      "offset": 38
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7358831885,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 14158621799,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7081639441,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;14",
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
  "name": "The user enters \"kala@gmail.com\" and \"ajkkdmin^%$#\"",
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
  "duration": 3327639914,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 29872567906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kala@gmail.com",
      "offset": 17
    },
    {
      "val": "ajkkdmin^%$#",
      "offset": 38
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7307249783,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2053567801,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7075342523,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;15",
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
  "name": "The user enters \"karthik@gmail.com\" and \"hkujadmin^%$\"",
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
  "duration": 3468165387,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 15599753892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karthik@gmail.com",
      "offset": 17
    },
    {
      "val": "hkujadmin^%$",
      "offset": 41
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7346056430,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 9718865611,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7073146134,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "To check if the user is able to login with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC-02_Login_Functionlity"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "open the Practice automation",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Enter the Email and password in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Click Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefiniton.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3368997878,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefiniton.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 17823405344,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefiniton.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4884334087,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefiniton.click_Login_Button()"
});
formatter.result({
  "duration": 15193306017,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7070558948,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "To check if the user is able to filter the price using slider",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-filter-the-price-using-slider",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@TC-03_Filter_Functionality"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "Launching the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "opening the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Entering  the Email and password in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Clicking Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click_Shop_icon and Filter price using Slider",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Closing the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3313002230,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 11245717287,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4335617070,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 10268566604,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.click_shop_icon_and_Filter_price_using_Slider()"
});
formatter.result({
  "duration": 42409034306,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7092522083,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "To check if the user is able to add the books in the basket on the filtered price",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-add-the-books-in-the-basket-on-the-filtered-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@TC_04_Filtering_And_adding_to_Basket"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Launching the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "opening the Practice automation",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Entering the Email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Clicking Login",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Click Shop icon Filter price using Slider",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Add the books to the basket and View the cart",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Close",
  "keyword": "Then "
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3397357990,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 26542551496,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4347803876,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 22196412376,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.click_shop_icon_and_Filter_price_using_Slider()"
});
formatter.result({
  "duration": 105888077803,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.add_the_books_to_the_basket_and_View_the_cart()"
});
formatter.result({
  "duration": 7093825493,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7580854829,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "To check if the user is able to buy books from android category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-android-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@TC_05_Adding_books_from_android_Category"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "Launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "opening the website",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Enter Email and password in website",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "login Button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Click Shop icon, click android and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "View the cart android book",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3456768103,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 21958014120,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4320682984,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 9916622175,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.click_Shop_icon_click_android_and_buy_the_book()"
});
formatter.result({
  "duration": 75069643692,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.practiceautomation.stepdefinition.AndroidCategoryStepDefinition.click_Shop_icon_click_android_and_buy_the_book(AndroidCategoryStepDefinition.java:65)\r\n\tat ✽.Then Click Shop icon, click android and buy the book(src/main/resources/Feature/TestCase.feature:65)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.view_the_cart_android_book()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 70,
  "name": "To check if the user is able to buy books from javascipt category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-javascipt-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@TC_06_Adding_books_from_JavaScript_Category"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "Launching a chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "open automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Enter Email password in website",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Click Login Button in myaccount",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Click Shop icon, Click JavaScript and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "View the cart js book",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Closing the browser tab",
  "keyword": "Then "
});
formatter.match({
  "location": "JavascriptStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3450408127,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 17066869981,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4317850748,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 7913041196,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.click_Shop_icon_Click_JavaScript_and_buy_the_book()"
});
formatter.result({
  "duration": 33608218504,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.view_the_cart_js_book()"
});
formatter.result({
  "duration": 9181348402,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7106109715,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "To check if the user is able to able to filter the prices from low to high",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-able-to-filter-the-prices-from-low-to-high",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 78,
      "name": "@TC_07_Filtering_The_Price_from_low_to_high"
    }
  ]
});
formatter.step({
  "line": 80,
  "name": "Launching the chrome browser in the system",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "open the Automation Practice website",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Enter the Email and password in Practice website",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "Click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Click Shop icon and in Dropdown select the prices from low to high",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Close the browser tab",
  "keyword": "Then "
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3403408726,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 24073379856,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4334679158,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 10514877449,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.click_Shop_icon_and_in_Dropdown_select_the_prices_from_low_to_high()"
});
formatter.result({
  "duration": 29943575798,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7088755712,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "To check if the user is able to buy books from HTML category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-html-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@TC_08_Delete_item_from_cart"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "Launch the chrome browser to open the automation website",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "opening the Practice automation website on chrome",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Enter the Email_id and password in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "Clicking Login Button on automation website",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Click Shop icon, Click HTML and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "View the cart and Delete item from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Closing the chrome browser tabs",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingCartStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 4473597645,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 16788312960,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4324875644,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 9702486900,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.click_Shop_icon_Click_HTML_and_buy_the_book()"
});
formatter.result({
  "duration": 63703389697,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.view_the_cart_html_book()"
});
formatter.result({
  "duration": 7872361370,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7103609373,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "To check if the user able to place the order",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-able-to-place-the-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@TC_09_Placing_the_order"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "Launching a chrome to open website",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "opening the Practice automation website in system",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "Enter Email password in  auto website",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "Click Login Button in automation website",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "Click Shop button  click Java and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "View cart, Click proceed to checkout, Enter the billing details and Click place order",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "Order status Message",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Logut the user",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Closing the browser tabs",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 4057465571,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 15835875712,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4482344688,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 9657370117,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.click_Shop_icon_Click_JavaScript_and_buy_the_book()"
});
formatter.result({
  "duration": 56193518973,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.view_cart_Click_proceed_to_checkout_Enter_the_billing_details_and_Click_place_order()"
});
formatter.result({
  "duration": 26111610316,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.order_status_Message()"
});
formatter.result({
  "duration": 5706453011,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.logut_the_user()"
});
formatter.result({
  "duration": 24441345049,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7114657395,
  "status": "passed"
});
});