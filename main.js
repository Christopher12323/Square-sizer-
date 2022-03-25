noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
differance=0;


function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,500)
    canvas.position(700,150)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
    
    
}
function modelLoaded(){
    console.log("modelLoaded")
}
function draw(){
    background("white")
 fill("red")
 
    textSize(differance)
    text("chris", noseX,noseY )
    document.getElementById("squareSides").innerHTML="the width and height off square will be "+differance
} 
function gotPoses(results){
    if (results.length>0){
        console.log("results")
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("noseX=+"+noseX+"noseY=+"+noseY)
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        differance=floor(leftWristX-rightWristX)
    
    }
    
}