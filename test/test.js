// Levene's Test
// Luke Mitchell, April 2016
// https://github.com/lukem512/levene-test

var l = require('../src/levene');

var tests = [
	// http://statistics-help-for-students.com/How_do_I_enter_data_into_SPSS_for_an_independent_samples_T_test.htm
	{
		name: 'Simple Levene\'s test #1',
		expected: 1.493,
		rejected: false,
		samples: [
			[3, 6, 4, 3, 5],
			[2, 2, 1, 3, 3]
		]
	},

	// https://www.youtube.com/watch?v=6FbRXQi0Igw
	{
		name: 'Simple Levene\'s test #2',
		expected: 0.078,
		rejected: false,
		samples: [
			[84, 80, 92, 78, 88, 85, 94, 77, 82, 89],
			[79, 84, 65, 70, 79, 82, 79, 83, 72, 82]
		]
	},

	{
		name: 'Simple Levene\'s test #3',
		expected: 2.2493,
		rejected: false,
		samples: [
			[65, 61, 81, 88, 69, 89, 55, 84, 86, 84, 71],
			[77, 74, 80, 76, 77, 93, 64, 83, 75, 82, 70],
			[69, 70, 71, 80, 74, 78, 60, 80, 81, 86, 73],
			[75, 66, 74, 88, 69, 77, 50, 77, 87, 92, 81],
			[69, 68, 79, 79, 76, 80, 63, 78, 79, 85, 79]
		]
	},

	{
		name: 'Simple Levene\'s quadratic test #1',
		expected: 1.6715,
		rejected: false,
		quadratic: true,
		samples: [
			[65, 61, 81, 88, 69, 89, 55, 84, 86, 84, 71],
			[77, 74, 80, 76, 77, 93, 64, 83, 75, 82, 70],
			[69, 70, 71, 80, 74, 78, 60, 80, 81, 86, 73],
			[75, 66, 74, 88, 69, 77, 50, 77, 87, 92, 81],
			[69, 68, 79, 79, 76, 80, 63, 78, 79, 85, 79]
		]
	}
];

var returnCode = 0;

tests.forEach(function(t) {
	try {
		var w = l.test(t.samples, t.quadratic);
		if (!t.expected) throw Error('Unexpected results');
		if (Math.abs(w - t.expected) > 0.001) throw Error('Returned results did not match expected results (' + w + ')');
	} catch (err) {
		if (!t.rejected) {
			console.error(t.name, err);
			returnCode = 1;
		}
	}
});

process.exit(returnCode);
