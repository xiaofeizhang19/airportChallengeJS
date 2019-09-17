function Weather() {
  this._chanceOfStormy = 0.2;
} 

Weather.prototype.isStormy = function() {
  return (Math.random() < this._chanceOfStormy);
};
