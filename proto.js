recti.prototype.show = function() {
  for (var i = 0; i < this.tab.length; i++) {
    push()
    fill(this.colo[0], this.colo[1], this.colo[2])
    rect(this.tab[i].pos.x, this.tab[i].pos.y, caro, caro);
    pop();
  }
}
recti.prototype.pushi = function() {
  for (var i = 0; i < this.tab.length; i++) {
    allshapes.push(this.tab[i]);
  }
}
//show function shared to all shapes
tria.prototype.show = recti.prototype.show;
reverss.prototype.show = recti.prototype.show;
lino.prototype.show = recti.prototype.show;
ell.prototype.show = recti.prototype.show;
revers_ell.prototype.show = recti.prototype.show;

//pushi function shared to all shapes
tria.prototype.pushi = recti.prototype.pushi;
reverss.prototype.pushi = recti.prototype.pushi;
lino.prototype.pushi = recti.prototype.pushi;
ell.prototype.pushi = recti.prototype.pushi;
revers_ell.prototype.pushi = recti.prototype.pushi;

reverss.prototype.flip = function() {
  if (this.flipp == 3) {
    this.flipp = 0;
  } else {
    this.flipp++
  }; // } else if ((this.flipp == 0 && this.h == wid - 2) || (this.flipp == 2 && this.h == 0)) {
  //   console.log("false");
  // } else {
  //   this.flipp++;
  // }
  switch (this.flipp) {
    case 0:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x <= width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x <= width - caro && this.tab[3].pos.x > 0)) {
        this.tab[2].pos.x = this.h * caro;
        this.tab[2].pos.y = (this.count) * caro;
        this.tab[0].pos.x = this.h * caro;
        this.tab[0].pos.y = (this.count + 1) * caro;
        this.tab[1].pos.x = (this.h + 1) * caro;
        this.tab[1].pos.y = (this.count + 1) * caro;
        this.tab[3].pos.x = (this.h - 1) * caro;
        this.tab[3].pos.y = (this.count) * caro;
      } else {
        this.flipp--;
      }

      break;
    case 1:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {
        this.tab[2].pos.x = (this.h + 2) * caro;
        this.tab[2].pos.y = (this.count) * caro;
        this.tab[0].pos.x = this.h * caro;
        this.tab[0].pos.y = (this.count + 1) * caro;
        this.tab[1].pos.x = (this.h + 1) * caro;
        this.tab[1].pos.y = (this.count + 1) * caro;
        this.tab[3].pos.x = (this.h + 1) * caro;
        this.tab[3].pos.y = (this.count) * caro;
      } else {
        this.flipp--;
      }
      break;
    case 2:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x <= width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x <= width - caro && this.tab[3].pos.x > 0)) {
        this.tab[2].pos.x = (this.h + 1) * caro;
        this.tab[2].pos.y = (this.count) * caro;
        this.tab[0].pos.x = this.h * caro;
        this.tab[0].pos.y = (this.count + 1) * caro;
        this.tab[1].pos.x = (this.h + 1) * caro;
        this.tab[1].pos.y = (this.count + 1) * caro;
        this.tab[3].pos.x = (this.h) * caro;
        this.tab[3].pos.y = (this.count + 2) * caro;
      } else {
        this.flipp--;
      }
      break;
    case 3:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x <= width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x <= width - caro && this.tab[3].pos.x > 0)) {
        this.tab[2].pos.x = this.h * caro;
        this.tab[2].pos.y = (this.count + 2) * caro;
        this.tab[0].pos.x = (this.h - 1) * caro;
        this.tab[0].pos.y = (this.count + 1) * caro;
        this.tab[1].pos.x = (this.h) * caro;
        this.tab[1].pos.y = (this.count + 1) * caro;
        this.tab[3].pos.x = (this.h - 1) * caro;
        this.tab[3].pos.y = (this.count) * caro
      } else {
        this.flipp--;
      }
      break;
  }
}
recti.prototype.flip = function() {
  console.log("it is The same");
};
tria.prototype.flip = function() {
  if (this.flipp == 3) {
    this.flipp = 0;
  } else {
    this.flipp++;
  }
  switch (this.flipp) {
    case 0:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = this.h * caro;
        this.tab[2].pos.y = (this.count) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count + 1) * caro;
        this.tab[1].pos.x = (this.h + 1) * caro;
        this.tab[1].pos.y = (this.count + 1) * caro;
        this.tab[3].pos.x = (this.h - 1) * caro;
        this.tab[3].pos.y = (this.count + 1) * caro
      } else {
        this.flipp--;
      }
      break;
    case 1:
      if ((this.tab[0].pos.x < width && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width && this.tab[3].pos.x > 0)) {
        this.tab[2].pos.x = this.h * caro;
        this.tab[2].pos.y = (this.count) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count + 1) * caro;
        this.tab[1].pos.x = (this.h) * caro;
        this.tab[1].pos.y = (this.count + 2) * caro;
        this.tab[3].pos.x = (this.h - 1) * caro;
        this.tab[3].pos.y = (this.count + 1) * caro
      } else {
        this.flipp--;
      }
      break;
    case 2:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = this.h * caro;
        this.tab[2].pos.y = (this.count) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count + 1) * caro;
        this.tab[1].pos.x = (this.h + 1) * caro;
        this.tab[1].pos.y = (this.count + 1) * caro;
        this.tab[3].pos.x = (this.h) * caro;
        this.tab[3].pos.y = (this.count + 2) * caro
      } else {
        this.flipp--;
      }
      break;
    case 3:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = this.h * caro;
        this.tab[2].pos.y = (this.count + 2) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count + 1) * caro;
        this.tab[1].pos.x = (this.h + 1) * caro;
        this.tab[1].pos.y = (this.count + 1) * caro;
        this.tab[3].pos.x = (this.h - 1) * caro;
        this.tab[3].pos.y = (this.count + 1) * caro
      } else {
        this.flipp--;
      }
      break;

  }
};
lino.prototype.flip = function() {
  if (this.flipp == 1) {
    this.flipp = 0;
  } else {
    this.flipp++;
  }
  switch (this.flipp) {
    case 0:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = this.h * caro;
        this.tab[2].pos.y = (this.count - 1) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count + 1) * caro;
        this.tab[1].pos.x = (this.h) * caro;
        this.tab[1].pos.y = (this.count) * caro;
        this.tab[3].pos.x = (this.h) * caro;
        this.tab[3].pos.y = (this.count - 2) * caro
      } else {
        this.flipp--;
      }
      break;
    case 1:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = this.h * caro;
        this.tab[2].pos.y = (this.count) * caro;
        this.tab[0].pos.x = (this.h + 1) * caro;
        this.tab[0].pos.y = (this.count) * caro;
        this.tab[1].pos.x = (this.h + 2) * caro;
        this.tab[1].pos.y = (this.count) * caro;
        this.tab[3].pos.x = (this.h + 3) * caro;
        this.tab[3].pos.y = (this.count) * caro
      } else {
        this.flipp--;
      }
      break;
  }
};
ell.prototype.flip = function() {
  if (this.flipp == 3) {
    this.flipp = 0;
  } else {
    this.flipp++;
  }
  switch (this.flipp) {
    case 0:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = (this.h + 1) * caro;
        this.tab[2].pos.y = (this.count - 1) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count) * caro;
        this.tab[1].pos.x = (this.h) * caro;
        this.tab[1].pos.y = (this.count - 1) * caro;
        this.tab[3].pos.x = (this.h) * caro;
        this.tab[3].pos.y = (this.count + 1) * caro
      } else {
        this.flipp--;
      }
      break;
    case 1:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = (this.h + 1) * caro;
        this.tab[2].pos.y = (this.count + 1) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count) * caro;
        this.tab[1].pos.x = (this.h + 1) * caro;
        this.tab[1].pos.y = (this.count) * caro;
        this.tab[3].pos.x = (this.h - 1) * caro;
        this.tab[3].pos.y = (this.count) * caro
      } else {
        this.flipp--;
      }
      break;
    case 2:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = (this.h - 1) * caro;
        this.tab[2].pos.y = (this.count + 1) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count) * caro;
        this.tab[1].pos.x = (this.h) * caro;
        this.tab[1].pos.y = (this.count + 1) * caro;
        this.tab[3].pos.x = (this.h) * caro;
        this.tab[3].pos.y = (this.count - 1) * caro
      } else {
        this.flipp--;
      }
      break;
    case 3:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = (this.h - 1) * caro;
        this.tab[2].pos.y = (this.count - 1) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count) * caro;
        this.tab[1].pos.x = (this.h - 1) * caro;
        this.tab[1].pos.y = (this.count) * caro;
        this.tab[3].pos.x = (this.h + 1) * caro;
        this.tab[3].pos.y = (this.count) * caro
      } else {
        this.flipp--;
      }
      break;

  }
};
revers_ell.prototype.flip = function() {
  if (this.flipp == 3) {
    this.flipp = 0;
  } else {
    this.flipp++;
  }
  switch (this.flipp) {
    case 0:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = (this.h - 1) * caro;
        this.tab[2].pos.y = (this.count - 1) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count) * caro;
        this.tab[1].pos.x = (this.h) * caro;
        this.tab[1].pos.y = (this.count - 1) * caro;
        this.tab[3].pos.x = (this.h) * caro;
        this.tab[3].pos.y = (this.count + 1) * caro
      } else {
        this.flipp--;
      }
      break;
    case 1:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = (this.h + 1) * caro;
        this.tab[2].pos.y = (this.count - 1) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count) * caro;
        this.tab[1].pos.x = (this.h + 1) * caro;
        this.tab[1].pos.y = (this.count) * caro;
        this.tab[3].pos.x = (this.h - 1) * caro;
        this.tab[3].pos.y = (this.count) * caro
      } else {
        this.flipp--;
      }
      break;
    case 2:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = (this.h + 1) * caro;
        this.tab[2].pos.y = (this.count + 1) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count) * caro;
        this.tab[1].pos.x = (this.h) * caro;
        this.tab[1].pos.y = (this.count + 1) * caro;
        this.tab[3].pos.x = (this.h) * caro;
        this.tab[3].pos.y = (this.count - 1) * caro
      } else {
        this.flipp--;
      }
      break;
    case 3:
      if ((this.tab[0].pos.x < width - caro && this.tab[0].pos.x > 0) && (this.tab[1].pos.x < width - caro && this.tab[1].pos.x > 0) && (this.tab[2].pos.x < width - caro && this.tab[2].pos.x > 0) && (this.tab[3].pos.x < width - caro && this.tab[3].pos.x > 0)) {

        this.tab[2].pos.x = (this.h - 1) * caro;
        this.tab[2].pos.y = (this.count + 1) * caro;
        this.tab[0].pos.x = (this.h) * caro;
        this.tab[0].pos.y = (this.count) * caro;
        this.tab[1].pos.x = (this.h - 1) * caro;
        this.tab[1].pos.y = (this.count) * caro;
        this.tab[3].pos.x = (this.h + 1) * caro;
        this.tab[3].pos.y = (this.count) * caro
      } else {
        this.flipp--;
      }
      break;

  }
};

function removeall() {
  for (var i = 0; i < hei; i++) {
    let r = {
      stat: false,
      pos: -1
    };
    for (var j = 0; j < wid; j++) {
      r.stat = false;
      for (var k = 0; k < allshapes.length; k++) {
        if (allshapes[k].pos.y / caro == i && allshapes[k].pos.x / caro == j) {
          r.stat = true;
        }
      }
      if (r.stat == false) {
        break;
      }
    }
    if (r.stat == true) {
      swipee(i)
      num1 += wid;
      //			removeallrect()
    }
  }
}

function swipee(gg) {
  for (var i = allshapes.length - 1; i >= 0; i--) {
    if (allshapes[i].pos.y == gg * caro) {
      allshapes.splice(i, 1);
    } else if (allshapes[i].pos.y < gg * caro) {
      allshapes[i].pos.y += caro;
    }

  }
  for (var i = 0; i < allrect.length; i++) {
    for (var j = allrect[i].tab.length - 1; j >= 0; j--) {
      if (allrect[i].tab[j].pos.y == gg * caro) {
        allrect[i].tab.splice(j, 1)
      }
    }
  }
}
