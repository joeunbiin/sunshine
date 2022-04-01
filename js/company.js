


$('.comBox .title a').on('click', function(e){
    e.preventDefault()
    var url = this.href
    $(this).addClass('on').siblings().removeClass('on')
    $('#content').remove()
    $('#container').load(url+' #content')

})