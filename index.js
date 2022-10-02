var inputTxt = document.querySelector("#input-txt");
var btnTranslate = document.querySelector(".btn-translate");
var outputDiv = document.querySelector(".translated-morse");

var serverURL = "https://api.funtranslations.com/translate/morse.json";

function getUrl(txtInput) {
    var url = serverURL + "?text=" + txtInput;
    return url;
}

function errorHandler(error) {
    console.log("Error: " + error);
}

function clickHandler() {
    var txtInput = inputTxt.value;
    
    fetch(getUrl(txtInput))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);