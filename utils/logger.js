const { createLogger, format, transports } = require('winston');

// Logger creation
const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp(),
		format.printf(({ timestamp, level, message }) => {
			return `${timestamp} ${level}: ${message}`;
		}),
	),
	transports: [
		// Transport console
		new transports.Console({
			format: format.combine(
				format.timestamp(),
				format.colorize(),
				format.simple(),
			),
		}),
		// Transport file
		new transports.File({ filename: 'logs/error.log', level: 'error' }),
		new transports.File({ filename: 'logs/combined.log' }),
	],
});

module.exports = logger;
