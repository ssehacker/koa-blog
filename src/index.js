var Koa = require('koa');
var app = new Koa();

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

function* foo1(next){

	console.log('====>1');
	yield next;
	console.log('1<====');
}

function* foo2(next){

	console.log('====>1');
	yield next;
	console.log('1<====');
}

function* foo3(next){

	console.log('====>1');
	yield next;
	console.log('1<====');
}

var ctx={};
function* all(){
	console.log('======>all');
	yield foo1(foo2(foo3()));
	console.log('all<======');
}

var generator = all();

console.log( generator.next());
console.log( generator.next());
console.log( generator.next());
console.log( generator.next());
console.log( generator.next());



app.listen(3000);