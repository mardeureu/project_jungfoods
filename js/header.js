function MenuBtn(breadCrust) {
    if (globalNav.className == "menuVisible") {
        globalNav.className = "";
    } else {
        globalNav.className = "menuVisible";
    }
}
window.addEventListener('load',function(){
    //bread_crust animate
    var burgerMenuBtn = document.getElementById('burgerMenuBtn');
    var bread_crust_top = burgerMenuBtn.children[0];
    var bread_crust_bottom = burgerMenuBtn.children[1];
    var bread_crust_top_span = bread_crust_top.children[0];
    var bread_crust_bottom_span = bread_crust_bottom.children[0];
    burgerMenuBtn.addEventListener('click',function(){
        if (bread_crust_top.className == "bread-crust-top") {
            bread_crust_top.className = "";
        } else {
            bread_crust_top.className = "bread-crust-top";
        }
    });
    burgerMenuBtn.addEventListener('click',function(){
        if (bread_crust_bottom.className == "bread-crust-bottom") {
            bread_crust_bottom.className = "";
        } else {
            bread_crust_bottom.className = "bread-crust-bottom";
        }
    });
    //X
    burgerMenuBtn.addEventListener('click',function(){
        if (bread_crust_top.className == "bread-crust-top"){
            bread_crust_top_span.style.top = "50%";
        } else {
            bread_crust_top_span.style.top =  "calc(50% - 5px)";
        }
    });
    burgerMenuBtn.addEventListener('click',function(){
        if (bread_crust_bottom.className == "bread-crust-bottom"){
            bread_crust_bottom_span.style.top = "50%";
        } else {
            bread_crust_bottom_span.style.top =  "calc(50% + 5px)";
        }
    });

    //sub menu
    var idx = 0;    
    var mainMenu = document.querySelectorAll('.main-menu > li a');
    
    for(let i = 0; i <= mainMenu.length-1; i++){
        mainMenu[i].onclick = function (){
            mainMenu[idx].className = "";
            this.className = "subMenuVisivble";
            idx = i;
        }
    }
});