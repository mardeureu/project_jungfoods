
function form_check(frm){

    var loginId = document.getElementById('login_id');
    var loginPw = document.getElementById('login_pw');
    var errorMsg = document.getElementsByClassName('error');


    if(loginId.value==""){
        errorMsg[0].style.display="block";
        return false;
    }else{
        errorMsg[0].style.display="none";
        return false;
    }

    if(loginPw.value==""){
        errorMsg[1].style.display="block";
        return false;
    }else{
        errorMsg[1].style.display="none";
        return false;
    }
    frm.submit();
}
