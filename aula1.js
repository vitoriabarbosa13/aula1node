var http = require("http");
http.createServer(function (req,res){
    res.write("Brasil 3 x 0 Servia \n");
    res.end("Bom diaaa");
}
).listen(3000);