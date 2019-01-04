var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
window.onload = function() {
  console.log("window has loaded")
  var homeButton = document.getElementById("home-button");
  var educationButton = document.getElementById("education-button");
  var buttonList = [homeButton, educationButton]
  console.log(buttonList)
  for (var button of buttonList){
    if (button){
      button.addEventListener("click", checkThisActive);
    }
  }
  //
  function checkThisActive(){
    removeActiveClass(buttonList);
    this.classList.add('active');
    console.log(button);
  }

  function removeActiveClass(buttonList){
    for (let button of buttonList){
      button.classList.remove('active');
    }
  }
}
