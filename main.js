function preload()  {
img=loadImage("frame.png")
}
function setup()  {
canvas= createCanvas(400,400)
canvas.center();
video=createCapture(VIDEO);
video.hide();


}

function draw() {
image(img,0,0,400,400)
image(video,100,100,200,200)
}

function takesnapshot() {
   save("PRAVEEN");
}
