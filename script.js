  
function countdown(sec,elem) {
    var element = document.getElementById(elem);
    element.innerHTML=""  + sec + "" ;
    if(sec<1){
        clearTimeout(timer);
        element.innerHTML ="<h2>HAPPY DEVELOPERS DAY</h2>"
        
    }
    sec--;


    var timer =setTimeout('countdown('+sec+',"'+elem+'")',1000);
    
}

