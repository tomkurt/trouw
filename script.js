$(function(){
  $('#top').hover(
    function(){ $('#lichtjes').show() },
    function(){ $('#lichtjes').hide() }
  )
  $('#codeform').submit(function(e){
    e.preventDefault();
    switch($('#code_input').val().toUpperCase()){
      case 'DK3KLJ3':
        $('.dag1, .dag2deel1, .dag2deel2, .cadeau, .confirm').addClass('display')
        $('.dag1, .dag2deel1, .dag2deel2, .cadeau, .confirm').show()
        $.scrollTo('.dag1', 'slow', {offset: {top: -80, left:0} });
        break;
      case 'LKJD83':
        $('.dag2deel1, .cadeau, .confirm').addClass('display')
        $('.dag2deel1, .cadeau, .confirm').show()
        $.scrollTo('.dag2deel1', 'slow', {offset: {top: -80, left:0} });
        break;
      case 'DLKJ34K':
        $('.dag2deel1, .dag2deel3, .cadeau, .confirm').addClass('display')
        $('.dag2deel1, .dag2deel3, .cadeau, .confirm').show()
        $.scrollTo('.dag2deel1', 'slow', {offset: {top: -80, left:0} });
        break;
      case 'LKFJD3':
        $('.dag2deel3, .cadeau, .confirm').addClass('display')
        $('.dag2deel3, .cadeau, .confirm').show()
        $.scrollTo('.dag2deel3', 'slow', {offset: {top: -80, left:0} });
        break;
      case 'LDJ334':
        $('.dag2deel1, .dag2deel2, .cadeau, .confirm').addClass('display')
        $('.dag2deel1, .dag2deel2, .cadeau, .confirm').show()
        $.scrollTo('.dag2deel1', 'slow', {offset: {top: -80, left:0} });
        break;
      case 'DLSJDF0':
        $('.dag2deel2, .cadeau, .confirm').addClass('display')
        $('.dag2deel2, .cadeau, .confirm').show()
        $.scrollTo('.dag2deel2', 'slow', {offset: {top: -80, left:0} });
        break;
      case 'DLSJDFO':
        $('.dag2deel2, .cadeau, .confirm').addClass('display')
        $('.dag2deel2, .cadeau, .confirm').show()
        $.scrollTo('.dag2deel2', 'slow', {offset: {top: -80, left:0} });
        break;
      default:
        alert('Code niet gevonden, probeer opnieuw');
    }
  })
  $('#nav ul a').click(function(e){
    e.preventDefault();
    console.log($(this).closest('li').attr('class'))
    $.scrollTo('.' + $(this).data('show'), 'slow', {offset: {top: -80, left:0} });
  })
  $(window).scroll(function(){
    if($(window).scrollTop() > 780){
      $('#navwrapper').addClass('display');
    }else{
      $('#navwrapper').removeClass('display');
    }
  })
})