window.addEventListener("contextmenu", e => e.preventDefault());

var colors=["BLUE","PINK", "PURPLE", "YELLOW"]
var colores=["#7EAFDA", "#FFB5C9", "#C981DD", "#F7E177"]
var points= 0;
var time=29;
var correct, random1, random2
var number1, number2, number3, number4, number5, number6, number7

function start(){
    setInterval(timer, 1000);
    reset()
}

function timer(){
    document.getElementById("time").innerHTML=time;
    if(time==0){
        alert("GAME OVER: "+ points)
        location.reload()
    }
    time--;
}

function reset(){
    random2=Math.floor(Math.random()*2)
    if(random2==0){
        var color1= document.getElementById("color1");
        var color2= document.getElementById("color2");
    }
    else{
        var color2= document.getElementById("color1");
        var color1= document.getElementById("color2");
    }

    document.getElementById("start").style.display="none";

    random1= Math.floor(Math.random()*4)
    correct=colors[random1];
    color1.innerHTML= correct;

    color2.style.color=colores[random1];

    if(random1==0){
        color1.style.color=colores[3];
    }
    else{
        color1.style.color= colores[random1-1]
    }


    if(random1==3){
        color2.innerHTML=colors[0]
    }
    else{
        color2.innerHTML=colors[random1+1]
    }

    addClick("BLUE", correct);
    addClick("PINK", correct);
    addClick("PURPLE", correct);
    addClick("YELLOW", correct);
}

function checkColor(color, correct){
    if(color== correct){
        points++;
        document.getElementById("true").style.opacity=1;
    }
    else{
        points--;
        document.getElementById("false").style.opacity=1;
    }

    setTimeout(() => {
        document.getElementById("false").style.opacity=0;
        document.getElementById("true").style.opacity=0;
    }, 300);

    document.getElementById("points").innerHTML=points;
    reset();

}



function addClick (color, correct){

    var funkcja= "checkColor("+color+", "+correct+")";

    document.getElementById(color).setAttribute("onclick", funkcja);
}
var number = -1
function party(){

    var grad=['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    setInterval(() => {
        if(number==6){
            number=-1
        }
        number+=1
        if(number==0){
            number1=0
            number2=1
            number3=2
            number4=3
            number5=4
            number6=5
            number7=6
        }
        if(number==1){
            number1=1
            number2=2
            number3=3
            number4=4
            number5=5
            number6=6
            number7=0
        }
        if(number==2){
            number1=2
            number2=3
            number3=4
            number4=5
            number5=6
            number6=0
            number7=1
        }
        if(number==3){
            number1=3
            number2=4
            number3=5
            number4=6
            number5=0
            number6=1
            number7=2
        }
        if(number==4){
            number1=4
            number2=5
            number3=6
            number4=0
            number5=1
            number6=2
            number7=3
        }
        if(number==5){
            number1=5
            number2=6
            number3=0
            number4=1
            number5=2
            number6=3
            number7=4
        }
        if(number==6){
            number1=6
            number2=0
            number3=1
            number4=2
            number5=3
            number6=4
            number7=5
        }
        document.getElementById("html").innerHTML="";
        document.getElementById("html").style.backgroundImage= "linear-gradient(to right, "+ grad[number1] + "," + grad[number2] + "," + grad[number3] + "," + grad[number4] + "," + grad[number5] + "," + grad[number6] + "," + grad[number7] +")";

    }, 50);

}
