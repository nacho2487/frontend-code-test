const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./api/router");
const httpLogger = require("morgan");

const isProduction = process.env.NODE_ENV === "production";

const app = express();
const port = process.env.PORT || 5000;

const httpLoggerFormat = isProduction ? "combined" : "dev";
app.use(httpLogger(httpLoggerFormat));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use("/api", router);

if (isProduction) {
	// Serve any static files
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	// Handle React routing, return all requests to React app
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
	});
}
