function displayvalue(val) {
    document.getElementById("display").value = document.getElementById("display").value + val;
}

function cleardisplay() {
    document.getElementById("display").value = "";
}

function calculation(){
    var usrinput = document.getElementById("display").value;
    var result= eval(usrinput);
    document.getElementById("display").value = result;
}