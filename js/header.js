function burgerMenuBtn() {
    if (globalNav.className == "menuVisible") {
        globalNav.className = ""
    } else {
        globalNav.className = "menuVisible"
    }
}
/*
window.onload = function(){
    var idx = 0;
    var mainMenu = document.querySelectorAll('.main-menu > li > a');
    for(let i = 0; i < mainMenu.length; i++){
        mainMenu[i].onclick = function(e){
            e.preventDefault;
            mainMenu[idx].className = "";
            this.className = "subMenuVisivble";
            idx = i;
        }
    }
    console.log(mainMenu[idx])
}
*/
window.addEventListener('load',function(){
    var idx = 0;
    var mainMenu = document.querySelectorAll('.main-menu > li > a');
    for(let i = 0; i < mainMenu.length; i++){
        mainMenu[i].onclick = function(e){
            e.preventDefault;
            mainMenu[idx].className = "";
            this.className = "subMenuVisivble";
            idx = i;
        }
    }
});
/*
window.addEventListener('load',function(){
    var mainMenu = document.querySelectorAll('.main-menu > li > a');
    var i;
    for(i = 0; i < mainMenu.length; i++){
        mainMenu[i].addEventListener('click',function(e){
            e.preventDefault;
            this.classList.toggle("active");
            var subMenu = this.nextElementSibling;
            console.log(subMenu)
            if(subMenu.className == ""){
                subMenu.className = "subMenuVisivble";
            }else {
                subMenu.className = "";
            }
        })
    }
});
*/
/*
window.addEventListener('load',function(){
    var idx = 0;    
    var mainMenu = document.querySelectorAll('.main-menu > li > a');
    
    for(let i = 0; i <= mainMenu.length-1; i++){
        mainMenu[i].onclick = function (){
            mainMenu[idx].className = "";
            this.className = "subMenuVisivble";
            idx = i;
        }
    }
    console.log(mainMenu[idx]);
});
*/