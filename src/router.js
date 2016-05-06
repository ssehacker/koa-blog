var router = require('koa-router')();
var VideoService=require('./services/video-service.js');

var vs = new VideoService();


var video ={
	id: 10001,
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场',
	voteCount: 10,
	publishDate: '1周前'	
};

router.get(['/','/new'], async (ctx, next) =>{
	let docs = await vs.getRecentVideo();
	await ctx.render('index.jade', {videos: docs, sub: 'new'});
});

router.get('/video/:id', async (ctx, next) =>{
	await ctx.render('video.jade', {video: video});
});

router.get(['/hot', '/hot/:page'], async (ctx, next) =>{
	let page = ctx.params.page || 1;
	let docs = await vs.getHotVideo(page);
	await ctx.render('index.jade', {
		videos: docs.list, 
		count: docs.count,
		sub: 'hot'
	});
});


module.exports= router;