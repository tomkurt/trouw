$(function(){
  $('#top').hover(
    function(){ $('#lichtjes').show() },
    function(){ $('#lichtjes').hide() }
  )
  $('form').submit(function(e){
    e.preventDefault();
    switch($('#code_input').val()){
      case 'DK3KLJ3':
        $('*').show()
        $.scrollTo('.dag1', 'slow', {offset: {top: -80, left:0} });
        break;
      case 'LKJD83':
        $('.dag2deel1, .cadeau').show()
        $.scrollTo('.dag2deel1', 'slow', {offset: {top: -80, left:0} });
        break;
      case 'LKFJD3':
        $('.dag2deel3, .cadeau').show()
        $.scrollTo('.dag2deel3', 'slow', {offset: {top: -80, left:0} });
        break;
      case 'DLSJDF0':
        $('.dag2deel2, .dag2deel3, .cadeau').show()
        $.scrollTo('.dag2deel2', 'slow', {offset: {top: -80, left:0} });
        break;
      default:
        alert('Code niet gevonden, probeer opnieuw');
    }
  })
  $(window).scroll(function(){
    if($(window).scrollTop() > 950){
      $('#navwrapper').addClass('display');
    }else{
      $('#navwrapper').removeClass('display');
    }
  })
})