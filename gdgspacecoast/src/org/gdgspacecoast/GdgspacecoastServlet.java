package org.gdgspacecoast;

import javax.servlet.http.*;
import java.io.IOException;

@SuppressWarnings("serial")
public class GdgspacecoastServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
	}
}
