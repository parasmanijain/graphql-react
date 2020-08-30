const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', function (_, res) {
  res.sendFile(path.join(publicPath, 'index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(port, () => {
  console.log('Server is up!');
});
