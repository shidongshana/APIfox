const fogEmail1=document.getElementById('fogemail-id');
const fogEmail2=document.getElementById('fogemail-name');
const fogPassword1=document.getElementById('fogpassword-value1');
const fogPassword2=document.getElementById('fogpassword-value2');
const fogButton1=document.getElementById('fogvalidation-button');
const fogButton2=document.getElementById('reset-btn');
const fogText=document.getElementById('fogvalidation-text');
let messageStr = localStorage.getItem('userMessage');
let messages = JSON.parse(messageStr) || [];
function checkEmail() {
    let myEmail = `${fogEmail1.value}@${fogEmail2.value}`;
    if(fogEmail1.value===""){
        alert("邮箱不能为空");
        return false;
    }
    else {
        for (let i = 0; i <messages.length ; i++) {
            if (messages[i].id === myEmail) {
                return true;
            }
        }
        return false;
    }
}
function checkPassword1() {
    let reg2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    if (fogPassword1.value !== "") {
        if (! reg2.test(fogPassword1.value)) {
            alert("密码格式不正确");
            //清空密码框
            fogPassword1.value="";
            fogPassword2.value="";
            return false;
        }
        else if (fogPassword1.value !== fogPassword2.value) {
            alert("两次密码不一致");
            //清空密码框
            fogPassword1.value="";
            fogPassword2.value="";
            return false;
        }
        else{
            return true;
        }
    }
    else {
        alert("密码不能为空");
        return false;
    }
}
function checkValidation() {
    let validation_value= fogText.value;
    //暂时没接口，先写死
    let validation_value2= "1234";
    if (validation_value !== "") {
        if (validation_value !== validation_value2) {
            alert("验证码错误");
            //清空验证码框
            fogText.value="";
            return false;
        }
        else{
            return true;
        }
    }
    else {
        alert("验证码不能为空");
        return false;
    }
}
fogButton1.onclick=function () {
    alert("验证码已发送 1234");
}
fogButton2.onclick=function () {
    if(checkEmail()&&checkPassword1()&&checkValidation()) {
        let myEmail = `${fogEmail1.value}@${fogEmail2.value}`;
        let myPassword = fogPassword1.value;
        //找到该邮箱的信息，并更改密码
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === myEmail) {
                messages[i].password = myPassword;
                localStorage.setItem('userMessage', JSON.stringify(messages));
                alert("密码修改成功");
                //清空密码框
                fogPassword1.value = "";
                fogPassword2.value = "";
                window.location.href = "../HTML/login.html";
            }
        }
    }
}