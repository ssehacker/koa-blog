var router = require('koa-router')();


var user = {
		name: {
			first: 'Zhou',
			last: 'Yong'
		},
		desc: '<h2>here is variable.<h2>',
		age: '<b>23</b>'
	};

router.get('/', async (ctx, next) =>{
	await ctx.render('index.jade', {user: user});
});

module.exports= router;