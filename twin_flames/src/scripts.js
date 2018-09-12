//游戏系统信息
var msg = ''

function init()
//初始进入游戏
{
	if (typeof(Storage) !== 'undefined')
	{
		var cur_time = new Date()
		if ( !localStorage.BORN_TIME )
		{
			init_save_data(cur_time)
		}
		else
		{
			var save_time = new Date(localStorage.LAST_TIME)
			var delta_time = cur_time.getTime() - save_time.getTime()
			timestr = my_parse_time(delta_time)
			document.getElementById('CONN_DAYS').innerHTML = '已建立连接' + timestr
			time_pass_event(delta_time)
		}
	}
	else
	{
		msg = '抱歉！您的浏览器不支持 Web Storage ...'
	}
	refresh(msg)
}

function init_save_data(born_time)
//建立新存档
{
	localStorage.BORN_TIME = born_time
	localStorage.LAST_TIME = born_time
	localStorage.SIG_STR = cfg.sig_str.init_value
	localStorage.ENTANGLEMENT = cfg.entanglement.init_value
	localStorage.RATE = cfg.rate.init_value
	localStorage.ENTROPY = cfg.entropy.init_value
	localStorage.ETHER = cfg.ether.init_value
	localStorage.NAME = cfg.name
	localStorage.MSGS = ''	//所有对话信息
	msg='成功与双生火焰建立连接'
}

function my_parse_time(timeint)
//时间格式化
//@param timeint: 数值型时间，单位毫秒
//@return: 格式化时间字符串 n天n小时
{
	var hour_time = timeint/1000/60/60
	if (hour_time>=24)
	{
		var hours = hour_time % 24
		var days = Math.floor(hour_time / 24)
		return days + '天' + hours + '小时'
	}
	else if (hour_time>=1)
	{
		return Math.floor(hour_time) + '小时'
	}
	else
	{
		return '不足1小时'
	}
}

function time_pass_event(delta_time)
//时间流逝事件
//@param delta_time: 数值型时间，单位毫秒
{
	var seconds = delta_time / 1000
	change_sig_str(seconds)
	change_entanglement(seconds)
	change_rate(seconds)
	change_entropy(seconds)
	change_ether(seconds)
	refresh()
	check_ending()
}

function check_ending()
//结束条件检测
{
	if ( !Number(localStorage.SIG_STR) )
	//信号强度为0，结束游戏
	{
		msg='很不幸，与' + localStorage.NAME + '的连接已断开'
		refresh(msg)
		alert('已断开连接！')
		localStorage.BORN_TIME = ''
		die_log()
	}
}

function die_log()
//死亡记录
{
	var cur_time = new Date()
	var die_log = localStorage.NAME + '#' + localStorage.BORN_TIME + '#' + cur_time + '#' + localStorage.MSGS + '#'
	if (localStorage.DIE_INFOS)
	{
		localStorage.DIE_INFOS += die_log
	}
	else
	{
		localStorage.DIE_INFOS = die_log
	}
}

function refresh(msg='')
//显示数据刷新
{
	document.getElementById('SIG_STR').innerHTML = parseInt( Number(localStorage.SIG_STR) * cfg.sig_str.show_ratio,10 )
	document.getElementById('ENTANGLEMENT').innerHTML = parseInt( Number(localStorage.ENTANGLEMENT) * cfg.entanglement.show_ratio,10 )
	document.getElementById('RATE').innerHTML = parseInt( Number(localStorage.RATE) * cfg.rate.show_ratio,10 )
	document.getElementById('ENTROPY').innerHTML = parseInt( Number(localStorage.ENTROPY) * cfg.entropy.show_ratio,10 )
	document.getElementById('ETHER').innerHTML = parseInt( Number(localStorage.ETHER) * cfg.ether.show_ratio,10 )
	document.getElementById('NAME').innerHTML = localStorage.NAME
	document.getElementById('msg').innerHTML = msg
}

function change_name(new_name)
//改名
{
	localStorage.NAME = new_name
}

function change_sig_str(seconds)
//信号强度值按秒改变
{
	if ( Number(localStorage.RATE) )
	//速率非0时不处理
	{
		return
	}
	new_value = Number(localStorage.SIG_STR) + seconds * cfg.sig_str.change_ps
	if (new_value >= cfg.sig_str.max_value)
	{
		localStorage.SIG_STR = cfg.sig_str.max_value
	}
	else if (new_value <= cfg.sig_str.min_value)
	{
		localStorage.SIG_STR = cfg.sig_str.min_value
	}
	else
	{
		localStorage.SIG_STR = new_value
	}
}

function change_entanglement(seconds)
//纠缠度值按秒改变
{
	if ( Number(localStorage.ENTROPY) > cfg.entropy.max_value/2 )
	//熵值过半时，纠缠度降低速度翻倍
	{
		seconds *= 2
	}
	new_value = Number(localStorage.ENTANGLEMENT) + seconds * cfg.entanglement.change_ps
	if (new_value >= cfg.entanglement.max_value)
	{
		localStorage.ENTANGLEMENT = cfg.entanglement.max_value
	}
	else if (new_value <= cfg.entanglement.min_value)
	{
		localStorage.ENTANGLEMENT = cfg.entanglement.min_value
	}
	else
	{
		localStorage.ENTANGLEMENT = new_value
	}
}

