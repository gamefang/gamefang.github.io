//播报信息
var msg = ''

//快速访问html对象
function $(Nid)
{
	return document.getElementById(Nid)
}

//开始游戏
function game()
{
	if (typeof(Storage) !== 'undefined')
	{
		var cur_time = new Date()
		if ( !localStorage.BORN_TIME )
		{
			new_game(cur_time)
		}
		else
		{
			continue_game(cur_time)
		}
	}
	else
	{
		msg = '抱歉！您的浏览器不支持 Web Storage ...'
	}
	refresh(msg)
}

//新游戏，建立存档
function new_game(born_time)
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

//继续游戏，读取存档
function continue_game(cur_time)
{
	var save_time = new Date(localStorage.LAST_TIME)
	var delta_time = cur_time.getTime() - save_time.getTime()
	localStorage.LAST_TIME = cur_time
	console.log('delta_time:',delta_time)
	time_pass_event(delta_time)
	var born_time = new Date(localStorage.BORN_TIME)
	var passed_time = cur_time.getTime() - born_time.getTime()
	timestr = my_parse_time(passed_time)
	$('CONN_DAYS').innerHTML = '已建立连接：' + timestr
}

//时间格式化
//@param timeint: 数值型时间，单位毫秒
//@return: 格式化时间字符串 n天n小时
function my_parse_time(timeint)
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

//时间流逝事件
//@param delta_time: 数值型时间，单位毫秒
function time_pass_event(delta_time)
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

//结束条件检测
function check_ending()
{
	//信号强度为0，结束游戏
	if ( !Number(localStorage.SIG_STR) )
	{
		msg='很不幸，与' + localStorage.NAME + '的连接已断开'
		refresh(msg)
		alert('已断开连接！')
		localStorage.BORN_TIME = ''
		die_log()
	}
}

//死亡记录
function die_log()
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

//显示数据刷新
function refresh(msg='')
{
	$('SIG_STR').innerHTML = parseInt( Number(localStorage.SIG_STR) * cfg.sig_str.show_ratio,10 )
	$('ENTANGLEMENT').innerHTML = parseInt( Number(localStorage.ENTANGLEMENT) * cfg.entanglement.show_ratio,10 )
	$('RATE').innerHTML = parseInt( Number(localStorage.RATE) * cfg.rate.show_ratio,10 )
	$('ENTROPY').innerHTML = parseInt( Number(localStorage.ENTROPY) * cfg.entropy.show_ratio,10 )
	$('ETHER').innerHTML = parseInt( Number(localStorage.ETHER) * cfg.ether.show_ratio,10 )
	$('NAME').innerHTML = localStorage.NAME
	$('msg').innerHTML = msg
}

//改名
function change_name(new_name)
{
	localStorage.NAME = new_name
}

//信号强度值按秒改变
function change_sig_str(seconds)
{
	//速率非0时不处理
	if ( Number(localStorage.RATE) )
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

//纠缠度值按秒改变
function change_entanglement(seconds)
{
	//熵值过半时，纠缠度降低速度翻倍
	if ( Number(localStorage.ENTROPY) > cfg.entropy.max_value/2 )
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

//速率值按秒改变
function change_rate(seconds)
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

//熵值按秒改变
function change_entropy(seconds)
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

//以太值按秒改变
function change_ether(seconds)
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

//引力波功能
function gra_wave()
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
		localStorage.ETHER = Number(localStorage.ETHER) - cfg.gra_wave.ether_cost
		var rnd_value = Math.ceil(Math.random()*5)
		change_entanglement(-rnd_value*60*60)
		msg='成功发送引力波，纠缠度提升了！'
		var rnd_value = Math.ceil(Math.random()*100)
		//50%提升熵
		if ( rnd_value<=50 )
		{
			change_entropy(1*60*60)
			msg+='<br />引力波引发了熵增。'
		}
	}
	refresh(msg)
}

//扭曲时间功能
function time_warp()
{
	if ( Number(localStorage.ETHER) < cfg.time_warp.ether_cost )
	{
		msg='需要至少' + cfg.time_warp.ether_cost + '以太！'
	}
	else if ( Number(localStorage.RATE) === cfg.rate.max_value )
	{
		msg='速率已满，无需扭曲时间！'
	}
	//纠缠度过半才能使用扭曲时间
	else if ( Number(localStorage.ENTANGLEMENT) <= cfg.entanglement.max_value/2 )
	{
		msg='纠缠度过低，无法扭曲时间'
	}
	else
	{
		localStorage.ETHER = Number(localStorage.ETHER) - cfg.time_warp.ether_cost
		change_rate(-8*60*60)
		msg='成功扭曲时间，速率提升了！'
		var rnd_value = Math.ceil(Math.random()*100)
		//80%提升熵
		if ( rnd_value<=80 )
		{
			change_entropy(1*60*60)
			msg+='<br />扭曲时间的同时触发了熵增。'			
		}		
	}
	refresh(msg)
}

//注入以太功能
function ether_input()
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
