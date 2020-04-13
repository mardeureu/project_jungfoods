window.onload = function(){
    //burgerMenuBtn function END 

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
