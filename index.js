// Your code goes here

document.addEventListener("DOMContentLoaded" ,  function() {
    console.log("The DOM has loaded") ; 
}) ; 



document.addEventListener( "DOMContentLoaded", function() {
   updateDom()
 } );
 
 
 function updateDom() {
   document.getElementById( "text" ).innerHTML = "This is really cool!";
 }