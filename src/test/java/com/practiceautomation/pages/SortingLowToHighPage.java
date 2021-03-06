package com.practiceautomation.pages;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.Select;

public class SortingLowToHighPage extends LoginPage
{
	
	By shopbutton = By.xpath("//*[@id=\"menu-item-40\"]");
	By defaultsorting = By.xpath("//*[@id=\"content\"]/form");
	By orderby = By.name("orderby");
	
	//To select price low to high in default sorting drop down box
		public void priceLowToHigh() throws InterruptedException
		{
			Thread.sleep(5000);
			driver.findElement(shopbutton).click();
			
			Thread.sleep(5000);
			driver.findElement(defaultsorting).click();
			
			Select dropdown = new Select(driver.findElement(orderby));
			dropdown.selectByIndex(4);
		}
		
		
//To Take Screenshot		
 public void screenshot(String path) throws IOException {
			 
			 TakesScreenshot ts=(TakesScreenshot)driver;
			    File SrcFile = ts.getScreenshotAs(OutputType.FILE);
			    FileUtils.copyFile(SrcFile,new File(path));
		 }
}
