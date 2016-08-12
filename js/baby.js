function Baby () {
	this.x=0;
	this.y=0;
	this.body=new Image();
	this.eye=new Image();
	this.tail=new Image();
	this.angle=0;
	this.blood=0;
	this.fade=[];
	this.timer=0;
	this.count=0;
	this.dead=false;
	this.top=19;
}
Baby.prototype.init=function(){
	this.x=canWidth*0.5+20;
	this.y=canHeight*0.5+20;
	this.body.src="img/baby.png";
	this.eye.src="img/babyEye0.png";
	this.tail.src="img/babyTail0.png";
	this.blood=19;
	for(var i=0;i<=this.blood;i++){
		this.fade[i]=new Image();
		this.fade[i].src="img/babyFade"+(this.blood-i)+".png";
	}
}

Baby.prototype.draw=function(){
	
	this.timer+=deltaTime;
	if(this.blood<=0){
		this.blood=19;
		this.dead=true;
	}
	if(this.timer>1000){
		this.timer-=1000;
		this.blood--;
	}
	
	this.x=lerpDistance(this.x,mom.x,0.01);
	this.y=lerpDistance(this.y,mom.y,0.01);
	
	var deltaX=mom.x-this.x;
	var deltaY=mom.y-this.y;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	
	this.angle=lerpAngle(this.angle,beta,0.01);
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.tail,-this.tail.width*0.5+25,-this.tail.height*0.5);
	ctx1.drawImage(this.fade[this.blood],-this.fade[this.blood].width*0.5,-this.fade[this.blood].height*0.5);
	ctx1.drawImage(this.eye,-this.eye.width*0.5,-this.eye.height*0.5);
	ctx1.restore();
}

