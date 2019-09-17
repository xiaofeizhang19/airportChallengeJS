function Airport(weather) {
  this.capacity = 20;
  this._parkedPlanes = [];
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.planes = function() {
  return this._parkedPlanes;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot land during storm')
  }
  this._parkedPlanes.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  for(var i = 0; i < this._parkedPlanes.length; i++) {
    if(this._parkedPlanes[i] === plane) {
      this._parkedPlanes.splice(i, 1);
    }
  }  
};
