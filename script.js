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
        break;
      case 'LKJD83':
        $('.dag2deel1').show()
        break;
      case 'LKFJD3':
        $('.dag2deel3').show()
        break;
      case 'DLSJDF0':
        $('.dag2deel2, .dag2deel3').show()
        break;
    }
  })
})