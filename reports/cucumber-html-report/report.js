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
  "duration": 4737377277,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 15747399033,
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
  "duration": 7392178333,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2070659762,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7313263516,
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
  "duration": 3313652802,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12520646887,
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
  "duration": 7365723872,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 6708755500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7318985002,
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
  "duration": 3280706590,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 11476838046,
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
  "duration": 7320067526,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2072738723,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7321438146,
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
  "duration": 3535631191,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12181256650,
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
  "duration": 7313911068,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2076196234,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7327260068,
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
  "duration": 3275512963,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 11268335902,
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
  "duration": 7432439801,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 7529368632,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7089586012,
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
  "duration": 3494068956,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 11793235484,
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
  "duration": 7359897419,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2071965815,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7323944907,
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
  "duration": 3815297922,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12381938335,
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
  "duration": 7386542558,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 7467785540,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7339524278,
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
  "duration": 3305856508,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12640349897,
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
  "duration": 7310490938,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2068686146,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7330523123,
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
  "duration": 3494500154,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 17320960506,
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
  "duration": 7388970405,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 9754534937,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7078967678,
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
  "duration": 3548084947,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12620541240,
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
  "duration": 7333466745,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 7617786031,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7318912884,
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
  "duration": 3365765406,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 11796824392,
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
  "duration": 7315479161,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 8245292509,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7074119916,
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
  "duration": 3422974977,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 11810026136,
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
  "duration": 7347372677,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 8193170088,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7082899807,
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
  "duration": 3304934834,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 13322651314,
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
  "duration": 7337887087,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 8676162327,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7073924328,
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
  "duration": 3406715959,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12362013760,
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
  "duration": 7346198779,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 5487956297,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7330561259,
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
  "duration": 3675981843,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefiniton.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 15140307608,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefiniton.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 5400366179,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefiniton.click_Login_Button()"
});
formatter.result({
  "duration": 9726780465,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7080132893,
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
  "duration": 3416838907,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 14074088576,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4350770530,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 7603519508,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.click_shop_icon_and_Filter_price_using_Slider()"
});
formatter.result({
  "duration": 35401839499,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 5152495924,
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
  "duration": 3400536089,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12670174646,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4309808272,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 7631073108,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.click_shop_icon_and_Filter_price_using_Slider()"
});
formatter.result({
  "duration": 30648097860,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.add_the_books_to_the_basket_and_View_the_cart()"
});
formatter.result({
  "duration": 6774732125,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7492643589,
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
  "duration": 3364428769,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12762058617,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4397603040,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 10111497796,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.click_Shop_icon_click_android_and_buy_the_book()"
});
formatter.result({
  "duration": 57068023114,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.practiceautomation.stepdefinition.AndroidCategoryStepDefinition.click_Shop_icon_click_android_and_buy_the_book(AndroidCategoryStepDefinition.java:66)\r\n\tat ✽.Then Click Shop icon, click android and buy the book(src/main/resources/Feature/TestCase.feature:65)\r\n",
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
  "duration": 3781890684,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12486082362,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4464838142,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 10650827393,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.click_Shop_icon_Click_JavaScript_and_buy_the_book()"
});
formatter.result({
  "duration": 25543802045,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.view_the_cart_js_book()"
});
formatter.result({
  "duration": 4768162592,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7083522439,
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
  "duration": 3474942966,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 13355147072,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4348975887,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 7226410057,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.click_Shop_icon_and_in_Dropdown_select_the_prices_from_low_to_high()"
});
formatter.result({
  "duration": 19143797967,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7329442864,
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
  "duration": 3314343776,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 11785152985,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4414889078,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 7684875387,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.click_Shop_icon_Click_HTML_and_buy_the_book()"
});
formatter.result({
  "duration": 51667111331,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.view_the_cart_html_book()"
});
formatter.result({
  "duration": 7530227250,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7092861906,
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
  "duration": 3438753710,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 13585585541,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4388672493,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 7616291188,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.click_Shop_icon_Click_JavaScript_and_buy_the_book()"
});
formatter.result({
  "duration": 24828453980,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.view_cart_Click_proceed_to_checkout_Enter_the_billing_details_and_Click_place_order()"
});
formatter.result({
  "duration": 21973617657,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.order_status_Message()"
});
formatter.result({
  "duration": 4975432689,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.logut_the_user()"
});
formatter.result({
  "duration": 16363407034,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7094513068,
  "status": "passed"
});
});