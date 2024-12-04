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

/* scroll gallery */
document.addEventListener('DOMContentLoaded', () => {
    const scrollSection = document.querySelector('.scroll-section');
    const imageContainers = document.querySelectorAll('.gallery_item');

    window.addEventListener('scroll', () => {
        const sectionTop = scrollSection.offsetTop;
        const sectionHeight = scrollSection.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Detectar si el usuario está en la sección
        if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
            const relativeScroll = scrollY - sectionTop;

            // Progreso para el gradiente
            const progress = Math.min(1, (scrollY + windowHeight - sectionTop) / (sectionHeight / 2));
            
            // Interpolación de colores para el fondo
            const startColor1 = [123, 52, 241];
            const startColor2 = [57, 84, 199];
            const endColor1 = [43, 93, 137];
            const endColor2 = [88, 172, 112];

            const interpolatedColor1 = startColor1.map((start, i) =>
                Math.round(start + (endColor1[i] - start) * progress)
            );
            const interpolatedColor2 = startColor2.map((start, i) =>
                Math.round(start + (endColor2[i] - start) * progress)
            );

            // Aplicar el gradiente interpolado
            scrollSection.style.background = `linear-gradient(rgb(${interpolatedColor1.join(',')}) 0%, rgb(${interpolatedColor2.join(',')}) 100%)`;

            // Rotar los contenedores
            const rotationDegree = relativeScroll * 0.02; // Ajustar velocidad
            imageContainers.forEach((container, index) => {
                const rotationOffset = index * 0; // Cambia ligeramente la rotación de cada contenedor
                container.style.transform = `rotate(${rotationDegree + rotationOffset}deg)`;
            });
        }
    });
});
