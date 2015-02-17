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
			'//code.jquery.com/jquery-1.11.2.min.js',
			'//netdna.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js'
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
