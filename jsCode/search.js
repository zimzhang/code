		$('#search_input').on("keyup", function(event){
			throttle(queryData, null, 500, this.value, 1000);
		});
		function queryData(text){
			console.log("������" + text);
		}		
        
		function throttle(fn,context,delay,text,mustApplyTime){
			clearTimeout(fn.timer);
			fn._cur = Date.now();  //��¼��ǰʱ��

			if(!fn._start){      
				//���ú����ǵ�һ�ε��ã���ֱ������_start,����ʼʱ�䣬Ϊ_cur�����˿̵�ʱ��
				fn._start = fn._cur;
			}
			if(fn._cur-fn._start > mustApplyTime){ 
				//��ǰʱ������һ�κ�����ִ�е�ʱ�������mustApplyTime�Ƚϣ������ڣ������ִ��һ�κ�������С�ڣ����������ü�ʱ��
				fn.call(context,text);
				fn._start=fn._cur;
			}else{
				fn.timer=setTimeout(function(){
					fn.call(context,text);
				},delay);
			}
		}