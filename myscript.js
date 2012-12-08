// wait for google search page to load completely.
setTimeout(alterResults,3000)


function alterResults() {
var searchResults = document.getElementById("search");
var searchString = document.getElementById("gbqfq");
var userName = document.getElementById("gbi4t").innerHTML;
var atChar = userName.indexOf('@');
userName = userName.substring(0,atChar);
console.log(userName);
searchResults.innerHTML =  $.get('http://www.delicious.com/search?p='+ searchString.getAttribute('value') + '&user=' + userName + ' ', function(data) {
  var data2 = $('srch1-bookmarklist a').html(data);
})[0] + searchResults.innerHTML;
}

