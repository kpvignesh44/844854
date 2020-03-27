package com.practiceautomation.stepdefinition;

import java.io.IOException;

import org.junit.Assert;

import com.practiceautomation.pages.AndroidCategoryPage;
import com.practiceautomation.pages.BillingDetailsPage;
import com.practiceautomation.pages.FilterAddToBasketPage;
import com.practiceautomation.pages.FilterFunctionalityPage;


import com.practiceautomation.pages.JavaScriptPage;
import com.practiceautomation.pages.LoginPage;
import com.practiceautomation.pages.PlaceOrderPage;
import com.practiceautomation.pages.RegisterPage;
import com.practiceautomation.pages.SortingLowToHighPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class JavascriptStepDefinition {
	LoginPage login = new LoginPage();

	
	JavaScriptPage js = new JavaScriptPage();
	
//	To check if the user is able to buy books from javascipt category
	
	@Given("^Launching a chrome$")
	public void launch_the_chrome_browser_in_system() 
	{
		login.launchChrome("chrome");
	}

	@Then("^open automation website$")
	public void open_the_Practice_automation_website() throws InterruptedException 
	{
	    login.openWebsite();
	}

	@Then("^Enter Email password in website$")
	public void enter_the_Email_and_password_in_Login() throws Exception 
	{
	    login.loginDetails();
	}

	@And("^Click Login Button in myaccount$")
	public void click_Login_Button() throws InterruptedException 
	{
	    login.clickLoginButton();
	}

	@Then("^Click Shop icon, Click JavaScript and buy the book$")
	public int click_Shop_icon_Click_JavaScript_and_buy_the_book() throws InterruptedException 
	{
		int javascript=js.javascriptBookCategory();
		boolean script;
		if(javascript==0)
		{
			script=false;
			System.out.println("OUT OF STOCK");
			Assert.assertTrue(script);
		}
		else
		{
			System.out.println("STOCKS ARE AVAILABLE ,YOU CAN BUY THE BOOK");	
		}
		return javascript;
	}

	@Then("^View the cart js book$")
	public void view_the_cart_js_book() throws InterruptedException, IOException 
	{
	    js.viewCartJavaScript();
	    js.screenshot("src/test/resources/Screenshots/javascript.png");
	}

	@Then("^Closing the browser tab$")
	public void close_the_browser() throws InterruptedException 
	{
	    login.closeBrowser();
	}

}
