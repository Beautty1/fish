function Mom () {
	this.x=0;
	this.y=0;
	this.angle=0;
	this.body=new Image();
	this.eye=new Image();
	this.tail=new Image();
	this.tails=[];
	this.timer=0;
	this.count=0;
}
Mom.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.eye.src="img/bigEye0.png";
	this.body.src="img/bigSwim0.png";

	
	for(var i=0;i<8;i++){
		this.tails[i]=new Image();
		this.tails[i].src="img/bigTail"+i+".png";
	}
}
Mom.prototype.draw=function(){
	this.x=lerpDistance(mx,this.x,0.9);
	this.y=lerpDistance(my,this.y,0.9);
	
	var deltaX=mx-this.x;
	var deltaY=my-this.y;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	
	this.angle=lerpAngle(beta,this.angle,0.9);
	
	this.timer+=deltaTime;
	if(this.timer>50){
		this.timer=0;
		this.count++;
		
	}
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.eye,-this.eye.width*0.5,-this.eye.height*0.5);
	ctx1.drawImage(this.body,-this.body.width*0.5,-this.body.height*0.5);
	ctx1.drawImage(this.tails[this.count%8],-this.tails[this.count%8].width*0.5+30,-this.tails[this.count%8].height*0.5);
	ctx1.restore();
}
