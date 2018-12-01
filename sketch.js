const caro = 30;
let score, num, num1;
let wid, hei;
let allshapes = []
let allrect = [];
let current, ran;
let speed = 20
let ispause = -1,
  pausebut;
let restart;
let img;
let database;
let datainp, databut
let wait = [0, 0, 0, 0, 0, 0];

function preload() {
  img = loadImage("img1.jpg")
}

function setup() {
  createCanvas(caro * 12, caro * 18);


  var config = {
    apiKey: "AIzaSyCiaFcRewW_C5qa1zocObocDIDwkXLmMtc",
    authDomain: "fist-pro.firebaseapp.com",
    databaseURL: "https://fist-pro.firebaseio.com",
    projectId: "fist-pro",
    storageBucket: "fist-pro.appspot.com",
    messagingSenderId: "155920480570"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  num1 = 0;
  pausebut = select("#PAUSE");
  restart = select("#RESTART")
  datainp = select("#database")
  databut = select("#data_but");
  // select("canvas").style("z-index", "-1");
  restart.mousePressed(() => {
    allshapes = []
    allrect = [];
    addsh();
    num1 = 0;
  })
  pausebut.mousePressed(() => {
    ispause *= -1;
    if (ispause == 1) {
      frameRate(0);
    } else {
      frameRate(60);
    }
  })
  databut.mousePressed(() => {
    let reff = database.ref('scores');
    reff.push({
      name: datainp.value(),
      score: num1
    })
  })
  score = select("#score");
  num = select("#num");
  num.html(0);
  wid = width / caro;
  hei = height / caro;
  addsh();
  //	allrect.push( current );
  //rectMode( CENTER );
  select("canvas")
    .position((windowWidth - width) / 2, (windowHeight - height) / 2);

  img.resize(windowWidth, windowHeight);

}

function showlist() {
  let reff = database.ref('scores');
  reff.on('value', (d) => {
    let dataa = d.val();
    let tab = Object.keys(dataa);
    for (var i = 0; i < tab.length; i++) {
      console.log(dataa[tab[i]].name + "    " + dataa[tab[i]].score);
    }
  }, (e) => {
    console.log(e)
  });
}

function draw() {
  background("#342d81");
  num.html(num1);
  if (current.end == true) {
    num1 += current.tab.length
    gameover();
    allrect.push(current);
    current.pushi();
    addsh()
    removeall();
    //swipee( 8 );
  }
  grid();
  current.show();
  for (var i = 0; i < allshapes.length; i++) {
    // allrect[ i ].show();
    // //	allrect[ i ].update();
    push();
    fill(allshapes[i].colo[0], allshapes[i].colo[1], allshapes[i].colo[2])
    rect(allshapes[i].pos.x, allshapes[i].pos.y, caro, caro);
    pop();
  }
  update();
  clearout();
  may();
}

function addsh() {
  for (var i = 0; i < wait.length; i++) {
    wait[i]++;
  }
  let hh = []
  for (var i = 0; i < wait.length; i++) {
    if (wait[i] >= 5) {
      hh.push(i);
    }
  }
  if (hh.length == 0) {
    let ran = floor(random(5));
    wait[ran] = 0;
    switch (ran) {
      case 0:
        current = new recti() //
        break;
      case 1:
        current = new lino() //
        break;
      case 2:
        current = new reverss() //
        break;
      case 3:
        current = new tria() //
        break;
      case 4:
        current = new ell(); //
        break;
      case 5:
        current = new revers_ell();
        break;
    }
  } else {
    hh.sort()
    let rand;
    if (random(1) > 0.5) {
      rand = hh.pop()
    } else {
      rand = hh.shift()
    }
    wait[rand] = 0;
    switch (rand) {
      case 0:
        current = new recti() //
        break;
      case 1:
        current = new lino() //
        break;
      case 2:
        current = new reverss() //
        break;
      case 3:
        current = new tria() //
        break;
      case 4:
        current = new ell(); //
        break;
      case 5:
        current = new revers_ell();
        break;
    }
  }

}

function can_flip(label) {
  let g = false;
  switch (label) {
    case "recti":
      console.log("all possible");
      break;
    case "tria":
      if (current.tab[0].pos.x == (wid - 1) * caro || current.tab[2].pos.x == 0) {
        g = false;
      } else {
        g = true;
      }
      return g
      break;

  }

}

function gameover() {
  let g = false;
  for (var i = 0; i < current.tab.length; i++) {
    if (current.end && current.tab[i].pos.y < 0 && current.tab[i].pos.y < 0 && current.tab[i].pos.y < 0 && current.tab[i].pos.y < 0) {
      g++;
    }
  }
  if (g == 4) {
    allshapes = []
    allrect = [];
    addsh();
    num1 = 0;
  }
}
