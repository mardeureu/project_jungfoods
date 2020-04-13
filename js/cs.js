function cs_sbm(cs_form) {
    //1 객체생성
    var cs_form = document.getElementById('cs_form');
    var user_name = document.getElementById('user_name');
    var user_email = document.getElementById('user_email');
    var user_mobile = document.getElementById('user_mobile');
    var cs_title = document.getElementById('cs_title');
    var cs_contents = document.getElementById('cs_contents');
    var cs_select = document.getElementById('cs_select');
    var idx = cs_select.options.selectedindex;

    //정규식
    var reg_num = /^[0-9]+$/g;
    //문의종류
    if (!cs_select.onchange) {
        alert("문의 종류를 선택하세요");
        cs_select.select();
        return false;
    }
    //고객정보
    if (user_name.value == "") {
        alert("이름을 입력해주세요.");
        user_name.focus();
        return false;
    }
    if (user_email.value == "") {
        alert("이메일을 입력해주세요.");
        user_email.focus();
        return false;
    }
    if (user_mobile == "") {
        alert("전화번호를 입력해주세요.");
        member_mobile.focus();
        return false;
    }
    if (reg_num.test(user_mobile.value)) {
        alert("전화번호는 숫자만 입력해주세요.");
        user_mobile.focus();
        return false;
    }
    //문의 내용
    if (cs_title == "") {
        alert("제목을 입력해주세요.");
        cs_title.focus();
        return false;
    }
    if (cs_contents == "") {
        alert("내용을 입력해주세요.");
        cs_contents.focus();
        return false;
    }    
    
    //submit
    cs_form.submit();
}//function cs_sbm(cs_form) END