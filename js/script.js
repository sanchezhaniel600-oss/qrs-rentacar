const socialLinks = [
    {
        key: 'instagram',
        name: 'Instagram',
        username: '@rent_a_car_aa_2026',
        url: 'https://www.instagram.com/rent_a_car_aa_2026'
    },
    {
        key: 'tiktok',
        name: 'TikTok',
        username: '@aarentacar6',
        url: 'https://www.tiktok.com/@aarentacar6'
    },
    {
        key: 'facebook',
        name: 'Facebook',
        username: '',
        url: 'https://www.facebook.com/profile.php?id=61594082246261'
    }
];

const socialIcons = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 7.2a5.3 5.3 0 0 1-3.4-1.3v8.4a5.9 5.9 0 1 1-5.1-5.8v3.2a2.8 2.8 0 1 0 1.9 2.6V2h3.2a5.4 5.4 0 0 0 3.4 3.1v2.1Z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.7v3.1h2.7v8h3.3Z"/></svg>'
};

const translations = {
    es: {
        pageTitle: 'AA Rent a Car | Encuéntranos en nuestras redes',
        metaDescription: 'Encuentra los perfiles oficiales de AA Rent a Car en Instagram, TikTok y Facebook. Escanea cada código QR o abre la red social directamente.',
        socialDescription: 'Tu camino, tu libertad. Encuentra los perfiles oficiales de AA Rent a Car.',
        logoAlt: 'Logo oficial de AA Rent a Car',
        homeLabel: 'AA Rent a Car, inicio',
        tagline: 'Tu camino, tu libertad.',
        officialProfiles: 'Redes',
        languageSelector: 'Seleccionar idioma',
        heroEyebrow: 'AA RENT A CAR · PERFILES OFICIALES',
        heroTitleFirst: 'Tu camino,',
        heroTitleSecond: 'tu libertad.',
        heroDescription: 'Encuéntranos en nuestras plataformas.',
        exploreSocials: 'Explorar redes',
        carouselLabel: 'Fotografías de vehículos',
        carouselRole: 'carrusel',
        slideRole: 'diapositiva',
        slidePosition: (position, total) => `${position} de ${total}`,
        selectPhoto: 'Seleccionar fotografía',
        showPhoto: position => `Mostrar fotografía ${position}`,
        previousPhoto: 'Fotografía anterior',
        nextPhoto: 'Fotografía siguiente',
        pauseCarousel: 'Pausar carrusel',
        resumeCarousel: 'Reanudar carrusel',
        socialEyebrow: 'CONECTA CON AA',
        socialTitleFirst: 'Escanea y',
        socialTitleSecond: 'síguenos',
        socialNetworks: 'Redes sociales oficiales',
        open: 'Abrir',
        openProfile: name => `Abrir el perfil oficial de AA Rent a Car en ${name}`,
        qrAlt: name => `Código QR oficial de ${name}`,
        qrUnavailable: name => `No se pudo cargar el código QR de ${name}`,
        footerSocial: name => `AA Rent a Car en ${name}`,
        contactEyebrow: 'CONTACTO',
        contactTitleFirst: 'Estamos en',
        city: 'León',
        country: 'NICARAGUA',
        phone: 'Teléfono',
        call: 'Llamar',
        address: 'Dirección',
        addressDetails: '21000 Pali Guadalupe, 1 cuadra al norte, 2.5 cuadras al este, León 21000, Nicaragua.',
        businessHours: 'Horario de atención',
        hours: '24 horas',
        everyDay: 'Todos los días'
    },
    en: {
        pageTitle: 'AA Rent a Car | Find us on social media',
        metaDescription: 'Find AA Rent a Car official profiles on Instagram, TikTok, and Facebook. Scan a QR code or open a social profile directly.',
        socialDescription: 'Your road, your freedom. Find AA Rent a Car official profiles.',
        logoAlt: 'Official AA Rent a Car logo',
        homeLabel: 'AA Rent a Car, home',
        tagline: 'Your road, your freedom.',
        officialProfiles: 'Socials',
        languageSelector: 'Select language',
        heroEyebrow: 'AA RENT A CAR · OFFICIAL PROFILES',
        heroTitleFirst: 'Your road,',
        heroTitleSecond: 'your freedom.',
        heroDescription: 'Find us on our platforms.',
        exploreSocials: 'Explore social media',
        carouselLabel: 'Vehicle photographs',
        carouselRole: 'carousel',
        slideRole: 'slide',
        slidePosition: (position, total) => `${position} of ${total}`,
        selectPhoto: 'Select photo',
        showPhoto: position => `Show photo ${position}`,
        previousPhoto: 'Previous photo',
        nextPhoto: 'Next photo',
        pauseCarousel: 'Pause carousel',
        resumeCarousel: 'Resume carousel',
        socialEyebrow: 'CONNECT WITH AA',
        socialTitleFirst: 'Scan and',
        socialTitleSecond: 'follow us',
        socialNetworks: 'Official social media',
        open: 'Open',
        openProfile: name => `Open AA Rent a Car's official ${name} profile`,
        qrAlt: name => `Official ${name} QR code`,
        qrUnavailable: name => `The ${name} QR code could not be loaded`,
        footerSocial: name => `AA Rent a Car on ${name}`,
        contactEyebrow: 'CONTACT',
        contactTitleFirst: "We're in",
        city: 'León',
        country: 'NICARAGUA',
        phone: 'Phone',
        call: 'Call',
        address: 'Address',
        addressDetails: '21000 Pali Guadalupe, 1 block north, 2.5 blocks east, León 21000, Nicaragua.',
        businessHours: 'Business hours',
        hours: '24 hours',
        everyDay: 'Every day'
    }
};

