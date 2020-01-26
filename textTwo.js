const h1Three=document.querySelector(".h1three")
const h1Four=document.querySelector(".h1four")

var text=h1Three.textContent + h1Four.textContent;

console.log(text)

h1Three.innerHTML=""
h1Four.innerHTML=""

for(let i=0;i<text.length;i++){
    if(i < text.length-6){
        h1Three.innerHTML += "<span class='color'>" + text[i] + "</span>"
    }
    else{
        h1Four.innerHTML += "<span class='color'>" + text[i] + "</span>"
    }
}

let char=0;
setTimeout(()=>{
let setInt=setInterval(runIt,300);

function runIt(){
    var spans=document.querySelectorAll(".color");
    spans[char].classList.add('color-effect')
    char++
if(char === spans.length){
        clearInterval(setInt)
        console.log("Interval FX fired.")
    }
}
},3250)