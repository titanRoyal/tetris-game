function shape(x, y, r, g, b) {
  this.colo = [r, g, b];
  this.pos = createVector(x, y)
}

function recti() {
  this.h = floor(random(wid - 1))
  this.count = -2
  this.end = false;
  this.tab = [];
  this.colo = [random(100, 255), random(100, 255), random(100, 255)];
  this.tab[0] = new shape(this.h * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2])
  this.tab[1] = new shape((this.h + 1) * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[2] = new shape(this.h * caro, this.count * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[3] = new shape((this.h + 1) * caro, this.count * caro, this.colo[0], this.colo[1], this.colo[2]);
}

function ell() {
  this.colo = [random(100, 255), random(100, 255), random(100, 255)]
  this.h = floor(random(1, wid - 1))
  this.count = -2
  this.end = false;
  this.flipp = 0;
  this.tab = [];
  this.flipp = 0;
  this.tab[0] = new shape(this.h * caro, (this.count) * caro, this.colo[0], this.colo[1], this.colo[2])
  this.tab[1] = new shape((this.h) * caro, (this.count - 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[2] = new shape((this.h + 1) * caro, (this.count - 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[3] = new shape(this.h * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
}

function revers_ell() {
  this.colo = [random(100, 255), random(100, 255), random(100, 255)]
  this.h = floor(random(1, wid - 1))
  this.count = -2
  this.end = false;
  this.flipp = 0;
  this.tab = [];
  this.flipp = 0;
  this.tab[0] = new shape(this.h * caro, (this.count) * caro, this.colo[0], this.colo[1], this.colo[2])
  this.tab[1] = new shape((this.h) * caro, (this.count - 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[2] = new shape((this.h - 1) * caro, (this.count - 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[3] = new shape(this.h * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
}

function tria() {
  this.colo = [random(100, 255), random(100, 255), random(100, 255)]
  this.h = floor(random(1, wid - 1))
  this.count = -2
  this.end = false;
  this.flipp = 0;
  this.tab = [];
  this.flipp = 0;
  this.tab[0] = new shape(this.h * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2])
  this.tab[1] = new shape((this.h + 1) * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[2] = new shape(this.h * caro, (this.count) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[3] = new shape((this.h - 1) * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.pushi = function() {
    for (var i = 0; i < this.tab.length; i++) {
      allshapes.push(this.tab[i]);
    }
  }
}

function reverss() {
  this.colo = [random(100, 255), random(100, 255), random(100, 255)]
  this.h = floor(random(1, wid - 1))
  this.count = -2
  this.end = false;
  this.flipp = 0
  this.tab = [];
  this.tab[0] = new shape(this.h * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2])
  this.tab[1] = new shape((this.h + 1) * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[2] = new shape(this.h * caro, (this.count) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[3] = new shape((this.h - 1) * caro, (this.count) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.pushi = function() {
    for (var i = 0; i < this.tab.length; i++) {
      allshapes.push(this.tab[i]);
    }
  }
}

function lino() {
  this.colo = [random(100, 255), random(100, 255), random(100, 255)]
  this.h = floor(random(1, wid - 1))
  this.count = -2
  this.flipp = 0;
  this.end = false;
  this.tab = [];
  this.tab[0] = new shape(this.h * caro, (this.count + 1) * caro, this.colo[0], this.colo[1], this.colo[2])
  this.tab[1] = new shape(this.h * caro, (this.count) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[2] = new shape(this.h * caro, (this.count - 1) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.tab[3] = new shape(this.h * caro, (this.count - 2) * caro, this.colo[0], this.colo[1], this.colo[2]);
  this.pushi = function() {
    for (var i = 0; i < this.tab.length; i++) {
      allshapes.push(this.tab[i]);
    }
  }
}

function grid() {
  for (var j = 0; j < wid; j++) {
    line(j * caro, 0, j * caro, height)
  }
  for (j = 0; j < hei; j++) {
    line(0, j * caro, width, j * caro)
  }
}


function clearout() {
  for (var i = 0; i < allrect.length; i++) {
    if (allrect[i].tab.length == 0) {
      allrect.splice(i, 1);
    }
  }
  for (var i = 0; i < allrect.length; i++) {
    if (allrect[i].tab.length == 0) {
      allrect.splice(i, 1)
    }
  }
}

function update() {
  if (frameCount % speed == 0 && checkl("d") == true && current.end == false) {
    current.count++;
    for (var i = 0; i < current.tab.length; i++) {
      current.tab[i].pos.y += caro;
    }

  } else if (checkl("d") == false) {
    current.end = true;
  }
  for (var i = 0; i < current.tab.length; i++) {
    if (current.tab[i].pos.y / caro >= hei - 1) {
      current.end = true;
    }
  }
  // if ( current.count >= hei - 2 ) {
  // 	current.end = true;
  // }
  current.h = constrain(current.h, 0, wid);
}

function checkl(t) {
  let gr = true;
  let gl = true;
  switch (t) {
    case "r":
      for (var j = 0; j < current.tab.length; j++) {
        for (var k = 0; k < allshapes.length; k++) {
          if (current.tab[j].pos.x + caro == allshapes[k].pos.x && current.tab[j].pos.y == allshapes[k].pos.y) {
            gr = false;
          }
        }
      }
      return gr;
      break;
    case "l":
      for (var j = 0; j < current.tab.length; j++) {
        for (var k = 0; k < allshapes.length; k++) {
          if (current.tab[j].pos.x - caro == allshapes[k].pos.x && current.tab[j].pos.y == allshapes[k].pos.y) {
            gl = false;
          }
        }
      }
      return gl
      break;
    case "d":
      let g = true;
      for (var j = 0; j < current.tab.length; j++) {
        for (var k = 0; k < allshapes.length; k++) {
          if (current.tab[j].pos.x == allshapes[k].pos.x && current.tab[j].pos.y + caro == allshapes[k].pos.y) {
            g = false;
          }
        }
      }
      return g;
      break;
  }

}

function may() {
  if (keyIsDown(DOWN_ARROW)) {
    speed = 5;
  } else {
    speed = 20;
  }
}

function keyPressed() {
  if (keyIsDown(RIGHT_ARROW) && checkl("r") == true && current.end == false) {
    let h = true;
    current.h++;
    for (var i = 0; i < current.tab.length; i++) {
      if (current.tab[i].pos.x + caro > width - caro) {
        h = false;
      }
    }
    if (h == true) {
      for (var i = 0; i < current.tab.length; i++) {
        current.tab[i].pos.x += caro;
      }
    }
  }
  if (keyIsDown(LEFT_ARROW) && checkl("l") == true && current.end == false) {
    let hh = true;
    current.h--;
    for (var i = 0; i < current.tab.length; i++) {
      if (current.tab[i].pos.x - caro < 0) {
        hh = false;
      }
    }
    if (hh == true) {
      for (var i = 0; i < current.tab.length; i++) {
        current.tab[i].pos.x -= caro;
      }
    }
  }
  if (keyIsDown(UP_ARROW) && checkl("d") == true && checkl("l") == true && checkl("r") == true) {
    current.flip();
  }
}
