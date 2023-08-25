var body = document.querySelector("body");
var world = document.querySelectorAll(".world")
var list = document.querySelectorAll(".list");



let darkMode = false;
function switchmode4 (){
   if(darkMode==false){
    darkMode=true
    body.style.backgroundColor="#000" 
    for(var i=0; i< list.length; i++){
        list[i].style.backgroundColor="#000"
    }
    for(var i=0; i< list.length; i++){
        list[i].style.color="#fff"
    }

for(var i=0; i<world.length; i++){
    world[i].style.color="#fff"
}


   }else{
    darkMode=false
    body.style.backgroundColor="white" 
    for(var i=0; i< list.length; i++){
    list[i].style.backgroundColor="white"
    }
    for(var i=0; i< list.length; i++){
        list[i].style.color="#000"
    }

    for(var i=0; i<world.length; i++){
        world[i].style.color="#811538"
    }
   }


}
