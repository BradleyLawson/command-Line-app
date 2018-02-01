require("dotenv").config();

// Global Variables
var keys = require("./keys.js");

// terminal commands applicable to all functions
// command that will trigger function
var command = process.argv[2];

// for searching within each function
var argument = process.argv;

var search = "";

// in case searches are more than one word 
for (var i = 3; i < argument.length; i++){
  search = search + " " + argument[i];
}

// main game logic
switch (command) {
    case "my-tweets":
      myTweets();
      break;
  
    case "movie-this":
      movieThis();
      break;
  
    case "spotify-this-song":
      spotifyThisSong(command, search);
      break;
  
    case "do-what-it-says":
      doWhatItSays();
      break;
  }
// end of main game logic  


// Function declarations

//Twitter section
function myTweets(){
    var Twitter = require('twitter');
 
    var client = new Twitter(keys.twitter);

    var params = {screen_name: 'sojournerwebdev'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          // loops through and console.log's tweets
          for (var k = 0; k < tweets.length; k++){
            console.log(JSON.stringify(tweets[k].text));            
          }
        }
    });
};

//end of twitter section

//spotify section
function spotifyThisSong(command, search){

    var Spotify = require('node-spotify-api');
 
    var spotify = new Spotify(keys.spotify);

   //default if no search command is provided
    if (search === ''){
      search = 'The Sign Ace of Base'
    } else{
      search = search;
    }
    
    // search if search command is provided
    spotify.search({ type: 'track', query: search, limit: 20}, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      var returnInfo = data.tracks.items[0];      
      var artist = returnInfo.artists[0].name;
      var song = returnInfo.name;
      var album = returnInfo.album.name
      var preview = returnInfo.preview_url;

        console.log("Artist: " + artist); 
        console.log("Song: " + song);
        console.log("Preview the song: " + preview);
        console.log("Album: " + album);
    });
};
//end of spotify section

// omdb section
function movieThis(){
    var request = require("request");

    // default if no search is provided
    if (search === ''){
      search = 'Mr Nobody'
    } else{
      search = search;
    }

    request("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
    
      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {

      var movie = JSON.parse(body);

        // Logging movie data
        console.log("Title: " + movie.Title);
        console.log("Year: " + movie.Year);
        console.log("imdb rating: " + movie.Ratings[0].Value);
        console.log("Country: " + movie.Country);
        console.log("Language: " + movie.Language);
        console.log("Plot: " + movie.Plot);
        console.log("Actors: " + movie.Actors);
        if (movie.Ratings.length > 1){
          console.log("Rotten Tomatoes rating: " + movie.Ratings[1].Value);
        } else{
          console.log("Rotten Tomatoes rating is unavailable");
        }
      }
    });
};
// end of omdb section

// do what is says section
function doWhatItSays(){

  var fs = require("fs");

  fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  var dataArr = data.split(",");

  // each element in array stord in variables to pass into spotifyThisSong function
  doWhatItSaysCommand =  dataArr[0];
  doWhatItSaysSearch = dataArr[1];
  spotifyThisSong(doWhatItSaysCommand, doWhatItSaysSearch);
});

};
// end of do what it says section
