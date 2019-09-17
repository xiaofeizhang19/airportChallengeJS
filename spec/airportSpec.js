describe('airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('has a default capacity', function() {
    expect(airport.capacity).toEqual(20);
  });

  it('instructs plane to land', function() {
    airport.clearForLanding(plane);
    expect(airport.parkedPlanes).toContain(plane);
  });

  it('can clear planes for takeoff', function() {
    spyOn(airport, 'isStormy').and.returnValue(false);
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.parkedPlanes).toEqual([]);
  });

  it('blocks takeoff when weather is stormy', function() {
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.clearForTakeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.parkedPlanes).toContain(plane);
  });
});
