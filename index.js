const services = document.querySelector(".op1");
const Book = document.querySelector(".op2");
const Routes= document.querySelector(".op3");
const message =document.getElementById('msg')

services.addEventListener('click', function(){
  window.location.href = "Services.html"

})
Book.addEventListener('click', function(){
  window.location.href = "Bookings.html"
})
Routes.addEventListener('click', function(){
  window.location.href = "Routes.html"
})



