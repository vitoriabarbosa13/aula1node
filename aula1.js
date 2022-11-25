var http = require("http");
var bratz = require("./biblioteca");
http.createServer(function (req,res){
    res.writeHead(200, { "Content-Type": "text/html"});
    res.write("<h2>Brasil 2 x 1 Servia </h2> <br>");
    res.write("<p style=color:pink>" +Date().substring(16,24) + "<br>");
    res.write(bratz.barbie() + "</p> <br>")
    res.end("Bom diaaa");
}
).listen(3000); 