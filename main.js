// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let buttons = document.querySelectorAll(".like-glyph");
for (let button of buttons) {
  button.addEventListener("click", handleClick)
}



function handleClick(event){
  const heart = event.target
  // console.log(heart)
  mimicServerCall()
  .then (function(){
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART
      heart.className = "activated-heart"
    }
    else {
      heart.textContent = EMPTY_HEART
      heart.className = ''
    }
// console.log("we made it")
  })


  .catch ((error) => {
    let error2 = document.querySelector("#modal")
    error2.className = ''
  })
}

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
