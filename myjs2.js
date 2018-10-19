var click=document.forms[0]["btn-submit"];
var checkbox=document.forms[0]["favourite[]"];
var result="";
click.onclick=function () {
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked === true){
            result += ','+checkbox[i].value;
        }
    }
    alert(result);
};