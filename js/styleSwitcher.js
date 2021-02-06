
const links=document.querySelectorAll(".alternative-style"),
        totalLinks=links.length;


function setActiveStyle(color){
    for(let i=0; i<totalLinks; i++){
        if (color == links[i].getAttribute("title")){
            links[i].removeAttribute("disable");
        }
        else{
            links[i].setAttribute("disabled","true")
        }
    }    
}