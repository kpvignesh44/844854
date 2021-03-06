package com.practiceautomation.stepdefinition;

import java.io.IOException;

import com.practiceautomation.pages.LoginPage;

import com.practiceautomation.pages.SortingLowToHighPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SotingLowtoHighStepDefinition {
	LoginPage login = new LoginPage();
	SortingLowToHighPage lowtohigh = new SortingLowToHighPage();
	
//	To check if the user is able to able to filter the prices from low to high
	@Given("^Launching the chrome browser in the system$")
	public void launch_the_chrome_browser_in_system() 
	{
		login.launchChrome("chrome");
	}

	@Then("^open the Automation Practice website$")
	public void open_the_Practice_automation_website() throws InterruptedException 
	{
	    login.openWebsite();
	}

	@Then("^Enter the Email and password in Practice website$")
	public void enter_the_Email_and_password_in_Login() throws Exception 
	{
	    login.loginDetails();
	}

	@Then("^Click Login button$")
	public void click_Login_Button() throws InterruptedException 
	{
	    login.clickLoginButton();
	}
	
	@Then("^Click Shop icon and in Dropdown select the prices from low to high$")
	public void click_Shop_icon_and_in_Dropdown_select_the_prices_from_low_to_high() throws InterruptedException, IOException 
	{
	    lowtohigh.priceLowToHigh();
	    lowtohigh.screenshot("src/test/resources/Screenshots/sorting.png");
	}
	
	
	

	@Then("^Close the browser tab$")
	public void close_the_browser() throws InterruptedException 
	{
	    login.closeBrowser();
	}
}
