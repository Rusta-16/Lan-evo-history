document.addEventListener('DOMContentLoaded', function () {
    const template = document.getElementById('card-template');

    function createCard(title, carplatform, carengine, wheelbase, carlength, carwidth, carheight, weight, year, imageSrc) {
        const clone = template.content.cloneNode(true);
        const img = clone.querySelector('.card-img');
        if (img) {
            img.src = imageSrc;
            img.alt = title;
        }
        clone.querySelector('.card-title').textContent = title;
        clone.querySelector('.card-carplatform').textContent = carplatform;
        clone.querySelector('.card-carengine').textContent = carengine;
        clone.querySelector('.card-wheelbase').textContent = wheelbase;
        clone.querySelector('.card-carlength').textContent = carlength;
        clone.querySelector('.card-carwidth').textContent = carwidth;
        clone.querySelector('.card-carheight').textContent = carheight;
        clone.querySelector('.card-weight').textContent = weight;
        clone.querySelector('.card-year').textContent = year
        return clone;
    }

    const container1 = document.getElementById('placeholder1');
    if (container1) {
        container1.appendChild(createCard(
            'Evolution I',
            'CD9A, 4WD',
            '4G63, 2.0 turbo, 244 л.с.',
            '2500 мм.',
            '4310 мм.',
            '1695 мм.',
            '1395 мм.',
            'от 1170 кг до 1240 кг.',
            '1992-1993',
            'styles/assets/img/lan1.png'
        ));
    }

    const container2 = document.getElementById('placeholder2');
    if (container2) {
        container2.appendChild(createCard(
            'Evolution II',
            'CE9A, 4WD',
            '4G63, 2.0 turbo, 252 л.с.',
            '2510 мм',
            '4310 мм.',
            '1695 мм.',
            '1420 мм.',
            'от 1180 кг до 1250 кг.',
            '1993-1994',
            'styles/assets/img/lan2.png'
        ));
    }

    const container3 = document.getElementById('placeholder3');
    if (container3) {
        container3.appendChild(createCard(
            'Evolution III',
            'CE9A, 4WD',
            '4G63, 2.0 turbo, 270 л.с.',
            '2510 мм',
            '4310 мм.',
            '1695 мм.',
            '1420 мм.',
            'от 1190 кг до 1260 кг.',
            '1995',
            '/styles/assets/img/lan3.png'
        ));
    }

    const container4 = document.getElementById('placeholder4');
    if (container4) {
        container4.appendChild(createCard(
            'Evolution IV',
            'CN9A, 4WD',
            '4G63, 2.0 turbo, 276 л.с.',
            '2510 мм',
            '4330 мм.',
            '1690 мм.',
            '1415 мм.',
            'от 1260 кг до 1350 кг.',
            '1996-1997',
            'styles/assets/img/lan4.png'
        ));
    }

    const container5 = document.getElementById('placeholder5');
    if (container5) {
        container5.appendChild(createCard(
            'Evolution V',
            'CP9A, 4WD',
            '4G63T, 2.0 turbo, 280 л.с.',
            '2510 мм',
            '4350 мм.',
            '1770 мм.',
            '1415 мм.',
            'от 1260 кг до 1360 кг.',
            '1998',
            'styles/assets/img/lan5.png'
        ));
    }

    const container6 = document.getElementById('placeholder6');
    if (container6) {
        container6.appendChild(createCard(
            'Evolution VI',
            'CP9A, 4WD',
            '4G63T, 2.0 turbo, 280 л.с.',
            '2510 мм',
            '4350 мм.',
            '1770 мм.',
            '1415 мм.',
            'от 1260 кг до 1360 кг.',
            '1999-2000',
            'styles/assets/img/lan6.png'
        ));
    }

    const container7 = document.getElementById('placeholder7');
    if (container7) {
        container7.appendChild(createCard(
            'Evolution VII',
            'CT9A, 4WD',
            '4G63T, 2.0 turbo, 272 л.с.',
            '2625 мм',
            '4455 мм.',
            '1770 мм.',
            '1450 мм.',
            'от 1320 кг до 1400 кг.',
            '2001-2002',
            'styles/assets/img/lan7.png'
        ));
    }

    const container8 = document.getElementById('placeholder8');
    if (container8) {
        container8.appendChild(createCard(
            'Evolution VIII',
            'CT9A, 4WD',
            '4G63T, 2.0 turbo, 280 л.с.',
            '2625 мм',
            '4490 мм.',
            '1770 мм.',
            '1450 мм.',
            'от 1320 кг до 1410 кг.',
            '2003-2005',
            'styles/assets/img/lan8.png'
        ));
    }

    const container9 = document.getElementById('placeholder9');
    if (container9) {
        container9.appendChild(createCard(
            'Evolution IX',
            'CT9A, 4WD',
            '4G63T, 2.0 turbo, 281 л.с.',
            '2625 мм',
            '4490 мм.',
            '1770 мм.',
            '1450 мм.',
            'от 1320 кг до 1490 кг.',
            '2005-2007',
            'styles/assets/img/lan9.png'
        ));
    }

    const container10 = document.getElementById('placeholder10');
    if (container10) {
        container10.appendChild(createCard(
            'Evolution X',
            'CZ4A, 4WD',
            '4B11T, 2.0 turbo, 295 л.с.',
            '2650 мм',
            '4505 мм.',
            '1810 мм.',
            '1480 мм.',
            'от 1320 кг до 1490 кг.',
            '2007-2016',
            'styles/assets/img/lan10.png'
        ));
    }
});

const darkTheme = document.querySelector('.teme-group')

darkTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
})

$(document).ready(function () {
    $('#evolution-badge1').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 2600
        }, 1300)
    })
})
$(document).ready(function () {
    $('#evolution-badge2').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 3700
        }, 1300)
    })
})
$(document).ready(function () {
    $('#evolution-badge3').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 4800
        }, 1300)
    })
})
$(document).ready(function () {
    $('#evolution-badge4').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 5950
        }, 1300)
    })
})
$(document).ready(function () {
    $('#evolution-badge5').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 7000
        }, 1300)
    })
})
$(document).ready(function () {
    $('#evolution-badge6').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 8150
        }, 1300)
    })
})
$(document).ready(function () {
    $('#evolution-badge7').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 9450
        }, 1300)
    })
})
$(document).ready(function () {
    $('#evolution-badge8').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 10650
        }, 1300)
    })
})
$(document).ready(function () {
    $('#evolution-badge9').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 11850
        }, 1300)
    })
})
$(document).ready(function () {
    $('#evolution-badge10').on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 13150
        }, 1300)
    })
})  