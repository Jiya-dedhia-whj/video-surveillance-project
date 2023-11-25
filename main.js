status = "";
objects = [];

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
    image(video,0,0,380,280);
    if(status != "")
    {
        objectDetector.detect(video,gotResults);
        for(i = 0 ; i < objects.length ; i++)
        {
            document.getElementById("status").innerHTML = "Status : detecting objects";
            console.log(objects.length);
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%",objects[i].x + 15,objects[i].y + 15);
            noFill();
            stroke("red");
            rect(object[i].x,objects[i].y,objects[i].width,objects[i].height);
            if(object[i].label == input_text)
            {
                video.stop();
                objectDetector.detect(gotResults);
                document.getElementById("object_found").innerHTML = input_text + " Found";
                var synth = video.speechSynthesis;
                var utterThis = new SpeechSynthesisUtterance(input_text + "found");
                synth.speak(utterThis)
            }
            else
            {
                document.getElementById("object_found").innerHTML = input_text + " Not Found";
            }
        }
    }
}

function gotResults(results,error)
{
    if(results)
    {
        console.log(results)
    }
    console.log(error);
}
