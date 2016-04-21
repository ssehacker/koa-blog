var Koa = require('koa');
var app = new Koa();
var fs = require('fs');

var compose = require('koa-compose');

/*app.use(async function responseTime(ctx, next){
	var start = new Date();
	await next();
	var ms = new Date() -start;
	ctx.set('X-Response-Time', ms+'ms');
	console.log('X-Response-Time: '+ ms+'ms');
});

function logger(format){
	var str = format || ':method ":url"';
	return async (ctx, next)=>{
		var start = new Date();
		await next();
		var used = new Date() - start;
		str = str.replace(':method', ctx.method)
			.replace(':url', ctx.url);
		str += ' '+used +'ms';	

		console.log(str);
	}
}

app.use(logger());

app.use(async function contentLength(ctx,next){
	await next();
	if(!ctx.body) return ;
	ctx.set('Content-Length', ctx.body.length);
});


app.use(async function body(ctx, next){
	// await next;
	console.log('body....');
	if(ctx.path !== '/') return ;
	ctx.body = 'Hello World!!!!!!';
});*/

//test

var co = require('co');

function readFile(path) {
  return function (cb) {
  	console.log('readfile');
    fs.readFile(path, {encoding: 'utf8'}, cb);
  };
}

co(function* (){

	console.log('in...');
	var result = yield Promise.resolve({data:'balabala...'});
	console.log(result);
	result = yield Promise.resolve({data:'balabala2...'});
	console.log(result);

	var result = yield readFile('package.json');
	console.log(result);

	var result = yield [Promise.resolve({data:'balabala...'}),13,14,15,16];
	console.log(result);

	var result = yield readFile('package.json');
	console.log(result);
	


	console.log('out...');
  	return result;

}).then(function(){
	console.log('-----------------');
	console.log(arguments);
}).catch(function (err) {
  console.log(err);
});



app.listen(3000);