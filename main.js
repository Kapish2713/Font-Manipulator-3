function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
canvas.position(560,150);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw(){
    background("#00FFFF");
    textSize(difference);
    fill("#00FFFF")
    text("Kapish",275,275)
}

function gotPoses(results) {
    if(results.length >0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWrist;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
    
}



function modelLoaded() {
    console.log("Model Loaded")
}
