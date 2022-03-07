var body = document.getElementById("body");
var theme;
var headArray = new Array("Joseph Bot lets you give him a rose, Oh la la!",
                        "Joseph says hello: BIP BOP,BOP BIBIP BIP!",
                        "Joseph wants to kill you! Oh, hmm, just kidding.",
                        "Joseph shouldn't be late for his job, his job is to make people scholars.",
                        "Others say Joseph is a psycho, that's a complete lie!",
                        "joseph doesn't have all the information, he just has the internet!",
                        "Joseph recently got a blue screen error, feeling nauseous: BOOOOOP",
                        "Joseph likes to listen to music. Which type? Rap like his creator!",
                        "Joseph has secret codes, here's one: ROCKETMAN",
                        "Joseph wants to buy a new phone, why not?",
                        "Joseph thinks why he is so poor...",
                        "Please don't say (DROP THAT COMPUTER) to Joseph, that's not his name!",
                        "Joseph begins each sentence with his name: JOSEPH BIP BIP BOBOP"
                        );
function time(){
    var date = new Date();
    var hour = date.getHours().toString();
    var minute = date.getMinutes().toString();
    var second =date.getSeconds().toString();

    var year = date.getFullYear().toString();
    var day = date.getDate().toString();
    var month = date.getMonth();
    var month = month+1;
    var month = month.toString();
    if(hour.length<2){
        var hour = "0"+hour;
    }
    if(minute.length<2){
        var minute = "0"+minute;
    }
    if(second.length<2){
        var second = "0"+second;
    }

    if(month.length<2){var month = "0"+month;}
    if(day.length<2){var day = "0"+day;}

    var time = `${hour}:${minute}:${second}`;
    var date = `${year}/${month}/${day}`
    document.getElementById("date").innerHTML = date;
    document.getElementById("clock").innerHTML = time;
}
function onKey(k){
    if(k.keyCode === 13){
        k.preventDefault();
        subm_it();}
}

function subm_it(){
    var sab = String(document.getElementById("form").selectedIndex);
    var lastReturn = "";

    if(sab==0){
        if (String(document.getElementById("command_value").value)==="world"){
            lastReturn =' print("Hello World!") ';
        }
        else{
        lastReturn ="Joseph says a BIG HELLO for you <3";
        }
    }
    else if(sab==1){
        window.open(`https://www.google.com/search?q=${String(document.getElementById("command_value").value).replaceAll(" ","+")}`);
        lastReturn ="Task completed successfully";
    }else if(sab==2){
        window.open(`https://www.youtube.com/results?search_query=${String(document.getElementById("command_value").value).replaceAll(" ","+")}`);
        lastReturn ="Task completed successfully";
    }else if(sab==3){
        
    }
    else
    {
        lastReturn ="Unexpected command";
    }
    document.getElementById("return").innerHTML = lastReturn;
    
    
}
function on_load(){
    var theme=body.getAttribute("data-page-theme");
    time()
    setInterval(time,500)
    var can = Math.floor(Math.random() * headArray.length);
    document.getElementById("header_").innerHTML = headArray[can];
    colorSet(theme)
}

function onfooterClick(){
    
    document.getElementById("date").classList.toggle("animatedFooter");
    document.getElementById("clock").classList.toggle("animatedFooter");
}
