var btn = document.querySelector("#btn");
var txtIn = document.querySelector("#txtInput");
var divOut = document.querySelector("#divOut");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translateURL(text){
	return serverURL + "?" + "text=" + text; 
}

btn.addEventListener("click",function btnHandler(){
	fetch(translateURL(txtIn.value)).then(response => response.json()).then(json=>{
		console.log(json.contents.translated);
	});
});