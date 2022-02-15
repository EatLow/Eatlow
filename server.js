const express = require('express');
const bodyParser = require('body-parser');
const open = require('open');
const compression = require('compression');
const port = process.env.PORT || 80
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/', function (request, response)
{
    response.sendFile(__dirname + '/dist/eat-low/index.html');
});
app.use(express.static(`${__dirname}/dist/eat-low`));
app.use(compression());
app.get('*', function (request, response)
{
    response.sendFile(__dirname + '/dist/eat-low/index.html');
});
app.listen(port, function ()
{
    const message = `App listening on port ${port}`;
    console.log(`\x1b[32m%s\x1b[0m`, message);
});