function change_rate(seconds)
//速率值按秒改变
{
	new_value = Number(localStorage.RATE) + seconds * cfg.rate.change_ps
	if (new_value >= cfg.rate.max_value)
	{
		localStorage.RATE = cfg.rate.max_value
	}
	else if (new_value <= cfg.rate.min_value)
	{
		localStorage.RATE = cfg.rate.min_value
	}
	else
	{
		localStorage.RATE = new_value
	}
}

function change_entropy(seconds)
//熵值按秒改变
{
	new_value = Number(localStorage.ENTROPY) + seconds * cfg.entropy.change_ps
	if (new_value >= cfg.entropy.max_value)
	{
		localStorage.ENTROPY = cfg.entropy.max_value
	}
	else if (new_value <= cfg.entropy.min_value)
	{
		localStorage.ENTROPY = cfg.entropy.min_value
	}
	else
	{
		localStorage.ENTROPY = new_value
	}
}

function change_ether(seconds)
//以太值按秒改变
{
	new_value = Number(localStorage.ETHER) + seconds * cfg.ether.change_ps
	if (new_value >= cfg.ether.max_value)
	{
		localStorage.ETHER = cfg.ether.max_value
	}
	else if (new_value <= cfg.ether.min_value)
	{
		localStorage.ETHER = cfg.ether.min_value
	}
	else
	{
		localStorage.ETHER = new_value
	}
}

function gra_wave()
//引力波功能
{
	if ( Number(localStorage.ETHER) < cfg.gra_wave.ether_cost )
	{
		msg='需要至少' + cfg.gra_wave.ether_cost + '以太！'
	}
	else if ( Number(localStorage.ENTANGLEMENT) === cfg.entanglement.max_value )
	{
		msg='纠缠度已满，无需释放引力波！'
	}
	else
	{
		if(!message.value)
		{
			msg='请输入要发送的信息！'
		}
		else
		{
			localStorage.ETHER = Number(localStorage.ETHER) - cfg.gra_wave.ether_cost
			var rnd_value = Math.ceil(Math.random()*5)
			change_entanglement(-rnd_value*60*60)
			msg='成功发送引力波，纠缠度提升了！'
			var rnd_value = Math.ceil(Math.random()*100)
			if ( rnd_value<=50 )
			//50%提升熵
			{
				change_entropy(1*60*60)
				msg+='<br />引力波引发了熵增。'
			}
			//此句以后不再转回来
			var cur_time = new Date()
			localStorage.MSGS += String(cur_time) + '|'
			localStorage.MSGS += message.value + '|'
			result = get_tuling_msg(message.value)
		}
	}
	refresh(msg)
}

function get_tuling_msg(message,botkey='e544098faa0449a7ae39d3c2951b2a98')
//获取图灵机器人对话信息
{
	if (message)
	{
		var myurl = 'http://www.tuling123.com/openapi/api?key=' + botkey + '&info=' + message
		console.log(myurl)
		$.ajax(
				{
					type:'get',
					url:myurl,
					success:function(body,heads,status)
							{
								console.log(body)
								alert(body.text)
								localStorage.MSGS += body.text + '|'
								return body.text
							}
				}
			)
	}	
}

function time_warp()
//扭曲时间功能
{
	if ( Number(localStorage.ETHER) < cfg.time_warp.ether_cost )
	{
		msg='需要至少' + cfg.time_warp.ether_cost + '以太！'
	}
	else if ( Number(localStorage.RATE) === cfg.rate.max_value )
	{
		msg='速率已满，无需扭曲时间！'
	}
	else if ( Number(localStorage.ENTANGLEMENT) <= cfg.entanglement.max_value/2 )
	//纠缠度过半才能使用扭曲时间
	{
		msg='纠缠度过低，无法扭曲时间'
	}
	else
	{
		localStorage.ETHER = Number(localStorage.ETHER) - cfg.time_warp.ether_cost
		change_rate(-8*60*60)
		msg='成功扭曲时间，速率提升了！'
		var rnd_value = Math.ceil(Math.random()*100)
		if ( rnd_value<=80 )
		//80%提升熵
		{
			change_entropy(1*60*60)
			msg+='<br />扭曲时间的同时触发了熵增。'			
		}		
	}
	refresh(msg)
}

function ether_input()
//注入以太功能
{
	if ( Number(localStorage.ETHER) < cfg.ether_input.ether_cost )
	{
		msg='需要至少' + cfg.ether_input.ether_cost + '以太！'
	}
	else if ( Number(localStorage.ENTROPY) === cfg.entropy.min_value )
	{
		msg='熵已清空，无需注入以太！'
	}
	else
	{
		localStorage.ETHER = Number(localStorage.ETHER) - cfg.ether_input.ether_cost
		change_entropy(-20*60*60)
		msg='成功注入以太，熵被清空了！'
	}
	refresh(msg)
}