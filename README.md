# Levene's Test

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
