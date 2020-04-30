$(document).ready(function() {
    $('.banner .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            991: {
                items: 2
            },
            1000: {
                items: 2
            }
        }


    })
    $('.category .owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            574: {
                items: 1
            },
            767: {
                items: 4
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
    $('.featured__slide .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 35,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
});
$('.brand__slide .owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5,
            margin: 40,
        }
    }
})