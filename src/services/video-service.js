var DBManagement = require('../core/db-management.js');
var ObjectID =require('mongodb').ObjectID;

class VideoService{
	constructor(){
		this.dbMgt = new DBManagement();
		this.collection = 'videos';
	}
	/**
	 * @return {Array} videos in 7 days.
	 */
	async getRecentVideos(){
		let lastDay = new Date();
		lastDay.setDate(lastDay.getDate()-7);
		let docs = await this.dbMgt.find(this.collection, {publishDate: {$gte: lastDay}});
		return docs;
	}

	/**
	 * @param  {Number} pageNumber
	 * @return {Array} videos
	 */
	async getHotVideos(pageNumber){
		let option ={
			pageSize: 10
		};
		option.pageNumber = pageNumber || 1;

		let order = {voteCount: -1};
		let docs = await this.dbMgt.pagingQuery(this.collection, {}, order, option);
		let count = await this.dbMgt.runCommand({
			count: 'videos'
		});

		return {
			list: docs,
			count: count.n===0? 0 :Math.floor((count.n-1)/option.pageSize)+1
		};
	}

	async getVideoById(id){
		let videos = await this.dbMgt.find(this.collection, {_id: new ObjectID(id)});
		if(videos && videos.length){
			return videos[0];
		}
		//debug
		console.warn('Can not find Id==='+id);
		return {};
	}
}

module.exports=VideoService;