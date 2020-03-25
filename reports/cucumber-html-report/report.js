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
formatter.scenario({
  "line": 49,
  "name": "To check if the user is able to buy books from android category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-android-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@TC_05_Adding_books_from_android_Category"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "opening the website",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Enter Email and password in website",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "login Button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Click Shop icon, click android and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "View the cart android book",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 4624560591,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 14626574607,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 4932429983,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 8367922527,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.click_Shop_icon_click_android_and_buy_the_book()"
});
formatter.result({
  "duration": 75142299726,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.practiceautomation.stepdefinition.AndroidCategoryStepDefinition.click_Shop_icon_click_android_and_buy_the_book(AndroidCategoryStepDefinition.java:65)\r\n\tat ✽.Then Click Shop icon, click android and buy the book(src/main/resources/Feature/TestCase.feature:54)\r\n",
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
});