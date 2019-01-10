function handleKey(e){
	if(gameController.handleKey(e.which))
	{
		e.preventDefault();
	}
}
function main(){
	document.body.onkeydown=handleKey;
	gameController.init();
}
