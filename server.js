const keys = require("./keys.js");
const Twit = require('twit');
var fs = require("fs");

const Twitter = new Twit({
  consumer_key:         keys.CONSUMER_KEY,
  consumer_secret:      keys.CONSUMER_SECRET,
  access_token:         keys.ACCESS_TOKEN,
  access_token_secret:  keys.ACCESS_TOKEN_SECRET,
  timeout_ms:           1000 * 60,
});

// her name
const name = "Silke";

// array of possible body parts for 
const bodyParts = ["neck", "left arm", "right arm", "fingers"];

const makeTweet = () => {
  // getting index between 0 and 3 to access body parts
  let randomNum = Math.floor(Math.random() * 4);
  // getting body part based on number
  let randomBodyPart = bodyParts[randomNum];
  // choosing amount of growth
  let randomGrowth = Math.floor(Math.random() * 6) + 1;
  // initializing last tweet variable so it doesn't need to be defined in each if/else
  let lastGrowth;
  // generating number to decide on plus or minus
  let plusOrMinus = Math.floor(Math.random() * 2);

  if (randomBodyPart === "neck"){
    // reading file to get last tweet
    fs.readFile("neck.txt", "utf8", function(error, data) {
      // console log errors
      if (error) {
        return console.log(error);
      }
      // get rid of all but the numbers from last tweet data 
      lastGrowth = data.replace(/\D/g,'');
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
      }

      // create new tweet
      const newTweet = "my neck is " + newGrowth + " inches today."

      // write new tweet to file
      fs.writeFile("neck.txt", newTweet, function(err) {
        // log errors
        if (err) {
          return console.log(err);
        }
      });

      // post tweet to twitter
      Twitter.post('statuses/update', { status: newTweet }, function(err, data, response) {
        console.log(data)
      });
    });
  } else if (randomBodyPart === "left arm"){
    fs.readFile("leftarm.txt", "utf8", function(error, data) {
      // console log errors
      if (error) {
        return console.log(error);
      }
      lastGrowth = data.replace(/\D/g,'');
      
      let newGrowth;
      
      if(plusOrMinus === 0){
        newGrowth = parseInt(lastGrowth) + randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth > 0){
        newGrowth = parseInt(lastGrowth) - randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth < 0){
        newGrowth = 0;
      }

      // create new tweet
      const newTweet = "my left arm is " + newGrowth + " inches long today."

      // write new tweet to file
      fs.writeFile("leftarm.txt", newTweet, function(err) {
        // log errors
        if (err) {
          return console.log(err);
        }
      });

      // post tweet to twitter
      Twitter.post('statuses/update', { status: newTweet }, function(err, data, response) {
        console.log(data)
      });
    });
  } else if (randomBodyPart === "right arm"){
    fs.readFile("rightarm.txt", "utf8", function(error, data) {
      // console log errors
      if (error) {
        return console.log(error);
      }
      lastGrowth = data.replace(/\D/g,'');

      let newGrowth;
      
      if(plusOrMinus === 0){
        newGrowth = parseInt(lastGrowth) + randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth > 0){
        newGrowth = parseInt(lastGrowth) - randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth < 0){
        newGrowth = 0;
      }
      // create new tweet
      const newTweet = "my right arm is " + newGrowth + " inches long today."
      
      // write new tweet to file
      fs.writeFile("rightarm.txt", newTweet, function(err) {
        // log errors
        if (err) {
          return console.log(err);
        }
      });

      // post tweet to twitter
      Twitter.post('statuses/update', { status: newTweet }, function(err, data, response) {
        console.log(data)
      });
    });
  } else if (randomBodyPart === "fingers"){
    fs.readFile("fingers.txt", "utf8", function(error, data) {
      // console log errors
      if (error) {
        return console.log(error);
      }
      lastGrowth = data.replace(/\D/g,'');
      
      let newGrowth;
      
      if(plusOrMinus === 0){
        newGrowth = parseInt(lastGrowth) + randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth > 0){
        newGrowth = parseInt(lastGrowth) - randomGrowth;
      } else if (plusOrMinus === 1 && parseInt(lastGrowth) - randomGrowth < 0){
        newGrowth = 0;
      }
      
      // create new tweet
      const newTweet = "my fingers are " + newGrowth + " inches long today."
      
      // write new tweet to file
      fs.writeFile("fingers.txt", newTweet, function(err) {
        // log errors
        if (err) {
          return console.log(err);
        }
      });

      // post tweet to twitter
      Twitter.post('statuses/update', { status: newTweet }, function(err, data, response) {
        console.log(data)
      });
    });
  }
};

makeTweet();