let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

tg.MainButton.show();
tg.MainButton.setText("Отправить");

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData({
		'stars': 5,
		'comment': document.getElementById('comment').text
	});
});
