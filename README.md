# jQuery-mscroll
A jQuery plugin enables to force to fire scroll event in mobile devices.

**Notice**
* This will affect performance.
* This will disable scroll momentum in iOS device.

## Demo 
[Stickit without jQuery-mscroll](http://emn178.github.io/jquery-stickit/demo/header/)  
[Stickit with jQuery-mscroll](http://emn178.github.io/jquery-mscroll/demo/stickit/)

[Lazyload without jQuery-mscroll](http://emn178.github.io/jquery-lazyload-any/demo/images/)  
[Lazyload with jQuery-mscroll](http://emn178.github.io/jquery-mscroll/demo/lazyload/)

## Usage
* Just includes it.
* MUST use `window` instead of `document`.
* MUST use jQuery methods `scrollTop()` and `scrollLeft()`.

## Example
Code
```JavaScript
$(window).scroll(function() {
  console.log($(window).scrollTop());
});
```
This will not work.
```JavaScript
$(document).scroll(function() {
  console.log(document.body.scrollTop);
});
```
This will append to scroll wrapper, so it's OK.
```JavaScript
$(document.body).append(element);
```
## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/jquery-mscroll  
Author: emn178@gmail.com
