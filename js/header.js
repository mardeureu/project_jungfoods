function MenuBtn() {
    if (globalNav.className == "menuVisible") {
        globalNav.className = "";
    } else {
        globalNav.className = "menuVisible";
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
window.addEventListener('load',function(){
    //bread_crust animate
    var burgerMenuBtn = document.getElementById('burgerMenuBtn');
    var bread_crust_top = burgerMenuBtn.children[0];
    var bread_crust_bottom = burgerMenuBtn.children[1];
    var bread_crust_top_span = bread_crust_top.children[0];
    var bread_crust_bottom_span = bread_crust_bottom.children[0];
    burgerMenuBtn.addEventListener('click',function(){
        if (burgerMenuBtn.className == "bread-crust") {
            burgerMenuBtn.className = "";
        } else {
            burgerMenuBtn.className = "bread-crust";
        }
    });
    
    

    //sub menu
    var idx = 0;    
    var mainMenu = document.querySelectorAll('.main-menu > li > a');
    
    for(let i = 0; i <= mainMenu.length-1; i++){
        mainMenu[i].onclick = function (){
            mainMenu[idx].className = "";
            this.className = "subMenuVisivble";
            idx = i;
        }
    }
});