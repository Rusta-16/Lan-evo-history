document.addEventListener('DOMContentLoaded', function () {
    const template = document.getElementById('card-template');

    function createCard(title, carplatform, carengine, wheelbase, carlength, carwidth, carheight, weight, imageSrc) {
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
            '/Lan-evo-history/styles/assets/img/lan1.jpg'
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
            '/Lan-evo-history/styles/assets/img/lan2.jpg'
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
            '/Lan-evo-history/styles/assets/img/lan3.jpg'
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
            '/Lan-evo-history/styles/assets/img/lan4.jpg'
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
            '/Lan-evo-history/styles/assets/img/lan5.jpg'
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
            '/Lan-evo-history/styles/assets/img/lan6.jpg'
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
            '/Lan-evo-history/styles/assets/img/lan7.jpg'
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
            '/Lan-evo-history/styles/assets/img/lan8.jpg'
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
            '/Lan-evo-history/styles/assets/img/lan9.jpg'
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
            '/Lan-evo-history/styles/assets/img/lan10.jpg'
        ));
    }
});