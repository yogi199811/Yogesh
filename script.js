gsap.to(".verticle #one",{
  scrollTrigger : {
    trigger : ".verticle #one",
    start :  "top 60%",
    // pin : true
  },
  x : 100,

  ease: Expo.easeInOut,
  duration : 0.6

})

gsap.to(".verticle #two",{
  scrollTrigger : {
    trigger : ".verticle #two",
    start :  "top 60%",
    // pin : true
  },
  x : -380,
  ease: Expo.easeInOut,
  duration : 0.6


})


gsap.to(".verticle #three",{
  scrollTrigger : {
    trigger : ".verticle #three",
    start :  "top 60%",
    // pin : true
  },
  x : -540,
  ease: Expo.easeInOut,
  duration : 0.6

})


gsap.to(".verticle #one2",{
  scrollTrigger : {
    trigger : ".verticle #one",
    start :  "top 50%",
    // pin : true
  },
  x : 380,

  ease: Expo.easeInOut,
  duration : 0.6

})

gsap.to(".verticle #two2",{
  scrollTrigger : {
    trigger : ".verticle #two",
    start :  "top 50%",
    // pin : true
  },
  x : -200,
  ease: Expo.easeInOut,
  duration : 0.6


})


gsap.to(".verticle #three2",{
  scrollTrigger : {
    trigger : ".verticle #three",
    start :  "top 50%",
    // pin : true
  },
  x : -300,
  ease: Expo.easeInOut,
  duration : 0.6

})



gsap.to(".verticle #one3",{
  scrollTrigger : {
    trigger : ".verticle #one",
    start :  "top 35%",
    // pin : true
  },
  x : 80,

  ease: Expo.easeInOut,
  duration : 0.6

})

gsap.to(".verticle #two3",{
  scrollTrigger : {
    trigger : ".verticle #two",
    start :  "top 35%",
    // pin : true
  },
  x : -200,
  ease: Expo.easeInOut,
  duration : 0.6


})

gsap.to(".verticle #last",{
  scrollTrigger : {
    trigger : ".verticle #last",
    start :  "top 35%",
    // pin : true
  },
  x : -300,
  ease: Expo.easeInOut,
  duration : 0.6


})

let word = ["Happy","Birthday","My","Lord","Dudu","Loves","You","3000","❤️"];

let text = document.querySelector("#text");
let animation = gsap.timeline({
  repeat : -1,
  repeatDelay:0.6
})

function run(){
  word.forEach(function(dets){
    let layer = document.createElement("div");
    layer.innerHTML = dets
    text.appendChild(layer);


  })
}

function animate(){
  let allDiv = document.querySelectorAll("#text div");
  allDiv.forEach(function(elem){
    animation.fromTo(elem,{
      opacity: 0,
      scale: 0
    },{
      y:0,
      scale:1,
      opacity:1,
      repeat:1,
      yoyo : true,
      yoyoEase:true,
      repeatDelay:0.3
    })
  })

  gsap.set("#text",{
    visibility : "visible"

  })
}

run();
animate();











const $menu = document.querySelector('.menu');
const $items = document.querySelectorAll('.menu--item');
let menuHeight = $menu.clientHeight;
let itemHeight = $items[0].clientHeight;
let wrapHeight = $items.length * itemHeight;

let scrollSpeed = 0;
let oldScrollY = 0;
let scrollY = 0;
let y = 0;


/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
  return v0 * (1 - t) + v1 * t;
};


/*--------------------
Dispose
--------------------*/
const dispose = scroll => {
  gsap.set($items, {
    y: i => {
      return i * itemHeight + scroll;
    },
    modifiers: {
      y: y => {
        const s = gsap.utils.wrap(-itemHeight, wrapHeight - itemHeight, parseInt(y));
        return `${s}px`;
      } } });


};
dispose(0);


/*--------------------
Wheel
--------------------*/
const handleMouseWheel = e => {
  scrollY -= e.deltaY;
};


