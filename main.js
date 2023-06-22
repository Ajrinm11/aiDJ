song="";
rightWristx=0;
rightWristy=0;
leftWristx=0;
leftWristy=0;
function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,500);  
canvas.center();  
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("Model is ready! :)");
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
rightWristx=results[0].pose.rightWrist.x;
rightWristy=results[0].pose.rightWrist.y;

leftWristx=results[0].pose.leftWrist.x;
leftWristy=results[0].pose.leftWrist.y;

console.log("Right wrist - x is",rightWristx,"and y is",rightWristy);
console.log("Left wrist - x is",leftWristx,"and y is",leftWristy);
}
}
function draw(){
image(video, 0,0,600,500)
}

