package com.practiceautomation.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.excelutility.excelcode.ExcelUtility;

public class LoginPage 
{
	
	static WebDriver driver;
	By loginemail = By.id("username");
	By loginpassword = By.id("password");
	By loginbutton = By.xpath("//*[@id=\"customer_login\"]/div[1]/form/p[3]/input[3]");
	
	
	
			public void launchChrome(String browser) 
			{ 
				
				try 
				{					
				//To launch firefox Browser
					
		       if (browser.equalsIgnoreCase("firefox")) {
			   System.setProperty("webdriver.gecko.driver","src/test/resources/Drivers/geckodriver.exe");
			   driver = new FirefoxDriver();
		}
		       		       
				// To launch chrome Browser
		      else if (browser.equalsIgnoreCase("chrome")) {
			  System.setProperty("webdriver.chrome.driver","src/test/resources/Drivers/chromedriver.exe");
			  driver=new ChromeDriver();
		}
		       			// To launch InternetExplorer
		        else if (browser.equalsIgnoreCase("internetexplorer")) {
			    System.setProperty("webdriver.ie.driver","src/test/resources/Drivers/IEDriverServer.exe");
			    driver=new InternetExplorerDriver();  
		}
		       
		       
				//To maximize the window
		driver.manage().window().maximize(); 
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
	
	} catch (WebDriverException e) {
		System.out.println("Browser could not be launched");
	}
			}
			
			//To open Practice Automation WebSite
			public void openWebsite() throws InterruptedException 
			{
				Thread.sleep(5000);
				driver.get("http://practice.automationtesting.in/my-account/");
			}
			
	//To enter login details
		public void loginDetails() throws Exception
		{
			Thread.sleep(2000);
			ExcelUtility excel = new ExcelUtility();

	

			driver.findElement(loginemail).sendKeys(excel.username(1));	
			driver.findElement(loginpassword).sendKeys(excel.password(1));
			Thread.sleep(2000);
			
		}
		
	//To click login button
		public void clickLoginButton() throws InterruptedException
		{
			Thread.sleep(2000);
			driver.findElement(loginbutton).click();
		}
		
		//To close the browser
				public void closeBrowser() throws InterruptedException
				{
					Thread.sleep(5000);
					driver.close();
				}
}