/*--------------------
Touch
--------------------*/
let touchStart = 0;
let touchY = 0;
let isDragging = false;
const handleTouchStart = e => {
  touchStart = e.clientY || e.touches[0].clientY;
  isDragging = true;
  $menu.classList.add('is-dragging');
};
const handleTouchMove = e => {
  if (!isDragging) return;
  touchY = e.clientY || e.touches[0].clientY;
  scrollY += (touchY - touchStart) * 2.5;
  touchStart = touchY;
};
const handleTouchEnd = () => {
  isDragging = false;
  $menu.classList.remove('is-dragging');
};


/*--------------------
Listeners
--------------------*/
$menu.addEventListener('mousewheel', handleMouseWheel);

$menu.addEventListener('touchstart', handleTouchStart);
$menu.addEventListener('touchmove', handleTouchMove);
$menu.addEventListener('touchend', handleTouchEnd);

$menu.addEventListener('mousedown', handleTouchStart);
$menu.addEventListener('mousemove', handleTouchMove);
$menu.addEventListener('mouseleave', handleTouchEnd);
$menu.addEventListener('mouseup', handleTouchEnd);

$menu.addEventListener('selectstart', () => {return false;});


/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
  menuHeight = $menu.clientHeight;
  itemHeight = $items[0].clientHeight;
  wrapHeight = $items.length * itemHeight;
});


/*--------------------
Render
--------------------*/
const render = () => {
  requestAnimationFrame(render);
  y = lerp(y, scrollY, .1);
  dispose(y);

  scrollSpeed = y - oldScrollY;
  oldScrollY = y;

  gsap.to($items, {
    scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * .005,
    rotate: scrollSpeed * 0.2 });

};
render();
































$(document).ready(function(){
    $('.background').Geometryangle({
    
    // handle transparent colors
    mesh:{
    
      width: 1.2,
      height: 1.2,
    
      // How far should the mesh vary into z-space.
      depth: 10,
    
      // Number of columns for the mesh.
      columns: 12,
    
      columns_auto: false,
    
      // Number of rows for the mesh.
      rows: 7,
    
      rows_auto: true,
      zoom: 1,
      xRange: 0.8,
      yRange: 0.1,
      zRange: 3.0,
      ambient: 'rgba(14, 9, 131, 1)',
      diffuse: 'rgba(136, 12, 131, 1)',
      background: 'rgb(241, 173, 27)',
      speed: 0.0002,
      fluctuationSpeed: .2,
      fluctuationIntensity: 0,
      onRender: function () {
      },
      floorPosition: false,
      draw: true
    
    }, 
    
    
    lights: {
    
      // How many light sources belong to this light.
      count: 1,
    
      xyScalar: 1,
    
      // Position of light source.
      zOffset: 100,
    
      ambient: 'rgba(97,0,94, 1)',
      diffuse: 'rgba(97,18,94, 1)',
      speed: 0.001,
      gravity: 100,
    
      // Dampening of light's movements.
      dampening: 0.95,
    
      minLimit: 10,
      maxLimit: null,
      minDistance: 20,
      maxDistance: 400,
      autopilot: false,
      draw: false, //show circle
      bounds: FSS.Vector3.create(),
      step: FSS.Vector3.create(
        Math.randomInRange(0.2, 1.0),
        Math.randomInRange(0.2, 1.0),
        Math.randomInRange(0.2, 1.0)
      )
    
    },
    
    // specify the thickness, color, stroke, etc. 
    line: {
    
      fill: "rgba(0, 0, 0, 0)",
      thickness: 1,
      fluctuationIntensity: 0,
      fluctuationSpeed: 0.5,
      draw: false
    
    }, 
    
    // Set the point attributes for the vertex. 
    vertex: {
    
      // Radius of vertice circle.
      radius: 0,
    
      fill: "rgba(0, 0, 0, 0)",
    
      // Fluctuates opacity of vertex.
      fluctuationSpeed: 0.5,
    
      fluctuationIntensity: 0,
      strokeWidth: 0,
      strokeColor: "rgba(0, 0, 0, 0)",
    
      // Instead of setting alpha channel to zero
      // Set draw to false to avoid computing.
      draw: false
    
    }
    
    });
    });







    /**
 * requestAnimationFrame
 */
window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function (callback) {
              window.setTimeout(callback, 1000 / 60);
          };
})();


/**
* Vector
*/
function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector.add = function(a, b) {
  return new Vector(a.x + b.x, a.y + b.y);
};

