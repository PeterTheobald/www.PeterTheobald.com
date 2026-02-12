// dave-says-thats-not-funny.js
// for www.PeterTheobald.com/tech/Dave-says-thats-not-funny
// Peter@PeterTheobald.com 2017
//
// Grab jokes from reddit.com/r/Jokes and format them in faux iphone iMessages
// My site is a static site generated with Hugo, so no server-side
// Everything runs from the client-side

// When the page has loaded, kick off the sequence to
// load the first 10 jokes from Reddit
$(document).ready(function(){
  // loadJokeImageComponents -> imageLoader -> buildInitialJoke -> requestFirst10RedditJokes -> buildJokes
  loadJokeImageComponents();
});

// Manually clicked 'LOAD MORE JOKES...'
// Used to use an infinite scroll, but then the viewer could never
// reach the Disqus comment forums at the bottom of the page
function loadMoreJokes() {
  requestNext10RedditJokes();
}

// wrap the joke lines to fit in the faux iPhone display
// just simple character count is good enough
// (actually calculating the string width in the given font etc. would be better)
function wordWrap( str, width, cut ) {
    width = width || 75;
    cut = cut || true;
    if (!str) { return str; }
 
    var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\S+?(\s|$)');
    return str.match( RegExp(regex, 'g') );
}

// the images that make up the faux iPhone display
var jokeImageComponents= [ "text-header.png", "text-msg-oneliner.png",
  "text-msg-top.png", "text-msg-middle.png", "text-msg-bottom.png",
  "text-spacer.png", "text-reply-blank.png", "text-thatsnotfunny-footer.png", "text-footer.png"];
const HEADER=0;
const ONELINER=1;
const TOP=2;
const MID=3;
const BOT=4;
const SPACER=5;
const REPLY=6;
const NOTFUNNYFOOTER=7;
const FOOTER=8;
var jokeImageObjects = [];

// load the image components, setting the 'src' attribute kicks off the load
function loadJokeImageComponents() {
  for(var i=0; i<jokeImageComponents.length; i++) {
    jokeImageObjects[i]=new Image();
    // MUST set onLoad before src, or won't get fired if image is in cache
    jokeImageObjects[i].onload=imageLoader;
    jokeImageObjects[i].src="/images/"+jokeImageComponents[i];
  }
}

var numJokeImagesLoaded=0;
function imageLoader() {
  // count images as they load,
  // when all have loaded create the initial hard-coded joke and
  // request the first 10 from reddit
  // Note: this is weak error handling.
  // If one image fails the whole sequence just stops silently
  // ToDo: add img.onerror handler
  numJokeImagesLoaded++;
  if (numJokeImagesLoaded==jokeImageComponents.length) {
    buildInitialJoke();
    requestFirst10RedditJokes();
  }
}

function buildInitialJoke() {
  buildJoke(["Hey Dave, check out this website I made.","http://www.petertheobald.com/Dave-says-thats-not-funny/","It's about you."]);
}

var redditLoaderStatus='ready';
function requestFirst10RedditJokes() {
  // http://www.reddit.com/r/Jokes/hot.json?limit=10&after=id
  // other good joke feeds: top.json hot.json best.json random.json (1 only sometimes horrible)
  redditLoaderStatus='waiting';
  // can't use plain get JSON because cross-origin security.
  // tried using decent law-abiding CORS request but iOS Safari wouldnt have it.
  // resorted to ugly-security-hack JSONP request.
  // "Here's some code from another site, just eval() it, what could go wrong?"
  $.getJSON( "https://www.reddit.com/r/Jokes/top.json?sort=top&t=day&limit=10&jsonp=?", redditLoader);
}

var lastRedditJokeId='';
function requestNext10RedditJokes() {
  // http://www.reddit.com/r/Jokes/hot.json?limit=10&after=id
  // http://www.reddit.com/r/Jokes/top.json?sort=top&t=day&limit=10&after=id
  // other good joke feeds: top.json hot.json best.json random.json (1 only sometimes horrible)
  if (redditLoaderStatus=='ready') {
      redditLoaderStatus='waiting';
      // can't use plain get JSON because cross-origin security.
      // tried using decent law-abiding CORS request but iOS Safari wouldnt have it.
      // resorted to ugly-security-hack JSONP request
      // "Here's some code from another site, just eval() it, what could go wrong?"
      $.getJSON( "https://www.reddit.com/r/Jokes/top.json?sort=top&t=day&limit=10&after="+lastRedditJokeId+"&jsonp=?", redditLoader);
  }
}

