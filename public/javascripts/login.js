$(document).ready(function(){
    $("#goregister").on("click", function() {
	  var current = $(this).text();
	  var newMessage = current === "Need an account?" ?
	  	"Have an account?" :
	  	"Need an account?";
	  $(this).text(newMessage);

	  var titlecurrent = $("h1#titleswitch").text();
	  var newTitle = titlecurrent === "Login" ?
	  	"Register" :
	  	"Login";
	  $("h1#titleswitch").text(newTitle);
	});
  
  
  $('body').on('submit', 'form', function(e) {
    e.preventDefault();
    
    var result = '{"_id":"explorer@example.com","first_name":"Galileo","last_name":"Galilei","password":"hacktheplanet","devices":[]}';
    result = JSON.parse(result);
    
    if($(".email").val() == result._id && $(".pass").val() == result.password) {
      window.location.replace("/admin");
    } else {
      $("#button1").val("Incorrect login/password. Try again?");
    }
    
    return false;
  });

});


