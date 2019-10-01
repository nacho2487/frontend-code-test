const { validationResult } = require("express-validator");

const VALIDATION_ERROR_STATUS_CODE = 422;

function defineValidator(chain) {
	return [chain, handleInputValidation];
}

function handleInputValidation(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res
			.status(VALIDATION_ERROR_STATUS_CODE)
			.json({ errors: errors.array() });
	}
	next();
}

module.exports = { defineValidator };
