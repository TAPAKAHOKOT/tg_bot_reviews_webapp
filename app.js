document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.star').forEach(el => {
		el.addEventListener("click", () => {
			starsNum = el.value;
		})
	});
});




var tg = window.Telegram.WebApp,
	mainButton = tg.MainButton,
	starsNum = 0;

mainButton.show();
mainButton.enable();

mainButton.textColor = '#FFFFFF';
mainButton.color = '#2cab37';
mainButton.setText("Отправить");

tg.onEvent("mainButtonClicked", function(){
	tg.sendData(JSON.stringify({
		'stars': starsNum,
		'comment': document.getElementById('comment').value,
		'is_anon': document.getElementById('is_anon').checked,
	}));
});
