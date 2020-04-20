function joinUs(frm) {
    //1 객체생성
    var member_id = document.getElementById('member_id');
    var member_pw = document.getElementById('member_pw');
    var member_repw = document.getElementById('member_repw');
    var member_name = document.getElementById('member_name');
    var member_birth = document.getElementById('member_birth');
    var member_mobile = document.getElementById('member_mobile');
    var member_email = document.getElementById('member_email');
    var agree = document.getElementById('agree');
    //정규식
    var reg_str = /^[a-z0-9]+$/g;
    var reg_num = /^[0-9]+$/g;
    //length
    var len_id = member_id.value.length;

    //아이디
    if (member_id.value == "") {
        alert("아이디를 입력해주세요.");
        member_id.focus();
        return false;
    }
    if (len_id < 5 || len_id > 10) {
        alert("아이디는 5~10 글자사이의 영문 소문자와 숫자로 입력해주세요.");
        member_id.focus();
        return false;
    }
    if (!reg_str.test(member_id.value)) {
        alert("아이디는 5~10 글자사이의 영문 소문자와 숫자로 입력해주세요.");
        member_id.focus();
        return false;
    }
    //비밀번호
    if (member_pw.value == "") {
        alert("비밀번호를 입력해주세요.");
        member_pw.focus();
        return false;
    }
    if (len_id < 6 || len_id > 20) {
        alert("비밀번호는 6~20 글자사이의 영문과 숫자로 입력해주세요.");
        member_pw.focus();
        return false;
    }
    if (!reg_str.test(member_pw.value)) {
        alert("비밀번호는 6~20 글자사이의 영문과 숫자로 입력해주세요.");
        member_pw.focus();
        return false;
    }
    //비밀번호 확인
    if (member_repw.value == "") {
        alert("비밀번호 확인을 입력해주세요.");
        member_repw.focus();
        return false;
    }
    if (member_repw.value != member_pw.value) {
        alert("비밀번호가 다르게 입력되었습니다.");
        member_pw.select();
        return false;
    }
    //이름
    if (member_name == "") {
        alert("이름을 입력해주세요.");
        member_name.focus();
        return false;
    }
    //생년월일
    if (member_birth == "") {
        alert("생년월일을 입력해주세요.");
        member_birth.focus();
        return false;
    }
    if (reg_num.test(member_birth.value)) {
        alert("생년월일은 숫자만 입력해주세요.");
        member_birth.focus();
        return false;
    }
    //전화번호
    if (member_mobile == "") {
        alert("전화번호를 입력해주세요.");
        member_mobile.focus();
        return false;
    }
    if (reg_num.test(member_mobile.value)) {
        alert("전화번호는 숫자만 입력해주세요.");
        member_mobile.focus();
        return false;
    }
    //이메일
    if (ember_email.value == "") {
        alert("이메일을 입력해주세요.");
        member_email.focus();
        return false;
    }
    //약관동의
    if (!agree.checked) {
        alert("약관에 동의해주세요.");
        agree.focus();
        return false;
    }
    //submit
    frm.submit();
}//END