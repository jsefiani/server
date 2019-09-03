const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const environment = process.env.NODE_ENV;

// console.log that your server is up and running
app.listen(port, () =>
	console.log(
		`Listening on port ${port}, running in a ${environment} environment!`
	)
);
