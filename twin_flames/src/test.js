function test_hour_past()
{
	msg='一小时过去了'
	var ms=1*60*60*1000
	time_pass_event(ms)
	refresh(msg)
}

function test_day_past()
{
	msg='一天过去了'
	var ms=1*60*60*1000*24
	time_pass_event(ms)
	refresh(msg)
}

function test_storage_output()
{
	msg=JSON.stringify(localStorage)
	refresh(msg)
}