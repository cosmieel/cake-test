import '../style/master.scss'

$(function() {

  var dd = new DropDown( $('#dd') );

  $(document).click(function() {
    $('.apts-sort--select__dropdown').removeClass('active');
  });
});
 
function DropDown(el) {
  this.dd = el;
  this.initEvents();
}

DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      event.stopPropagation();
    });
  }
}

