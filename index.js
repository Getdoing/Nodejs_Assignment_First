const http = require("http");
const server = http.createServer((req, res) => {
    res.write("<h1>It is my First Node.js Assignment</h1>")
    res.write("<h1>Hello,World</h1>");
});


server.listen(5000, () => {
    console.log("App server is running");
});