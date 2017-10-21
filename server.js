var http=require("http");
var fs=require("fs");
var urlLid=require("url");

http.createServer(function (req,res) {
	var url=urlLid.parse(req.url).pathname;
		res.setHeader("Access-Control-Allow-Origin","*");
//		console.log(url)
	if(url=="/favicon.ico"){
		res.end();
		return;
	}else{
	
		fs.readFile("data"+url+".json",function (err,data) {
			if(err){
				res.write("404");
			}else{
				res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
				res.write(data);
			}
			res.end();
		})
	}
}).listen(8080);
console.log("运行")