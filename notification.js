//桌面消息通知
function fnShow() {   
   var date = new Date();   
   var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	
   //请求通知权限   
   Notification.requestPermission(function (perm) {   
       if (perm == 'granted') {   
           var notification = new Notification('现在时间:', {   
               dir: 'auto',   
               lang: 'hi',   
               tag: 'testTag',   
               icon: 'xx.png',   
               body: time   
           });   
       }   
   })   
}   
