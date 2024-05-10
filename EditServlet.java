
package com.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 
     //	Database URL and credentials
	 private static String url = "jdbc:mysql://localhost:3306/grey_goose";
     private static String username = "root";
     private static String password = "RootPass2022";
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			//These are the variable that we need from client side
			String  invoice_currency =  request.getParameter("invoice_currency");
			String  cust_payment_terms =  request.getParameter("cust_payment_terms");
	        
			// Registering JDBC driver
			Class.forName("com.mysql.jdbc.Driver");
			
			// Creating connection
			Connection con = DriverManager.getConnection(url, username, password);
			PreparedStatement ps = con.prepareStatement("update grey_goose set invoice_currency = ? cust_payment_terms = ?");
			ps.setString(1, invoice_currency);
			ps.setString(2,  cust_payment_terms);
			ps.executeUpdate();
			
			
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}