noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/598rqcr9/kisspng-world-beard-and-moustache-championships-handlebar-hipster-beard-5b35abd7b22b48-8154218915302.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);


}
function modelLoaded() {
console.log('PostNet Is Initialized');
}

function draw() {
    image(video,0,0,300,300);
   //circle(noseX, noseY, 20);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(clown_nose, noseX, noseY, 50, 50);

}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

}

}
