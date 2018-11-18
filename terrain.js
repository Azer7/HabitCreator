var w = 1200;
var h = 900;
var rows,cols;
var scl = 75; //MAKE SURE SCALE IS FACTOR OF W & H!!!
var terrain = [];
var geocolours =[];

function setup() {
 createCanvas(600,600,WEBGL); 
 rows = h/scl;
 cols = w/scl;
 
 var xoff = 0;
 var yoff = 0;
	
 
 for (var y = 0; y < rows; y++){
   terrain.push([]);
		 for (var x = 0; x < cols; x++){
     terrain[y].push(map(noise(xoff,yoff),0,1,-50,50));
     xoff += 0.3;
   }
	 
   yoff += 0.3;
 }
 
 
 for (var j = 0; j < rows; j++){
	 geocolours.push([]);
   for (var i = 0; i < cols; i++){
     geocolours[j].push(random(150,255));
   }
 }
}

 function draw() {
 background(178, 232, 255);
 noStroke();

 translate(width/2,height/2);
 rotateX(PI/3);
 translate(-w/2,-h/2,-150);


 for (var y = 0; y < rows-1; y++){
  for (var x = 0; x< cols-1; x++){
    beginShape(TRIANGLES);
    fill(0,geocolours[y][x],0);
    vertex(x*scl, y*scl, terrain[y][x]);
    vertex(x*scl, (y+1)*scl, terrain[y+1][x]);
    vertex((x+1)*scl, (y+1)*scl, terrain[y+1][x+1]);
    endShape();
    fill(0,geocolours[y+1][x+1],0);
    beginShape(TRIANGLES);
    vertex(x*scl, y*scl, terrain[y][x]);
    vertex((x+1)*scl, (y+1)*scl, terrain[y+1][x+1]);
    vertex((x+1)*scl, (y)*scl, terrain[y][x+1]);
    endShape();
  }
}
}