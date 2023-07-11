const logEmail= document.getElementById('loginuser-name');
const logPassword= document.getElementById('loginpassword-value');
const logButton= document.getElementById('login-btn');
const logcheckBox= document.getElementById('brand');


let messageStr = localStorage.getItem('userMessage');
let messages = JSON.parse(messageStr) || [];
let loginStr = localStorage.getItem('loginMessage');
let  isok;

logButton.onclick=function hf(){
    const email=logEmail.value;
    const password=logPassword.value;
    if(email===""){
        alert("邮箱不能为空");
        return false;
    }
    if(password===""){
        alert("密码不能为空");
        return false;
    }
     //根据邮箱和密码查询数据库
        //如果查询到了，就登录成功
        //如果没有查询到，就登录失败
        //登录失败，提示用户
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].id === email) {
            if(messages[i].password===password){
                alert("登录成功");
                //全部清空
                logEmail.value="";
                logPassword.value="";
                //登录成功后，本地存储一个登录标识true
                localStorage.setItem('loginMessage',true);
                //跳转到首页
                window.location.href = '../HTML/apifox.html';
                window.location.replace("../HTML/apifox.html")
                return true;
            }
            else{
                alert("密码错误");
                logPassword.value="";
                isok=false;
                return false;
            }
        }

    }
        alert("该邮箱未注册");
        logEmail.value="";
        logPassword.value="";
        isok=false;
        return false;

}
//登陆过后，访问登陆注册页面时重定向到首页

window.onload=function(){
      //读取本地存储的登录标识
        let loginStr = localStorage.getItem('loginMessage');
        //判断是否登录
        if (loginStr) {
            //如果登录了，就跳转到首页
            window.location.href = '../HTML/apifox.html';
        }
}