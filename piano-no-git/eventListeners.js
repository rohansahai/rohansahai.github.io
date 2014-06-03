var segmentEnd;

audioElement1.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement1.currentTime >= segmentEnd) {
        PauseAudio(65);
    }   
}, false);

audioElement2.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement2.currentTime >= segmentEnd) {
        PauseAudio(83);
    }   
}, false);

audioElement3.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement3.currentTime >= segmentEnd) {
        PauseAudio(68);
    }   
}, false);

audioElement4.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement4.currentTime >= segmentEnd) {
        PauseAudio(70);
    }   
}, false);

audioElement5.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement5.currentTime >= segmentEnd) {
        PauseAudio(71);
    }   
}, false);

audioElement6.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement6.currentTime >= segmentEnd) {
        PauseAudio(72);
    }   
}, false);

audioElement7.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement7.currentTime >= segmentEnd) {
        PauseAudio(74);
    }   
}, false);

audioElement8.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement8.currentTime >= segmentEnd) {
        PauseAudio(75);
    }   
}, false);

audioElement1_5.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement1_5.currentTime >= segmentEnd) {
        PauseAudio(87);
    }   
}, false);

audioElement2_5.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement2_5.currentTime >= segmentEnd) {
        PauseAudio(69);
    }   
}, false);

audioElement4_5.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement4_5.currentTime >= segmentEnd) {
        PauseAudio(84);
    }   
}, false);

audioElement5_5.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement5_5.currentTime >= segmentEnd) {
        PauseAudio(89);
    }   
}, false);

audioElement6_5.addEventListener('timeupdate', function (){
    if (segmentEnd && audioElement6_5.currentTime >= segmentEnd) {
        PauseAudio(85);
    }   
}, false);

function playSegment(audio123,startTime, endTime){
	var play;
    segmentEnd = endTime;
    audio123.currentTime = startTime;
    if (audio123 == audioElement1){audio123 = 97;}
    else if (audio123 == audioElement2){audio123=115;}
    else if (audio123 == audioElement3){audio123=100;}
    else if (audio123 == audioElement4){audio123=102;}
    else if (audio123 == audioElement5){audio123=103;}
    else if (audio123 == audioElement6){audio123=104;}
    else if (audio123 == audioElement7){audio123=106;}
    else if (audio123 == audioElement8){audio123=107;}
    else if (audio123 == audioElement1_5){audio123=119;}
    else if (audio123 == audioElement2_5){audio123=101;}
    else if (audio123 == audioElement4_5){audio123=116;}
    else if (audio123 == audioElement5_5){audio123=121;}
    else if (audio123 == audioElement6_5){audio123=117;}
    PlayAudio(audio123);

}

function happyBirthday(){

	setTimeout(function(){playSegment(audioElement1,0,.25);},500);
	
	setTimeout(function(){playSegment(audioElement1,0,.05);},850);
	
	setTimeout(function(){playSegment(audioElement2,0,.3);},1000);
	
	setTimeout(function(){playSegment(audioElement1,0,.3);},1500);
	
	setTimeout(function(){playSegment(audioElement4,0,.3);},2000);
	
	setTimeout(function(){playSegment(audioElement3,0,.3);},2500);
	
	setTimeout(function(){playSegment(audioElement1,0,.3);},3500);
	
	setTimeout(function(){playSegment(audioElement1,0,.15);},3800);
	
	setTimeout(function(){playSegment(audioElement2,0,.3);},4000);
	
	setTimeout(function(){playSegment(audioElement1,0,.3);},4500);
	
	setTimeout(function(){playSegment(audioElement5,0,.3);},5000);
	
	setTimeout(function(){playSegment(audioElement4,0,.3);},5500);
	
	setTimeout(function(){playSegment(audioElement1,0,.3);},6500);
	
	setTimeout(function(){playSegment(audioElement1,0,.15);},6800);
	
	setTimeout(function(){playSegment(audioElement8,0,.3);},7000);
	
	setTimeout(function(){playSegment(audioElement6,0,.3);},7500);
	
	setTimeout(function(){playSegment(audioElement4,0,.3);},8000);
	
	setTimeout(function(){playSegment(audioElement3,0,.3);},8500);
	
	setTimeout(function(){playSegment(audioElement2,0,.3);},9000);
	
	setTimeout(function(){playSegment(audioElement6_5,0,.3);},10500);
	
	setTimeout(function(){playSegment(audioElement6_5,0,.15);},10800);
	
	setTimeout(function(){playSegment(audioElement6,0,.3);},11000);
	
	setTimeout(function(){playSegment(audioElement4,0,.3);},11500);
	
	setTimeout(function(){playSegment(audioElement5,0,.3);},12000);
	
	setTimeout(function(){playSegment(audioElement4,0,.3);},12500);
	

}


//PlayAudios - 97, 115, 100, 102, 103, 104, 106, 107, 119, 101, 116, 121, 117
//PauseAudios - 65, 83, 68, 70, 71, 72, 74, 75, 87, 69, 84, 89, 85