describe('airport', function() {
  var heathrow;
  var plane;

  beforeEach(function() {
    heathrow = new Airport();
    plane = new Plane();
  });

  it('instructs plane to land', function() {
    heathrow.land(plane);
    expect(heathrow.parkedPlanes).toContain(plane)
  });
});
