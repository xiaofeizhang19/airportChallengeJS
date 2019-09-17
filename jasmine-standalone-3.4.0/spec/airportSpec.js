describe('airport', function() {
  var heathrow;
  var plane;

  beforeEach(function() {
    heathrow = new Airport();
    plane = new Plane();
  });

  it('has a default capacity', function() {
    expect(heathrow.capacity).toEqual(20);
  });

  it('instructs plane to land', function() {
    heathrow.clearForLanding(plane);
    expect(heathrow.parkedPlanes).toContain(plane);
  });
});
