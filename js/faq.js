window.onload = function(){
    //객체생성
    var faqTd = document.querySelectorAll('td');
    var faqTit = faqTd[0];
    var faqConts = faqTd[1];

    faqTit.onclick = function(){
        if (faqTit.className == "active") {
            faqTit.className == "";
        } else {
            faqTit.className == "active";
        }
    }//faqTit.onclick END

    
}//END