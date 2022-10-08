const express = require('express');
const app = express();

require('./routes/index')(app);

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));