function preload() {
mario_gameover = loadSound ("gameover.wav");
mario_jump = loadSound ("jump.wav");//done
mario_coin = loadSound("coin.wav");//done
mario_kick = loadSound("kick.wav");//done
mario_die = loadSound("mariodie.wav") //done
world_start = loadSound("world_start.wav");//done

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log('Model Loaded!');
}
function gotPoses(results){
	if(results.length>0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
	}
}
function draw() {
	game();
}