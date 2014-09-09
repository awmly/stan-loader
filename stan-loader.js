/*!
 * STAN Loader 1.0.0
 * Copyright 2014 Andrew Womersley
 */
(function(win, doc) {

  // Decale variables
  var methodVar = win.$STAN_Loader || '$STAN_Load',
    loadCount = 0,
    libs,
    callback;

  /*
   * Set libs and callback from the public method
   */
  function init(_libs, _callback) {

    libs = _libs;
    callback = _callback;

    // add window load listeners (W3C : IE8/9)
    if (doc.addEventListener)
      doc.addEventListener('DOMContentLoaded', addScript);
    else
      win.attachEvent('onload', addScript);

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

    } else { // IE8/9

      script.onreadystatechange = function() {

        if (this.readyState == 'complete' || this.readyState == 'loaded')
          loaded();

      };

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
        if( typeof(callback)=='function' ) callback();

      }

    }

    // Add the html to the head
    doc.getElementsByTagName("head")[0].appendChild(script);

  }

  // declare public method
  win[methodVar] = init;

})(window, document);
