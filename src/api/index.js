const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('api here');
});

const port = 3000;
app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log(`api server started at port ${port}`);
  }
});
