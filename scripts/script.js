function burgerMenu(){
    var checkbox = document.getElementById("burgerCheckbox");
    var menu = document.getElementById("menu");
    
    if(checkbox.checked == true){
        menu.style.transform = "none";
    }
    else{
        menu.style.transform = "translateY(-1000px)";
    }
}