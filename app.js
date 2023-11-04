class Rating {
  constructor(dom) {
    dom.innerHTML = '<svg width="110" height="20"></svg>';
    this.svg = dom.querySelector('svg');
    for(var i = 0; i < 5; i++)
      this.svg.innerHTML += `<polygon data-value="${i+1}"
           transform="translate(${i*22},0)" 
           points="10,1 4,19.8 19,7.8 1,7.8 16,19.8">`;
    this.svg.onclick = e => this.change(e);
    this.render();
  }
  
  change(e) {
    let value = e.target.dataset.value;
    value && (this.svg.parentNode.dataset.value = value); 
    starsNum = value;
    this.render();
  }
  
  render() {
    this.svg.querySelectorAll('polygon').forEach(star => {
      let on = +this.svg.parentNode.dataset.value >= +star.dataset.value;
      star.classList.toggle('active', on);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.rating').forEach(dom => new Rating(dom));
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
