function Airport() {
  this.parkedPlanes = [];
};

Airport.prototype.land = function(plane) {
  this.parkedPlanes.push(plane);
};

function Plane() {};