Vector.sub = function(a, b) {
  return new Vector(a.x - b.x, a.y - b.y);
};

Vector.scale = function(v, s) {
  return v.clone().scale(s);
};

Vector.random = function() {
  return new Vector(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
  );
};

Vector.prototype = {
  set: function(x, y) {
      if (typeof x === 'object') {
          y = x.y;
          x = x.x;
      }
      this.x = x || 0;
      this.y = y || 0;
      return this;
  },

  add: function(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
  },

  sub: function(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
  },

  scale: function(s) {
      this.x *= s;
      this.y *= s;
      return this;
  },

  length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
  },

  lengthSq: function() {
      return this.x * this.x + this.y * this.y;
  },

  normalize: function() {
      var m = Math.sqrt(this.x * this.x + this.y * this.y);
      if (m) {
          this.x /= m;
          this.y /= m;
      }
      return this;
  },

  angle: function() {
      return Math.atan2(this.y, this.x);
  },

  angleTo: function(v) {
      var dx = v.x - this.x,
          dy = v.y - this.y;
      return Math.atan2(dy, dx);
  },

  distanceTo: function(v) {
      var dx = v.x - this.x,
          dy = v.y - this.y;
      return Math.sqrt(dx * dx + dy * dy);
  },

  distanceToSq: function(v) {
      var dx = v.x - this.x,
          dy = v.y - this.y;
      return dx * dx + dy * dy;
  },

  lerp: function(v, t) {
      this.x += (v.x - this.x) * t;
      this.y += (v.y - this.y) * t;
      return this;
  },

  clone: function() {
      return new Vector(this.x, this.y);
  },

  toString: function() {
      return '(x:' + this.x + ', y:' + this.y + ')';
  }
};


/**
* GravityPoint
*/
function GravityPoint(x, y, radius, targets) {
  Vector.call(this, x, y);
  this.radius = radius;
  this.currentRadius = radius * 0.5;

  this._targets = {
      particles: targets.particles || [],
      gravities: targets.gravities || []
  };
  this._speed = new Vector();
}

GravityPoint.RADIUS_LIMIT = 65;
GravityPoint.interferenceToPoint = true;

GravityPoint.prototype = (function(o) {
  var s = new Vector(0, 0), p;
  for (p in o) s[p] = o[p];
  return s;
})({
  gravity:       0.05,
  isMouseOver:   false,
  dragging:      false,
  destroyed:     false,
  _easeRadius:   0,
  _dragDistance: null,
  _collapsing:   false,

  hitTest: function(p) {
      return this.distanceTo(p) < this.radius;
  },

  startDrag: function(dragStartPoint) {
      this._dragDistance = Vector.sub(dragStartPoint, this);
      this.dragging = true;
  },

  drag: function(dragToPoint) {
      this.x = dragToPoint.x - this._dragDistance.x;
      this.y = dragToPoint.y - this._dragDistance.y;
  },

  endDrag: function() {
      this._dragDistance = null;
      this.dragging = false;
  },

  addSpeed: function(d) {
      this._speed = this._speed.add(d);
  },

  collapse: function(e) {
      this.currentRadius *= 1.75;
      this._collapsing = true;
  },

  render: function(ctx) {
      if (this.destroyed) return;

      var particles = this._targets.particles,
          i, len;

      for (i = 0, len = particles.length; i < len; i++) {
          particles[i].addSpeed(Vector.sub(this, particles[i]).normalize().scale(this.gravity));
      }

      this._easeRadius = (this._easeRadius + (this.radius - this.currentRadius) * 0.07) * 0.95;
      this.currentRadius += this._easeRadius;
      if (this.currentRadius < 0) this.currentRadius = 0;

      if (this._collapsing) {
          this.radius *= 0.75;
          if (this.currentRadius < 1) this.destroyed = true;
          this._draw(ctx);
          return;
      }

      var gravities = this._targets.gravities,
          g, absorp,
          area = this.radius * this.radius * Math.PI, garea;

      for (i = 0, len = gravities.length; i < len; i++) {
          g = gravities[i];

          if (g === this || g.destroyed) continue;

          if (
              (this.currentRadius >= g.radius || this.dragging) &&
              this.distanceTo(g) < (this.currentRadius + g.radius) * 0.85
          ) {
              g.destroyed = true;
              this.gravity += g.gravity;

              absorp = Vector.sub(g, this).scale(g.radius / this.radius * 0.5);
              this.addSpeed(absorp);

              garea = g.radius * g.radius * Math.PI;
              this.currentRadius = Math.sqrt((area + garea * 3) / Math.PI);
              this.radius = Math.sqrt((area + garea) / Math.PI);
          }

          g.addSpeed(Vector.sub(this, g).normalize().scale(this.gravity));
      }

      if (GravityPoint.interferenceToPoint && !this.dragging)
          this.add(this._speed);

      this._speed = new Vector();

      if (this.currentRadius > GravityPoint.RADIUS_LIMIT) this.collapse();

      this._draw(ctx);
  },

  _draw: function(ctx) {
      var grd, r;

      ctx.save();

      grd = ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, this.radius * 5);
      grd.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 5, 0, Math.PI * 2, false);
      ctx.fillStyle = grd;
      ctx.fill();

      r = Math.random() * this.currentRadius * 0.7 + this.currentRadius * 0.3;
      grd = ctx.createRadialGradient(this.x, this.y, r, this.x, this.y, this.currentRadius);
      grd.addColorStop(0, 'rgba(0, 0, 0, 1)');
      grd.addColorStop(1, Math.random() < 0.2 ? 'rgba(255, 196, 0, 0.15)' : 'rgba(103, 181, 191, 0.75)');
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2, false);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.restore();
  }
});


