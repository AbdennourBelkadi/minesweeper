var bombs = []
for(var i = 1; i<17;i++){
	if(Math.random()>0.7){
		bombs.push('' + i)
	}
}
var casesLeft = 16 - bombs.length

$('button').on('click',function(){
	console.log($(this).attr('id'))
	if(bombs.includes($(this).attr('id'))){
		$(this).text('💣')
		$(this).css('background-color','red')
		alert('game over!')
	} else {
		showDanger($(this).attr('id'))
		casesLeft -= 1
		if(casesLeft === 0){
			alert('You won!')
		}
	}
})

function showDanger(id){
	id = parseInt(id)
	console.log(id)
	var danger = 0
	if(id%4!==1 && bombs.includes($('#'+(id-1)).attr('id'))){
		danger += 1
	}
	if(id%4>0 && bombs.includes($('#'+(id+1)).attr('id'))){
		danger += 1
	}
	if(bombs.includes($('#'+(id-4)).attr('id'))){
		danger += 1
	}
	if(bombs.includes($('#'+(id+4)).attr('id'))){
		danger += 1
	}
	$('#'+id).text(''+danger)
	$('#'+id).css('background-color','limegreen')
}