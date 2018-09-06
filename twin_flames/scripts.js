var msg

function init()
{
	if (typeof(Storage) !== "undefined")
	{
		var cur_time = new Date();
		if ( !localStorage.BORN_TIME || localStorage.BORN_TIME == "0")
		{
			//建立新存档
			localStorage.BORN_TIME = cur_time;
			localStorage.SIG_STR = 20;
			localStorage.ENTANGLEMENT = 20;
			localStorage.RATE = 20;
			localStorage.ENTROPY = 0;
		}
		var delta_time = cur_time - localStorage.BORN_TIME;
		var d = new Date( delta_time * 1000 )
		var date = (d.getFullYear()) + "-" + 
				   (d.getMonth() + 1) + "-" +
				   (d.getDate()) + " " + 
				   (d.getHours()) + ":" + 
				   (d.getMinutes()) + ":" + 
				   (d.getSeconds());
		document.getElementById("CONN_DAYS").innerHTML = "已建立连接" + date + "天";
		//alert(delta_time)
		localStorage.LAST_TIME = cur_time;
		msg="成功与双生火焰建立连接"
	}
	else
	{
		msg = "抱歉！您的浏览器不支持 Web Storage ...";
	}
	refresh(msg);
}

function refresh(msg="")
{
	document.getElementById("SIG_STR").innerHTML = localStorage.SIG_STR;
	document.getElementById("ENTANGLEMENT").innerHTML = localStorage.ENTANGLEMENT;
	document.getElementById("RATE").innerHTML = localStorage.RATE;
	document.getElementById("ENTROPY").innerHTML = localStorage.ENTROPY;
	document.getElementById("msg").innerHTML = msg;
}

function gra_wave()
{
	localStorage.ENTANGLEMENT = Number(localStorage.ENTANGLEMENT) + Math.ceil(Math.random()*5);
	localStorage.ENTANGLEMENT = Math.min( Number(localStorage.ENTANGLEMENT) , 20 );
	msg="成功发送引力波"
	refresh(msg);
}

function time_warp()
{
	if ( Number(localStorage.ENTANGLEMENT) > 10 )
	{
		localStorage.RATE = Math.min( Number(localStorage.RATE) + 8 , 20 );
		msg="成功扭曲时间"
	}
	else
	{
		msg="纠缠度过低，无法扭曲时间"
	}
	refresh(msg);
}

function ether_input()
{
	localStorage.ENTROPY = Math.max( Number(localStorage.RATE) - 20 , 0 );
	msg="成功注入以太";
	refresh(msg);
}

function test_hour_past()
{
	msg="一小时过去了";
	localStorage.RATE = Math.max( Number(localStorage.RATE) - 1 , 0 );
	localStorage.ENTROPY = Math.min( Number(localStorage.ENTROPY) + 1 , 20 );
	if ( Number(localStorage.ENTROPY) > 10)
	{
		localStorage.ENTANGLEMENT = Math.max( Number(localStorage.ENTANGLEMENT) - 1 , 0 );
	}
	localStorage.ENTANGLEMENT = Math.max( Number(localStorage.ENTANGLEMENT) - 1 , 0 );
	if (localStorage.RATE == "0")
	{
		localStorage.SIG_STR = Math.max( Number(localStorage.SIG_STR) - 2 , 0 );
	}
	if (localStorage.SIG_STR == "0")
	{
		alert("已断开连接！");
		localStorage.BORN_TIME = 0;
		msg="很不幸，与双生火焰的连接已断开";
	}
	refresh(msg);
}

function test_day_past()
{
	if (localStorage.BORN_TIME)
	{
		localStorage.BORN_TIME = localStorage.BORN_TIME + 1000*60*60*24;
		msg="一天过去了"
	}
	else
	{
		msg="错误";
	}
	refresh(msg);
}
