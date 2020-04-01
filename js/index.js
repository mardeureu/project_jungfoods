window.addEventListener('click',function(){
    var burgerMenuBtn = document.getElementById('menu-button');
    var globalNav = document.getElementById('globalNav');
    burgerMenuBtn.onclick = function(){btnClick()}
    function btnClick(){
        if (globalNav.className == "menuVisible") {
            globalNav.className = ""
        } else {
            globalNav.className = "menuVisible"
        }
    }
    
});

/*

product
탭 눌렀을 때

상품 5개

왼쪽 > 오른쪽

0.2 초 딜레이 순차적으로 나온다

슬라이드 없음

오버레이? 자연스럽게 사라졌다 나타난다.

*/