const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/wbdv-sp20-server-client-angular'));
app.get('/*', function(req,res) {res.sendFile(path.join(__dirname+ '/dist/wbdv-sp20-server-client-angular/index.html'));});
app.listen(process.env.PORT || 8080);
