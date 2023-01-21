 // function myFunction() {
 //  var x = document.getElementById("myDIV");
 //  if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
 //     x.style.display = "none";
 //  }
 // }

  //onclick="myFunction()"


//function myFunction(){
  //document.getElementById('contacto').style.display = "block";
//}

//function hideall(){
 //document.getElementById('contacto').style.display = "none";
//}


$(document).ready(function(){
  $("button").click(function(){
    $("form").toggle();
  });
});