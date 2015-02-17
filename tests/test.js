/**
 * Jasmine test to check success callback
 */
describe('stan-loader-ok', function() {

  // Declare status var
  var status;

  // Activate async
  beforeEach(function(done) {

    // Initiate $STAN loader using normal window load events
    $STAN_Load([
      '//code.jquery.com/jquery-1.10.1.min.js',
      '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js'
    ], function() {
      status = 'ok';
      done();
    }, function() {
      status = 'error';
      done();
    });

  });

  // Perform tests
  it("JS libs loaded in to the DOM", function() {

    // Check status has been set to ok
    expect(status).toBe('ok');

    // Check jQuery is loaded
    expect($).toBeDefined();

    // Check bootstrap is loaded
    expect($().tab()).toBeDefined();

  });

});


/**
 * Jasmine test to check error callback
 */
describe('stan-loader-error', function() {

  // Declare status var
  var status;

  // Activate async
  beforeEach(function(done) {

    // Initiate $STAN loader passing extra true param to force load of libs
    $STAN_Load([
      '//lib-that-doesnt-exist.js',
      '//and-another.js'
    ], function() {
      status = 'ok';
      done();
    }, function() {
      status = 'error';
      done();
    }, true); // Manually force load as window load event has already happened

  });

  // Perform tests
  it("Error callback called", function() {

    // Check status has been set to error
    expect(status).toBe('error');

  });

});
