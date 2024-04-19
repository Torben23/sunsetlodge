(function ($) {
    'use strict';

    var sunset_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    sunset_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#sunsetNav').classyNav();
    }

    // ***************************
    // :: 3.0 Single Project Slide
    // ***************************

    $(".single-project-slide").on("mouseenter", function () {
        $(".single-project-slide").removeClass("active");
        $(this).addClass("active");
    });

    // *********************************
    // :: 4.0 Welcome Slides Active Code
    // *********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            nav: true
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        function welcomeSlide() {
            $('.owl-item').removeClass('prev next');
            var currentSlide = $('.welcome-slides .owl-item.active');
            currentSlide.next('.owl-item').addClass('next');
            currentSlide.prev('.owl-item').addClass('prev');
            var nextSlideImg = $('.owl-item.next').find('.single-welcome-slide').attr('data-img-url');
            var prevSlideImg = $('.owl-item.prev').find('.single-welcome-slide').attr('data-img-url');
            $('.owl-nav .owl-prev').css({
                background: 'url(' + prevSlideImg + ')'
            });
            $('.owl-nav .owl-next').css({
                background: 'url(' + nextSlideImg + ')'
            });
        }

        welcomeSlide();

        welcomeSlider.on('translated.owl.carousel', function () {
            welcomeSlide();
        });
    }

    // *********************************
    // :: 5.0 Project Slides Active Code
    // *********************************
    if ($.fn.owlCarousel) {
        var projectSlide = $('.projects-slides');
        projectSlide.owlCarousel({
            items: 5,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                },
                1500: {
                    items: 4
                }
            }
        });
    }

    // *************************************
    // :: 6.0 Testimonial Slides Active Code
    // *************************************
    if ($.fn.owlCarousel) {
        var testiThumbSlide = $('.testimonial-thumbnail');
        testiThumbSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 500
        });
    }
    if ($.fn.owlCarousel) {
        var testiSlides = $('.testimonial-slides');
        testiSlides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1000
        });
    }

    // *******************************
    // :: 7.0 Rooms Slides Active Code
    // *******************************
    if ($.fn.owlCarousel) {
        var roomSlides = $('.rooms-slides');
        roomSlides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: [('<i class="fa fa-long-arrow-left" aria-hidden="true"></i> Previous'), ('Next <i class="fa fa-long-arrow-right" aria-hidden="true"></i>')]
        });

        roomSlides.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        roomSlides.on('translated.owl.carousel', function () {
            var layer = roomSlides.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    
    // *********************************
    // :: 9.0 Magnific Popup Active Code
    // *********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
    }

    // ***************************
    // :: 10.0 Tooltip Active Code
    // ***************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 11.0 WOW Active Code
    // ***********************
    if (sunset_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 12.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }

    // ****************************
    // :: 13.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        sunset_window.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="arrow_carrot-2up"</i>'
        });
    }

    // ******************************
    // :: 14.0 Counter Up Active Code
    // ******************************
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 15,
            time: 1500
        });
    }

    // *********************************
    // :: 15.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // *****************************
    // :: 16.0 Countdown Active Code
    // *****************************
    if ($.fn.countdown) {
        $("#clock").countdown("2021/10/10", function (event) {
            $(this).html(event.strftime("<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Mins</span></div> <div>%S <span>Sec</span></div>"));
        });
    }

    // *******************************
    // :: 17.0 Nice Select Active Code
    // *******************************
    if ($.fn.countdown) {
        $('select').niceSelect();
    }

    // ******************************
    // :: 18.0 Datepicker Active Code
    // ******************************
    if ($.fn.datepicker) {
        $('.input-daterange').datepicker({
            format: "dd/mm/yy",
            multidate: true,
            keyboardNavigation: false,
            forceParse: false,
            daysOfWeekHighlighted: "0,1,2,3,4,5,6",
            todayHighlight: true
        });
    }

    // ********************************
    // :: 19.0 Range Slider Active Code
    // ********************************
    $('.slider-range-price').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = $(this);
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                console.log(t);
                t.closest('.slider-range').find('.range-price').html(result);
            }
        });
    })
    
    // ********************************
        // :: 21.0 Cookies
        // ********************************

    document.addEventListener("DOMContentLoaded", function() {
        // Selecciona los botones de aceptar y rechazar
        var acceptButton = document.querySelector(".btn-accept");
        var rejectButton = document.querySelector(".btn-reject");

        // Función para establecer una cookie
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        // Función para aceptar las cookies
        function acceptCookies() {
            // Aquí puedes escribir el código para aceptar las cookies
            // En este ejemplo, simplemente estableceremos una cookie de aceptación con una fecha de caducidad futura
            setCookie("cookiesAccepted", "true", 365); // Establece la cookie de aceptación como true con una fecha de caducidad de 365 días
            // Oculta el mensaje de consentimiento de cookies
            document.querySelector(".cookie-consent").style.display = "none";
        }

        // Función para rechazar las cookies
        function rejectCookies() {
            // Aquí puedes escribir el código para eliminar o desactivar las cookies
            // En este ejemplo, simplemente estableceremos una cookie de aceptación con una fecha de caducidad pasada
            setCookie("cookiesAccepted", "false", -1); // Establece la cookie de aceptación como false con una fecha de caducidad pasada
            // Oculta el mensaje de consentimiento de cookies
            document.querySelector(".cookie-consent").style.display = "none";
        }

        // Agrega un evento de clic al botón de aceptar
        acceptButton.addEventListener("click", function() {
            acceptCookies();
        });

        // Agrega un evento de clic al botón de rechazar
        rejectButton.addEventListener("click", function() {
            rejectCookies();
        });
    });

    // Script para enviar mensaje por WhatsApp 

    function sendWhatsAppMessage() {
        var name = document.getElementById('name').value;        
        var email = document.getElementById('email').value;        
        var message = document.getElementById('message').value;
    
        // Construct the WhatsApp message with reservation information
        var whatsappMessage = "Consulta:%0A" + "Nombre: " + name + "%0AEmail: " + email + "%0AMensaje: " + message;
    
        // Create the WhatsApp link
        var whatsappLink = "https://wa.me/50254936161/?text=" + whatsappMessage;
    
        // Open the link in a new window/tab
        window.open(whatsappLink, "_blank");
    }
    
    // Add click event listener to the WhatsApp button
    document.getElementById('whatsappLink').addEventListener('click', function(event) {
        // Prevenir la acción por defecto del botón (enviar el formulario)
        event.preventDefault();
        // Llamar a la función para enviar el mensaje por WhatsApp
        sendWhatsAppMessage();
    });


    // Función para manejar el hover sobre el botón de promo code
    function handlePromoButtonHover() {
        var promoButton = document.getElementById('promoButton');
        promoButton.textContent = "Best Sunsets";
    }

    // Función para manejar el mouse fuera del botón de promo code
    function handlePromoButtonMouseOut() {
        var promoButton = document.getElementById('promoButton');
        promoButton.textContent = "Promo Code";
    }

    // Agregar event listener para el hover sobre el botón de promo code
    document.getElementById('promoButton').addEventListener('mouseenter', handlePromoButtonHover);

    // Agregar event listener para el mouse fuera del botón de promo code
    document.getElementById('promoButton').addEventListener('mouseleave', handlePromoButtonMouseOut);


    

})(jQuery);

