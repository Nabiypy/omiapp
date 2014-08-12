
function changeText2(){
	var startTime = (new Date()).getTime();

	var userInput = document.getElementById('userInput').value;
	document.getElementById('boldStuff2').innerHTML = userInput;
	var endtime = (new Date()).getTime();
alert(endtime - startTime);

}

