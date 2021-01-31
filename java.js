// open popups

function openPop(identifier){
    var popup = document.getElementById(identifier);
popup.style.opacity="1"
    popup.style.visibility="visible";
    var inner = popup.getElementsByClassName("content")[0];
    inner.style.transform="scale(1)"
}

function popOff(identifier){
    var popup = document.getElementById(identifier);
    popup.style.opacity="0"
    popup.style.visibility="hidden";
    var inner = popup.getElementsByClassName("content")[0];
    inner.style.transform="scale(0)"
    console.log('ok')
}
