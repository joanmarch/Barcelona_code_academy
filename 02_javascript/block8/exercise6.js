var db = {};

class Server  {
    constructor(){

    }
	post(account, action, data){
        console.log(account, action, data);
	}
	get(account, action, data) {
        console.log( "aaa" + account, action, data);
	}
}

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  var server = new Server ()

  server.post("a","b","c");

module.exports = {
    Server
}

