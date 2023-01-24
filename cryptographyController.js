let encryptButton = document.getElementById("encryptButton");
let decryptButton = document.getElementById("decryptButton");
let copyButton = document.getElementById("copyButton");

function encryptText(){
    var input = document.querySelector("input");
    input.focus();

    var textToEncrypt = input.value;

    var change = textToEncrypt.replace(/e/g, "enter");
    var change = change.replace(/i/g, "imes");
    var change = change.replace(/a/g, "ai");
    var change = change.replace(/o/g, "ober");
    var change = change.replace(/u/g, "ufat");

    var fillAreaText = document.getElementById("text-area");
    fillAreaText.innerHTML = change;

    textAreaImg = document.getElementById("textAreaImg").style.opacity = "0";
    input.value = "";
}

function select (){
        var data = document.querySelector("#text-area");
        data.select();
    }
    
function copyText(){

    var copyText = document.querySelector('#text-area').value;
    navigator.clipboard.writeText(copyText).then(copyText=>{
        select();
        });
    };


function decryptText(){
    var input = document.querySelector("input");
    input.focus();

    var textToDecrypt = input.value;

    var change = textToDecrypt.replace(/enter/ig, "e");
    var change = change.replace(/imes/ig, "i");
    var change = change.replace(/ai/ig, "a");
    var change = change.replace(/ober/ig, "o");
    var change = change.replace(/ufat/ig, "u");

    var fillAreaText = document.getElementById("text-area");
    fillAreaText.innerHTML = change;

}

encryptButton.addEventListener("click", encryptText);
decryptButton.addEventListener("click", decryptText);
copyButton.addEventListener("click", copyText);