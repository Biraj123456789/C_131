img="";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}

function preload()
{
   img = loadImage('dog_cat.jpg');
   fill("#FF0000");
   text("Dog",45,75);
   noFill();
   stroke("#FF0000");
   rect(30,60,450,420);
   
}




