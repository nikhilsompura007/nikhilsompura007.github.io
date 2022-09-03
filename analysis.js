window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log("scroll");
    document.getElementById("homesidebar").style.top = "0";
  } else {
    document.getElementById("homesidebar").style.top = "-50px";
    document.getElementById("homesidebar").style.top = "0";
  }
}