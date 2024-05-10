package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		
		response.setContentType("text/html");
		
		PrintWriter pw = response.getWriter();
		
		String DB_URL = "jdbc:mysql://localhost:3306/grey_goose";
		
		Connection conn;
		
		try {
			String bussiness_code = request.getParameter("business_code");
		
		int cust_number = Integer.parseInt(request.getParameter("cust_number"));
	
		String clear_date = request.getParameter("clear_date");

		int buisness_year =Integer.parseInt(request.getParameter("buisness_year")); 
		int doc_id = Integer.parseInt(request.getParameter("doc_id"));
		String posting_date = request.getParameter("posting_date");
		String document_create_date = request.getParameter("document_create_date");
		String due_in_date = request.getParameter("due_in_date");
		String invoice_currency = request.getParameter("invoice_currency");
	    String document_type = request.getParameter("document_type");
		int posting_id = Integer.parseInt(request.getParameter("posting_id"));
		float total_open_amount= Float.parseFloat(request.getParameter("total_open_amount"));
		String baseline_create_date = request.getParameter("baseline_create_date");
		String cust_payment_terms = request.getParameter("cust_payment_terms");
		String invoice_id =request.getParameter("invoice_id");
		
		
		
		String USER = "root";
		String PASSWORD = "RootPass2022";
		
		int rs;
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		conn = DriverManager.getConnection(DB_URL, USER, PASSWORD);
		String sql = "insert into grey_goose(bussiness_code,cust_number,clear_date, buisness_year,doc_id, posting_date, document_create_date, due_in_date ,invoice_currency  ,document_type   ,posting_id ,total_open_amount ,baseline_create_date ,cust_payment_terms ,invoice_id      ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, bussiness_code);
		pstmt.setInt(2, cust_number);
		pstmt.setString(3, clear_date);
		pstmt.setInt(4,  buisness_year);
		pstmt.setInt(5, doc_id);
		pstmt.setString(6,  posting_date);
		pstmt.setString(7,  document_create_date);
		pstmt.setString(8,  due_in_date);
		pstmt.setString(9,  invoice_currency);
		pstmt.setString(10,  document_type);
		pstmt.setInt(11,  posting_id);
		pstmt.setFloat(12, total_open_amount );
		pstmt.setString(13,  baseline_create_date);
		pstmt.setString(14, cust_payment_terms );
		pstmt.setString(15,  invoice_id);
		
		rs = pstmt.executeUpdate();
		
		System.out.println(rs);
		
		if(rs != 0) {
			pw.println("Record inserted");
		} else {
			pw.println("Failed");
		}
		
		conn.close();
		
		} catch (Exception e) {
			pw.println(e);
		}
		
		
	}

}
