(function(win,method){

  var methodVar = method || '$STAN_Load',
      loadCount = 0,
      libs,
      callback;


  function init(l,c){

    libs      = l;
    callback  = c;

    addScript(libs[0]);

  }

  function loaded(){

    loadCount++;

    if(libs[loadCount]){

      addScript(libs[loadCount]);

    }else{

      callback();

    }

  }

  function addScript(src){

    var   script = document.createElement('script');
          script.type='text/javascript';
          script.src=src;

    if('onload' in script){ // IE10+

      script.onload=function(){

        loaded();

      };

    }else{ // IE8/9

      script.onreadystatechange = function () {

        if (this.readyState == 'complete' || this.readyState=='loaded') {

          loaded();

        }

      };

    }

    document.getElementsByTagName("head")[0].appendChild(script);

  }

  // declare public methods
  win[methodVar] = init;

})(window);
