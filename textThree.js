const h1Five=document.querySelector(".h1five")
const h1Six=document.querySelector(".h1six")

var text=h1Five.textContent + h1Six.textContent;

console.log(text)

h1Five.innerHTML=""
h1Six.innerHTML=""


for(let i=0;i<text.length;i++){
    if(i < text.length-16){
        h1Five.innerHTML += "<span class='drop'>" + text[i] + "</span>"
    }
    else{
        h1Six.innerHTML += "<span class='drop'>" + text[i] + "</span>"
    }
}

let charTwo=0;
setTimeout(()=>{
let dropInt=setInterval(runItTwo,300);

function runItTwo(){
    var spansThree=document.querySelectorAll(".drop");
    console.log("SpansThree: " + spansThree.length)
    spansThree[charTwo].classList.add('drop-effect')
    charTwo++
    if(charTwo > text.length-16){
        spansThree[charTwo].classList.add('drop-further')
    }
if(charTwo === spansThree.length){
        clearInterval(dropInt)
        console.log("Interval FX fired.")
    }
}
},7500)


console.log('textThree.js fired')