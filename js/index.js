
window.onload = function(){
    var mainProd = document.getElementById('mainProd');
    //제품 사진
    var vgmPlain = document.getElementById('vgmPlain');
    var vgmBk = document.getElementById('vgmBk');
    var vgmOther = document.getElementById('vgmOther');
    //버튼
    var prodBtn = document.getElementById('prodBtn');
    var mainprodbtn = document.getElementsByClassName('mainprodbtn');
    var vgmPlainbtn = document.getElementById('vgmPlainbtn');
    var vgmBkbtn = document.getElementById('vgmBkbtn');
    var vgmOtherBtn = document.getElementById('vgmOtherBtn');
    vgmPlainbtn.onclick = function (){
        if (vgmPlain.className == "") {
            vgmPlain.className = "prodhdn";
        } else {
            vgmPlain.className = "";
        }
    }//vgmPlainbtn Event END
    vgmBkbtn.onclick = function (){
        if (vgmBk.className == "") {
            vgmBk.className = "prodhdn";
        } else {
            vgmBk.className = "";
        }
    }//vgmBkbtn Event END
    vgmOtherBtn.onclick = function (){
        if (vgmOther.className == "") {
            vgmOther.className = "prodhdn";
        } else {
            vgmOther.className = "";
        }
    }//vgmBkbtn Event END
<<<<<<< HEAD
<<<<<<< HEAD


//window.load END 
}
=======
=======
>>>>>>> 81bf8394f7f3f047e93c44e6b59fbd2d273b04cd
}//onload END
    /*
    function openPage(pageName){
        //hide
        var i, tabContents, tabLinks;
        tabContents = document.getElementsByClassName('mianprod');
        for(i = 0; i < tabContents.length; i++){
            tabContents[i].style.display = "none";
        }
        //remove
        tabLinks = document.getElementsByClassName('mainprodbtn');
        for(i = 0; i < tabLinks.length; i++){
            tabLinks[i].style.display = "none";
        }
        //show
        document.getElementById(pageName).style.display = 'block';
    }
    //get
    document.getElementById('vgmPlainbtn').click();
<<<<<<< HEAD
    */
>>>>>>> 81bf8394f7f3f047e93c44e6b59fbd2d273b04cd
=======
    */
>>>>>>> 81bf8394f7f3f047e93c44e6b59fbd2d273b04cd
