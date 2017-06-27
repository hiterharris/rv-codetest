$(document).ready(function() {
// Hide and show new credit card
  $('#new').hide()
  $('#add').click(function() {
    $('#new').toggle()
  });
// Toggle plus/minus sign
  $('#add').click(function() {
    var $this = $(this);
    $this.toggleClass('add');
    if($this.hasClass('add')){
      $this.text('+');
    } else {
      $this.text('-');
  }
  });
// Card select border on click
  $('.card').click(function() {
    $(this).parent().find('.card').css('border', '2px solid #E1E1E1');
    $(this).css('border', '3px solid #8094CC');
  });
});
