package com.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import h2h.conn.JdbcConnection;
import com.pojo.PojoClass;


@WebServlet("/DataLoad")
public class DataLoad extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DataLoad() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		JdbcConnection fetchdata = new JdbcConnection();
		ArrayList<PojoClass> data = fetchdata.getData();
		HashMap<String, Object> hm = new HashMap<String, Object>();
		hm.put("data", data);
		Gson gson = new Gson();
		String respData=gson.toJson(hm);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().print(respData);	
		}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
