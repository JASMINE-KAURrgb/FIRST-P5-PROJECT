function preload(){}

function setup() {
    canvas=createCanvas(640,480);
    canvas.position(400,500);
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,640,480);
    fill('blue');
    circle(50,50,100);
    circle(590,50,100);
    circle(590,438,100);
    circle(50,438,100);
    fill('yellow');
    rect(100, 20, 440, 50);
    rect(100, 420, 440, 50);
    rect(25, 100, 50, 290);
    rect(570, 100, 50, 290);
}
function download_img() {
    save('img.png');
}
