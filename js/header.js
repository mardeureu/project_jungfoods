function burgerMenuBtn() {
    if (globalNav.className == "menuVisible") {
        globalNav.className = ""
    } else {
        globalNav.className = "menuVisible"
    }
}

window.addEventListener('load',function(){
    var idx = 0;    
    var mainMenu = document.querySelectorAll('.main-menu > li a');
    
    for(let i = 0; i <= mainMenu.length-1; i++){
        mainMenu[i].onclick = function (){
            mainMenu[idx].className = "";
            this.className = "subMenuVisivble";
            idx = i;
        }
        console.log(mainMenu[idx]);
    }
    console.log("for 밖 : "+mainMenu[idx]);
});