// 작성자 : 정선희

/* 버거메뉴 클릭*/
function burgerMenuBtn() {
    if (globalNav.className == "menuVisible") {
        globalNav.className = ""
    } else {
        globalNav.className = "menuVisible"
    }
}//END

window.addEventListener('load',function(){
    var idx = 0;    
    var mainMenu = document.querySelectorAll('.main-menu > li a');
    for(let i = 0; i <= mainMenu.length-1; i++){
        mainMenu[i].onclick = function (){
            mainMenu[idx].className = "";
            this.className = "subMenuVisivble";
            idx = i;
        }//onclick func END
    }
});//window onload func END


// 스크롤, top 버튼, 메인 제품 
// ㅠㅠ...
