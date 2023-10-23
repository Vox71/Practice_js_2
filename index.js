const http = require('http');
require ('./users');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);


  const fs = require('fs');
  const dataOutput = fs.readFileSync("text.txt");
  const { Navigator } = require("node-navigator");
  const navigator = new Navigator();
  sUsrAg = navigator.userAgent;

    if (url === '/') {
  res.write(dataOutput.toString());
  } else if (url === '/info') {
    res.write(sUsrAg);
  } else if (url === '/user') {
    res.write(global.Users.map(element=>element.name).toString());
  } else if (url === '/user/id=:id') {
    var id = req.params.id;
    res.write(id);

  } else {
    res.statusCode = 400;
    res.write('unsnupported');
  }

  res.end();

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});