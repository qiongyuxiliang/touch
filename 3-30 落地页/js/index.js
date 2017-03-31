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
       var h=$('#header').height();
     
        $('#header').on({
          touchstart:function(e){
            var _touch1 = e.originalEvent.targetTouches[0];
            var y1= _touch1.screenY;
            console.log(1)
            window.y1=y1;
            console.log(y1)
            e.preventDefault();

          },
          touchmove:function(e){
            var _touch2 = e.originalEvent.targetTouches[0];
            var y2= _touch2.screenY;
             e.preventDefault();
             console.log(12);
             if((y2-y1>0)&&(y2-y1<15)){
              $(this).css({
              'margin-top':(y2-y1)+'px'
            })
             }
             if(y2-y1>=15){
              $(this).css({
              'margin-top':'15px'
            })
             }
             else{
              $(this).css({
              'margin-top':(y2-y1)+'px'
            })
             }

          },
          touchend:function(e){
            var _touch3 = e.originalEvent.changedTouches[0];
            var y3= _touch3.screenY;
             e.preventDefault();
            if((y1-y3)>=(h/2)){
              $(this).css({
              'margin-top':-(h/2)+'px'
            })           
            }
            else{
              console.log(123)
              console.log(y3)
              console.log(this)
                $(this).animate({'margin-top':0});
              }

          }
        })
      })