function preload() { 
}

function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(110, 300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0,0,640,480);
    tint(tint_color);
}

function snapshot() {
    save("Teacher.png");
}
function putcolor() {
    tint_color= document.getElementById("whitehat").value;
}