package org.boomerang;

import javax.servlet.http.*;
import java.io.IOException;

@SuppressWarnings("serial")
public class GdgXBoomerangServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
	}
}
