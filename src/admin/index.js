const express = require('express');
const routers = require('./routers');

const app = express();
app.use('/public', express.static('./public'));
app.use('/', routers);

const port = 3000;
app.listen(port, function name(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started at port ${port}`);
  }
});
