document.addEventListener("DOMContentLoaded", function(){
  console.log("The DOM has loaded");
  let changeParagraph = document.querySelector('#text');
  changeParagraph.textContent = 'This is really cool!'
});

console.log('This console.log() fires when index.js loads - before DOMContentLoaded is triggered');
