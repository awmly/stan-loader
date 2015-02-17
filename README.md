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

STAN Loader has been tested on all modern browsers - see the matrix from Sauce Labs below. Note that in IE8 the success callback is called even on error.

[![Sauce Test Status](https://saucelabs.com/browser-matrix/stan-loader.svg?auth=d83fbc6cd64b33ed71f758b863f47d9d)](https://saucelabs.com/u/stan-loader)

### Author

##### [Andrew Womersley](https://plus.google.com/+AndrewWomersley).

### Copyright and License

Copyright 2015 Smart Arts UK Ltd under [the MIT license](LICENSE).
