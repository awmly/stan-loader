/*!
 * STAN Loader 1.0.0
 * Copyright 2014 Andrew Womersley
 */
(function(win, doc) {

  // Decale variables
  var loadCount = 0,
    libs,
    successCallback,
    errorCallback;

  /*
   * Set libs and callback from the public method
   */
  function init(_libs, _successCallback, _errorCallback, _forceLoad) {

    libs = _libs;
    successCallback = _successCallback;
    errorCallback = _errorCallback;

    // Add window load listeners (W3C : IE8)
    if (doc.addEventListener) {
      doc.addEventListener('DOMContentLoaded', addScript);
    } else {
      win.attachEvent('onload', addScript);
    }

    // Force load if win/dom events not available
    if (typeof _forceLoad !== "undefined") addScript();

  }

  /*
   * Set libs and callback from the public method
   */
  function loaded() {

    // Incriment loadCount
    loadCount++;

    // Check for libs to load - else perform callback
    if (libs[loadCount]) {

      addScript();

    } else {

      // Check callback is a function
      if (typeof(successCallback) === 'function') {
        successCallback();
      }

    }

  }

  /*
   * Set libs and callback from the public method
   */
  function errored() {

    if (typeof(errorCallback) === 'function') {
      errorCallback();
    }

  }

  /*
   * Create and add the script to the head
   */
  function addScript() {

    var script = doc.createElement('script');
    script.type = 'text/javascript';
    script.src = libs[loadCount];
    script.async = true;

    // Set onload events for newly added script
    if ('onload' in script) { // W3C

      script.onload = loaded;

      script.onerror = errored;

    } else { // IE8

      script.onreadystatechange = function() {

        if (this.readyState === 'complete' || this.readyState === 'loaded') {
          loaded();
        }

      };

    }

    // Add the html to the head
    doc.getElementsByTagName("head")[0].appendChild(script);

  }

  // declare public method
  win['$STAN_Load'] = init;

})(window, document);