let currentLanguage = 'es';

try {
    currentLanguage = localStorage.getItem('aa-rent-a-car-language') === 'en' ? 'en' : 'es';
} catch {
    currentLanguage = 'es';
}

function text(key) {
    return translations[currentLanguage][key];
}

const vehicleImages = [
    {
        file: 'WhatsApp Image 2026-10-07 at 2.35.33 PM.jpeg',
        alt: { es: 'Pickup blanca estacionada en un espacio abierto', en: 'White pickup truck parked in an open area' }
    },
    {
        file: 'WhatsApp Image 2026-10-07 at 2.35.37 PM.jpeg',
        alt: { es: 'Pickup blanca vista de lado en exterior', en: 'White pickup truck seen from the side outdoors' }
    },
    {
        file: 'WhatsApp Image 2026-10-07 at 2.35.38 PM (1).jpeg',
        alt: { es: 'SUV naranja vista de frente', en: 'Orange SUV viewed from the front' }
    },
    {
        file: 'WhatsApp Image 2026-10-07 at 2.35.39 PM.jpeg',
        alt: { es: 'SUV naranja vista en diagonal', en: 'Orange SUV viewed at an angle' }
    },
    {
        file: 'WhatsApp Image 2026-10-07 at 2.35.44 PM.jpeg',
        alt: { es: 'SUV naranja estacionada bajo techo', en: 'Orange SUV parked under a roof' }
    },
    {
        file: 'WhatsApp Image 2026-10-07 at 2.35.45 PM.jpeg',
        alt: { es: 'SUV naranja vista desde atrás', en: 'Orange SUV viewed from the rear' }
    }
];

