(function(win,method){

  var methodVar = method || '$STAN_Load',
      loadCount = 0,
      libs,
      callback;


  function init(l,c){

    libs      = l;
    callback  = c;

    if(document.addEventListener)
      document.addEventListener('DOMContentLoaded', addScript );
    else
      window.attachEvent('onload', addScript );

  }

  function loaded(){

    loadCount++;

    if(libs[loadCount]){

      addScript();

    }else{

      callback();

    }

  }

  function addScript(){

    var   script = document.createElement('script');
          script.type='text/javascript';
          script.src=libs[loadCount];

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
