//漂浮物随着波浪进行浮动  sin(x)
var Dust=function(){
	this.img=[];
	this.x=[];
	this.y=[];
	this.A=[];
	this.no=[];
	this.angle=0;
}
Dust.prototype.num=20;
Dust.prototype.init=function(){
	for(var i=0;i<7;i++){
		this.img[i]=new Image();
		this.img[i].src="img/dust"+i+".png";
	}
	for(var i=0;i<this.num;i++){
		this.x[i]=canWidth*Math.random();
		this.y[i]=canHeight*Math.random();
		this.A[i]=Math.random()*30+20;
		this.no[i]=Math.floor(Math.random()*7);
	}
}
Dust.prototype.draw=function(){
	
	this.angle+=deltaTime;
	var offset=Math.sin(this.angle*0.0008);
	
	for(var i=0;i<this.num;i++){
		ctx1.drawImage(this.img[this.no[i]],this.x[i]+this.A[i]*offset,this.y[i]);
	}
}
