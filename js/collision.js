function eatFruit () {
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if(l<400){
				fruit.dead(i);
				calfruitNum(fruit.img[i]);
			}
		}
	}
}
function calfruitNum (type) {
	
	if(type==fruit.blue){
		data.double*=2;
	}else{
		data.fruisNum++;
	}
}
function feedBaby () {
	var l=calLength2(baby.x,baby.y,mom.x,mom.y);
	if(l<400){
		//小鱼长身体
		baby.blood=(data.fruisNum+baby.blood)>baby.top?baby.top:(data.fruisNum+baby.blood);
		
		data.updateScore();
		data.reset();
	}
}