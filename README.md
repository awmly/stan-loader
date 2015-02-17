# STAN Loader [![Build Status](https://travis-ci.org/awomersley/stan-loader.svg?branch=master)](https://travis-ci.org/awomersley/stan-loader) [![Code Climate](https://codeclimate.com/github/awomersley/stan-loader/badges/gpa.svg)](https://codeclimate.com/github/awomersley/stan-loader) [![Codacy Badge](https://www.codacy.com/project/badge/b0fdb35b7b3a4d6e92b66a75cd4a1e4d)](https://www.codacy.com/public/a/stan-loader)

Really simple JS script loader that will load an array of libraries and then execute a callack function on load or error.

```javascript
<script src='stan-loader.min.js'></script>
<script>
    $STAN_Load([
        '//code.jquery.com/jquery-1.10.1.min.js',
        '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js'
    ], function(){
      console.log("Load complete");
    }, function(){
      console.log("Load failed");
    });
</script>
```
## Browser Compatibility

STAN Loader has been tested on all modern browsers - see the matrix from Sauce Labs below. For IE8 the only limitation is if the loader fails the success callback is still called.

[![Sauce Test Status](https://saucelabs.com/browser-matrix/stan-loader.svg?auth=d83fbc6cd64b33ed71f758b863f47d9d)](https://saucelabs.com/u/stan-loader)

## Testing

To test on saucelabs browsers from local server create file `tests/sauce.json` with the following content;

```
{
    "username": "yourSauceUsername",
    "accessKey": "yourSauceAccessKey"
}
```

You can then test using the following commands

```
karma start tests/karma-saucelabs.js 'Windows 7' chrome
karma start tests/karma-saucelabs.js 'OS X 10.10' chrome
karma start tests/karma-saucelabs.js 'Windows 7' firefox
karma start tests/karma-saucelabs.js 'OS X 10.10' firefox
karma start tests/karma-saucelabs.js 'OS X 10.10' safari
karma start tests/karma-saucelabs.js 'Windows 7' 'internet explorer' 11
karma start tests/karma-saucelabs.js 'Windows 7' 'internet explorer' 10
karma start tests/karma-saucelabs.js 'Windows 7' 'internet explorer' 9
karma start tests/karma-saucelabs.js 'Linux' android 5
karma start tests/karma-saucelabs.js 'OS X 10.10' iphone 8.1
karma start tests/karma-saucelabs.js 'OS X 10.10' ipad 8.1
```
