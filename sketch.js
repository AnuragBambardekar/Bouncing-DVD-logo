//x and y position of DVD location
let x;
let y;

let xspeed;//rate of change along x axis
let yspeed;//rate of change along y axis

let dvd;
let r,g,b;

function preload(){
    dvd = loadImage("dvdlogo.png");
}

function pickColor(){
    r=random(100,256);
    g=random(100,256);
    b=random(100,256);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    x=random(width);
    y=random(height);  
    xspeed=5;
    yspeed=5;  
    //print(dvd)
    pickColor();
}

function draw(){
    background(0);
    //rect(x,y,80,60);
    //Draw DVD logo
    tint(r,g,b);
    image(dvd, x, y);

    x=x + xspeed;
    y=y + yspeed;

    if(x+dvd.width >= width){
        xspeed = -xspeed;
        x=width - dvd.width;
        pickColor();
    }else if(x<=0){
        xspeed = -xspeed;
        x=0;
        pickColor();
    }

    if(y+dvd.height>=height){
        yspeed=-yspeed;
        y=height-dvd.height;
        pickColor();
    }else if(y<=0){
        yspeed=-yspeed;
        y=0;
        pickColor();
    }
}