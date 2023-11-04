var tg = window.Telegram.WebApp,
	mainButton = tg.MainButton;

mainButton.show();
mainButton.enable();

mainButton.textColor = '#FFFFFF';
mainButton.color = '#2cab37';
mainButton.setText("Отправить");

tg.onEvent("mainButtonClicked", function(){
	tg.sendData('TEST')
	tg.sendData(JSON.stringify({
		'stars': 5,
		'comment': document.getElementById('comment').value
	}));
});
