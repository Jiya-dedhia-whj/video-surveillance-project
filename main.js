status = "";

function setup()
{
    canvas = createCanvas(380,280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,280);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
    input_text = document.getElementById("input_id").value;
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status = true;
}

function draw()
{
    image(video,0,0,380,280)
}