
//js代码获取IP地址的三种方法，在js中取得客户端的IP地址。

//1，js取得IP地址的方法一

<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<script type="text/javascript">
  document.write(returnCitySN["cip"]+','+returnCitySN["cname"])
</script>



//2，js取得IP地址的方法二

<script type="text/javascript" src="http://fw.qq.com/ipaddress"></script>
<script>
  document.write("你的IP是："+IPData[0]+"，来自："+IPData[2]);
</script>


//3，js取得ip地址的方法三，腾讯IP，转UTF-8：

<script type="text/javascript" src="http://fw.qq.com/ipaddress" charset="gb2312"></script>
$(document).ready(function() {$("#ip").val(IPData[0]);$("#add").val(IPData[2]);})
