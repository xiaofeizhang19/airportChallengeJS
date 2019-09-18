describe('Feature test: ', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  })

  describe('under normal weather conditions', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.5);
    });

    it('planes can be instructed to land', function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to takeoff', function() {
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under stormy weather condition', function() {
    it ('prevents landing in storm', function() {
      spyOn(Math, 'random').and.returnValue(0.1);
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm')
      expect(airport.planes()).not.toContain(plane);
    });

    it('prevents taking off in storm', function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff(); }).toThrowError('cannot takeoff during storm')
      expect(airport.planes()).toContain(plane);
    });
  });
});