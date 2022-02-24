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
    $('.left-podmenu').hide()
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
    $('#open-left-podmenu').click(function(){
        if($('.left-podmenu').is(':visible')){
            $('.left-podmenu').hide()
        } else{
            $('.left-podmenu').show()
        }
        
    })
    $('.nav-sort').find('.button').click(function(){
        $('.nav-sort').find('.button').removeClass('blue')
        $('.nav-sort').find('.button').removeClass('text-white')
        $('.nav-sort').find('.button').addClass('text-blue')
        $(this).addClass('blue')
        $(this).removeClass('text-blue')
        $(this).addClass('text-white')
    })
    $('.left-menu.white-white-border').find('a').click(function(){
        $('.left-menu.white-white-border').find('a').removeClass('text-blue')
        $('.left-menu.white-white-border').find('a').addClass('text-black')
        $(this).removeClass('text-black')
        $(this).addClass('text-blue')
    })
    var fileName = location.href.split("/").slice(-1); 
    $('.left-menu').find('a').each(function(index, value){
        if (fileName == 'index.html'){
            if ($(this).text() == 'Виды спорта'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'guest-tape.html'){
            if ($(this).text() == 'Бортжурналы'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'guest-place.html'){
            if ($(this).text() == 'Места катания'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'guest-events.html'){
            if ($(this).text() == 'Мероприятия'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'guest-partners.html'){
            if ($(this).text() == 'Партнёры'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'user-sports.html'){
            if ($(this).text() == 'Виды спорта'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'user-tape.html'){
            if ($(this).text() == 'Лента'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'user-place.html'){
            if ($(this).text() == 'Места катания'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'user-events.html'){
            if ($(this).text() == 'Мероприятия'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'user-partners.html'){
            if ($(this).text() == 'Партнёры'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'user-myfavourites.html'){
            if ($(this).text() == 'Избранное'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'user-mystorage.html'){
            if ($(this).text() == 'Моя кладовка'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'user-myplace.html'){
            if ($(this).text() == 'Мои места катания'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'user-myevents.html'){
            if ($(this).text() == 'Мои мероприятия'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'admin-index.html'){
            if ($(this).text() == 'Главная'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'admin-tape.html'){
            if ($(this).text() == 'Лента'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'admin-users.html'){
            if ($(this).text() == 'Пользователи'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'admin-black-list.html'){
            if ($(this).text() == 'Чёрный список'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'admin-portal-status.html'){
            if ($(this).text() == 'Состояние портала'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'admin-analytics.html'){
            if ($(this).text() == 'Аналитика'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'admin-information.html'){
            if ($(this).text() == 'Информация'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'admin-chat.html'){
            if ($(this).text() == 'Техническая поддержка'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'moderator-index.html'){
            if ($(this).text() == 'Главная'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'moderator-tape.html'){
            if ($(this).text() == 'Лента'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'moderator-users.html'){
            if ($(this).text() == 'Пользователи'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'moderator-black-list.html'){
            if ($(this).text() == 'Чёрный список'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'partners-index.html'){
            if ($(this).text() == 'Главная'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'partners-tape.html'){
            if ($(this).text() == 'Лента'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
        }
        if (fileName == 'partners-advertisement.html'){
            if ($(this).text() == 'Рекламная кампания'){
                $(this).removeClass('text-black')
                $(this).addClass('text-blue')
            }
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