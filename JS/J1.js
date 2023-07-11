window.onload = function () {

    let slideIndex = 1;
    showSlides(slideIndex);

    let prev = document.getElementsByClassName('prev')[0];//获取上一张按钮
    let next = document.getElementsByClassName('next')[0];//获取下一张按钮
    let navs = document.getElementsByClassName('dot');//获取导航点
    // 上一张点击事件
    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    // 下一张点击事件
    next.addEventListener('click', function () {
        plusSlides(1);
    });

    for (let i = 1; i <= navs.length; i++) {
        navs[i - 1].addEventListener('click', function () {
            currentSlide(i);
        });
    }

    function currentSlide(n) {//n为1,2,3,4
        clearTimeout(timeout);//清除定时器
        showSlides(slideIndex = n);//显示第n张图片
    }

    function plusSlides(n) {//n为1或-1
        clearTimeout(timeout);//清除定时器
        showSlides(slideIndex += n - 1);//显示第n张图片
    }

    function showSlides(n) {//n为1,2,3,4
        let i;//循环变量
        let imgs = document.getElementsByClassName('sideItem');//获取图片
        let navs = document.getElementsByClassName('dot');//获取导航点

        if (n > imgs.length) { slideIndex = 1; }//如果n大于图片数量，将slideIndex设为1
        if (n < 1) { slideIndex = imgs.length; }//如果n小于1，将slideIndex设为图片数量
        for (i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("slideActive")//移出slideActive类
        }

        for (i = 0; i < navs.length; i++) {//移出dotActive类
            navs[i].classList.remove("dotActive");//移出dotActive类
        }
        imgs[slideIndex - 1].classList.add("slideActive");//增加slideActive类
        navs[slideIndex - 1].classList.add("dotActive");//增加dotActive类
        timeout = setTimeout(showSlides, 10000000); // 8秒切换一次
        slideIndex++;//slideIndex加1
        if (slideIndex > imgs.length) {//如果slideIndex大于图片数量
            slideIndex = 1;//将slideIndex设为1
        }
        return timeout;
    }
}
const logoutButton= document.getElementById('logout');
logoutButton.onclick=function(){
    localStorage.removeItem('loginMessage');
    window.location.href = '../HTML/login.html';
    window.location.replace("../HTML/login.html")
}

window.onload=function(){
    //读取本地存储的登录标识
    let loginStr = localStorage.getItem('loginMessage');
    //判断是否登录
   //如果未登录，跳转到登录页面
    if(!loginStr){
        window.location.href = '../HTML/login.html';
        window.location.replace("../HTML/login.html")
    }
}