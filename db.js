/* 最新视频：
	当天采集的视频

热门视频：
	所有视频按照vote逆序排列

*/

var videos =[
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据1',
	voteCount: 1,
	publishDate: new Date(1462285393890)	
}
];

db.videos.insert(videos);

var cursor = db.videos.find()
while (cursor.hasNext()) {
 	var doc = cursor.next();
	db.videos.update({_id : doc._id}, {$set : {publishDate : new Date(doc.publishDate)}})
}

起小点：
http://i.youku.com/u/UMjYwMzE0NzMy/videos/view_1_order_1

小苍
http://i.youku.com/u/UMzY1NTQ1NTc2/videos/view_1_order_1

