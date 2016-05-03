var DBManagement = require('../core/db-management.js');

class VideoService{
	constructor(){
		this.dbMgt = new DBManagement();
		this.collection = 'videos';
	}

	async getVideoOfToday(){
		let lastDay = new Date();
		lastDay.setDate(lastDay.getDate()-7);
		let docs = await this.dbMgt.find(this.collection, {publishDate: {$gte: lastDay}});
		return docs;
	}
}

module.exports=VideoService;