$(document).ready(function(){
    $("#owl1").owlCarousel({
        loop:true,
        items: 1,
        startPosition: 2,
        dots: true

    });
    var owl=$("#owl2");
    owl.owlCarousel({
        loop: true,
        items: 6,
        nav:true,
        dost: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 78,
                margin: 20,
                dots: false,
                nav: false
            },
            576:{
                items: 4,
                nav: true,
                dots:false,
                margin: 15,
                stagePadding: 45
            },
            769: {
                items: 6,
                margin: 15,
            },
            992: {
                margin: 15,
                nav: true
            }            
        }
    })    
    $("#nextOwl").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$("#prevOwl").click(function(){
		owl.trigger("prev.owl.carousel");
	});


    $("#owl3").owlCarousel({
        loop: true,
        items: 5,
        dost: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 78,
                margin: 15
            },
            576: {
                items: 5,
                margin: 15,
            },
            1015: {
                margin: 25
            }            
        }
    })
    $("#owl4").owlCarousel({
        loop: true,
        items: 4,
        dost: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 78,
                margin: 20,
                dots:false
            },
            576: {
                items: 4,
                margin: 20,
            },
            1015: {
                margin: 30
            }            
        }
    })

    var openBtn = document.querySelector("#menu-open"),
        closeBtn = document.querySelector("#menu-close"),
        menu = document.querySelector('.sidemenu'),
        carrioMenu = document.querySelector('.carriomenu'),
        closeCarr = document.querySelector('#close-basket'),
        openCarr = document.querySelector('#basket'),
        width = document.documentElement.clientWidth,
        height = document.documentElement.clientWidth;

    var background = document.createElement('div');
        background.classList.add('shadow');
    
    openBtn.addEventListener('click', function(){
        openMenu(menu);
    });
    closeBtn.addEventListener('click', function(){
        closeMenu(menu);
    });
    openCarr.addEventListener('click', function(){
        openMenu(carrioMenu);
    });
    closeCarr.addEventListener('click', function(){
        closeMenu(carrioMenu);
    });

    var openSub = document.querySelectorAll('#open-sub');
    console.log(openSub);

    for (let i = 0; i < openSub.length; i++){
        openSub[i].addEventListener('click', function(){
            openSub[i].nextElementSibling.classList.toggle('open');
            (openSub[i].lastElementChild.innerHTML == '+') ? (openSub[i].lastElementChild.innerHTML = '-') : (openSub[i].lastElementChild.innerHTML = '+')
        })
    }



    function openMenu (a) {
        document.body.insertBefore(background, document.body.childNodes[0]);    
        if (a.classList.contains('sidemenu')){
            a.style.left = "0"; 
        } else if (a.classList.contains('carriomenu')){
            a.style.right = "0";
        }
    }
    function closeMenu (a) {
        let shadow = document.querySelector('.shadow');
        document.body.removeChild(shadow);
        if (a.classList.contains('sidemenu')){
            if (width > 768) {
                a.style.left = "-37.25vw";
            }else if (width > 576 && width < 768) {
                a.style.left = "-36.45833333vw";
            }else if (width <= 576) {
                a.style.left = "-85vw";
            }
        } else if (a.classList.contains('carriomenu')){
            if (width > 768) {
                a.style.right = "-37.25vw";
            }else if (width > 576 && width < 768) {
                a.style.right = "-36.45833333vw";
            }else if (width <= 576) {
                a.style.right = "-85vw";
            }
        }
    }

});