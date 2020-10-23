function generickaCestitka(person, event){
    console.log("Happy " + event + " to you.");
    console.log("Happy " + event + " to you.");
    console.log("Happy " + event + " dear " + person + ".");
    console.log("Happy " + event + " to you.");
    }
    
    function greeter (text, callback){
        var podaci = text.split(",");
        if(typeof callback === "function"){
            callback(podaci[0], podaci[1]);
        }
    }
    
    console.log(greeter("Mika,New Year",generickaCestitka));
    
    
    
    //2.zadatak
    
    function hello(name,lastName,gender){
        if(gender == "man"){
            console.log(`Hello, Mr. ${name} ${lastName}`);
        } else if(gender == "woman"){
            console.log(`Hello, Mrs. ${name} ${lastName}`);
        }
    }
    
    function sayHello(fullName, gender, hello){
        var full_name = fullName.split(" ");
        hello(full_name[0], fullName[1], gender);
    }
    
    //3.zadatak
    var niz1 = ["Pera", "Djura", "Mika"];
    var niz2 = ["Peric", "Djuric", "Mikic"];
    
    function ispisi(imena, prezimena, callbackIspis){
        for(var i = 0; i < imena.length; i++){
            callbackIspis(i+1 +". " + imena[i] + " " + prezimena[i]);
        }
    }
    
    ispisi(niz1, niz2, console.log);
