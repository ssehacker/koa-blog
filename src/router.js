var router = require('koa-router')();
var VideoService=require('./services/video-service.js');
var parseDate = require('./util/date-util.js'); 

var vs = new VideoService();

function parse(docs){
	for(var i=0, len=docs.length; i<len; i++){
		var doc = docs[i];
		doc.publishDate = parseDate(doc.publishDate);
	}
}

var video ={
	id: 10001,
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场',
	voteCount: 10,
	publishDate: '1周前'	
};

router.get(['/','/new'], async (ctx, next) =>{
	let docs = await vs.getRecentVideos();
	parse(docs);
	await ctx.render('index.jade', {videos: docs, sub: 'new'});
});

router.get('/video/:id', async (ctx, next) =>{
	let id = ctx.params.id || 1;
	let video = await vs.getVideoById(id);
	if(video && video._id){
		await ctx.render('video.jade', {video: video});
	}else{
		//video doesn't exist
		ctx.status = 404;
	}
});

router.get(['/hot', '/hot/:page'], async (ctx, next) =>{
	let page = ctx.params.page || 1;
	let docs = await vs.getHotVideos(page);
	parse(docs.list);
	await ctx.render('index.jade', {
		videos: docs.list, 
		count: docs.count,
		sub: 'hot'
	});
});


module.exports= router;