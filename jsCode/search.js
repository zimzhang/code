		$('#search_input').on("keyup", function(event){
			throttle(queryData, null, 500, this.value, 1000);
		});
		//查询数据
		function queryData(text){
			console.log("搜索：" + text);
		}	


        //节流方法
		function throttle(fn,context,delay,text,mustApplyTime){
			clearTimeout(fn.timer);
			fn._cur = Date.now();  //记录当前时间

			if(!fn._start){      
				//若该函数是第一次调用，则直接设置_start,即开始时间，为_cur，即此刻的时间
				fn._start = fn._cur;
			}
			if(fn._cur-fn._start > mustApplyTime){ 
				//当前时间与上一次函数被执行的时间作差，与mustApplyTime比较，若大于，则必须执行一次函数，若小于，则重新设置计时器
				fn.call(context,text);
				fn._start=fn._cur;
			}else{
				fn.timer=setTimeout(function(){
					fn.call(context,text);
				},delay);
			}
		}