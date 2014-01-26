/*
 * jQuery-mscroll v0.1.0
 * https://github.com/emn178/jquery-mscroll
 *
 * Copyright 2014, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function($, window, document, undefined) {
  var origScrollTop = $.fn.scrollTop;
  var origScrollLeft = $.fn.scrollLeft;
  var origAppend = $.fn.append;
  var wrapper, inner;
  var agent = navigator.userAgent.toLowerCase();
  var iOs = agent.indexOf('ipad') != -1 || agent.indexOf('iphone') != -1 || agent.indexOf('ipod') != -1;
  var isMobile = iOs || agent.indexOf('android') != -1;

  $.mscroll = function() {
    $(document).ready(function() {
      var body = $(document.body);
      if(!wrapper)
      {
        wrapper = $('<div style="height: 100%;overflow:auto;"></div>');
        inner = $('<div></div>');
        inner.css({
          'position': 'relative',
          'margin-top': body.css('margin-top'),
          'margin-bottom': body.css('margin-bottom'),
          'margin-left': body.css('margin-left'),
          'margin-right': body.css('margin-right'),
          'padding-top': body.css('padding-top'),
          'padding-bottom': body.css('padding-bottom'),
          'padding-left': body.css('padding-left'),
          'padding-right': body.css('padding-right')
        });
        wrapper.append(inner);
        $('html').css('height', '100%');
        body.css({
          'height': '100%',
          'overflow': 'hidden',
          'margin': '0',
          'padding': '0'
        });
        $.fn.scrollTop = function() {
          if(this[0] == window)
            return origScrollTop.apply(wrapper, arguments);
          return origScrollTop.apply(this, arguments);
        };
        $.fn.scrollLeft = function() {
          if(this[0] == window)
            return origScrollLeft.apply(wrapper, arguments);
          return origScrollLeft.apply(this, arguments);
        };
        $.fn.append = function() {
          if(this[0] == document.body)
            return origAppend.apply(inner, arguments);
          return origAppend.apply(this, arguments);
        };
      }
      wrapper.remove();
      inner.append(body.contents().filter(function() {
        return this.nodeName != 'SCRIPT';
      }));
      origAppend.apply(body, [wrapper]);

      wrapper.bind('scroll', function() {
        $(window).trigger('scroll');
      });
    });
  };

  if(!isMobile)
    return;
  
  $(document).ready(function() {
    $.mscroll();
  });
})(jQuery, window, document);
