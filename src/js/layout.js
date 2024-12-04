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
