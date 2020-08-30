const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, './client/public')));

app.get('*', function (_, res) {
  res.sendFile(path.join(__dirname, './client/public/index.html'), function (
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(port, () => {
  console.log('Server is up!');
});
