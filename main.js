
const menuitems = document.querySelector(".menu-items");
const menuToggle = document.querySelector(".menu-icon");


menuToggle.addEventListener("click", function(){

    if(menuitems.style.maxHeight == "0px")
    {   
        menuitems.style.maxHeight = "200px";
    }
    else
    {
        menuitems.style.maxHeight = "0px";
    }
})