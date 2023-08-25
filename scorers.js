var body = document.querySelector("body");
var list = document.querySelector(".list");
var  world = document.querySelectorAll(".world")
var b = document.querySelectorAll(".b");
var ff = document.querySelectorAll(".ff");
var  goal = document.querySelectorAll(".goal");


let darkMode = false;
function switchmode4(){
    if(darkMode == false){
        darkMode = true
        body.style.backgroundColor="#000"
        list.style.backgroundColor="#000"

        
        for(var i=0; i< world.length; i++){
            world[i].style.color="#fff"
        }

        for(var i=0; i<b.length; i++){
            b[i].style.color="#fff"
        }
        
        for(var i=0; i<ff.length; i++){
            ff[i].style.backgroundColor="#000"
        }
        for(var i=0; i< goal.length; i++){
            goal[i].style.color="#fff"
        }


    }else{
        darkMode = false
        body.style.backgroundColor="white" 
        list.style.backgroundColor="#fff"
      


        for(var i=0; i< world.length; i++){
            world[i].style.color="#811538"

        }

        for(var i=0; i<b.length; i++){
            b[i].style.color="#000"

        }
        for(var i=0; i<ff.length; i++){
            ff[i].style.backgroundColor="#fff"
        }
   
        for(var i=0; i< goal.length; i++){
            goal[i].style.color="#000"
        }
}
}