//for terrain
var w = 3000;
var h = 900;
var rows,cols;
var scl = 75; //MAKE SURE SCALE IS FACTOR OF W & H!!!
var terrain = [];
var geocolours =[];

//for clouds
var cloudY = [];
var cloudX = []; 
var cloudZ = [];
var it = 0;

//for trees
function preload() {
  tree = loadModel('assets/Tree1.obj', true);
  img = loadImage('assets/green.jpg');
}

function setup() {
 var canvas = createCanvas(1200,700,WEBGL); 
 canvas.parent("animation-div");
 //for terrain
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

 //for clouds
 for(var i = 0; i < 4; i++){
  cloudY.push(random(0,100));
  cloudZ.push(random(-200,0));
  cloudX.push(0);
}
}

function clouds(){
	stroke(240);
	fill(255);
	push();
	translate(-3000,0);
	for(var t = 0; t <= it; t ++){
		translate(cloudX[it],cloudY[it],cloudZ[it]);
		cloudX[it] ++;
		ellipsoid(30,30,30,4,3);
		push();
		translate(20,20,15);
		ellipsoid(30,30,30,4,4);
		translate(15,-25,-10);
		ellipsoid(30,30,30,4,4);
		translate(3,0,20);
		ellipsoid(30,30,30,4,4);
		translate(18,18,13);
		ellipsoid(30,30,30,4,4);
		translate(21,-16,-9);
		ellipsoid(30,30,30,4,4);
		translate(14,29,11);
		ellipsoid(30,30,30,4,4);
		pop();
	}
	var newcloud = int(random(200));
		if (newcloud == 5){
		it++;
		}
	if(it > 4){
		it = 0;
	}
}

function bush(x,y,z){
  push();
  translate(x,y,z)
  fill(0,100,0);
  noStroke();
  ellipsoid(60,50,60,4,4)
  pop();
}

function trees(x,y,z){
  push();
  rotateX(3.14159)
  translate(x,-y,-z);
  scale(1.8);
  normalMaterial(); 
  texture(img);
  model(tree);
  pop();
}

function flower(x,y,z){
  ambientMaterial(0,255,0);
  push();
  noStroke();
  translate(x,y,z);
  cylinder(4,60,2,2);
  push();
  ambientMaterial(255,105,180);
  translate(0,-35);
  ellipsoid(20,20,20,3,3);
  pop();
  pop();
}

function draw() {
  background(178, 232, 255);
  noStroke();
  directionalLight(255,255,255,1,100,-100);

  push();
  translate(width/2,height/2);
  rotateX(PI/2);
  translate(-w/2-250,-h/2-150,-100);


  for (var y = 0; y < rows-1; y++){
    for (var x = 0; x< cols-1; x++){
      beginShape(TRIANGLES);
      fill(0,geocolours[y][x],0);
      vertex(x*scl , y*scl, terrain[y][x]);
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
  pop();
  //these have y value baselines
  /*if (add == 1) {
    flower(-800,420,-550);
  }
  if (add == 2) {
    trees(-200,290,-450);
  }
   if (add == 3) {
     clouds();
   }*/

   flower(-800,420,-550);
   trees(-200,290,-450);
   bush(-600,420,-550);
   clouds(); //must be last ... idk why

}