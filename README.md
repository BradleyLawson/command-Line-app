# CLI - APP

## About

CLI - APP is a Command Line APP that uses the [Spotify](https://www.spotify.com/us/), [Twitter](https://twitter.com/), & [OMDB](http://www.omdbapi.com/) API's. Based upon the command you give, The App will respond accordingly. See the <mark>How it Works</mark> Section below for instructions and the <mark>What you will need if you clone</mark> section for dependancies.

## Built With   

* [Node.js](https://nodejs.org/en/) 


## How it Works

### Enter 1 of 4 commands

#### my-tweets
* Takes no additonal arguments
* Will return your last 10 tweets
#### spotify-this-song
* If no search parameter is given will return default 'The Sign' by Ace of Base
* If additional search parameter is given will return details of that song
#### movie-this
* If no search parameter is given will return default 'Mr. Nobody'
* If search parameter is given will return details of that movie
#### do-what-it-says
* No search parameter is required
* Will read text file and return default song data of 'I Want it That Way'



## What you will need if you clone

* [Node.js](https://nodejs.org/en/)
* [Twitter](https://twitter.com/) API - You can sign up for your key [here](https://developer.twitter.com/en/apply-for-access)
* [Spotify API](https://www.spotify.com/us/) - You can sign up for your key [here](https://beta.developer.spotify.com/documentation/web-api/)
* [OMDB API](http://www.omdbapi.com/) - You can sign up for your key [here](http://www.omdbapi.com/)


## Special Instructions

### Create a .env file and add your Twitter and Spotify API keys in this file as follows:

* SPOTIFY_ID=<YourSpotify_ID>
* SPOTIFY_SECRET=<YourSpotify_Secret>
* TWITTER_CONSUMER_KEY=<YourTwitter_Consumer_Key>
* TWITTER_CONSUMER_SECRET=<YourTwitter_Consumer_Secret>
* TWITTER_ACCESS_TOKEN_KEY=<YourTwitterAccess_Token_Key>
* TWITTER_ACCESS_TOKEN_SECRET=<YourTwitter_Access_Token_Secret>


## Author

* **Brad Lawson** - [BradleyLawson](https://github.com/BradleyLawson)


