//获取商户名和余额
var mobile = localStorage.getItem("mobile");
var url = "http://121.40.66.237/AppInterface/AppCheckUserMobile.ashx?mobile=" + mobile;
mui.getJSON(url, function(data) {
	document.getElementById("name").innerHTML = data.status+"-超市";
	document.getElementById("balance").innerHTML = "余额:"+data.msg+"-超市";
});