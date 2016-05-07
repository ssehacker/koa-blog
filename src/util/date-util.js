var moment = require('moment');

moment.locale("zh-cn");

function parse(date){
	if(Object.prototype.toString.call(date)!=='[object Date]'){
		try{
			date = new Date();
		}catch(e){
			console.error(e.message);
		}
	}
	date = moment.utc(date).fromNow();
	return date;
}

module.exports = parse;