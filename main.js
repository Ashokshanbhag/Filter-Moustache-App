noseX = 0;
noseY = 0;

function preload(){

    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")

}

function setup(){

    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);

    posenet.on('pose', gotPoses);

}

function draw(){
    
    image(video,0,0, 400, 400);
    image(moustache, noseX, noseY, 40, 40);

}

function takeSnapshot(){

    save('moustache of random person but most likely me.png');

}

function modelLoaded(){

    console.log("the model has been loaded and initialised and stufqhegwfigFEYGByfwevfkewg");

}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);

        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y;
        

    }

}