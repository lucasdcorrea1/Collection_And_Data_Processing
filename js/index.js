/*JALIS IMG BACK
pushes <img>'s src to background-image
@PierreBonninPro - https://twitter.com/PierreBonninPRO
https://codepen.io/pierre-bonnin-pro/
*/
(function($){
  $.fn.jalisImgBack = function(options){
    
    var defaults = {
      bgSize : 'cover',
      bgPos : 'center center',
      bgRpt : 'no-repeat'
    }
    
    var prm = $.extend(defaults, options);
    var elems = this;
    var selector = this.selector;
    
    set();
    
    /* look for a direct child img tag inside the selector,
    *  put the src attribute as inline background-image,
    *  removes the img tag
    */
    function set(){
      elems.each(function(){
        var img = $(this).children('img');
        var src = img.attr('src');
        if (src != undefined){
          src= src.replace(new RegExp(' ', "gi"), '%20');
          img.remove();
          $(this).css({
            'background-image':'url("'+src+'")',
            'background-size' : prm.bgSize,
            'background-position' : prm.bgPos,
            'background-repeat'	: prm.bgRpt
          });
        }
      });
    }
    
    /* reverses the process by retrieving the img url,
    *  adding it to a new child img tag with the parsed src,
    * removes inline style
    */
    function unset(){
      elems.each(function(){
        var obj = $(this);
          var src = obj.css('background-image').slice(4,-1);// removes url()
          
          //parse url in case of quotes inside the url
          if(src.substring(0,1) == '"' || src.substring(0,1) == "'"){
            src= src.substring(1);
          }

          if(src.slice(-1) == '"' || src.slice(-1) == "'"){
            src= src.slice(0, -1);
          }

          if (src != undefined){
            var img = "<img src='"+src+"' />";
            obj.append(img);
            obj.css({
              'background-image':'none',
              'background-size' : 'inherit',
              'background-position' : 'inherit',
              'background-repeat'	: 'inherit'
            });
          }
        });
    }
    
    // updates the list of container, in case you would like to use AJAX ;)
    this.update = function(){
      if(elems.length != $(selector).length){
        elems = $(selector);
      }
      set();
      return elems;
    }
    
    this.reset = function(){
      unset();
      return elems;
    }
    
    this.restart = function(){
      unset();
      this.update();
      set();
    }
    
    return this;
    
  }
})(jQuery);


$(document).ready(function(){
  $('.img--back').jalisImgBack();
});