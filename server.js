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

// object of possible tweets
// const tweetBase = {
//   neck: "my neck is " + growth + " inches today.",
//   leftArm: "my left arm is " + growth + " inches long today.",
//   rightArm: "my right arm is " + growth + " inches long today.",
//   fingers: "my fingers are " + growth + " inches long today."
// };

const makeTweet = () => {
  // getting index between 0 and 3 to access body parts
  let randomNum = Math.floor(Math.random() * 4);
  // getting body part based on number
  let randomBodyPart = bodyParts[randomNum];
  // choosing amount of growth
  let randomGrowth = Math.floor(Math.random() * 6) + 1;
  // initializing last tweet variable so it doesn't need to be defined in each if/else
  let lastTweet;

  if (randomBodyPart === "neck"){
    fs.readFile("neck.txt", "utf8", function(error, data) {
      // console log errors
      if (error) {
        return console.log(error);
      }
      // We will then print the contents of data
      console.log(data);
    });
  } else if (randomBodyPart === "left arm"){
    fs.readFile("leftarm.txt", "utf8", function(error, data) {
      // console log errors
      if (error) {
        return console.log(error);
      }
      // We will then print the contents of data
      console.log(data);
    });
  } else if (randomBodyPart === "right arm"){
    fs.readFile("rightarm.txt", "utf8", function(error, data) {
      // console log errors
      if (error) {
        return console.log(error);
      }
      // We will then print the contents of data
      console.log(data);
    });
  } else if (randomBodyPart === "fingers"){
    fs.readFile("fingers.txt", "utf8", function(error, data) {
      // console log errors
      if (error) {
        return console.log(error);
      }
      // We will then print the contents of data
      console.log(data);
    });
  }
};

makeTweet();

// setInterval(makeTweet, 28800000);