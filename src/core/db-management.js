var MongoClient = require('mongodb').MongoClient;

class DBMgmt{
	constructor(url='mongodb://localhost:27017/lol'){
		// Connection URL
		this.URL = url;
	}
	async getConn(){
		let _that = this;

		let database = await new Promise((resolve, reject)=>{
			if(_that.db){
				resolve(_that.db);
			}

			MongoClient.connect(_that.URL, function(err, _db) {
			  if(err){
			  	console.log(err);
			  	reject(err);
			  }
			  _that.db = _db;
			  resolve(_that.db);
			});
		});
		return database;
	};

	async find(collection, query){
		let db = await this.getConn();
		let coll = db.collection(collection);
		let docs = await new Promise((resolve, reject)=>{
			coll.find(query).toArray(function(err, docs){
				if(err){
					reject(err);
				}else{
					resolve(docs);
				}
			});
		});
		return docs;
	}

	/**
	 * reference: https://docs.mongodb.com/manual/reference/command/
	 * @param  {[type]} command [description]
	 * @return {[type]}         [description]
	 */
	async runCommand(command){
		let db = await this.getConn();
		let res = db.command(command);
		return Promise.resolve(res);
	}

	/**
	 * @param  {String}	collection
	 * @param  {Object} query
	 * @param  {Object} option, contains pageNumber and pageSize
	 * @return {Array}
	 */
	async pagingQuery(collection, query, orderBy,option){
		let db = await this.getConn();
		let coll = db.collection(collection);
		let docs = await new Promise((resolve, reject)=>{
			let skip = option.pageNumber>0 ? ((option.pageNumber -1)*option.pageSize) : 0;

			coll.find(query).sort(orderBy).skip(skip).limit(option.pageSize).toArray(function(err, docs){
				if(err){
					reject(err);
				}else{
					resolve(docs);
				}
			});
		});
		return docs;
	}

	/**
	 * @param  {String} collection
	 * @param  {Object or Array} objects will be inserted.
	 * @return {Number} inserted Count.
	 */
	async insert(collection, objects){
		let db = await this.getConn();
		let coll = db.collection(collection);

		let count = await new Promise((resolve, reject)=>{
			if(Object.prototype.toString.call(objects)==='[object Array]'){
				coll.insertMany(objects, function(err, count){
					if(err){
						reject(err);
					}else{
						resolve(count);
					}
				});
			}else{
				insertOne(objects, function(err, count){
					if(err){
						reject(err);
					}else{
						resolve(count);
					}
					
				});
			}
		});
		return count;
	}

	/**
	 * update the first record met querying.
	 * @see updateAll()
	 * @param  {String} collection
	 * @param  {Object}	query
	 * @param  {Object}	option
	 * @return {Number}	updated count
	 */
	async update(collection, query, option){
		let db = await this.getConn();
		let coll = db.collection(collection);

		let count = await new Promise((resolve, reject)=>{
			coll.updateOne(query, option, function(err, count){
				if(err){
					reject(err);
				}else{
					resolve(count);
				}
			})
		});
		return count;
	}

	/**
	 * update all resords met querying.
	 * @see  update()
	 * @param  {String} collection
	 * @param  {Object} query
	 * @param  {Object} option
	 * @return {Number} updated count.
	 */
	async updateAll(collection, query, option){
		let db = await this.getConn();
		let coll = db.collection(collection);

		let count = await new Promise((resolve, reject)=>{
			coll.updateMany(query, option, function(err, count){
				if(err){
					reject(err);
				}else{
					resolve(count);
				}
			})
		});
		return count;
	}

	/**
	 * delete the first record met querying.
	 * @see updateAll()
	 * @param  {String} collection
	 * @param  {Object}	query
	 * @return {Number}	deleted count
	 */
	async delete(collection, query){
		let db = await this.getConn();
		let coll = db.collection(collection);

		let count = await new Promise((resolve, reject)=>{
			coll.deleteOne(query, function(err, count){
				if(err){
					reject(err);
				}else{
					resolve(count);
				}
			})
		});
		return count;
	}

	/**
	 * delete all resords met querying.
	 * @see  update()
	 * @param  {String} collection
	 * @param  {Object} query
	 * @return {Number} deleted count.
	 */
	async deleteAll(collection, query){
		let db = await this.getConn();
		let coll = db.collection(collection);

		let count = await new Promise((resolve, reject)=>{
			coll.deleteMany(query, function(err, count){
				if(err){
					reject(err);
				}else{
					resolve(count);
				}
			})
		});
		return count;
	}

}


module.exports =DBMgmt;