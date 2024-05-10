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

/**
 * Servlet implementation class deleteData
 */
@WebServlet("/DeleteServlet")
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteServlet() {
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
		
		String DB_URL = "jdbc:mysql://localhost:3306/grey_goose";
		
		Connection conn;
		
		try {
		int invoice_id = Integer.parseInt(request.getParameter("invoice_id"));
		System.out.println(request.getParameter("invoice_id"));
		System.out.println(invoice_id);
		
//		System.out.println(invoice_id);
		String USER = "root";
		String PASSWORD = "RootPass2022";
		
		int rs;
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		conn = DriverManager.getConnection(DB_URL, USER, PASSWORD);
		conn.setAutoCommit(false);
		
		String sql = "DELETE FROM grey_goose WHERE invoice_id = ?";
		
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, invoice_id);
		
		System.out.println(pstmt);
		
		rs = pstmt.executeUpdate();
		
		System.out.println(rs);
		conn.commit();
		
		if(rs != 0) {
			pw.println("Record deleted");
		} else {
			pw.println("Failed");
		}
		
		pstmt.close();
		conn.close();
		
		
		} catch (Exception e) {
			pw.println(e);
		}
		
	}

}
