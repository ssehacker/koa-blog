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
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据2',
	voteCount: 12,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据3',
	voteCount: 13,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据4',
	voteCount: 14,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据5',
	voteCount: 15,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据6',
	voteCount: 17,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据7',
	voteCount: 16,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据8',
	voteCount: 18,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据9',
	voteCount: 19,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据10',
	voteCount: 20,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据11',
	voteCount: 1,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据12',
	voteCount: 12,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据13',
	voteCount: 13,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据14',
	voteCount: 14,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据15',
	voteCount: 15,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据16',
	voteCount: 17,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据17',
	voteCount: 16,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据18',
	voteCount: 18,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据19',
	voteCount: 19,
	publishDate: new Date(1462285393890)	
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据20',
	voteCount: 20,
	publishDate: new Date(1462370484496)
},
{
	img:'http://r4.ykimg.com/0541010157260AB4641DA419FA98C5D4',
	src:'http://player.youku.com/player.php/sid/XMTU0NTgyMjc0OA==/v.swf',
	title: '测试数据20',
	voteCount: 20,
	publishDate: new Date(1462370484496)
}

];

db.videos.insert(videos);

