function preload() {
    tree = loadModel('assets/simpleTree.obj', true);
    img = loadImage('assets/Grass.jpg');
  }
  
  function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
  }
  
  function draw() {
    background(200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial(); 
    //texture(img);
    model(tree);
  }