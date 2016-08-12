function Fruits () {
	this.alive=[];
	this.orange=new Image();
	this.blue=new Image();
	this.x=[];
	this.y=[];
	this.l=[];
	this.sp=[];
	this.img=[];
}
Fruits.prototype.num=30;
Fruits.prototype.init=function(){
	this.orange.src="img/fruit.png";
	this.blue.src="img/blue.png";
	
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.img[i]=this.orange;
	}
	
	
	//产生一定数量的绿色果实和蓝色果实
	
	
	var num=(Math.random()*0.1+0.2)*this.num;
	
	for(var i=0;i<num;i++){
		this.x[i]=0;
		this.y[i]=0;
		this.born(i);
	}
	
}
Fruits.prototype.born=function(i){

	var aneId=Math.floor(ane.num*Math.random());
	this.x[i]=ane.headx[aneId];
	this.y[i]=ane.heady[aneId];
	this.l[i]=0;
	this.sp[i]=Math.random()*0.02+0.01;
	this.alive[i]=true;
	
	//控制果实颜色
	if(Math.random()<0.25){
		this.img[i]=this.blue;
	}else{
		this.img[i]=this.orange;
	}

}

Fruits.prototype.dead=function(i){
	this.alive[i]=false;
}

Fruits.prototype.draw=function(){
	
	//如果活跃的果实数量小于10，则产生新的果实
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			
			if(this.l[i]<20){
				this.l[i]+=deltaTime*this.sp[i];
			}else{
				this.y[i]-=deltaTime*this.sp[i];
			}
			ctx2.drawImage(this.img[i],this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
				/*ctx2.drawImage(this.img[i],this.x[i],this.y[i],this.l[i],this.l[i]);*/
			//ctx2.drawImage(this.orange,this.x[i]-this.orange.width*0.5,this.y[i]-this.orange.height*0.5);
		}
		if(this.y[i]<0){
			this.alive[i]=false;
		}
	}
	fuitMonitor();
	
}

function fuitMonitor () {
	var num=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]) {
			num++;
		}
	}
	if(num<10){
		bornFruit();
	}
}
function bornFruit () {
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			
			fruit.born(i);
			return;
		}
	}
}