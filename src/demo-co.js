var co =require('co');
var fs = require('fs');

//callback
var content;

fs.readFile('package.json', {encoding: 'utf8'}, function(err, data){
	content = data;
	console.log('callback way---content: '+ content);
});

//co
co(function* (){

	content= yield function(cb){
		fs.readFile('package.json', {encoding: 'utf8'}, cb);
	};
	console.log('\n\nco way ----content:' +content);

	return content;

}).then(function(data){
	console.log('\n\npromise: '+ data);
}).catch(function (err){
	console.log('\n\nerr: '+ err);
});


//async ,await后面必须是promise， 如果是其他类型，会直接返回。
var aa =async ()=>{
	content = await new Promise(( resolve,reject) => {
		fs.readFile('package.json', {encoding: 'utf8'}, function(err, data){
			resolve(data);
		});
	});

	console.log('\n\nasync way-----content: '+ content);
};

aa();


