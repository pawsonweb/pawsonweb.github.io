let lever1 = 0;
let lever2 = 0;
let lever3 = 0;

function vanishBlock1(){
    let xT = document.getElementById("prim_oneT");
    let xI = document.getElementById("prim_oneI");

    let yT = document.getElementById("scnd_oneT");
    let yI = document.getElementById("scnd_oneI");

    if (lever1 == 0){
        xT.style.animationName = "hideContent";
        xI.style.animationName = "hideContent";

        setTimeout(() =>{
            xT.classList.add("hide");
            xI.classList.add("hide");

            yT.classList.add("show");
            yI.classList.add("show");

            document.getElementById("but1").innerHTML = "Collapse";
        }, 415);

        yT.style.animationName = "showContent";
        yI.style.animationName = "showContent";
        lever1 = 1;
    }
    else{
        yT.style.animationName = "hideContent";
        yI.style.animationName = "hideContent";

        setTimeout(() =>{
            xT.classList.remove("hide");
            xI.classList.remove("hide");

            yT.classList.remove("show");
            yI.classList.remove("show");

            document.getElementById("but1").innerHTML = "Detailed View";
        }, 415);

        xT.style.animationName = "showContent";
        xI.style.animationName = "showContent";
        lever1 = 0;
    }

}
function vanishBlock2(){
    let xT = document.getElementById("prim_twoT");
    let xI = document.getElementById("prim_twoI");

    let yT = document.getElementById("scnd_twoT");
    let yI = document.getElementById("scnd_twoI");

    if (lever2 == 0){
        xT.style.animationName = "hideContent";
        xI.style.animationName = "hideContent";

        setTimeout(() =>{
            xT.classList.add("hide");
            xI.classList.add("hide");

            yT.classList.add("show");
            yI.classList.add("show");

            document.getElementById("but2").innerHTML = "Collapse";
        }, 415);

        yT.style.animationName = "showContent";
        yI.style.animationName = "showContent";
        lever2 = 1;
    }
    else{
        yT.style.animationName = "hideContent";
        yI.style.animationName = "hideContent";

        setTimeout(() =>{
            xT.classList.remove("hide");
            xI.classList.remove("hide");

            yT.classList.remove("show");
            yI.classList.remove("show");

            document.getElementById("but2").innerHTML = "Detailed View";
        }, 415);

        xT.style.animationName = "showContent";
        xI.style.animationName = "showContent";
        lever2 = 0;
    }
}
function vanishBlock3(){
    let xT = document.getElementById("prim_threeT");
    let xI = document.getElementById("prim_threeI");

    let yT = document.getElementById("scnd_threeT");
    let yI = document.getElementById("scnd_threeI");

    if (lever3 == 0){
        xT.style.animationName = "hideContent";
        xI.style.animationName = "hideContent";

        setTimeout(() =>{
            xT.classList.add("hide");
            xI.classList.add("hide");

            yT.classList.add("show");
            yI.classList.add("show");

            document.getElementById("but3").innerHTML = "Collapse";
        }, 415);

        yT.style.animationName = "showContent";
        yI.style.animationName = "showContent";
        lever3 = 1;
    }
    else{
        yT.style.animationName = "hideContent";
        yI.style.animationName = "hideContent";

        setTimeout(() =>{
            xT.classList.remove("hide");
            xI.classList.remove("hide");

            yT.classList.remove("show");
            yI.classList.remove("show");

            document.getElementById("but3").innerHTML = "Detailed View";
        }, 415);

        xT.style.animationName = "showContent";
        xI.style.animationName = "showContent";
        lever3 = 0;
    }
}

let bname = document.getElementById("showcase");
bname.addEventListener("mouseenter", whenMouseOver);
bname.addEventListener("mouseleave", whenMouseOut);

let text = bname.textContent.split("");
let result = "";

text.forEach(function(char){
    result += (char.trim() === "") ? " " : "<span>" + char + "</span>";
});
bname.innerHTML = result;

let touched = false;
let intervalMode= [];
let fontType = ["audiowide","inconsolata","jacq","metal","protest"];
function whenMouseOver(){
    if(touched) return;
    touched = true
    bname.querySelectorAll('span').forEach(function(item){
        intervalMode.push( setInterval(() => {
            let num = Math.floor(Math.random()*fontType.length);
            item.style.fontFamily = fontType[num];
        }, 600) );
    })
}
function whenMouseOut(){
    setTimeout(() =>{
        intervalMode.map((a)=>{
            clearInterval(a);
            intervalMode = [];
        })
        touched = false;
    }, 500);
    bname.querySelectorAll('span').forEach(function(item){
        setTimeout(() => {
            item.style.fontFamily = fontType[1];
        }, 1240);
    })
}