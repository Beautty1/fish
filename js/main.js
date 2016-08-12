var can1;
var can2;

var ctx1;
var ctx2;

var bgPic=new Image();
var canHeight;
var canWidth;


var lastTime;
var deltaTime;

var ane;
var fruit;
var mom;
var baby;
var data;
var dust;

var mx;
var my;
document.body.onload=game;

function game () {
	init();

	lastTime=Date.now();
    deltaTime=0;

	gameloop();
}

function init () {
	can1=document.getElementById("canvas1");
	can2=document.getElementById("canvas2");
	ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    
    can1.addEventListener("mousemove",onMouseMove,false);
    
    
    
    bgPic.src="img/background.jpg";
    canWidth=can1.width;
    canHeight=can1.height;
    
	ane=new Anes();
	ane.init();
    fruit=new Fruits();
    fruit.init();
    mom=new Mom();
    mom.init();
    baby=new Baby();
    baby.init();
    data=new Data();
	dust=new Dust();
	dust.init();
    mx=0;
    my=0;
    
    
    
}
function gameloop () {
	window.requestAnimationFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	drawBackground();
	eatFruit();
	ane.draw();
	fruit.draw();
	//切换画布
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	feedBaby();
	data.draw();
	dust.draw();
	
	if(baby.dead){
		gameover();
	}
	
	
	

}
function onMouseMove (e) {
	if(e.offsetX || e.layerX){
		mx=e.offsetX=="undefined"?e.layerX:e.offsetX;
		my=e.offsetY=="undefined"?e.layerY:e.offsetY;

	}
}

function gameover () {
	ctx2.save();
	ctx2.font="80px Verdana";
	ctx2.fillText("game over",canWidth*0.5,canHeight*0.5);
	ctx2.restore();
}