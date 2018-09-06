window.onload = function () {
    var bus = document.getElementById('bus');//获取a标签
    //console.log(bus);
    var carTwo = document.getElementById('carTwo');//带色的图片
    var car = document.getElementById('car');//不带色的图片
    var www = document.getElementById('WWW');
    //console.log(www);
    //console.log(car);
    bus.onmouseover = function () {
        var imgSrc = carTwo.getAttribute('src');
        car.src = imgSrc.replace(/8/g,'6');//8带色 6 不带色
        www.style.display = 'block';

    }
    bus.onmouseout = function () {
        var imgSrc = carTwo.getAttribute('src');
        car.src = imgSrc.replace(/6/g,'8');
        www.style.display = 'none';
    }
    /*******************家电部分**************************/
    function update2(num2) {
        for (var l = 0;l<length2;l++){
            imgli[l].className = '';
           /* feel[l].style.display = 'none'*/

        }
        imgli[num2].className = 'active1';
        feel[num2].style.display = 'block';

    }
    var imgli = document.querySelectorAll('.UL li');
    //console.log(imgli);
    var feel = document.querySelectorAll('li .feel');
    //console.log(feel);
    var length2 = imgli.length;
    var num2 = null;
    for (var i = 0;i<length2;i++){
        imgli[i].index = i;
       // console.log(imgli[i].index);
        imgli[i].onmouseover = function () {
            update2(this.index);

        }
        imgli[i].onmouseout = function () {
            num2 = this.index;
            feel[num2].style.display = 'none';
        }

    }
    /***********************电影***************************/
    function update22(nume) {
        for (var lk = 0;lk<lengths;lk++){
            imgli11[lk].className = '';
            /* feel[l].style.display = 'none'*/

        }
        imgli11[nume].className = 'active11';
        feel11[nume].style.display = 'block';

    }
    var imgli11 = document.querySelectorAll('.UL1 li');
    //console.log(imgli);
    var feel11 = document.querySelectorAll('.UL1 .feel');
    //console.log(feel);
    var lengths = imgli11.length;
    var nume = null;
    for (var oo = 0;oo<lengths;oo++){
        imgli11[oo].index = oo;
        // console.log(imgli[i].index);
        imgli11[oo].onmouseover = function () {
            update22(this.index);

        }
        imgli11[oo].onmouseout = function () {
            nume = this.index;
            feel11[nume].style.display = 'none';
        }

    }

    /*****************************智能设备**************************/
    function update3(num3) {
        for (var w = 0;w<length3;w++){
            imgli1[w].className = '';
            /* feel[l].style.display = 'none'*/

        }
        imgli1[num3].className = 'active1';
        feel1[num3].style.display = 'block';

    }
    var imgli1 = document.querySelectorAll('.UL1 li');
    //console.log(imgli);
    var feel1 = document.querySelectorAll('li .feel1');
    //console.log(feel);
    var length3 = imgli1.length;
    var num3 = null;
    for (var q = 0;q<length3;q++){
        imgli1[q].index = q;
        // console.log(imgli[i].index);
        imgli1[q].onmouseover = function () {
            update3(this.index);

        }
        imgli1[q].onmouseout = function () {
            num3 = this.index;
            feel1[num3].style.display = 'none';
        }

    }
    /******************搭配***********************/

    function update4(num4) {
        for (var e = 0;e<length2;e++){
            imgli[e].className = '';
            /* feel[l].style.display = 'none'*/

        }
        imgli4[num4].className = 'active1';
        feel4[num4].style.display = 'block';

    }
    var imgli4 = document.querySelectorAll('.UL2 li');
    //console.log(imgli);
    var feel4 = document.querySelectorAll('li .feel2');
    //console.log(feel);
    var length4 = imgli4.length;
    var num4 = null;
    for (var r = 0;r<length4;r++){
        imgli4[r].index = r;
        // console.log(imgli[i].index);
        imgli4[r].onmouseover = function () {
            update4(this.index);

        }
        imgli4[r].onmouseout = function () {
            num4 = this.index;
            feel4[num4].style.display = 'none';
        }

    }
/*****************************周边*********************************/
function update5(num5) {
    for (var t = 0;t<length5;t++){
        imgli5[t].className = '';
        /* feel[l].style.display = 'none'*/

    }
    imgli5[num5].className = 'active1';
    feel5[num5].style.display = 'block';

}
    var imgli5 = document.querySelectorAll('.UL3 li');
    //console.log(imgli);
    var feel5 = document.querySelectorAll('li .feel5');
    //console.log(feel);
    var length5 = imgli5.length;
    var num5 = null;
    for (var y = 0;y<length5;y++){
        imgli5[y].index = y;
        // console.log(imgli[i].index);
        imgli5[y].onmouseover = function () {
            update5(this.index);

        }
        imgli5[y].onmouseout = function () {
            num5 = this.index;
            feel5[num5].style.display = 'none';
        }

    }




/****************************二级菜单部分*************************************/




    /******************************轮播部分***********************/
/*发生事件的三要素 发生事件的元素 发生事件的类型 发生事件的处理函数*/
    /*发生事件的元素 左右尖括号 图片 发生事件的类型点击事件 */
    var left = document.getElementById('left');
   //console.log(left);
    var right = document.getElementById('right');
    var imgs = document.querySelectorAll('.right-list li');
    var ul7 = document.querySelector('.right-list');
    var li7=document.getElementById('round');
    var li8=li7.getElementsByTagName('li');
    //console.log(imgs);
    var num7 = 0;
    var length7 = imgs.length;
    right.onclick=function(){
       nexte();
    }
    function nexte(){
        num7++;
        if(num7>4){
            num7=0;
        }
        for (var u = 0;u<length7;u++){
            imgs[u].style.display='none';
            li8[u].style.background='gray';

        }
        imgs[num7].style.display='block';
        li8[num7].style.background='none';
    }
    left.onclick=function(){
        num7--;
        if(num7<0){
            num7=4;
        }
        for (var u = 0;u<length7;u++){
            imgs[u].style.display='none';
            li8[u].style.background='gray';
        }
        imgs[num7].style.display='block';
        li8[num7].style.background='none';
    }
    var timer;
    var flow=document.querySelector('.flow');
    flow.onmouseenter=function(){
        clearInterval(timer);
    }
    flow.onmouseout=function(){
        timer=setInterval(nexte,2000);
    }
    /************left************/
    var list8 = document.querySelector('.list');
    var left8 = document.getElementById('left');
    var right8 = document.getElementById('right');
    list8.onmouseover = function () {
        left8.style.display = 'none';
        right8.style.display = 'none';
    }
    list8.onmouseout = function () {
        left8.style.display = 'block';
        right8.style.display = 'block';
    }
    /****************家电js部分******************/
    function update9(num9) {
        for (var lll = 0;lll<length9;lll++){
            slil[lll].className = '';
            sull[lll].style.display = 'none';

        }
        slil[num9].className = 'active2';
        sull[num9].style.display = 'block';

    }
    var slil = document.querySelectorAll('.hdnav-list li');
    //console.log(slil);
    var sull = document.querySelectorAll('.box-right-list ul');
    //console.log(sull);
      var length9 = slil.length;
      var num9 = null;
      for (var ll = 0;ll<length9;ll++){
          slil[ll].index = ll;
          slil[ll].onmouseover = function () {
              update9(this.index);
          }

      }

/***************************倒计时*************************************************/

//console.log(s);
//console.log(leftTime);
function minutes(s){
    if (s<10){
        s = '0'+s
    }
    return s;
    }
    var timer1 =  setInterval(showTime,50);
    function showTime() {
        var startTime = new Date();
        var endTime = new Date('2018 11 10 20:00:00');
        var leftTime = endTime.getTime() - startTime.getTime();
        if (leftTime<=0){
            clearInterval(timer1);
            document.querySelector('.hour').innerHTML = '00';
            document.getElementById('min').innerHTML = '00';
            document.getElementById('ss').innerHTML = '00';
            return false;
        }
        var hour1 = document.querySelector('.hour');
        var min = document.getElementById('min');
        var ss = document.getElementById('ss');
        var h = minutes(parseInt(leftTime/1000/60/60));
        var m = minutes(parseInt(leftTime/1000/60%60));
        var s = minutes(parseInt(leftTime/1000%60));
        hour1.innerHTML = h;
        min.innerHTML = m;
        ss.innerHTML = s;

        if (h == 00 && m == 00 && s == 00){
         clearInterval(timer1);
        }
    }
















}