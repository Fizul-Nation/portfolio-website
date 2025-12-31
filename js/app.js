    
        // --- 3D TILT EFFECT LOGIC ---
        // This gives the "Premium" feel by making the card react to mouse movement
        const card = document.getElementById('comicCard');
        const container = document.getElementById('cardWrapper');

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            // Calculate mouse position relative to center of card
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Rotate amount (divide to reduce intensity)
            const rotateX = y / -10; 
            const rotateY = x / 10;

            // Apply transform
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Reset when mouse leaves
        container.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });

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

        // --- BUTTON RIPPLE EFFECT (Pure CSS/JS hybrid) ---
        // Adds a subtle comic burst effect on click
        document.querySelectorAll('.comic-btn').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.style.transform = "scale(0.95)";
            });
            btn.addEventListener('mouseup', () => {
                btn.style.transform = "scale(1)";
            });
        });
    