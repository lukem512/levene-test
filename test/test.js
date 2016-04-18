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
	}
];

var returnCode = 0;

tests.forEach(function(t) {
	try {
		var w = l.test(t.samples);
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
