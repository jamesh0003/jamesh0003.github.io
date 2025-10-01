$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    
    // TODO 1 - Enable the grid
    
    toggleGrid()

    // TODO 2 - Create Platforms
    createPlatform(300, 650, 100, 100);
    createPlatform(500, 600, 200, 100);
    createPlatform(700, 500, 100, 100);
    createPlatform(400, 400, 200, 100);
    createPlatform(900, 400, 100, 100);

    
    // TODO 3 - Create Collectables
    createCollectable("database", 1000, 200);
    createCollectable("database", 800, 400);
    createCollectable("database", 400, 100, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("right", 300, 700);
    createCannon("top", 500, 700);
    createCannon("left", 400, 700)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
