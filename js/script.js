$(document).ready(function() {

// Hide and show new credit card
  $('#new').hide()
  $('#add').click(function() {
    $('#new').toggle('slow')
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

// Select new card border bottom
  $('.card-icon').click(function() {
    $(this).parent().find('.card-select').css('border-bottom', '3px solid #E1E1E1');
    $(this).css('border-bottom', '3px solid #8094CC');
  });

// Hide show different card balances
$('.visa-balance').show();
$('.amex-balance').hide();
$('.mastercard-balance').hide();

$('.amex').click(function() {
  $('.amex-balance').show();
  $('.visa-balance').hide();
  $('.mastercard-balance').hide();
  });
$('.visa').click(function() {
  $('.visa-balance').show();
  $('.amex-balance').hide();
  $('.mastercard-balance').hide();
  });
$('.mastercard').click(function() {
  $('.mastercard-balance').show();
  $('.amex-balance').hide();
  $('.visa-balance').hide();
  });

});
