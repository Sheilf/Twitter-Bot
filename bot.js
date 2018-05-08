console.log("R O L L L L L L L L L L L L L ");
var Twit = require('twit'); //basic import
var config = require('./config')
var c = 0;
var T = new Twit(config);

var params = {
	q: 'nike',
	count: 100
}

T.get('search/tweets', params, getData);

function getData(err, data, response) {
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length; i++){
  console.log(tweets[i].text);
  }
};




var timer = 1000*90000//somevalue;
intervalTweet();
setInterval(intervalTweet, timer);

function intervalTweet(){
	
	
	var n = c+1;
	var tweet = {
		status: 'kill all humans starting at ' + c + ' then move onto target ' + n
	};
	c++;
	T.post('statuses/update', tweet, postTweet);
	
	function postTweet(err, data, response) { //you dont need a callback function since youre just posting
	  
	} 
}




//Stream intervalTweet

//**take notes on this Twitter API - daniel shiffman

//let's try retweeting a user..

//Bernie Sanders id: Twitter ID: 216776631
//

/*
 function retweetLatest() {
 	T.get('search/tweets', mediaArtsSearch, function (error, data) {
+	  // log out any errors and responses
+	  console.log(error, data);
 	  // If our search request to the server had no errors...
-console.log(error, data);
 	  if (!error) {
 	  	// ...then we grab the ID of the tweet we want to retweet...
 		var retweetId = data.statuses[0].id_str;
*/

/*var timer = 5000;//somevalue;
var retweet  = {
	  id: 539899029
};
tryRetweet();
setInterval(tryRetweet, timer);
 
function tryRetweet() {
	
  T.post(statuses/retweet/:id', retweet, function (err, data, response) {
  console.log(data);
})
};
*/ /*
  
  
  T.post('statuses/retweet/:id', retweet, execute);
  
  function execute (err, data, response) { //you dont need a callback function since youre just posting
	  if(err){
		  console.log(data);
	   }else{
		console.log("Retweet is successful.");
		}
  }
  
  
  */
//};