// reddit request has returned with the requested 10 jokes. build all of them.
function redditLoader( redditJokesJSON) {
  redditLoaderStatus='ready';
  redditJokesJSON.data.children.forEach( function(redditJokeArray) {
	if (!redditJokeArray.data.over_18) {
      buildJoke( [redditJokeArray.data.title, redditJokeArray.data.selftext]);
      }
    // remember the last ID so we can request the next 10 later
    lastRedditJokeId=redditJokeArray.data.name;
  })
}

function buildJokes( jokes) {
  jokes.forEach( function (joke) {buildJoke(joke);} )
}

function buildJoke( joke) {
  // create new canvas, build up image of joke line by line
  // joke is a list of strings. First string is the "title" line
  //
  // TOP-TEXT-BORDER
  // one-liner?
  //   ONE-LINER-MESSAGE
  //   overlay joke one-liner over ONE-LINER-MESSAGE
  // else:
  //   for each line in joke:
  //     TOP-MESSAGE-BORDER
  //     for each wrapped line in original joke line:
  //       MIDDLE-MESSAGE
  //       overlay Joke wrapped line on MIDDLE-MESSAGE
  //     BOTTOM-MESSAGE-BORDER
  //   REPLY-MESSAGE
  //   overlay 'That's not funny.' over REPLY-MESSAGE
  // add canvas image to document insertBefore or insertAfter
  //
  var canvas = document.createElement("canvas");
	var ctx=canvas.getContext("2d");
  canvas.height=jokeImageObjects[HEADER].height;
  canvas.width=jokeImageObjects[HEADER].width;
  ctx.drawImage(jokeImageObjects[HEADER], 0, 0);
  for(var i=0; i<joke.length; i++) {
    placeJokeLine( canvas, joke[i]);
  }
  appendImageToCanvas( canvas, jokeImageObjects[SPACER]);
  appendImageToCanvas( canvas, jokeImageObjects[REPLY]);
  ctx.font="12pt Helvetica";
  ctx.textBaseline="top";
  ctx.fillText( "That's not funny", 25, canvas.height-25);
  appendImageToCanvas( canvas, jokeImageObjects[FOOTER]);
  document.getElementById("joke-container").insertBefore( canvas, document.getElementById("insert-joke-here"));
  document.getElementById("joke-container").insertBefore( document.createElement("BR"), document.getElementById("insert-joke-here"));
  document.getElementById("joke-container").insertBefore( document.createElement("BR"), document.getElementById("insert-joke-here"));
}

function placeJokeLine( canvas, jokeLine) {
  var ctx=canvas.getContext("2d");
  jokeWrappedLines=wordWrap( jokeLine, 28);
  if (jokeWrappedLines.length==1) {
    // One liner jokes fit inside the ONELINER bubble image
    appendImageToCanvas( canvas, jokeImageObjects[ONELINER]);
    ctx.font="12pt Helvetica";
    ctx.textBaseline="top";
    ctx.fillText( jokeWrappedLines[0], 60, canvas.height-18);
  } else {
    // multiline jokes go inside a TOP, MID, BOT bubble image
    appendImageToCanvas( canvas, jokeImageObjects[TOP]);
    for(var i=0; i<jokeWrappedLines.length; i++) {
      appendImageToCanvas( canvas, jokeImageObjects[MID]);
      ctx.font="12pt Helvetica";
      ctx.textBaseline="top";
      ctx.fillText( jokeWrappedLines[i], 60, canvas.height-18);
    }
    appendImageToCanvas( canvas, jokeImageObjects[BOT]);
  }
}

function appendImageToCanvas( can, img) {
  // note resizing canvas clears it. copy data to temp canvas
  var tempCanvas = document.createElement("canvas");
  tempCanvas.width=can.width;
  tempCanvas.height=can.height;
	var tmpctx=tempCanvas.getContext("2d");
  tmpctx.drawImage(can,0,0);
  can.height = can.height + img.height;
  var ctx=can.getContext("2d");
  ctx.drawImage( tempCanvas, 0, 0);
  ctx.drawImage( img, 0, can.height-img.height);
}
