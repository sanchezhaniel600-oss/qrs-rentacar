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
    qr.setAttribute('aria-label', `Código QR oficial de ${platform.name}`);

    const link = document.createElement('a');
    link.className = 'social-card__link';
    link.href = platform.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Abrir el perfil oficial de AA Rent a Car en ${platform.name}`);
    link.append(document.createTextNode(`Abrir ${platform.name}`));
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
            qr.setAttribute('aria-label', `No se pudo cargar el código QR de ${platform.name}`);
            const message = document.createElement('span');
            message.className = 'social-card__qr-fallback';
            message.textContent = 'Código QR no disponible';
            qr.append(message);
        }

        const footerLink = document.createElement('a');
        footerLink.href = platform.url;
        footerLink.target = '_blank';
        footerLink.rel = 'noopener noreferrer';
        footerLink.setAttribute('aria-label', `AA Rent a Car en ${platform.name}`);
        footerLink.innerHTML = socialIcons[platform.key];
        footer.append(footerLink);
    }

    document.querySelector('#year').textContent = new Date().getFullYear();
}

renderSocialLinks();