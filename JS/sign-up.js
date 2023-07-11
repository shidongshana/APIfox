
const sigEmail1=document.getElementById("signupemail-id");
const sigEmail2=document.getElementById("signupemail-name");
const sigPassword1=document.getElementById("signuppassword-id1");
const sigPassword2=document.getElementById("signuppassword-id2");
const sigValidation=document.getElementById("signupvalidation-text");
const sigButton1=document.getElementById("signupvalidation-button");
const sigButton2=document.getElementById("signup-btn");
const sigBox=document.getElementById("signupagreeBox");
const sigName1=document.getElementById("signupname-id1");
const sigName2=document.getElementById("signupname-id2");
let messageStr = localStorage.getItem('userMessage');
let messages = JSON.parse(messageStr) || [];
function emailcheck() {
  let sel= document.getElementById("signupemail-name");
  let index= sel.selectedIndex;
  let email_value= sel.options[index].value;
  let email_value2= document.getElementById("signupemail-id").value;
  let email_value3= `${email_value2}@${email_value}`;
  let reg1=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
  let isok1;
  if (email_value2 !== "") {
    isok1 = reg1.test(email_value3);
    if (! isok1) {
     alert(`${email_value3}邮箱格式不正确`);
     //清空邮箱框
        sigEmail1.text="";
        return false;
    }
    //如果本地已有该邮箱
   let messageStr = localStorage.getItem('userMessage');
    let messages = JSON.parse(messageStr) || [];
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].id === email_value3) {
            alert("该邮箱已被注册");
            sigEmail1.text="";
            return false;
        }
    }
    return true;
  };
}

function accountcheck2() {
    //数字，英文，长度限制在3-15个字符
    let reg1=/^[a-zA-Z0-9]{3,15}$/;
    let isok1;
    let account_value = sigName1.value
    if (account_value!== "") {
        isok1 = reg1.test(account_value);
        if (!isok1) {
            alert(`${account_value}用户格式不正确`);
            //清空邮箱框
            sigName1.text = "";
            return false;
        }

        //如果本地已有该用户名
        let messageStr = localStorage.getItem('userMessage');
        let messages = JSON.parse(messageStr) || [];
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].name === account_value) {
                alert("该用户名已被注册");
                sigName1.text = "";
                return false;
            }
        }
        return true;
    }
}
function passwordcheck() {
  let password_value= document.getElementById("signuppassword-id1").value;
  let reg2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/;
  let isok2;
  if (password_value !== "") {
    isok2 = reg2.test(password_value);
    if (! isok2) {
     alert("密码格式不正确");
     //清空密码框
       sigPassword1.text="";
       sigPassword2.text="";
        return false;
    }
    return true;
  };
}
function passwordcheck2() {
    let password_value= document.getElementById("signuppassword-id1").value;
    let password_value2= document.getElementById("signuppassword-id2").value;
    let isok3;
    if (password_value2 !== "") {
        if (password_value2 !== password_value) {
        alert("两次密码不一致");
        //清空密码框
            document.getElementById("signuppassword-id1").value="";
            document.getElementById("signuppassword-id2").value="";
            return false;
        }
        return true;
    };
}
function emailcheck2() {
    let validation_value= document.getElementById("signupvalidation-text").value;
    //暂时没接口，先写死
    let validation_value2= "1234";
    if (validation_value !== "") {
        if (validation_value !== validation_value2) {
        alert("验证码错误");
        //清空验证码框
            document.getElementById("signupvalidation-text").value="";
            return false;
        }
        return true;
    };
}


sigButton1.onclick=function(){
    alert("验证码已发送,yanzhengma:1234");
}
sigButton2.onclick=function(){
    let myEmail=`${sigEmail1.value}@${sigEmail2.value}`;
    if (emailcheck() && passwordcheck() && passwordcheck2() && emailcheck2()&&accountcheck2()) {
        if (sigBox.checked===false) {
            alert("请阅读并同意用户协议");
        }
        else {
            alert(`${myEmail}注册成功`);
            let message = {name:sigName1.value, id: myEmail, password: sigPassword1.value};
            let messageStr = localStorage.getItem('userMessage');
            let messages = JSON.parse(messageStr) || [];
            messages.push(message)
            localStorage.setItem('userMessage', JSON.stringify(messages))
            sigEmail1.value = "";
            sigPassword1.value = "";
            sigPassword2.value = "";
            sigBox.checked = false;
            sigName1.value = "";
            sigName2.value = "";
            //跳转到登录页面
            window.location.href="../HTML/login.html";
        }
    }
}


