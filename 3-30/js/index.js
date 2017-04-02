$(document).ready(function(){
	function isPC()  
 {  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var flag = true;  
   for (var v = 0; v < Agents.length; v++) {  
     if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
   }  
   return flag;  
 } 
 $('.download').on('click',function(){
  var f=isPC();
  if(f==true){
   alert('pc端下载');
 }
 else{
   alert('移动端下载');
 }
})
       // 
       // $('#id').on('touchstart',function(e) {
//     var _touch = e.originalEvent.targetTouches[0];
//     var _x= _touch.pageX;
// });

// $('#id').on('touchmove',function(e) {
//     var _touch = e.originalEvent.targetTouches[0];
//     var _x= _touch.pageX;
// });

// $('#id').on('touchend',function(e) {
//     var _touch = e.originalEvent.changedTouches[0];
//     var _x= _touch.pageX;
// }
       // 
       // $(document).bind(touchEvents.touchstart, function (event) {
        //     event.preventDefault();

        // });
        // $(document).bind(touchEvents.touchmove, function (event) {
        //     event.preventDefault();

        // });

        // $(document).bind(touchEvents.touchend, function (event) {
        //     event.preventDefault();

        // });
       // var touchEvents = {
    //     touchstart: "touchstart",
    //     touchmove: "touchmove",
    //     touchend: "touchend",

    //     /**
    //      * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
    //      */
    //     initTouchEvents: function () {
    //         if (isPC()) {
    //             this.touchstart = "mousedown";
    //             this.touchmove = "mousemove";
    //             this.touchend = "mouseup";
    //         }
    //     }
    // };
       // 获取header图片的高度
       // var h=$('#header').height();
       

       $('body').on({
        touchstart:function(e){
          var _touch1 = e.originalEvent.targetTouches[0];
          var y1= _touch1.screenY;
          window.y1=y1;
            // e.preventDefault();

          },
          touchmove:function(e){
            var _touch2 = e.originalEvent.targetTouches[0];
            var y2= _touch2.screenY;
            // 头部刷新
             // e.preventDefault();
               if((y2-y1>0)&&(y2-y1<15)&&($(document).scrollTop())<=0){
                $(this).css({
                  'margin-top':(y2-y1)+'px'
                })
              }
                if(y2-y1>=15&&($(document).scrollTop())<=0){
                  $('.re').show();
                  $(this).css({
                    'margin-top':'35px'
                  })
                }
              

             // 底部加载
             // scrollTop == (offsetHeight – clientHeight)判断滑到底部
             if (y1-y2>0&&y1-y2<15&&(($(window).scrollTop())>=($(this).height())-($(window).height()))) {
                // statement
                $(this).css({
                  'margin-bottom':(y2-y1)+'px'
                })
              }
              if(y1-y2>=15&&(($(window).scrollTop())>=($(this).height())-($(window).height()))){
               $('.re1').show();
               $(this).css({
                'margin-bottom':'35px'
              })
             }
         },
         touchend:function(e){
          var _touch3 = e.originalEvent.changedTouches[0];
          var y3= _touch3.screenY;
             // e.preventDefault();
            var self=this;
            // 使顶部加载动画移动到顶部
            function d() {
            $(self).animate({'margin-top':0},'normal','linear');
            $('.re').hide();
             }
             // 使底部加载动画移动到底部
             function c() {
               $(self).animate({'margin-bottom':0},'normal','linear');
               $('.re1').hide();
             }
             if(y3>y1&&y3-y1<15&&($(document).scrollTop())<=0)
             {
             // y用settimeout控制时间显示
             $(this).animate({'margin-top':0},'normal','linear')

             }
             if (y3-y1>=15&&$(document).scrollTop()<=0) 
             {
              setTimeout(d,1000);
              // 更新的页面
              var json_name={
                name0:'寒冰',
                name1:'皎月',
                name2:'琴女',
                name3:'女警'
              }
              var nj=$('.name_job');
              // var i=0;
              for (let i=0;i<nj.length;i++)
              {
                  $('.name_job').eq(i).text(json_name['name'+i])
                  // body...
      
                
              }
              
              // html="<img src="images/girl_four.jpg" alt="" class="girl">";
              // html+="<div class="name_job">小李，自己开水果店</div>";
              // html+="<div class="detail">23岁，未婚，独立坚强，考虑结婚</div>";
              // li.append(html);
              // docfrag.appendChild(li);
              // $('ul')[0].appendChild(docfrag);

            }
                      
              // $('.re1').hide();
              // 底部
             if(y1>y3&&y1-y3<15&&(($(window).scrollTop())>=($(this).height())-($(window).height())))
             {
             // y用settimeout控制时间显示
             c();

             }
             if (y1-y3>=15&&(($(window).scrollTop())>=($(this).height())-($(window).height()))){
            setTimeout(c,1000);

            // 多加载页面
            var docfrag=document.createDocumentFragment(),
              li = document.createElement("li"),
              html;
              html=$("ul").append($('li').clone());

             }

            }
          })
     })