function renderVehicleCarousel() {
    const slidesContainer = document.querySelector('#vehicle-slides');
    const dotsContainer = document.querySelector('#vehicle-dots');
    const counter = document.querySelector('#vehicle-count');
    const carousel = document.querySelector('.hero__visual');
    let activeIndex = 0;
    let intervalId;
    let manuallyPaused = false;
    let focusInside = false;

    function updateSlide(index) {
        activeIndex = (index + vehicleImages.length) % vehicleImages.length;

        slidesContainer.querySelectorAll('.hero__slide').forEach((slide, slideIndex) => {
            const isActive = slideIndex === activeIndex;
            slide.classList.toggle('is-active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
        });

        dotsContainer.querySelectorAll('.hero__carousel-dot').forEach((dot, dotIndex) => {
            dot.setAttribute('aria-current', String(dotIndex === activeIndex));
        });

        counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(vehicleImages.length).padStart(2, '0')}`;
    }

    function stopAutoplay() {
        window.clearInterval(intervalId);
        intervalId = undefined;
    }

    function startAutoplay() {
        stopAutoplay();
        if (manuallyPaused || focusInside || document.hidden) return;
        intervalId = window.setInterval(() => updateSlide(activeIndex + 1), 5000);
    }

    vehicleImages.forEach((vehicle, index) => {
        const slide = document.createElement('div');
        slide.className = `hero__slide${index === 0 ? ' is-active' : ''}`;
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-roledescription', text('slideRole'));
        slide.setAttribute('aria-label', text('slidePosition')(index + 1, vehicleImages.length));
        slide.setAttribute('aria-hidden', String(index !== 0));

        const image = document.createElement('img');
        image.src = `assets/${vehicle.file}`;
        image.alt = vehicle.alt[currentLanguage];
        image.decoding = 'async';
        image.loading = index === 0 ? 'eager' : 'lazy';
        slide.append(image);
        slidesContainer.append(slide);

        const dot = document.createElement('button');
        dot.className = 'hero__carousel-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', text('showPhoto')(index + 1));
        dot.setAttribute('aria-current', String(index === 0));
        dot.addEventListener('click', () => {
            updateSlide(index);
            startAutoplay();
        });
        dotsContainer.append(dot);
    });

    const previousButton = carousel.querySelector('[data-carousel-previous]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const toggleButton = carousel.querySelector('[data-carousel-toggle]');

    previousButton.addEventListener('click', () => {
        updateSlide(activeIndex - 1);
        startAutoplay();
    });
    nextButton.addEventListener('click', () => {
        updateSlide(activeIndex + 1);
        startAutoplay();
    });
    toggleButton.addEventListener('click', () => {
        manuallyPaused = !manuallyPaused;
        toggleButton.setAttribute('aria-pressed', String(manuallyPaused));
        toggleButton.setAttribute('aria-label', text(manuallyPaused ? 'resumeCarousel' : 'pauseCarousel'));
        toggleButton.firstElementChild.textContent = manuallyPaused ? '▶' : 'Ⅱ';
        if (manuallyPaused) stopAutoplay();
        else startAutoplay();
    });

    carousel.addEventListener('focusin', () => {
        focusInside = true;
        stopAutoplay();
    });
    carousel.addEventListener('focusout', event => {
        if (carousel.contains(event.relatedTarget)) return;
        focusInside = false;
        startAutoplay();
    });
    document.addEventListener('visibilitychange', startAutoplay);

    updateSlide(0);
    startAutoplay();
}

function createSocialCard(platform) {
    const card = document.createElement('article');
    card.className = `social-card social-card--${platform.key}`;

    const heading = document.createElement('div');
    heading.className = 'social-card__heading';

    const icon = document.createElement('span');
    icon.className = 'social-card__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = socialIcons[platform.key];

    const titleGroup = document.createElement('div');
    const name = document.createElement('span');
    name.className = 'social-card__name';
    name.textContent = platform.name;
    const username = document.createElement('span');
    username.className = 'social-card__username';
    username.textContent = platform.username;
    titleGroup.append(name, username);
    heading.append(icon, titleGroup);

    const qr = document.createElement('div');
    qr.className = 'social-card__qr';
    qr.setAttribute('role', 'img');
    qr.setAttribute('aria-label', text('qrAlt')(platform.name));

    const link = document.createElement('a');
    link.className = 'social-card__link';
    link.href = platform.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', text('openProfile')(platform.name));
    link.append(document.createTextNode(`${text('open')} ${platform.name}`));
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    link.append(arrow);

    card.append(heading, qr, link);
    return { card, qr };
}

function renderSocialLinks() {
    const grid = document.querySelector('#social-grid');
    const footer = document.querySelector('#footer-socials');

    for (const platform of socialLinks) {
        const { card, qr } = createSocialCard(platform);
        grid.append(card);

        if (typeof QRCode === 'function') {
            new QRCode(qr, {
                text: platform.url,
                width: 200,
                height: 200,
                colorDark: '#10294b',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
        } else {
            qr.setAttribute('role', 'status');
            qr.setAttribute('aria-label', text('qrUnavailable')(platform.name));
            const message = document.createElement('span');
            message.className = 'social-card__qr-fallback';
            message.textContent = currentLanguage === 'es' ? 'Código QR no disponible' : 'QR code unavailable';
            qr.append(message);
        }

        const footerLink = document.createElement('a');
        footerLink.href = platform.url;
        footerLink.target = '_blank';
        footerLink.rel = 'noopener noreferrer';
        footerLink.setAttribute('aria-label', text('footerSocial')(platform.name));
        footerLink.innerHTML = socialIcons[platform.key];
        footer.append(footerLink);
    }

    document.querySelector('#year').textContent = new Date().getFullYear();
}

function setLanguage(language) {
    currentLanguage = translations[language] ? language : 'es';
    const dictionary = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = dictionary[element.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-content]').forEach(element => {
        element.setAttribute('content', dictionary[element.dataset.i18nContent]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        element.setAttribute('aria-label', dictionary[element.dataset.i18nAria]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        element.alt = dictionary[element.dataset.i18nAlt];
    });
    document.querySelectorAll('[data-i18n-roledescription]').forEach(element => {
        element.setAttribute('aria-roledescription', dictionary[element.dataset.i18nRoledescription]);
    });

    document.querySelectorAll('[data-language]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
    });
    document.querySelectorAll('.hero__slide').forEach((slide, index) => {
        slide.setAttribute('aria-roledescription', dictionary.slideRole);
        slide.setAttribute('aria-label', dictionary.slidePosition(index + 1, vehicleImages.length));
        slide.querySelector('img').alt = vehicleImages[index].alt[currentLanguage];
    });
    document.querySelectorAll('.hero__carousel-dot').forEach((dot, index) => {
        dot.setAttribute('aria-label', dictionary.showPhoto(index + 1));
    });

    const toggleButton = document.querySelector('[data-carousel-toggle]');
    const toggleLabel = toggleButton.getAttribute('aria-pressed') === 'true' ? 'resumeCarousel' : 'pauseCarousel';
    toggleButton.setAttribute('aria-label', dictionary[toggleLabel]);

    socialLinks.forEach((platform, index) => {
        const card = document.querySelectorAll('.social-card')[index];
        if (!card) return;
        card.querySelector('.social-card__qr').setAttribute('aria-label', dictionary.qrAlt(platform.name));
        const link = card.querySelector('.social-card__link');
        link.setAttribute('aria-label', dictionary.openProfile(platform.name));
        link.firstChild.textContent = `${dictionary.open} ${platform.name}`;
    });
    document.querySelectorAll('.footer-socials a').forEach((link, index) => {
        link.setAttribute('aria-label', dictionary.footerSocial(socialLinks[index].name));
    });
    document.querySelectorAll('.social-card__qr-fallback').forEach(message => {
        message.textContent = currentLanguage === 'es' ? 'Código QR no disponible' : 'QR code unavailable';
    });

    try {
        localStorage.setItem('aa-rent-a-car-language', currentLanguage);
    } catch {
        // Language switching still works when storage is unavailable.
    }
}

document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
});

renderVehicleCarousel();
renderSocialLinks();
setLanguage(currentLanguage);