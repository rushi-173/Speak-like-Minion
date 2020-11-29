var btn = document.querySelector("#btn");
btn.addEventListener("click",function btnHandler(){
	txtIn = document.querySelector("#txtInput");
	divOut = document.querySelector("#divOut");
	divOut.innerText = txtIn.value;	
});