var webApp = window.Telegram.WebApp,
	mainButton = webApp.MainButton,
	backButton = webApp.BackButton;

mainButton.show();
backButton.show();

webApp.MainButton.textColor = '#FFFFFF';
webApp.MainButton.color = '#2cab37';

webApp.MainButton.show();
webApp.MainButton.setText("Отправить");

webApp.onEvent("mainButtonClicked", function(){
	webApp.sendData({
		'stars': 5,
		'comment': document.getElementById('comment').value
	});
});
