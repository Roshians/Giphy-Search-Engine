/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function(){

  var input = gettingUsInput();
  searchGiphy(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

  var input = gettingUsInput

  // if the key ENTER is pressed...
  if(e.which === 13) {
    var input = gettingUsInput();
    searchGiphy(input);
  }

});

  function gettingUsInput() {
    var inputValue = document.querySelector('.js-userinput').value;

	return inputValue;
  }



/* 2. do the data stuff with the API */

function searchGiphy( searchQuery ) {
	var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();


	GiphyAJAXCall.addEventListener('load', function( e ) {

			var actualData = e.target.response;
			pushToDOM(actualData);
      console.log(e);
      
		
	});
  console.log(searchQuery);
}



/* 3. Show me the GIFs */


function pushToDOM(input) {

  console.log(typeof input);  
  console.log(input);
  var input = JSON.parse(input);

  var imageUrls = input.data;
  console.log(imageUrls);
  var container = document.querySelector('.js-container');
  container.innerHTML = "";

  imageUrls.forEach(function(image){

    var src = image.images.fixed_height.url;
    console.log(src);

    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

  });

}

