var Koa = require('koa');
var app = new Koa();

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

function compose1(middleware){
  return function *(next){
    if (!next) next = noop();

    var i = middleware.length;

    while (i--) {
      next = middleware[i].call(this, next);
    }

    return yield *next;
  }
}

/**
 * Noop.
 *
 * @api private
 */

function *noop(){}



function* foo(next){
	console.log('foo0 in');
	return  yield* next;
	// console.log('foo0 out');
	// return temp;
}

function* foo1(next){
	console.log('foo1 in');
	return yield next;
	// console.log('foo1 out');
	// return temp+'11';
}

function* foo2(){
	console.log('foo2 in');
	yield Promise.resolve(1);
	// console.log('foo2 out');
	// return temp;
}


// var generator = compose1([foo,foo1,foo2]);
var generator = foo(foo1(foo2()));


console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


// function* g0() {
// 	console.log('0 in..');
//   yield 3;
//   console.log('0 out..');
// }


// function* g1() {
// 	console.log('1 in..');
//   yield 2;
//   yield* g0();
//   yield 4;
//   console.log('1 out..');
// }

// function* g2() {
// 	console.log('2 in..');
//   yield 1;
//   yield* g1();
//   yield 5;
//   console.log('2 out..');
// }

// var iterator = g2();

// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: 4, done: false }
// console.log(iterator.next()); // { value: 5, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }









// co(aa()).then(function(value){
// console.log(arguments);
// }).catch(function(err){
// 	console.log(err);
// });



app.listen(3000);