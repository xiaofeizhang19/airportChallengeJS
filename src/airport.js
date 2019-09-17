function Airport() {
  this.capacity = 20;
  this.parkedPlanes = [];
}

Airport.prototype.clearForLanding = function(plane) {
  this.parkedPlanes.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  for(var i = 0; i < this.parkedPlanes.length; i++) {
    if(this.parkedPlanes[i] === plane) {
      this.parkedPlanes.splice(i, 1);
    }
  }  
};

Airport.prototype.isStormy = function() {
  num = Math.floor(Math.random() * 10);
  if(num > 7) {
    return true;
  } else {
    return false;
  }
};
