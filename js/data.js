function Data () {
	this.fruisNum=0;
	this.double=1;
	this.score=0;
}
Data.prototype.reset=function(){
	this.fruisNum=0;
	this.double=1;
}
Data.prototype.draw=function(){
	var h=canHeight;
	var w=canWidth;
	
	ctx2.fillStyle="white";
	ctx2.font="20px Verdana";
	ctx2.textAlign="center";
	ctx2.fillText("score:"+this.score,w*0.5,h-50);
}
Data.prototype.updateScore=function(){
	this.score+=100*this.fruisNum*this.double;
	
}
