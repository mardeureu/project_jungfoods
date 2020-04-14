// 작성자 : 정선희

/* 버거메뉴 클릭*/
function burgerMenuBtn() {
    if (globalNav.className == "menuVisible") {
        globalNav.className = ""
    } else {
        globalNav.className = "menuVisible"
    }
}//END

window.onload = function(){

    var mainMenu = document.querySelectorAll('.main-menu li a');
    mainMenu.onclick = function (){
       
        for(var i = 0; i >= mainMenu.length-1; i++){
            mainMenu[i];

        }
    }//onclick func END

}//window onload func END


// 스크롤, top 버튼, 메인 제품, 헤더 커졌을 때 감지 못하는것, height 스크롤 하단 못찾는것.
// 버거 메뉴 서브 호버 할 때 펼쳐 지는 것...
// ㅠㅠ...
