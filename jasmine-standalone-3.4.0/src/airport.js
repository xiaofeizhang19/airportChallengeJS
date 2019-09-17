function Airport() {
  this.capacity = 20;
  this.parkedPlanes = [];
}

Airport.prototype.clearForLanding = function(plane) {
  this.parkedPlanes.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  for(var i = 0; i < this.parkedPlanes.length; i++) {
    if(this.parkedPlanes[i] === plane) {
      this.parkedPlanes.splice(i, 1);
    }
  }
};
