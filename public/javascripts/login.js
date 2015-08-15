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

});