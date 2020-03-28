const express = require("express");
const fs = require("fs");
const path = require("path");
const body_parser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
const token = 3000;
var password = "password";
var posts = ["waw", "quq"];
const gnp = function generateNewPage(adress, file) {
	app.get(adress, function(req, res) {
		fs.readFile(path.join(__dirname, "html", file), (err, htmlData) => {
			if (err) {
				res.end("<h1>Page not found</h1>");
				// throw err
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(htmlData);
		});
	});
};
try {
	app.listen(token, () => {
		console.log(`Server works on port:${token}`);
	});
} catch (e) {
	console.log(e);
}

app.get("/", function(req, res) {
	fs.readFile(path.join(__dirname, "html", "index.html"), (err, htmlData) => {
		if (err) {
			res.end("<h1>Page not found</h1>");
			// throw err
		}
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(htmlData);
	});
});

gnp("/admin", "passwordAdmin.html");
app.post("/admin", function(req, res) {
	if ((req.admin = password)) {
		try {
			res.render("admin.ejs", { posts });
		} catch (e) {
			res.end("<h1>Page not found</h1>");
		}
	}

	if (req.admin == null) {
		console.log("bad");
	}
});
//<%= posts.paragrphs.forEach (item,{ item}); %>
