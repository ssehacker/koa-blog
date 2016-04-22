var Koa = require('koa');
var app = new Koa();
var fs = require('fs');

var compose = require('koa-compose');

//koa v2
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
	ctx='hello world';
	
});*/


//koa v1

app.use(function* (next){
	var start = new Date();
	yield next;
	var used = new Date() - start;
	console.log('%s %s %s ms',this.method, this.url, used);
});

app.use(function* (next){
	console.log('body in ...');
	// this.body = fs.createReadStream('package.json');
	// You may only yield a function, promise, generator, array, or object
	this.body = yield readFile('package.json');
	console.log(this.body);
})

function readFile(path){
	return function(callback){
		fs.readFile(path, {encoding: 'utf8'}, callback);
	}
}



app.listen(3000);