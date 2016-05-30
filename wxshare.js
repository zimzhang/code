//copy from w3cfuns 枫lwlw
//微信配置和分享

var post_link;
	config();
	var link_timeout = setInterval(function() {
		config();
	}, 2000);

	function config() {
		if (post_link) {
			post_link.abort();
		}
		post_link = $.post(url, {
			url: window.location.href
		}, function(dataInfor) {
			if (link_timeout) { //清除定时器
				clearInterval(link_timeout);
				link_timeout = null;
			}
			jsonConfig = {
				"appId": dataInfor.appId,
				"timestamp": dataInfor.timestamp,
				"nonceStr": dataInfor.nonceStr,
				"signature": dataInfor.signature,
				"jsApiList": dataInfor.jsApiList
			};
			wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: jsonConfig.appId, // 必填，公众号的唯一标识
				timestamp: jsonConfig.timestamp, // 必填，生成签名的时间戳
				nonceStr: jsonConfig.nonceStr, // 必填，生成签名的随机串
				signature: jsonConfig.signature, // 必填，签名，见附录录1
				jsApiList: jsonConfig.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});
		})
	}

	wx.ready(function() {
		//分享到朋友圈
		var title_str = '';
		var desc_str = '';
		var pic_url = ;
		var link_url = ;
		// link_url = ;
		wx.onMenuShareTimeline({
			title: desc_str, // 分享标题
			link: link_url, // 分享链接
			imgUrl: pic_url, // 分享图标
			success: function() {
				//alert("分享成功");	// 用户确认分享后执行的回调函数
			},
			cancel: function() {
				// 用户取消分享后执行的回调函数
			}
		});

		//分享给朋友
		wx.onMenuShareAppMessage({
			title: title_str, // 分享标题
			desc: desc_str, // 分享描述
			link: link_url, // 分享链接
			imgUrl: pic_url, // 分享图标
			type: 'link', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function() {
				// alert("分享成功");
				// 用户确认分享后执行的回调函数
			},
			cancel: function() {
				// 用户取消分享后执行的回调函数
			}
		});

		 //分享到QQ
		 wx.onMenuShareQQ({
		 	title: title_str, // 分享标题
		 	desc: desc_str, // 分享描述
		 	link: link_url, // 分享链接
		 	imgUrl: pic_url, // 分享图标
		 	success: function() {
		 		//alert("分享成功"); // 用户确认分享后执行的回调函数
		 		callback_share();
		 	},
		 	cancel: function() {
		 		// 用户取消分享后执行的回调函数
		 	}
		 });
		
		 //分享到微博
		 wx.onMenuShareWeibo({
		 	title: title_str, // 分享标题
		 	desc: desc_str, // 分享描述
		 	link: link_url, // 分享链接
		 	imgUrl: pic_url, // 分享图标
		 	success: function() {
		 		// 用户确认分享后执行的回调函数
		 		callback_share();
		 	},
		 	cancel: function() {
		 		// 用户取消分享后执行的回调函数
		 	}
		 });
		
		 //分享到QQ空间
		 wx.onMenuShareQZone({
		 	title: title_str, // 分享标题
		 	desc: desc_str, // 分享描述
		 	link: link_url, // 分享链接
		 	imgUrl: pic_url, // 分享图标
		 	success: function() {
		 		// 用户确认分享后执行的回调函数
		 		callback_share();
		 	},
		 	cancel: function() {
		 		// 用户取消分享后执行的回调函数
		 	}
		 });

	});
