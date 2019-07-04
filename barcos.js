class barcoenX {
	constructor (x,y,la,an,v){
		this.X = x;
		this.Y = y;
		this.largo = la;
		this.ancho = an;
		this.velocidad = v;
		var x1 = this.ancho/3;
		this.xa = x1;
		
		var r = this.xa/2;
		this.rad = r;
	}
	Dibujar(barco){
		barco.beginPath();
		barco.fillStyle ="white";
		barco.strokeStyle = "black";
		barco.moveTo(this.X-this.xa, this.Y);
		barco.bezierCurveTo(this.X-this.xa, this.Y-this.xa*1.2, 
							this.X-this.xa-this.largo, this.Y-this.xa,
							this.X-this.xa-this.largo, this.Y+this.ancho/2);
		barco.bezierCurveTo(this.X-this.xa-this.largo, this.Y+this.xa+this.ancho,
							this.X-this.xa, this.Y+this.ancho+this.xa,
							this.X-this.xa, this.Y+this.ancho*0.9);
		barco.closePath();
		barco.fill();	
		barco.stroke();
		barco.beginPath();
		barco.fillStyle ="grey";
		barco.strokeStyle = "grey";
		barco.fillRect(this.X-this.largo*0.5, this.Y, -this.largo/3.1, this.ancho);
		barco.beginPath();
		barco.fillStyle ="grey";
		barco.strokeStyle = "grey";
		barco.fillRect(this.X-this.largo*0.3, this.Y+(this.ancho*0.3), -this.largo/1.9, this.ancho/2.1);
		barco.beginPath();
		barco.fillStyle ="black";
		barco.strokeStyle = "black";
		barco.arc(this.X-(this.largo/2.1)-this.rad, this.Y+(this.ancho/2)+this.rad, this.rad,0, 2*3.1416, true);
		barco.fill();	
		barco.stroke();		
	}
}
class barcoenY {
	constructor (x,y,la,an,v){
		this.X = x;
		this.Y = y;
		this.largo = la;
		this.ancho = an;
		this.velocidad = v;
		var x1 = this.ancho/3;
		this.xa = x1;
		
		var r = this.xa/2;
		this.rad = r;
	}	
	Dibujar(barco){
		barco.beginPath();
		barco.fillStyle ="white";
		barco.strokeStyle = "black";
		barco.moveTo(this.X, this.Y+this.xa);
		barco.bezierCurveTo(this.X+this.xa*1.2, this.Y+this.xa, 
							this.X+this.xa, this.Y+this.xa+this.largo,
							this.X-this.ancho/2, this.Y+this.xa+this.largo);
		barco.bezierCurveTo(this.X-this.xa-this.ancho, this.Y+this.xa+this.largo,
							this.X-this.ancho-this.xa, this.Y+this.xa,
							this.X-this.ancho*0.9, this.Y+this.xa							
							);					
		barco.closePath();
		barco.fill();		
		barco.stroke();
		barco.beginPath();
		barco.fillStyle ="grey";
		barco.strokeStyle = "grey";
		barco.fillRect(this.X, this.Y+this.largo*0.5, -this.ancho, this.largo/3.1);
		barco.beginPath();
		barco.fillStyle ="grey";
		barco.strokeStyle = "grey";
		barco.fillRect(this.X-(this.ancho*0.3), this.Y+this.largo*0.3, -this.ancho/2.1, this.largo/1.9);
		barco.beginPath();
		barco.fillStyle ="black";
		barco.strokeStyle = "black";
		barco.arc(this.X-(this.ancho/2)-this.rad, this.Y+(this.largo/2.1)+this.rad, this.rad,0, 2*3.1416, true);
		barco.fill();	
		barco.stroke();
	}
}