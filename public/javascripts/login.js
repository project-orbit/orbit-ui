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
   //  $('#goregister').click(function(){
   //  	var text = $('#goregister').text();
   //  	if(text == 'Need an account?')
	  //   	text.replaceWith('Have an account?');
	  //   else
			// text.replaceWith('Need an account?');
   //  });
});