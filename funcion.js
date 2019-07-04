var inicioX = 750;
var inicioY = 100;
var tiempo = 0;
var aux;
var barco1;
var barco2;
function CrearBarco()
{
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	context.fillStyle = "#1F4690";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);
	
	barco1 = new barcoenX (inicioX, 50, 100, 50, 12);
	barco1.Dibujar(context);
	barco2 = new barcoenY (800, inicioY, 100, 50, 17);
	barco2.Dibujar(context);
	context.font = "12px Arial";
	context.fillText("distancia = "+Math.sqrt((2*(inicioX-750))+(2*(inicioY-100))), inicioX, inicioY);
	
}

function animaciondebarco() {
		aux = setInterval( anibar, 42);
	}

function anibar(){
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	context.fillStyle = "#1F4690";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);
	
	barco1.X = inicioX - (barco1.velocidad*(tiempo/1000));
	barco1.Dibujar(context);
	barco2.Y = inicioY + (barco2.velocidad*(tiempo/1000));
	barco2.Dibujar(context);
	tiempo+=42;
	context.font = "12px Arial";
	var A = barco1.X - 750;
	var B = barco2.Y - 100;
	var H = Math.sqrt((A*A)+(B*B));
	context.fillText("distancia = "+H, barco1.X-(A/2), barco2.Y-(B/2));
	}

function stop() {
	barco1.X = 0;
	barco2.Y=0;
	clearInterval(aux);
}


