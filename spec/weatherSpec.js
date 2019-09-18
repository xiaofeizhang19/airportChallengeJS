describe('Weather', function() {
  var weather;
  beforeEach(function() {
    weather = new Weather();
  });

  it('gives stormy weather somethimes', function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('gives normal weather sometimes', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(weather.isStormy()).toBeFalsy();
  });
});