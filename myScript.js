
// hides intro content and shows destination content
var explorePlanet = document.querySelector('#explore');

explorePlanet.onclick = function() {
    let homeContent = document.querySelector('#homepage-intro');
    homeContent.classList.add('content-hide');
    let planetContent = document.querySelector('#planets');
    planetContent.classList.remove('content-hide');
    let destinationContent = document.querySelector('#homepage');
    destinationContent.classList.add('destinations');
}

// switch tabs and add active class
function openPlanet(evt, planetName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("planet-info");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("planet-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(planetName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// first tab default
document.getElementById("default").click();
