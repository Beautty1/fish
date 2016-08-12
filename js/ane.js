function Anes () {
	//rearPoint,controlPoint,headPoint->sin
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.len=[];
	this.A=[];
	this.angle=0;
	
}
Anes.prototype.num=55;
Anes.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*20+Math.random()*20;
		this.heady[i]=canHeight-250+Math.random()*50;
		
		this.headx[i]=this.rootx[i];
		this.len[i]=300+Math.random()*50;
		
		this.A[i]=Math.random()*50+50;
		/*this.angle[i]=Math.random();*/
		
	}

}
Anes.prototype.draw=function(){
	var h=100;
	
	
	ctx2.save();
	ctx2.globalAlpha="0.6";
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	ctx2.strokeStyle="#3b154e";
	
	
	this.angle+=deltaTime;
	var offset=Math.sin(this.angle*0.0008);
	
	for(var i=0;i<this.num;i++){
		

		/*this.heady[i]=canHeight-this.A[i]*Math.sin(this.angle);*/
		this.headx[i]=this.rootx[i]+this.A[i]*offset;
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		/*ctx2.moveTo(this.headx[i]-this.A[i]*Math.cos(this.angle[i]*deltaTime*0.1),this.heady[i]);
		ctx2.quadraticCurveTo(this.headx[i],canHeight-h,this.headx[i]-this.A[i]*Math.cos(this.angle[i]*deltaTime*0.1),this.heady[i]);*/
		//ctx2.lineTo(this.headx[i],canHeight-200);
		ctx2.stroke();
		
	}
	ctx2.restore();
}
