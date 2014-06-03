$(document).ready(function(){

	window.addEventListener( "keypress", doKeyDown, false );	
	window.addEventListener( "keyup", doKeyUp, false );	

	//POP UP STUFF///
	
	// get the screen height and width  
    var maskHeight = $(document).height();  
    var maskWidth = $(window).width();
     
    // calculate the values for center alignment
    var dialogTop =  (maskHeight/1.5) - ($('#dialog-box').height());  
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
     
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
	
	/*// if user clicked on button, get rid of pop up 
    $('a.button').click(function () {     
        $('#dialog-overlay, #dialog-box').hide();       
        return false;
    });*/
     
    // if user resize the window, call the same function again
    // to make sure the overlay fills the screen and dialogbox aligned to center    
    $(window).resize(function () {
         
        //only do it if the dialog box is not hidden
       // if (!$('#dialog-box').is(':hidden')) popup();       
    }); 

})

var mambo=0;
var semitone=0;
var right=0;
var total=0;
var level=1;
var time=1;
var time1=0;
var time2=0;
var keyCode1=0;
var keyCode2=0;

var audioElement1 = document.createElement('audio');
audioElement1.setAttribute('src', 'audio/c3.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement2 = document.createElement('audio');
audioElement2.setAttribute('src', 'audio/d3.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement3 = document.createElement('audio');
audioElement3.setAttribute('src', 'audio/e3.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement4 = document.createElement('audio');
audioElement4.setAttribute('src', 'audio/f3.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement5 = document.createElement('audio');
audioElement5.setAttribute('src', 'audio/g3.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement6 = document.createElement('audio');
audioElement6.setAttribute('src', 'audio/a4.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement7 = document.createElement('audio');
audioElement7.setAttribute('src', 'audio/b4.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement8 = document.createElement('audio');
audioElement8.setAttribute('src', 'audio/c4.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement1_5 = document.createElement('audio');
audioElement1_5.setAttribute('src', 'audio/csharp3.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement2_5 = document.createElement('audio');
audioElement2_5.setAttribute('src', 'audio/dsharp3.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement4_5 = document.createElement('audio');
audioElement4_5.setAttribute('src', 'audio/fsharp3.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement5_5 = document.createElement('audio');
audioElement5_5.setAttribute('src', 'audio/gsharp3.wav');
audioElement1.setAttribute('onended', 'keyOff()');

var audioElement6_5 = document.createElement('audio');
audioElement6_5.setAttribute('src', 'audio/asharp4.wav');
audioElement1.setAttribute('onended', 'keyOff()');

function doKeyDown(e) {

	if (time==1){
		time1 = e.timeStamp;
		time = time+1;
		keyCode1 = e.keyCode; 
		}else{
		time2 = e.timeStamp;
		time = time-1;
		keyCode2 = e.keyCode;
		}
		
	if (Math.abs((time2-time1)) <= 160 && (keyCode1==keyCode2)){
	//dont play it
	}else{
		PlayAudio(e.keyCode);
	}
	
	
}

function doKeyUp(e){

	PauseAudio(e.keyCode);
	
}


function PlayAudio(keyVal){
	if (keyVal==97){
		audioElement1.currentTime=0;
		audioElement1.load;
		audioElement1.play();
		if (level==1){
		document.getElementById('key1').style.backgroundColor = '#D1F2A5';
		}
	}
	
	if (keyVal==115){
		audioElement2.currentTime=0;
		audioElement2.load;
		audioElement2.play();
		if (level==1){
		document.getElementById('key2').style.backgroundColor = '#EFFAB4';
		}
	}
	
	if (keyVal==100){
		audioElement3.currentTime=0;
		audioElement3.load;
		audioElement3.play();
		if (level==1){
		document.getElementById('key3').style.backgroundColor = '#FFC48C';
		}
	}
	
	if (keyVal==102){
		audioElement4.currentTime=0;
		audioElement4.load;
		audioElement4.play();
		if (level==1){
		document.getElementById('key4').style.backgroundColor = '#FF9F80';
		}
	}
	
	if (keyVal==103){
		audioElement5.currentTime=0;
		audioElement5.load;
		audioElement5.play();
		if (level==1){
		document.getElementById('key5').style.backgroundColor = '#F56991';
		}
	}
	
	if (keyVal==104){
		audioElement6.currentTime=0;
		audioElement6.load;
		audioElement6.play();
		if (level==1){
		document.getElementById('key6').style.backgroundColor = '#A7DBD8';
		}
	}
	
	if (keyVal==106){
		audioElement7.currentTime=0;
		audioElement7.load;
		audioElement7.play();
		if (level==1){
		document.getElementById('key7').style.backgroundColor = '#69D2E7';
		}
	}
	
	if (keyVal==107){
		audioElement8.currentTime=0;
		audioElement8.load;
		audioElement8.play();
		if (level==1){
		document.getElementById('key8').style.backgroundColor = '#D1F2A5';
		}
	}
	
	if (keyVal==119){
		audioElement1_5.currentTime=0;
		audioElement1_5.load;
		audioElement1_5.play();
		if (level==1){
		document.getElementById('blackKey1').style.backgroundColor = '#0DB2AC';
		}
	}
	
	if (keyVal==101){
		audioElement2_5.currentTime=0;
		audioElement2_5.load;
		audioElement2_5.play();
		if (level==1){
		document.getElementById('blackKey2').style.backgroundColor = '#F5DD7E';
		}
	}
	
	if (keyVal==116){
		audioElement4_5.currentTime=0;
		audioElement4_5.load;
		audioElement4_5.play();
		if (level==1){
		document.getElementById('blackKey3').style.backgroundColor = '#FC8D4D';
		}
	}
	
	if (keyVal==121){
		audioElement5_5.currentTime=0;
		audioElement5_5.load;
		audioElement5_5.play();
		if (level==1){
		document.getElementById('blackKey4').style.backgroundColor = '#FC694D';
		}
	}
	
	if (keyVal==117){
		audioElement6_5.currentTime=0;
		audioElement6_5.load;
		audioElement6_5.play();
		if (level==1){
		document.getElementById('blackKey5').style.backgroundColor = '#FABA32';
		}
	}
	
	if (keyVal==48){
	
		if (mambo==1){
			$(".keys").css("background-color","white");
			mambo=mambo-1;
		}
		else{
			document.getElementById('key1').style.backgroundColor = '#D1F2A5';
			document.getElementById('key2').style.backgroundColor = '#EFFAB4';
			document.getElementById('key3').style.backgroundColor = '#FFC48C';
			document.getElementById('key4').style.backgroundColor = '#FF9F80';
			document.getElementById('key5').style.backgroundColor = '#F56991';
			document.getElementById('key6').style.backgroundColor = '#A7DBD8';
			document.getElementById('key7').style.backgroundColor = '#69D2E7';
			document.getElementById('key8').style.backgroundColor = '#D1F2A5';
			mambo=mambo+1;
		}
	
	}
	
}

function PauseAudio(keyVal){

	if (keyVal==65){
		audioElement1.pause();
		document.getElementById('key1').style.backgroundColor = 'white';
	}

	if (keyVal==83){
		audioElement2.pause();
		document.getElementById('key2').style.backgroundColor = 'white';
	}
	
	if (keyVal==68){
		audioElement3.pause();
		document.getElementById('key3').style.backgroundColor = 'white';
	}
	
	if (keyVal==70){
		audioElement4.pause();
		document.getElementById('key4').style.backgroundColor = 'white';
	}
	
	if (keyVal==71){
		audioElement5.pause();
		document.getElementById('key5').style.backgroundColor = 'white';
	}
	
	if (keyVal==72){
		audioElement6.pause();
		document.getElementById('key6').style.backgroundColor = 'white';
	}
	
	if (keyVal==74){
		audioElement7.pause();
		document.getElementById('key7').style.backgroundColor = 'white';
	}
	
	if (keyVal==75){
		audioElement8.pause();
		document.getElementById('key8').style.backgroundColor = 'white';
	}
	
	if (keyVal==87){
		audioElement1_5.pause();
		document.getElementById('blackKey1').style.backgroundColor = 'black';
	}
	
	if (keyVal==69){
		audioElement2_5.pause();
		document.getElementById('blackKey2').style.backgroundColor = 'black';
	}
	
	if (keyVal==84){
		audioElement4_5.pause();
		document.getElementById('blackKey3').style.backgroundColor = 'black';
	}
	
	if (keyVal==89){
		audioElement5_5.pause();
		document.getElementById('blackKey4').style.backgroundColor = 'black';
	}
	
	if (keyVal==85){
		audioElement6_5.pause();
		document.getElementById('blackKey5').style.backgroundColor = 'black';
	}
	

}

function keyOff(){

	//document.getElementsByClassName('keys').style.backgroundColor = 'white';
	$(".keys").css("background-color","white");
	$(".blackKeys").css("background-color","black");
	console.log('aloha');
}

function sound(semitone){

	if (semitone==1){
		PlayAudio(97);
		PlayAudio(119);
	}
	
	if (semitone==2){
		PlayAudio(97);
		PlayAudio(115);
	}
	
	if (semitone==3){
		PlayAudio(97);
		PlayAudio(101);
	}
	
	if (semitone==4){
		PlayAudio(97);
		PlayAudio(100);
	}
	
	if (semitone==5){
		PlayAudio(97);
		PlayAudio(102);
	}
	
	if (semitone==6){
		PlayAudio(97);
		PlayAudio(116);
	}
	
	if (semitone==7){
		PlayAudio(97);
		PlayAudio(103);
	}
	
	if (semitone==8){
		PlayAudio(97);
		PlayAudio(121);
	}
	
	if (semitone==9){
		PlayAudio(97);
		PlayAudio(104);
	}
	
	if (semitone==10){
		PlayAudio(97);
		PlayAudio(117);
	}
	
	if (semitone==11){
		PlayAudio(97);
		PlayAudio(106);
	}
	
	if (semitone==12){
		PlayAudio(97);
		PlayAudio(107);
	}
}

function intervalTest(levelCheck){

	$('#dialog-box').css({top:0, left:($(window).width())-228}).show();

	if (levelCheck==1){
		level=1;
	}
	if (levelCheck==2){
		level=2
	}
	
	semitone = Math.floor(Math.random() * 12) + 1;
	sound(semitone);
	$('.dialog-content').html('\
	\
	<a href="#" class="intButton" id="min2" onclick="Answer(1)">Minor Second</a>\
	<a href="#" class="intButton" id="M2" onclick="Answer(2)">Major Second</a>\
	<a href="#" class="intButton" id="min3" onclick="Answer(3)">Minor Third</a>\
	<a href="#" class="intButton" id="M3" onclick="Answer(4)">Major Third</a>\
	<a href="#" class="intButton" id="P4" onclick="Answer(5)">Perfect Fourth</a>\
	<a href="#" class="intButton" id="T" onclick="Answer(6)">Tritone</a>\
	<a href="#" class="intButton" id="P5" onclick="Answer(7)">Perfect Fifth</a>\
	<a href="#" class="intButton" id="min6" onclick="Answer(8)">Minor Sixth</a>\
	<a href="#" class="intButton" id="M6" onclick="Answer(9)">Major Sixth</a>\
	<a href="#" class="intButton" id="min7" onclick="Answer(10)">Minor Seventh</a>\
	<a href="#" class="intButton" id="M7" onclick="Answer(11)">Major Seventh</a>\
	<a href="#" class="intButton" id="O" onclick="Answer(12)">Octave</a>\
	<a href="#" class="button" onclick="sound('+semitone+')">Hear it Again</a>');
	//<h3 id="percentage">'+right+'/'+total+'='%</h3>');
	
	if (level==2){
		$("#min2").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#blackKey1").css("background-color","0DB2AC");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#blackKey1").css("background-color","black");
    	});
    	
    	$("#M2").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#key2").css("background-color","EFFAB4");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#key2").css("background-color","white");
    	});
    	
    	$("#min3").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#blackKey2").css("background-color","F5DD7E");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#blackKey2").css("background-color","black");
    	});
    	
    	$("#M3").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#key3").css("background-color","FFC48C");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#key3").css("background-color","white");
    	});
    	
    	$("#P4").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#key4").css("background-color","FF9F80");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#key4").css("background-color","white");
    	});
    	
    	$("#T").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#blackKey3").css("background-color","FC8D4D");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#blackKey3").css("background-color","black");
    	});
    	
    	$("#P5").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#key5").css("background-color","F56991");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#key5").css("background-color","white");
    	});
    	
    	$("#min6").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#blackKey4").css("background-color","FC694D");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#blackKey4").css("background-color","black");
    	});
    	
    	$("#M6").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#key6").css("background-color","A7DBD8");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#key6").css("background-color","white");
    	});
    	
    	$("#min7").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#blackKey5").css("background-color","FABA32");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#blackKey5").css("background-color","black");
    	});
    	
    	$("#M7").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#key7").css("background-color","69D2E7");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#key7").css("background-color","white");
    	});
    	
    	$("#O").hover(function(){
    		$("#key1").css("background-color","#D1F2A5");
    		$("#key8").css("background-color","D1F2A5");
    	
    	},function(){
    		$("#key1").css("background-color","white");
    		$("#key8").css("background-color","white");
    	});
    	
    }
	
}

function Answer(answer){
	//var answer = $("input[name='dinner']:checked").val();
	if(answer==semitone){
		//alert('correct');
		right=right+1;
	}
	else{
		
	}
	total=total+1;
	percentage=(right/total)*100;
	var percentage = Math.round(percentage*10)/10;
	$('#percentage').html(+right+'/'+total+'='+percentage+'%');
	intervalTest();
}


function play(){
	$('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {     
        $('#dialog-overlay, #dialog-box').hide();       
        return false;
    });
    
    }