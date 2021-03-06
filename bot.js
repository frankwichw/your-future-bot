// let keys = require("./keys.js");
const Twit = require('twit');

const Twitter = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET
});

// her name
const name = "Silke";
const sign = "Taurus";

// array of possible body parts for 
const bodyParts = ["neck", "left arm", "right arm", "fingers"];

const makeTweet = () => {
  // getting index between 0 and 3 to access body parts
  let randomNum = Math.floor(Math.random() * 4);
  // getting body part based on number
  let randomBodyPart = bodyParts[randomNum];
  // choosing amount of growth
  let randomGrowth = Math.floor(Math.random() * 6) + 1;
  // initializing last tweet variable so it doesn't ne ed to be defined in each if/else
  let lastGrowth;
  // generating number to decide on plus or minus
  let plusOrMinus = Math.floor(Math.random() * 2);

  if (randomBodyPart === "neck"){
    // searching tweets to get last tweet
    Twitter.get('search/tweets', { q: 'neck from:silkebot since:2018-04-23', count: 1 }, function(err, data, response) {

      // get rid of all but the numbers from last tweet data 
      lastGrowth = data.statuses[0].text.replace(/\D/g,'');

      // initialize new growth
      let newGrowth;
    
      // add or subtract based on random number
      if(plusOrMinus === 0){
        newGrowth = parseInt(lastGrowth) + randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth > 0){
        newGrowth = parseInt(lastGrowth) - randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth < 0){
        // don't let it go below 0
        newGrowth = 0;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth === 0){
        newGrowth = 0;
      }

      // create new tweet
      const newTweet = "my neck is " + newGrowth + " inches today."

      // post tweet to twitter
      Twitter.post('statuses/update', { status: newTweet }, function(err, data, response) {
        // console.log(data);
      });
    });
  } else if (randomBodyPart === "left arm"){
    Twitter.get('search/tweets', { q: 'left arm from:silkebot since:2018-04-23', count: 1 }, function(err, data, response) {

      // get rid of all but the numbers from last tweet data 
      lastGrowth = data.statuses[0].text.replace(/\D/g,'');

      let newGrowth;
      
      if(plusOrMinus === 0){
        newGrowth = parseInt(lastGrowth) + randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth > 0){
        newGrowth = parseInt(lastGrowth) - randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth < 0){
        newGrowth = 0;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth === 0){
        newGrowth = 0;
      }

      // create new tweet
      const newTweet = "my left arm is " + newGrowth + " inches long today."

      // post tweet to twitter
      Twitter.post('statuses/update', { status: newTweet }, function(err, data, response) {
        // console.log(data);
      });
    });
  } else if (randomBodyPart === "right arm"){
    Twitter.get('search/tweets', { q: 'right arm from:silkebot since:2018-04-23', count: 1 }, function(err, data, response) {

      // get rid of all but the numbers from last tweet data 
      lastGrowth = data.statuses[0].text.replace(/\D/g,'');

      let newGrowth;
      
      if(plusOrMinus === 0){
        newGrowth = parseInt(lastGrowth) + randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth > 0){
        newGrowth = parseInt(lastGrowth) - randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth < 0){
        newGrowth = 0;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth === 0){
        newGrowth = 0;
      }
      // create new tweet
      const newTweet = "my right arm is " + newGrowth + " inches long today."
      console.log(newTweet);

      // post tweet to twitter
      Twitter.post('statuses/update', { status: newTweet }, function(err, data, response) {
        // console.log(data);
      });
    });
  } else if (randomBodyPart === "fingers"){
    Twitter.get('search/tweets', { q: 'fingers from:silkebot since:2018-04-23', count: 1 }, function(err, data, response) {

      // get rid of all but the numbers from last tweet data 
      lastGrowth = data.statuses[0].text.replace(/\D/g,'');
      
      let newGrowth;
      
      if(plusOrMinus === 0){
        newGrowth = parseInt(lastGrowth) + randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth > 0){
        newGrowth = parseInt(lastGrowth) - randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth < 0){
        newGrowth = 0;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth === 0){
        newGrowth = 0;
      }
      
      // create new tweet
      const newTweet = "my fingers are " + newGrowth + " inches long today."

      // post tweet to twitter
      Twitter.post('statuses/update', { status: newTweet }, function(err, data, response) {
        // console.log(data);
      });
    });
  }
};

makeTweet();