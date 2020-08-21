var cards = new Array(
  {name: 'images/vaca.png', selection: false},
  {name: 'images/burro.png', selection: false},
  {name: 'images/camello.png', selection: false},
  {name: 'images/cebra.png', selection: false},
  {name: 'images/cocodrilo.png', selection: false},
  {name: 'images/elefante.png', selection: false},
  {name: 'images/mono.png', selection: false},
  {name: 'images/oso.png', selection: false},
  {name: 'images/dinosaurio.png', selection: false},
  {name: 'images/tigre.png', selection: false},

  {name: 'images/vaca.png', selection: false},
  {name: 'images/burro.png', selection: false},
  {name: 'images/camello.png', selection: false},
  {name: 'images/cebra.png', selection: false},
  {name: 'images/cocodrilo.png', selection: false},
  {name: 'images/elefante.png', selection: false},
  {name: 'images/mono.png', selection: false},
  {name: 'images/oso.png', selection: false},
  {name: 'images/dinosaurio.png', selection: false},
  {name: 'images/tigre.png', selection: false}
  );

  var move1 = "";
  var move2 = "";
  var idMove1 = "";
  var idMove2 = "";


function startGame () {
  var data = document.getElementById("game");
  data.style.opacity = 1;
  cards.sort(function() {return Math.random() - 0.5});

  for ( var i = 0 ; i < 20 ; i++ ) {
    var card = cards[i].name;
    var data = document.getElementById( i.toString() );
    data.dataset.valor = card;
  }
};

function restartGame () {
      document.getElementById("start").style.display = "inline-block";
      document.getElementById("restart").style.display = "inline-block";
      document.getElementById("newGame").style.display = "none";

			cards.sort(function() { return Math.random() - 0.5});
			for ( var i = 0; i < 20 ; i++ ) {
        document.getElementById(i.toString()).style.pointerEvents = "initial";
				var card = cards[i].name;
        cards[i].selection = false;
				var data = document.getElementById( i.toString() );
				data.dataset.valor = card;
				changeImage(i, "images/fond3.jpg");
			}

};

function spinCard(){

  var evento = window.event;
  move2 = evento.target.dataset.valor;
  idMove2 = evento.target.id;


    if ( move1 !== "" ) {
      if ( move1 === move2 && idMove1 !== idMove2 && cards[parseInt(idMove2)].selection != true &&
      cards[parseInt(idMove1)].selection != true) {

        cards[parseInt(idMove1)].selection = true;
        cards[parseInt(idMove2)].selection = true;

        document.getElementById(idMove1.toString()).style.pointerEvents = "none";
        document.getElementById(idMove2.toString()).style.pointerEvents = "none";

        changeImage(idMove2, move2);
        vaciar();
        comprobar();
      }else if(idMove1 !== idMove2){

        var self = this;
        setTimeout(function(){
          changeImage(self.idMove1,"images/fondo4.jpg")
          changeImage(self.idMove2, "images/fondo4.jpg")
          vaciar()
        },300);

        changeImage(idMove2, move2);
      }
    } else if(move2 !== "valor") {

      changeImage(idMove2, move2);

      move1 = move2;
      idMove1 = idMove2;
    }
  };

function vaciar ()  {
  move1 = "";
  move2 = "";

  idMove1 = "";
  idMove2 = "";
}

function changeImage (posicion, contenido) {
  document.getElementById(posicion.toString()).src = contenido;
}

function comprobar () {
  var aciertos = 0;
  for( var i = 0 ; i < 20 ; i++ ){
    if ( cards[i].selection == true ) {
      aciertos ++;
    }
  }

  if(aciertos == 20){
    document.getElementById("start").style.display = "none";
    document.getElementById("restart").style.display = "none";
    document.getElementById("newGame").style.display = "inline-block";
    for ( var i = 0; i < 20 ; i++ ) {
      changeImage(i, "images/ganaste.jpg");
    }
  }
};
