var body = document.querySelector("body");
var world = document.querySelectorAll(".world");
var list = document.querySelectorAll(".list");
var p = document.querySelectorAll(".p");




let darkMode = false;
function switchmode1(){
    if(darkMode == false){
        darkMode = true

        body.style.backgroundColor="#000" 

        for(var i=0; i<world.length; i++){
            world[i].style.color="#fff"
        }
        for(var i=0; i<list.length; i++){
            list[i].style.backgroundColor="#000"
        }
        for(var i=0; i<p.length; i++){
            p[i].style.color="#fff"
        }
    
    }else{
        darkMode = false
        body.style.backgroundColor="white" 
        for(var i=0; i<world.length; i++){
            world[i].style.color="#811538"
        }
        for(var i=0; i<list.length; i++){
            list[i].style.backgroundColor="#fff"
        }
        for(var i=0; i<p.length; i++){
            p[i].style.color="#000"
        }
       
      
  
  
   
       
}
}