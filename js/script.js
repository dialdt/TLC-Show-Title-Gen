var x;
var prep;
var userText;
var output = document.getElementById('output');
var giphyURL = 'https://api.giphy.com/v1/gifs/random?api_key=';
var giphyApiKey = [YOUR_GIPHY_API_KEY];
var giphyTag = 'pregnant';
var rating = 'G';
var data;
var imgoutput = document.getElementById('gifoutput');
var imgcontainer = document.getElementById('imgcontainer');
var attribution = document.getElementById('attribution');
var loadingDiv = document.getElementById('loading');
var loadingGif = document.getElementById('loadingGif');
var loadingArr = ['Using extra writer brain power','Checking with the producers','Recovering from writer\'s block','Letting my dog have a look','Going over this really tough decision' ]

var outputPrep;

//reset values
//hide imgcontainer
imgcontainer.style.visibility = 'hidden';

function mainSeq() {
  x = document.getElementById('preposition').selectedIndex;
  prep = document.getElementsByTagName('option')[x].value;
  userText = document.getElementById('user-input').value;
  switch (prep) {
    case 'none':
      outputPrep = '';
      break;
    case 'from':
      outputPrep = 'to';
      break;
    case 'at':
      outputPrep = ',';
      break;
    case 'im':
      outputPrep = 'and I\'m';
      break;
    case 'youre':
      outputPrep = 'but I\'m';
      break;
    default:
      outputPrep = 'and';
  }

  //update output div
  output.innerHTML = '"' + prep + ' ' + userText + ' ' + outputPrep + ' pregnant"';
  loadingDiv.style.visibility = 'hidden';
  loadingGif.style.visibility = 'hidden';
  output.style.visibility = 'visible';
  imgoutput.style.visibility = 'visible';
  attribution.style.visibility = 'visible';
  retrieveGif();
}

function getJSON(url) {
  var resp ;
  var xmlHttp ;
  var json;

  resp  = '' ;
  xmlHttp = new XMLHttpRequest();
  if(xmlHttp != null)
  {
      xmlHttp.open( "GET", url, false );
      xmlHttp.send( null );
      resp = xmlHttp.responseText;
  }
  json = JSON.parse(resp);
  return json ;
}

function retrieveGif() {
  data = getJSON(giphyURL + giphyApiKey + '&tag=' + giphyTag + '&rating=' + rating);
  imgoutput.src = data.data.image_url;
  //make imgcontainer visible
  imgcontainer.style.visibility = 'visible';
}

function randomNumber(max) {
 return Math.floor(Math.random() * max);
}

function buttonClick() {
  //hide output etc
  output.style.visibility = 'hidden';
  imgoutput.style.visibility = 'hidden';
  attribution.style.visibility = 'hidden';
  loadingDiv.style.visibility = 'visible';
  loadingGif.style.visibility = 'visible';
  //start 'loading' sequence for shits and giggles
  var loadingTextIndex = randomNumber(loadingArr.length);
  //display random loading message
  loadingDiv.innerHTML = loadingArr[loadingTextIndex];
  //false delay for effect then run main function
  setTimeout(mainSeq, 3000);
}
