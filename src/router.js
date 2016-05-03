var router = require('koa-router')();

//video list
var videos = [
	{
		id: 10001,
		img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
		title: '起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场',
		voteCount: 1023,
		publishDate: '1周前'	
	},
	{
		id: 10001,
		img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
		title: '起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场',
		voteCount: 10,
		publishDate: '1周前'	
	}
];

var video ={
	id: 10001,
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场',
	voteCount: 10,
	publishDate: '1周前'	
}

router.get('/', async (ctx, next) =>{
	await ctx.render('index.jade', {videos: videos});
});

router.get('/video/:id', async (ctx, next) =>{
	
	await ctx.render('video.jade', {video: video});
});

module.exports= router;