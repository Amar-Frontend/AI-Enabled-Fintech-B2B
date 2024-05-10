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


@WebServlet("/Searchdata")
public class SearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
//		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		response.setContentType("text/html");
		
		PrintWriter pw = response.getWriter();
		
		String DB_URL = "jdbc:mysql://localhost/grey_goose";
		
		Connection conn;
		
		try {
			int cust_number = Integer.parseInt(request.getParameter("cust_number"));
			
		System.out.println(request.getParameter("cust_number"));
		System.out.println(cust_number);
		
//		System.out.println(cust_number);
		String USER = "root";
		String PASSWORD = "djrah1234";
		
		int rs;
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		conn = DriverManager.getConnection(DB_URL, USER, PASSWORD);
		conn.setAutoCommit(false);
		
		String sql = "SELECT * FROM winter_internship WHERE cust_number = ?";
		
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, cust_number);
		
		System.out.println(pstmt);
		
		rs = pstmt.executeUpdate();
		
		System.out.println(rs);
		conn.commit();
		
		
		pstmt.close();
		conn.close();
		
		
		} catch (Exception e) {
			pw.println(e);
		}
		
	}

}
