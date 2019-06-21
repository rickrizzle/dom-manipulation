console.log("Hello World");

let displayPromptButton = document.getElementById("displayPromptButton");

/*
//DOMContent Loaded listens for when DOM conent is loaded
document.addEventListener("DOMContentLoaded", function() {
  let displayPromptButton = document.getElementById("displayPromptButton");

  //This code (which was previously by itself) doesn't execute until above DOM
  //contentloaded event has fired.
  displayPromptButton.addEventListener("click", function() {
    console.log("clicked");
  });
});
*/

function addListItem(input, target) {
  let listItem = document.createElement("li");
  listItem.innerHTML = input;
  target.appendChild(listItem);
}

document.addEventListener("DOMContentLoaded", function() {
  let displayPromptButton = document.getElementById("displayPromptButton");
  let view = document.getElementById("pokemon");

  displayPromptButton.addEventListener("click", function() {
    let input = prompt("What is your favorite Pokemon?");

    if (input == "") {
      alert("You didn't input a Pokemon!");
      //} else if  {
    } else {
      addListItem(input, view);
    }
  });
});
