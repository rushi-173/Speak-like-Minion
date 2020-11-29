var btn = document.querySelector("#btn");
var txtIn = document.querySelector("#txtInput");
var divOut = document.querySelector("#divOut");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translateURL(text){
	return serverURL + "?" + "text=" + text; 
}

function errorHandler(error){
	console.log("error occured "+error);
	alert("Server is down! Please try after some time.");
}

btn.addEventListener("click",function btnHandler(){
	fetch(translateURL(txtIn.value)).then(response => response.json()).then(json=>{
		divOut.innerText=json.contents.translated;
	}).catch(errorHandler);
});