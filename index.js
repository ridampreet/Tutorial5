const http = require("http");
const app = require("./app");

const port = 8000 || global.process.env.PORT;
const server = http.createServer(app);
server.listen(port, () =>
  console.log("Server has been started.... on port " + port)
);
