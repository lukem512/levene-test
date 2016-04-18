// Levene's Test
// Luke Mitchell, April 2016
// https://github.com/lukem512/levene-test

var sm = require('statistical-methods');

// Perform the Levene transformation.
var transform = module.exports.transform = function(samples) {
	var z = [];

	samples.forEach(function(sample) {
		var mu = sm.mean(sample);
		var zj = [];
		sample.forEach(function(s) {
			zj.push(Math.abs(mu - s));
		});
		z.push(zj);
	});

	return z;
};

// Compute the W-value
// Compute the F-value
var test = module.exports.test = function(samples) {
	var z = transform(samples);

	// Compute N, the total number of observations
	// and p, the number of samples
	var N = 0, p = samples.length;
	samples.forEach(function(sample) {
		N += sample.length;
	});

	// Compute z.., the mean of all zij
	var zs = [];
	z.forEach(function(zi) {
		zs = zs.concat(zi);
	});
	var zdotdot = sm.mean(zs);

	// Compute the denominator and the numerator
	var numerator = 0, denominator = 0;
	for (var i = 0; i < p; i++) {

		// The number of observations in sample i
		var n = samples[i].length;

		// The mean of all zij for sample i
		var zidot = sm.mean(z[i]);

		var dz = (zidot - zdotdot);
		numerator += (n * (dz * dz));

		denominator += sm.sum(z[i].map(function(zij) {
			var dz = (zij - zidot);
			return (dz * dz);
		}));
	}

	// Add divisors
	numerator = (N - p) * numerator;
	denominator = (p - 1) * denominator;

	// Return ratio
	return (numerator / denominator); 
};
