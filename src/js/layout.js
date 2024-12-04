/* menu */
document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.querySelector('.nav_button');
    const navMenu = document.querySelector('.nav_menu');

    if (navButton && navMenu) {
        navButton.addEventListener('click', (event) => {
            event.stopPropagation();
            navMenu.classList.toggle('nav_menu--active');
        });

        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !navButton.contains(event.target)) {
                navMenu.classList.remove('nav_menu--active');
            }
        });
    }
});

/* fade in-out */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // Usa el viewport como referencia
        threshold: 0.1, // Se activa cuando el 10% del elemento está visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el elemento entra en el viewport
                entry.target.classList.add('fade-in-active');
            } else {
                // Cuando el elemento sale del viewport
                entry.target.classList.remove('fade-in-active');
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
});