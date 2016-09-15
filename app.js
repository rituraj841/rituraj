var exp = require('express');
var app = exp();

app.use(exp.static(__dirname + "/public"));

var html1 = '<!DOCTYPE html>'
	  + '<html lang="en">'
	  + '<head>'
	  + '<title>Arithmetic</title>'
	  + '<meta charset="utf-8">'
	  + '<meta name="viewport" content="width=device-width, initial-scale=1">'
	  + '<link rel="stylesheet" href="/lib/bootstrap.min.css">'
	  + '<script src="/lib/jquery.min.js"></script>'
   	  +'<script src="/lib/bootstrap.min.js"></script>'
      +'</head>'
	  + '<body>'
	  + '<div class="container">'
      + '<div class="jumbotron" style="width: auto; height: 300px; margin-top:5px;"><p>'
      + '<div class="container">'
      + '<h3>Result </h3>';

var html2 ='<br><br><br><a class="btn btn-success" href="/"> click here to got to index page</a></div></div></div>'
      + '</body></html>';
app.get('/new', function(req, res){     //route for http get request for path /new 
	res.write(html);
	res.end();
});


app.get('/result', function(req, res){     //route for http get request for path /new 

var number1 = parseInt(req.query.num1);
var number2 = parseInt(req.query.num2);
var operator = req.query.operator;
var result = 0;

if(operator === "+"){
 	result = number1 + number2;
}else if (operator === "-"){
	result = number1 - number2;
}else if (operator === "*"){
	result = number1 * number2;	
}else if (operator === "div"){
	result = number1 / number2;
}

console.log(result);
		
	res.write(html1 + result + html2);
	res.end();
});



//process.env.npm_package_config_port
//process.env.PORT
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('server listening on port ' + port);
});
 