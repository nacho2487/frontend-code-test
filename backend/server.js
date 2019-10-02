const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const httpLogger = require("morgan");
const router = require("./api/router");
const appLogger = require("./logging/logger");

const isProduction = process.env.NODE_ENV === "production";

const app = express();
const port = process.env.PORT || 5000;

app.use(httpLogger("combined", { stream: appLogger.stream }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => appLogger.info(`Listening on port ${port}`));

app.use("/api", router);

if (isProduction) {
	// Serve any static files
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	// Handle React routing, return all requests to React app
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
	});
}

// Custom error handling
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = isProduction ? {} : err;

	appLogger.error(
		`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
			req.method
		} - ${req.ip}`
	);

	// render the error page
	res.status(err.status || 500);
	const errorOutput = {
		error: "There was an unexpected error while processing your request"
	};

	if (isProduction) {
		res.json(errorOutput);
	} else {
		res.json({
			...errorOutput,
			stack: err.stack
		});
	}
});

module.exports = app;
