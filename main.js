var btn = document.querySelector("#btn");
btn.addEventListener("click",function btnHandler(){
	txtIn = document.querySelector("#txtInput");
	var userInput = txtIn.value;
	console.log(userInput);
});