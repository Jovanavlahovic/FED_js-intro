function sayHello(name){
    document.write("Hello " + name +"!");
}

function ispisi(vrednost){
    document.getElementById("placeholder").value = vrednost.value;
}

function insert(){
    var tmp = document.getElementById("placeholder").value;
    document.getElementById("secret").innerHTML = tmp;
    document.getElementById('secret').style.visibility= "visible";
}
