// for(i of document.querySelectorAll(".slider")){

// 	const t = i

// 	i.hideSelect = function(){
// 		for(i of this.querySelectorAll('img'))
// 			i.classList.remove("selected")
// 	}

// 	i.show = function(n){
// 		const quantidade_elementos = this.querySelectorAll('img').length
// 		n = n%quantidade_elementos
// 		this.hideSelect()
// 		this.querySelectorAll('img')[n].classList.add("selected")
// 	}

// 	i.num = 0
// 	i.tempo = 500

// 	i.start = function(){
// 		setTimeout(()=>{
// 			this.show(this.num)
// 			this.num++
// 			this.start()
// 		},this.tempo)
// 	}

// 	i.go=function(t){
// 		t.tempo = t
// 		i.start()
// 	}
// }

class Slide {
  constructor(div) {
    this.div = div;
    this.filhos = this.div.querySelectorAll('img');
    this.quantidade = this.filhos.length;
    this.cont = 0;
  }

  hideSelect() {
    for (this.i of this.div.querySelectorAll('img'))
      this.i.classList.remove('selected');
  }

  show(n) {
    n = n % this.quantidade;
    this.hideSelect();
    this.filhos[n].classList.add('selected');
  }

  start(tempo) {
    setInterval(() => {
      this.show(++this.cont);
    }, tempo * 1000);
  }
}

// ================================= Ordem dos slides
slider.slide = new Slide(slider);
slider.slide.start(1);

card2.slide = new Slide(card2);
card2.slide.start(4);

card3.slide = new Slide(card3);
card3.slide.start(16);
