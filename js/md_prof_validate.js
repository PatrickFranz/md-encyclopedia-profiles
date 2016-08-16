var searchNode = document.getElementById('search');

onload = function(){
  addListeners();
}

function addListeners(){
  //Validation - Make sure search input is < 100 characters
  searchNode.addEventListener('input', function(event){
    if(searchNode.innerHTML.length > 100){
      searchNode.addCustomValidity('Search string too long.');
    } else {
      searchNode.setCustomValidity('');
    }
  });

  //Submit search data to search handler.
  searchNode.addEventListener('keydown', function (event){
    if(event.keyCode === 13){ //If user hits enter
      console.log('Submitted');
      //Send data to search function.
    }
  });
}