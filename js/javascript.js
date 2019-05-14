$('.navbar .nav-link').click(function (e) { 
    e.preventDefault()
    $('.navbar .nav-link.active').removeClass('active')
    $(this).addClass('active')
});

$('.section-2 .element').click(function (e) { 
    e.preventDefault()
    $('.section-2 .element.active').removeClass('active')
    $(this).addClass('active')
    const text = $(this).text()
    $('.data-show h4').text(text)
});