window.onload = function(){
    
    /* 버거메뉴 */
    var globalNav = document.getElementById('globalNav');
    var burgerMenuBtn = document.getElementById('burgerMenuBtn');
    burgerMenuBtn.onclick = function () {
        if (globalNav.className == "menuVisible") {
            globalNav.className = ""
        } else {
            globalNav.className = "menuVisible"
        }
    }//burgerMenuBtn function END 

    /* 제품 소개  다시다시!!*/
    var mainProd = document.getElementById('mainProd');
    //제품 사진
    var vgmPlain = document.getElementById('vgmPlain');
    var vgmBk = document.getElementById('vgmBk');
    var vgmOther = document.getElementById('vgmOther');
    //버튼
    var vgmPlainbtn = document.getElementById('vgmPlainbtn');
    var vgmBkbtn = document.getElementById('vgmBkbtn');
    var vgmOtherBtn = document.getElementById('vgmOtherBtn');

    vgmPlainbtn.onclick = function (){
        if (vgmPlain.className == "") {
            vgmPlain.className = "active";
        } else {
            vgmPlain.className = "";
        }
    }//vgmPlainbtn Event END
    vgmBkbtn.onclick = function (){
        if (vgmBk.className == "") {
            vgmBk.className = "active";
        } else {
            vgmBk.className = "";
        }
    }//vgmBkbtn Event END
    vgmOtherBtn.onclick = function (){
        if (vgmOther.className == "") {
            vgmOther.className = "active";
        } else {
            vgmOther.className = "";
        }
    }//vgmBkbtn Event END

    







//window.load END 
}

/*

prod
탭 눌렀을 때

상품 5개

왼쪽 > 오른쪽

0.2 초 딜레이 순차적으로 나온다

슬라이드 없음

오버레이???? 자연스럽게 사라졌다 나타난다.

*/