# Levene's Test

[![Build Status](https://travis-ci.org/lukem512/levene-test.svg?branch=master)](https://travis-ci.org/lukem512/levene-test) ![Build Status](https://david-dm.org/lukem512/levene-test.svg) [![npm](https://img.shields.io/npm/l/levene-test.svg)](https://www.npmjs.com/package/levene-test) [![npm](https://img.shields.io/npm/v/levene-test.svg)](https://www.npmjs.com/package/levene-test) [![npm](https://img.shields.io/npm/dm/levene-test.svg)](https://www.npmjs.com/package/levene-test)

An NPM module providing Levene's parametric statistical test. The test can be used to compute a p-value when performing [Analysis of Variance](https://www.npmjs.com/package/anova) (ANOVA). If the data you are working with is not normally-distributed it is recommended that you use the [Brown-Forsythe test](https://www.npmjs.com/package/brown-forsythe-test) instead, which uses the median rather than the mean to compute the test value.

To use it, simply install via NPM and include it in your project file.

```
	var levene = require('levene-test');
```

To compute the W-test of an array of samples use the `test` function:

```
	var samples = [[3,3,5,1], [1,2,3]];

	console.log(levene.test(samples));
```

By default the test uses the absolute deviations from the group means. The quadratic (squared) deviations can also be used by specifying the `quadratic` parameter:

```
	console.log(levene.test(samples), true);
```
