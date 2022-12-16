// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const empty_heart = document.querySelectorAll('span')


empty_heart.forEach(element => {

  element.addEventListener('click', ()=>{

    change_hearts()
    mimicServerCall().catch(function(error){

      document.getElementById('#modal').className = "visible"
      change_hearts()

      setTimeout(function(){ 
        document.getElementById('#modal').className = "hidden"
      }, 3000);
    })
  });

  function change_hearts(){
    if (element.className === "like-glyph"){

      element.innerHTML = FULL_HEART
      element.className = "like-glyph activated-heart"

    } else if (element.className === "like-glyph activated-heart") {
      element.innerHTML = EMPTY_HEART
      element.className = "like-glyph"
    }
}
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
