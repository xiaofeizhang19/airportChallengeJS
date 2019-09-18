describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('has a default capacity', function() {
    expect(airport.capacity).toEqual(20);
  });

  describe('under normal weather conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });

    it('instructs plane to land', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
  
    it('can clear planes for takeoff', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    })
    it ('prevents landing when weather is stormy', function() {
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm')
    });

    it('blocks takeoff when weather is stormy', function() {
      expect(function(){ airport.clearForTakeoff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});
