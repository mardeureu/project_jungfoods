
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
}//window.onload END

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

    */

   var slideIndex = 1;
   showSlide(slideIndex);
   
   //next/prev controls
   function plusSlides(n) {
       showSlide(slideIndex += n);
   }
   
   function showSlide(n) {
       var i;
       var slide = document.getElementsByClassName('mianprod');
       if (n > slide.length) {
           slideIndex = 1;
       }
       if (n < 1) {
           slideIndex = slide.length;
       }
       for (i = 0; i < slide.length; i++) {
           slide[i].style.display = "none";
       }
       slide[slideIndex-1].style.display = "block";
   
   }
