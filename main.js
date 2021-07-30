var noseX = 0;
var noseY = 0;
var difference = 0;
var right_Wrist_X = 0;
var left_Wrist_X = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(460,300)
    canvas = createCanvas(400,400);
    canvas.position(1060,350);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);
}
function draw(){
    background("#0011ff");
    square(noseX,noseY,difference);
    fill('#19ffaf');
    stroke("#fff419");
}

function modelLoaded(){
    console.log("Model is Initialized!");
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        right_Wrist_X = results[0].pose.rightWrist.x;
        left_Wrist_X = results[0].pose.leftWrist.y;
        difference = floor(left_Wrist_X - right_Wrist_X);
        console.log("Right Wrist X = " + right_Wrist_X);
        console.log("Left Wrist X = " + left_Wrist_X);
        console.log("Difference = " + difference);
        console.log("NoseX = " + noseX + "and NoseY = " + noseY);
    }
}


