//页面加载完成执行
onload=function(){
    headerOpa();
    timeOut();
    function headerOpa(){
    var header =document.querySelector('header');
    console.log(header);
    
    var sliderImg= document.querySelector('.slides img');
    //轮播图的高度
    var slidesHeight=sliderImg.offsetHeight;
    console.log(slidesHeight);
    
    
    window.onscroll= function(){
        //获取页面被卷去的高度值
        var scrollTop= document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
        // console.log(scrollTop);
        //透明度 0.9
        var tmp = scrollTop/slidesHeight;
        
        // console.log(tmp);
        //判断tmp是否大于0.9,到0.9就不在增大了
        if(tmp>0.9){
            tmp=0.9;
        }
        //把值赋给header
        header.style.backgroundColor="rgba(201,21,35," +tmp +")";
   
}
}


  function timeOut(){
      //总时间 5小时
      var time = 5*60*60;
      //获取时间标签
      var spans =document.querySelectorAll(".timer>span");
      console.log(spans);
      timeReduce();
      var timeId = setInterval(function(){
        time--;
        timeReduce();
        if(time<=0){
            clearInterval(timeId);
            console.log('已经抢完了');
        }
      },1000);
      function timeReduce(){
          //小时
          var hour =parseInt(time/60/60);
          //分钟
          var minutes= parseInt(time/60-hour*60);
          //秒
          var seconds = time-hour*60*60-minutes*60;
         /* console.log(hour);
         console.log(minutes);
         console.log(seconds);
          console.log(hour,minutes,seconds); */
          
          //4/10 0.4 14/10=1.4 hour=4
          var hour0 = parseInt(hour/10);//0
          var hour1=hour%10//4
          //分钟 5分钟=>05分钟 5/10=0.5
          var minutes0 = parseInt(minutes/10);
          var minutes1= minutes%10;
          var seconds0 =parseInt(seconds/10);
          var seconds1 = seconds%10;
          spans[0].innerHTML=hour0;
          spans[1].innerHTML=hour1;
          spans[3].innerHTML=minutes0;
          spans[4].innerHTML=minutes1;
          spans[6].innerHTML=seconds0;
          spans[7].innerHTML=seconds1;
          

      }

  } 

}