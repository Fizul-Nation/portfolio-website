// --- 3D TILT EFFECT LOGIC (DESKTOP ONLY) ---
const card = document.getElementById('comicCard');
const container = document.getElementById('cardWrapper');

if (!('ontouchstart' in window)) {
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform =
          `perspective(1000px) rotateX(${y / -10}deg) rotateY(${x / 10}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        card.style.transform =
          `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
}


// --- THEME SWITCHER (Hero / Villain) ---
const themeBtn = document.getElementById('themeBtn');
const icon = themeBtn.querySelector('i');
const body = document.body;

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        // Switch to Hero (Light)
        body.setAttribute('data-theme', 'light');
        icon.className = 'ri-moon-clear-line';
        document.querySelector('.status-badge').innerText = "PRO";
        document.querySelector('.status-badge').style.backgroundColor = "var(--accent-primary)";
    } else {
        // Switch to Villain (Dark)
        body.setAttribute('data-theme', 'dark');
        icon.className = 'ri-sun-line';
        document.querySelector('.status-badge').innerText = "LEGEND";
        document.querySelector('.status-badge').style.backgroundColor = "var(--accent-secondary)";
    }
});