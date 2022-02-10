$(document).ready(function(){
    $('#sport').hide()
    $('#model').hide()
    $('#location').hide()
    $('#level').hide()
    $('#about').hide()
    $('#join-window').hide()
    $('.user-button-mobile').hide()
    $('.location').attr('placeholder','')
    $('.left-menu-mobile').hide()
    $('.menu-search-mobile').hide()
    $('.filter-card').hide()
    $(function(){
        if ($(window).width() > 960){
            //$('.filter-card').width($('.search-line').width())
            $('.location').attr('placeholder','')
            $(window).scroll(function(){
                if($(window).scrollTop() > 500) {
                    $('.up').show();
                } else {
                    $('.up').hide();
                }
            });
        } else{
            $('.location').attr('placeholder','Страна, регион, город')
        }
    });
    
    $('.close-image').click(function(){
        $('.filter-card').hide()
    })
    $('.filter-image').click(function(){
        $('.filter-card').show()
    })
    if($('.filter-image').is(':visible')){
        $(document).mouseup( function(e){ 
            var div = $( ".filter-card" );
            if ( !div.is(e.target)  && div.has(e.target).length === 0 ) { 
                div.hide(); 
            }
        });
    }
    
    $('.mobile-menu').click(function(){
        $('.left-menu-mobile').show()
        $('.menu-search-mobile').hide()
    })
    $('.left-menu-close').click(function(){
        $('.left-menu-mobile').hide()
    })
    $('.search-button').click(function(){
        if($('.menu-search-mobile').is(':visible')){
            $('.menu-search-mobile').hide()
        } else{
            $('.menu-search-mobile').show()
        }
        
    })
    $('.mobile-user-menu').click(function(){
        if ($('.user-button-mobile').is(':visible')){
            $('.user-button-mobile').hide()
        } else {
            $('.user-button-mobile').show()
        }
    })
    $(document).mouseup( function(e){ 
		var div = $( ".user-button-mobile" );
		if ( !div.is(e.target)  && div.has(e.target).length === 0 ) { 
			div.hide(); 
		}
	});
    $('.up').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
    $('.right-filter button').click(function(){
        if ($(this).is(':contains("Вид спорта")')){
            if ($('#sport').is(':visible')){
                $('.podmenu-filter').hide()
            } else{
                $('.podmenu-filter').hide()
                $('#sport').show()
            }  
        }
        if ($(this).is(':contains("Модель снаряжения")')){
            if ($('#model').is(':visible')){
                $('.podmenu-filter').hide()
            } else{
                $('.podmenu-filter').hide()
                $('#model').show()
            }
        }
        if ($(this).is(':contains("Локация")')){
            if ($('#location').is(':visible')){
                $('.podmenu-filter').hide()
            } else{
                $('.podmenu-filter').hide()
                $('#location').show()
            }
        }
        if ($(this).is(':contains("Уровень подготовки")')){
            if ($('#level').is(':visible')){
                $('.podmenu-filter').hide()
            } else{
                $('.podmenu-filter').hide()
                $('#level').show()
            }  
        }
        if ($(this).is(':contains("О чём")')){
            if ($('#about').is(':visible')){
                $('.podmenu-filter').hide()
            } else{
                $('.podmenu-filter').hide()
                $('#about').show()
            }
        }
    })
    $('#join').click(function(){
        $('#join-window').show()
    })
    $('#join-window').click(function(){
        $('#join-window').hide()
    })
    $('.join-card').on('click', function(event) {
        event.stopPropagation();
    });
})