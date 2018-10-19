var btnsubmit = document.forms ["register-form"] ["btn-submit"]
btnsubmit.onclick = function () {

    var txtusername = document.forms["register-form"] ["username"];
    var msgusername = txtusername.nextElementSibling;
    if (txtusername == null || txtusername.value.length == 0) {
        msgusername.innerHTML = "*vui long nhap ten cua ban.";
        msgusername.classList.remove("hidden-text");
    }
    else if (txtusername.value.length < 5) {
        msgusername.innerHTML = "*ten cua ban qua ngan.";
        msgusername.classList.remove("hidden-text");
    }
    else if (txtusername.value.length > 20) {
        msgusername.innerHTML = "*ten cua ban qua dai.";
        msgusername.classList.remove("hidden-text");
    }
    else if ( txtusername.value.length >=5 || txtusername.value.length<=20){
        msgusername.innerHTML="*ten hop le.";
        msgusername.classList.remove("hidden-text");
    }
    var txtpassword = document.forms["register-form"]["password"];
    var msgpassword = txtpassword.nextElementSibling;
    if (txtpassword == null || txtpassword.value.length == 0) {
        msgpassword.innerHTML = "*password khong dc bo trong.";
        msgpassword.classList.remove("hidden-text");
    }
    var txtfullName = document.forms["register-form"] ["fullname"];
    var msgfullName = txtfullName.nextElementSibling;
    if (txtfullName == null || txtfullName.value.length == 0) {
        msgfullName.innerHTML = "* khong dc bo trong.";
        msgfullName.classList.remove("hidden-text");
    }

}