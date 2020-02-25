$(document).ready(function(){
  $(".design").click(function(){
    $(".first-image").toggle();
    $(".design-practice").toggle();
  });
  $(".development").click(function(){
    $(".second-image").toggle();
    $(".development-practice").toggle();
  });
  $(".product-management").click(function(){
    $(".third-image").toggle();
    $(".management-practice").toggle();
  });
})
function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == ""){
      alert ("enter your name, email and a commment")
    }
     else alert( name + " ,thank you for your message");
  }