/**
* Particle
*/
function Particle(x, y, radius) {
  Vector.call(this, x, y);
  this.radius = radius;

  this._latest = new Vector();
  this._speed  = new Vector();
}

Particle.prototype = (function(o) {
  var s = new Vector(0, 0), p;
  for (p in o) s[p] = o[p];
  return s;
})({
  addSpeed: function(d) {
      this._speed.add(d);
  },

  update: function() {
      if (this._speed.length() > 12) this._speed.normalize().scale(12);

      this._latest.set(this);
      this.add(this._speed);
  }

  // render: function(ctx) {
  //     if (this._speed.length() > 12) this._speed.normalize().scale(12);

  //     this._latest.set(this);
  //     this.add(this._speed);

  //     ctx.save();
  //     ctx.fillStyle = ctx.strokeStyle = '#fff';
  //     ctx.lineCap = ctx.lineJoin = 'round';
  //     ctx.lineWidth = this.radius * 2;
  //     ctx.beginPath();
  //     ctx.moveTo(this.x, this.y);
  //     ctx.lineTo(this._latest.x, this._latest.y);
  //     ctx.stroke();
  //     ctx.beginPath();
  //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  //     ctx.fill();
  //     ctx.restore();
  // }
});



// Initialize

(function() {

  // Configs

  var BACKGROUND_COLOR      = 'rgba(11, 51, 56, 1)',
      PARTICLE_RADIUS       = 1,
      G_POINT_RADIUS        = 10,
      G_POINT_RADIUS_LIMITS = 65;


  // Vars

  var canvas, context,
      bufferCvs, bufferCtx,
      screenWidth, screenHeight,
      mouse = new Vector(),
      gravities = [],
      particles = [],
      grad,
      gui, control;


  // Event Listeners

  function resize(e) {
      screenWidth  = canvas.width  = window.innerWidth;
      screenHeight = canvas.height = window.innerHeight;
      bufferCvs.width  = screenWidth;
      bufferCvs.height = screenHeight;
      context   = canvas.getContext('2d');
      bufferCtx = bufferCvs.getContext('2d');

      var cx = canvas.width * 0.5,
          cy = canvas.height * 0.5;

      grad = context.createRadialGradient(cx, cy, 0, cx, cy, Math.sqrt(cx * cx + cy * cy));
      grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
  }

  function mouseMove(e) {
      mouse.set(e.clientX, e.clientY);

      var i, g, hit = false;
      for (i = gravities.length - 1; i >= 0; i--) {
          g = gravities[i];
          if ((!hit && g.hitTest(mouse)) || g.dragging)
              g.isMouseOver = hit = true;
          else
              g.isMouseOver = false;
      }

      canvas.style.cursor = hit ? 'pointer' : 'default';
  }

  function mouseDown(e) {
      for (var i = gravities.length - 1; i >= 0; i--) {
          if (gravities[i].isMouseOver) {
              gravities[i].startDrag(mouse);
              return;
          }
      }
      gravities.push(new GravityPoint(e.clientX, e.clientY, G_POINT_RADIUS, {
          particles: particles,
          gravities: gravities
      }));
  }

  function mouseUp(e) {
      for (var i = 0, len = gravities.length; i < len; i++) {
          if (gravities[i].dragging) {
              gravities[i].endDrag();
              break;
          }
      }
  }

  function doubleClick(e) {
      for (var i = gravities.length - 1; i >= 0; i--) {
          if (gravities[i].isMouseOver) {
              gravities[i].collapse();
              break;
          }
      }
  }


  // Functions

  function addParticle(num) {
      var i, p;
      for (i = 0; i < num; i++) {
          p = new Particle(
              Math.floor(Math.random() * screenWidth - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
              Math.floor(Math.random() * screenHeight - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
              PARTICLE_RADIUS
          );
          p.addSpeed(Vector.random());
          particles.push(p);
      }
  }

  function removeParticle(num) {
      if (particles.length < num) num = particles.length;
      for (var i = 0; i < num; i++) {
          particles.pop();
      }
  }


  // GUI Control

  control = {
      particleNum: 100
  };


  // Init

  canvas  = document.getElementById('c');
  bufferCvs = document.createElement('canvas');

  window.addEventListener('resize', resize, false);
  resize(null);

  addParticle(control.particleNum);

  canvas.addEventListener('mousemove', mouseMove, false);
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('dblclick', doubleClick, false);


  // GUI

  gui = new dat.GUI();
  gui.add(control, 'particleNum', 0, 500).step(1).name('Particle Num').onChange(function() {
      var n = (control.particleNum | 0) - particles.length;
      if (n > 0)
          addParticle(n);
      else if (n < 0)
          removeParticle(-n);
  });
  gui.add(GravityPoint, 'interferenceToPoint').name('Interference Between Point');
  gui.close();


  // Start Update

  var loop = function() {
      var i, len, g, p;

      context.save();
      context.fillStyle = BACKGROUND_COLOR;
      context.fillRect(0, 0, screenWidth, screenHeight);
      context.fillStyle = grad;
      context.fillRect(0, 0, screenWidth, screenHeight);
      context.restore();

      for (i = 0, len = gravities.length; i < len; i++) {
          g = gravities[i];
          if (g.dragging) g.drag(mouse);
          g.render(context);
          if (g.destroyed) {
              gravities.splice(i, 1);
              len--;
              i--;
          }
      }
    
      bufferCtx.save();
      bufferCtx.globalCompositeOperation = 'destination-out';
      bufferCtx.globalAlpha = 0.35;
      bufferCtx.fillRect(0, 0, screenWidth, screenHeight);
      bufferCtx.restore();

      // パーティクルをバッファに描画
      // for (i = 0, len = particles.length; i < len; i++) {
      //     particles[i].render(bufferCtx);
      // }
      len = particles.length;
      bufferCtx.save();
      bufferCtx.fillStyle = bufferCtx.strokeStyle = '#fff';
      bufferCtx.lineCap = bufferCtx.lineJoin = 'round';
      bufferCtx.lineWidth = PARTICLE_RADIUS * 2;
      bufferCtx.beginPath();
      for (i = 0; i < len; i++) {
          p = particles[i];
          p.update();
          bufferCtx.moveTo(p.x, p.y);
          bufferCtx.lineTo(p._latest.x, p._latest.y);
      }
      bufferCtx.stroke();
      bufferCtx.beginPath();
      for (i = 0; i < len; i++) {
          p = particles[i];
          bufferCtx.moveTo(p.x, p.y);
          bufferCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      }
      bufferCtx.fill();
      bufferCtx.restore();

      // バッファをキャンバスに描画
      context.drawImage(bufferCvs, 0, 0);

      requestAnimationFrame(loop);
  };
  loop();

})();
