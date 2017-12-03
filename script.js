require({
  baseUrl: 'libraries',                                                         // local folder with libraries 
      paths: {
          "jquery": "jquery.min",                                               // jQuery
          "jquery-ui": "jquery-ui.min",                                         // jQueryUI  
      }
  }, ["require", "jquery", "jquery-ui"], 
  
  
  function (req, $) {                                                           // function that call the libraries

    var safeColors = ['00','33','66','99','cc','ff'];
    var rand = function() {
        return Math.floor(Math.random()*6);
    };
    var randomColor = function() {
        var r = safeColors[rand()];
        var g = safeColors[rand()];
        var b = safeColors[rand()];
        return "#"+r+g+b;
    };
    
   

   
    var a=0
    var b=0

    $("body").append(
      '<h1>PaintApp</h1>'+
      '<div id="content">'+
      '<p>Please choose a size and press on the "Start & Reset" button</p>'+
      '<div id="sizemenu">Width:<input id="height" type="number" value="'+a+'"max="100"">Height:<input id="width" type="number" value="'+b+'" max="100"></div></div>'+
        '<div id="menu" ><div id="generation" class="button">Start & Reset</div>'+
        '<div id="randColor" class="button">Random Color</div>'+
        '<div id="black" class="button">Black</div>'+
       // '<div id="colorpicker"><input type="color" name="color" value="#ff0000"><div>'+
     
        '<div id="container"></div>')

 function squares(size){
          for(i=0;i<size;i++){
            $("#container").append('<div class="square">')
          }
        };


  heightarray = new Array();

  $("#height").on("keyup change", function(width) {
    $('.square').remove('div');
    $('.randColor').remove('div');
    a = this.value
    if (a<=100){
      height=10*a
      heightarray.unshift(height)
      $("#container").css("height",height)    
    }
    else{
    }

  })

  widtharray = new Array();
  $("#width").on("keyup change", function() {
    $('.square').remove('div');
    $('.randColor').remove('div');
    b = this.value
    if (b<=100){
      width=10*b
      widtharray.unshift(width)
      $("#container").css("width",width) 
    }
    else{}
   
  })


  

 
  $( "#generation" ).click(function(size) {
    $('.square').remove('div');
    $('.randColor').remove('div');
    var size= widtharray[0]/10*heightarray[0]/10
    squares(size)
    });

          $( "#randColor" ).click(function() {
            $(".square").removeClass().addClass("randColor");
            $('#randColor').css('background-color',randomColor,);
            $(".randColor").hover(function(){
              $(this).css('background-color',randomColor);
              //$("#container").css('background-color',randomColor);
            });
          });

        
              
          $( "#black" ).click(function() {
            $(".randColor").removeClass().addClass("square");
              $(".square").hover(function(){
                  $(this).css('background-color','black');
            })
          });


});

       

       
       
        

