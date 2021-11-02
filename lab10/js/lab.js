/**
 * Author: Alise Morgan & Stella Brown
 * Created: 11/2/21
 *
 * Public Domain
 **/


 function putNameInTitle() {
  // When the button is pushed,
  // prompt the user to input their name
  // with the prompt() function.
  //var name = prompt("Please enter your name:");
  var field = document.getElementById("myfield");
  var name = field.value;

  // Use this input to change the text from
  // ‘Hello Everyone!!’ to ‘What's Up’ + the user’s name
  var headingEl = document.getElementById("title");
  headingEl.innerHTML = "What's Up, " + name;
}

// Create an event handler within the JS file that listens for a button click.
var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", putNameInTitle);
