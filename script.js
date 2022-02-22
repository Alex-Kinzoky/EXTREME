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
    $('.user-notificarion-card').hide()
    $('.user-setting-card').hide()
    $('.user-card').hide()
    $('.workload').hide()
    $('.user-button-desktop').hide()
    $('.admin-information-add-card').hide()
    $('.moderator-rejection-card').hide()
    var height = $('body').height() - $('.header').height()
    $('.chat-list').css('height', height)
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
            $('.mobile-user-menu').click(function(){
                if ($(this).parent().find('.user-button-mobile').is(':visible')){
                    $(this).parent().find('.user-button-mobile').hide()
                } else {
                    $(this).parent().find('.user-button-mobile').show()
                }
            })
        }
    });
    $('#login').click(function(){
        var old_link = window.location.href
        if ($(this).parent().find('input[type="email"]').val() == 'user@mail.com'){
            var new_link = old_link.replace(/login/gi, 'user-tape')
            window.location.href = new_link
        }
        if ($(this).parent().find('input[type="email"]').val() == 'partners@mail.com'){
            var new_link = old_link.replace(/login/gi, 'partners-index')
            window.location.href = new_link
        }
        if ($(this).parent().find('input[type="email"]').val() == 'admin@mail.com'){
            var new_link = old_link.replace(/login/gi, 'admin-index')
            window.location.href = new_link
        }
        if ($(this).parent().find('input[type="email"]').val() == 'moderator@mail.com'){
            var new_link = old_link.replace(/login/gi, 'moderator-index')
            window.location.href = new_link
        }
        return false
    })
    $('.rejection').click(function(){
        $('.moderator-rejection-card').hide()
        $(this).parent().parent().parent().find('.moderator-rejection-card').show()
    })
    $('.close-image').click(function(){
        $('.moderator-rejection-card').hide()
    })
    $('.close-image').click(function(){
        $('.admin-information-add-card').hide()
    })
    $('.admin-informarion-add').click(function(){
        $('.admin-information-add-card').hide()
        $(this).parent().find('.admin-information-add-card').show()
    })
    $('.mobile-user-menu').click(function(){
        $(this).parent().parent().find('.user-button-desktop').show()
    })
    $(document).mouseup( function(e){ 
        var div = $( ".user-button-desktop" );
        if ( !div.is(e.target)  && div.has(e.target).length === 0 ) { 
            div.hide(); 
        }
    });
    $('#attendance').click(function(){
        $('#workload').removeClass('active')
        $('.workload').hide()
        $('.attendance').show()
        $('#attendance').addClass('active')
    })
    $('#workload').click(function(){
        $('#attendance').removeClass('active')
        $('.attendance').hide()
        $('.workload').show()
        $('#workload').addClass('active')
    })
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
    $('#user-notification').click(function(){
        $('.user-notificarion-card').show()
    })
    $(document).mouseup( function(e){ 
        var div = $( ".user-notificarion-card" );
        if ( !div.is(e.target)  && div.has(e.target).length === 0 ) { 
            div.hide(); 
        }
    });
    $('#user-setting').click(function(){
        $('.user-setting-card').show()
    })
    $(document).mouseup( function(e){ 
        var div = $( ".user-setting-card" );
        if ( !div.is(e.target)  && div.has(e.target).length === 0 ) { 
            div.hide(); 
        }
    });
    $('.open-user-card').click(function(){
        $('.user-card').hide()
        $(this).parent().find('.user-card').show();
        
    })
    $(document).mouseup( function(e){ 
        var div = $( ".user-card" );
        if ( !div.is(e.target)  && div.has(e.target).length === 0 ) { 
            div.hide(); 
        }
    });
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
        if ($(this).is(':contains("Город, регион")')){
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