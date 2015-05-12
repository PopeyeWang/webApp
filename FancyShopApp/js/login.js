var app = {

	initialize: function() {

		var mobile = localStorage.getItem("mobile");
		if (mobile != null) {
			this.verification(mobile);
		}
	},

	verification: function(mobile) {
		var url = "http://121.40.66.237/AppInterface/AppCheckUserMobile.ashx?mobile=" + mobile;
		mui.getJSON(url, function(data) {
			var statu = data.status.toString();
			if (statu == "False") { //本地有存储但是验证不通过需清除本地缓存
				localStorage.removeItem("mobile");
				msg.innerText = data.msg + ",需要重新验证！";
			} else {
				location.href = "main/main.html";
			}
		});
	}

};