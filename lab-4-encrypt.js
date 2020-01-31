//LAB 4 - JS ENCRYPTION
var formHandle = document.forms[0];
formHandle.onsubmit = process;
function process(){
    const input = document.getElementById("sha1form__txt").value;
    const output = document.getElementById("output");

    if(input !== ""){
        var passSh1 = CryptoJS.SHA1(input);
        var passMd5 = CryptoJS.MD5(input);
        output.innerHTML = "SH1 Encrypted password is :"+passSh1+"<br>"+"MD5 Encrypted password is :"+passMd5;
        
        return false;
    }
    else{
        output.innerHTML = "Password field empty";
        return false;
    }
}