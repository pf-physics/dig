$(document).ready(function(){ 

	for(var i =0; i < 700; i++)
	{
		$("body").append('<img src="dirt1.jpg" height="100" class="regular">');
		if (i == 350) {
			$("body").append('<img src="dirt1.jpg" height="100" class="hand">')
		}
	}

    $(".regular").hover(
        function(){
        	this.src = 'dirt2.jpg';
        }
    );
    $(".hand").hover(
        function(){
        	if(this.id != 'hurray')
        	this.src = 'dirt3.jpg';
        }
    );
    $( ".regular" ).mouseout(function() {
    	this.src = 'dirt1.jpg';
    });

     $(".hand").click(
        function(){
		var dort = document.getElementsByClassName('regular');

		while(dort[0]) dort[0].parentNode.removeChild(dort[0]);

		var hand = document.getElementsByClassName('hand');
		hand[0].parentNode.removeChild(hand[0]);

		$("body").append('<h1><font color="white">wow a hand</font></h1>')
		$("body").append('<img src="dirt4.jpg" height="500" class="regular">');

        }
    );

    $(".regular").click(
        function(){
		this.class = 'nothing'
		this.width = 1000;
		this.height = 1000;
		var dort = document.getElementsByClassName('regular');
		while(dort[0]) dort[0].parentNode.removeChild(dort[0]);

		var dort1 = document.getElementsByClassName('hand');
		dort1[0].parentNode.removeChild(dort1[0]);

		$("body").append('<h1><font color="white">Nothing here...</font></h1>')
		$("body").append('<img src="dirt1.jpg" height="1000" class="regular">');

        }
    );


});