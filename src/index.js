var Koa = require('koa');
var app = new Koa();
var fs = require('fs');
var co = require('co');


var views = require('koa-views');

app.use(views(__dirname + '/views', {
	extension: 'jade',
	pretty: true, //not work?? why???
	map: {
		jade: 'jade'
	}
}));

app.keys = ['secret', 'keys'];
var option = {
		httpOnly:false,
		signed: true,
		overwrite: true
	};

//koa v2
app.use(async function responseTime(ctx, next){
	var start = new Date();
	await next();
	var ms = new Date() -start;
	ctx.set('X-Response-Time', ms+'ms');

	var view = ctx.cookies.get('view',option);

	console.log('type: '+ctx.response.type)
	console.log('X-Response-Time: '+ ms+'ms');

});


app.use(async (ctx,next)=>{
	try{
		await next();
	}catch(err){
		if(err){
			console.log(err);
			ctx.body = err;
			ctx.status = 500;
		}
	}
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


app.use(async (ctx, next)=>{
	// await next;
	console.log('body....');

	var user = {
		name: {
			first: 'Tobi',
			last: 'Holowaychuk'
		},
		species: 'ferret',
		age: 3
	};

	if(ctx.path === '/') {
		await ctx.render('user.jade', {user: user});
		// ctx.body = await Promise.resolve('hello world');
		ctx.response.type='text/html';
	}else if(ctx.path ==='/error'){
		throw new Error('内部错误。。。');
	}else{
		return;
	}

	var view = ctx.cookies.get('view',option);
	if(!view){
		ctx.cookies.set('view', 1,option);
		ctx.cookies.set('id', 'wertyjjhdfghjkadASD',option);
	}

	console.log(ctx.cookies.get('view',option));
	
});






app.listen(3000);