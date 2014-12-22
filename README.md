stan-loader
===========

Really simple JS script loader that will load an array of libraries and then execute a callack function.

    <script src='stan-loader.min.js'></script>
    <script>
        $STAN_Load([
            '//code.jquery.com/jquery-1.10.1.min.js',
            '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js'
        ], function(){
          alert("Load complete");
        }, function(){
          alert("Failed to load");
        });
    </script>
