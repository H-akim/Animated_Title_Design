var spantexts = document.getElementsByTagName("span");
window.onload = function(){
    for(spantext of spantexts){
        spantext.classList.add("active");
    }
}