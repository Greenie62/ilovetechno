var overlay1=document.querySelector(".overlay1")
var overlay2=document.querySelector(".overlay2")
var overlay3=document.querySelector(".overlay3")
var overlay4=document.querySelector(".overlay4")
var overlay5=document.querySelector(".overlay5")
var techno=document.querySelector(".music")
var isPlaying=false;


var overlays=["","","",overlay1,"","",overlay2,"","",overlay3,overlay4];
var classes=["","","",'hideOverlay1',"","",'hideOverlay2',"","",'hideOverlay3', 'hideOverlay4']
var count=0;

document.onkeydown=function(){
    if(!isPlaying){
    techno.play()
    isPlaying=true;
    }

   else{
       techno.pause()
       isPlaying=false;
   }
}

function hideOverlaysFx(){
 
    if(count === overlays.length){
        console.log("function finished")
        return;
    }
//    overlays[0].classList.add(classes[count])
if(overlays[count] !== ""){
   overlays[count].classList.add(classes[count])
}
   count++;
   setTimeout(hideOverlaysFx,2000)


}


hideOverlaysFx()


const overlay1textone=document.querySelector(".h1one");
const overlay1texttwo=document.querySelector(".h1two");

console.log(overlay1textone.textContent)
console.log(overlay1texttwo.textContent)

var oneText=overlay1textone.textContent + overlay1texttwo.textContent

console.log(oneText)
console.log(overlay1textone.textContent.length)
overlay1textone.innerHTML=""

overlay1texttwo.innerHTML=""

for(let i=0;i<oneText.length;i++){
    if(i < 20){
        overlay1textone.innerHTML+= "<span class='animateone'>" + oneText[i] + "</span>"
    }
    else{
        overlay1texttwo.innerHTML+= "<span class='animateone'>" + oneText[i] + "</span>"
    }
}

var oneCount=0


function animateOne(){
    var spans=document.querySelectorAll('.animateone');
    console.log(spans)
    if(oneCount === spans.length){
        console.log("animation done")
        return;
    }
 
    spans[oneCount].classList.add('fadeInone')
    if(oneCount >22){
       spans[oneCount].classList.add('bounce')
    }

    oneCount++;

    setTimeout(animateOne,150)
}

animateOne()

