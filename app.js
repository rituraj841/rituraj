var exp = require('express');
var app = exp();
var hbars = require('express-handlebars');
var bodyparser = require('body-parser');

app.use(exp.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.set('view engine', 'handlebars');
app.engine('handlebars', hbars({}));

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



var html2 ='<br><br><br><a class="btn btn-success" href="/"> Click here to go to Homepage</a></div></div></div>'
      + '</body></html>';

//-------------------------MAPPING FOR method=get & action=/result-------------------
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
});//app.get/result




//-------------------------MAPPING FOR method=post & action=/conv-------------------
app.post('/conv', function(req, res){     //route for http post request for path /conv 
console.log("received a post request");
var number1 = parseInt(req.body.num);
var operator = req.body.operator;
var result = 0;

if(operator === "cm2m"){
 	result = number1 / 100;
}else if (operator === "ft2m"){
	result = number1 * 3.2808;
}else if (operator === "ft2in"){
	result = number1 * 0.083333;	
}else if (operator === "mt2in"){
	result = number1 /0.039370;
}

console.log(result);
		
	res.write(html1 + result + html2);
	res.end();
});//app.get/result


//process.env.npm_package_config_port
//process.env.PORT
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('server listening on port ' + port);
});
 