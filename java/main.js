
document.addEventListener("DOMContentLoaded", init);

function init() {

  const baseURL = 'images/';
  const nxt = document.querySelector('.nxt');
  const prev = document.querySelector('.prev');
  const slide = document.querySelector('.pic');
  const dogs = document.querySelectorAll('.dogpics img');
  let index = 0;


  //create shortcut vars
  const frame = document.querySelector(".frame");
  const caption = document.querySelector(".caption");
  const controls = document.querySelector(".controls");
  var myInterval = ""; 


    //with JS active, hide all images
    dogs.forEach((dog) => {
      dog.classList.add("hide", "abs-pos");
    // show the first slide
   dogs[0].classList.remove("hide");
  });



  //make the controls work
  nxt.addEventListener("click", changeSlide);
  prev.addEventListener("click", changeSlide);

  // set the caption dynamically
  caption.innerHTML = dogs[0].alt;


  // start the timer
  myInterval = setInterval(changeSlide, 2000);



  function changeSlide(e) {
      
      // check to see if function called by button click
      // or setInterval. If the event object
      // is passed, button was clicked. kill off the timer.
      if (e) {
          e.preventDefault();
          clearInterval(myInterval);
      }

      //shortcut vars
      const dogpics = document.querySelector(".dogpics");
      const dogs = dogpics.querySelectorAll("img");
      const caption = document.querySelector(".caption");
      let showing = document.querySelector(".current");
      let nextUp = "";

      // determine which direction we will be going.
      // if called by myInterval there's no event object passed.
      if (!e || e.target.className == "next-btn") {
          nextUp = showing.nextElementSibling;
      } else {
          nextUp = showing.previousElementSibling;
      }

      // deactivate current image
      showing.classList.toggle("hide");
      showing.classList.toggle("current");

      //make sure next image is there
      if (!nextUp) {
          nextUp = dogs[dogs.length - 1];
      }

      if (nextUp.nodeName !== "IMG") {
          nextUp = dogs[0];
      }

      // activate next image
      nextUp.classList.toggle("hide");
      nextUp.classList.toggle("current");

      //change caption text
      caption.innerHTML = nextUp.alt;
  
  }

}