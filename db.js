/* 最新视频：
	当天采集的视频

热门视频：
	所有视频按照vote逆序排列

*/

var videos =[
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场起小点TOP10 VOL192 老树盘根！亚洲捆绑教你扭曲战场',
	voteCount: 1023,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据2',
	voteCount: 12,
	publishDate: new Date(1462370484496)
}
];

db.videos.insert(videos);

