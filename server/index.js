import express from 'express';

let app = express();

app.set('port', process.env.PORT || 1340);

app.get('/*', (req, res) => {
  res.send("Hello World");
});

app.listen(app.get('port'), () => console.log("Huuray! Server is running on localhost: " + app.get('port')));
