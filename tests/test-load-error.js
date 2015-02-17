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
