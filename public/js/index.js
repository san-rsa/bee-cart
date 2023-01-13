

 slideIndex2 = 0
function showSlidesNews() {
    let i;
    let card = document.getElementsByClassName("card-title");
    let slides = document.getElementsByClassName("car1");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.width = "0";
      card[i].style.opacity = "0";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
  
    slides[slideIndex2-1].style.width = "100%";
    card[slideIndex2-1].style.opacity = "100%";
  
    setTimeout(showSlidesNews, 7000); // Change image every 2 seconds   
  
  };

  showSlidesNews()


// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("head");

// // Get the offset position of the navbar
// var sticky = navbar.onscroll;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset <= sticky) {
//     navbar.classList.add("heads")
//   } else {
//     navbar.classList.remove("heads");
//   }
// }