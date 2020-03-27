package com.excelutility.excelcode;

import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelUtility 
{
	//To read and return username
	public String username(int i) throws IOException
	{
		
		FileInputStream file= new FileInputStream("src/test/resources/TestData/excelsheet.xlsx");
		XSSFWorkbook workbook =new XSSFWorkbook(file);
		XSSFSheet sheet= workbook.getSheet("Sheet1");
		
			XSSFRow row= sheet.getRow(1);
		
			XSSFCell cell= row.getCell(0);
			cell.setCellType(Cell.CELL_TYPE_STRING);
			String un= cell.getStringCellValue();
			
			return un;
	}	

	//TO read and return password
	public String password(int i) throws IOException
	{
		
		FileInputStream file= new FileInputStream("src/test/resources/TestData/excelsheet.xlsx");
		XSSFWorkbook workbook =new XSSFWorkbook(file);
		XSSFSheet sheet= workbook.getSheet("Sheet1");
			
			XSSFRow row= sheet.getRow(1);
			XSSFCell cell1= row.getCell(1);
			cell1.setCellType(Cell.CELL_TYPE_STRING);
			String pwd= cell1.getStringCellValue();
			
			return pwd;
	}
}
