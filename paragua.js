class Paraguas {
	constructor (X,Y,An,La,C1,P){
		this.PuntoX = X;
		this.PuntoY = Y;
		this.Ancho = An;
		this.Largo = La;
		this.Color1 = C1;
		this.Precio = P;
		var Dispa = this.Ancho*0.45;
		this.Distancia_Palo = Dispa;
		var Pun = (this.Largo/20);
		this.PuntaLargo = Pun;
		var Alpa = this.Largo/3;
		this.LargoParaguas = Alpa;
		this.Color = "black";
	}
	Dibujar(Paragua){
		//Baston de la sombrilla

		Paragua.strokeStyle = this.Color;
		Paragua.beginPath();
		Paragua.rect(this.PuntoX+this.Distancia_Palo, this.PuntoY-(this.LargoParaguas*0.8), this.Ancho*0.1, this.Largo/2);
		Paragua.fillStyle=this.Color;
		Paragua.fill();
		Paragua.stroke();
		//agarradera curva del paraguas
		Paragua.beginPath();
		Paragua.moveTo(this.PuntoX+this.Distancia_Palo, this.PuntoY-(this.LargoParaguas*0.8)+(this.Largo/2) );
		Paragua.bezierCurveTo(this.PuntoX+this.Distancia_Palo, this.PuntoY+this.LargoParaguas,
								(this.Distancia_Palo*0.75)+this.PuntoX,this.PuntoY+this.LargoParaguas,
								(this.Distancia_Palo*0.75)+this.PuntoX,this.PuntoY-(this.LargoParaguas*0.8)+(this.Largo/2));
		Paragua.lineTo((this.Distancia_Palo*0.75)+this.PuntoX-this.Ancho*0.1,this.PuntoY-(this.LargoParaguas*0.8)+(this.Largo/2));
		Paragua.bezierCurveTo((this.Distancia_Palo*0.75)+this.PuntoX-this.Ancho*0.1,this.PuntoY+1.2*this.LargoParaguas,
								this.PuntoX+this.Distancia_Palo+this.Ancho*0.1,this.PuntoY+1.2*this.LargoParaguas, 
								this.PuntoX+this.Distancia_Palo+this.Ancho*0.1,this.PuntoY-(this.LargoParaguas*0.8)+(this.Largo/2));
		Paragua.closePath();
		Paragua.fillStyle=this.Color;
		Paragua.fill();
		Paragua.stroke();
		//Paraguas
		Paragua.beginPath();
		Paragua.moveTo(this.PuntoX, this.PuntoY);
		Paragua.bezierCurveTo(this.PuntoX, (this.PuntoY-this.LargoParaguas), 
								(this.PuntoX+this.Ancho), (this.PuntoY-this.LargoParaguas), 
								(this.PuntoX+this.Ancho), this.PuntoY);
		Paragua.bezierCurveTo((this.PuntoX+this.Ancho), this.PuntoY*0.97,
								(this.PuntoX+this.Ancho/2), this.PuntoY*0.97,
								this.PuntoX+(this.Ancho/2), this.PuntoY);
		Paragua.bezierCurveTo(this.PuntoX+(this.Ancho/2), this.PuntoY*0.97,
								this.PuntoX, this.PuntoY*0.97,
								this.PuntoX, this.PuntoY);
		Paragua.closePath();
		Paragua.fillStyle=this.Color1;
		Paragua.fill();
		Paragua.stroke();
		//lineas del paraguas
		Paragua.beginPath();
		Paragua.moveTo(this.PuntoX+(this.Ancho*0.25), this.PuntoY*0.975);
		Paragua.bezierCurveTo(this.PuntoX+(this.Ancho*0.25), (this.PuntoY-this.LargoParaguas), 
								(this.PuntoX+this.Ancho*0.75), (this.PuntoY-this.LargoParaguas), 
								(this.PuntoX+this.Ancho*0.75), this.PuntoY*0.975);
		Paragua.stroke();	
		Paragua.beginPath();
		Paragua.font = "12px Arial";
		Paragua.fillText("$"+this.Precio,this.PuntoX,this.PuntoY-50);
		Paragua.stroke();
	}
}