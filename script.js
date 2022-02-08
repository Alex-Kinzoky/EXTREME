$(document).ready(function(){
    $('#sport').hide()
    $('#model').hide()
    $('#location').hide()
    $('#level').hide()
    $('#about').hide()
    $('#join-window').hide()
    $(function(){
        if ( $(window).width() > 460 ) {
            $(window).scroll(function(){
                if($(window).scrollTop() > 500) {
                    $('.up').show();
                } else {
                    $('.up').hide();
                }
            });
        } else{
            $('.up').hide();
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