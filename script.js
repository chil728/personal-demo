AOS.init({ duration: 1000, once: true });

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#3b82f6" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.4,
            width: 1,
        },
        move: { enable: true, speed: 3, direction: "none", out_mode: "out" },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
        },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } },
    },
    retina_detect: true,
});

new Typed("#typed-text", {
    strings: ["Web Developer", "UI Designer", "Frontend Engineer"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("nav");
    const headerHeight = header.offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const elementPosition =
                        targetElement.getBoundingClientRect().top +
                        window.scrollY;
                    const offsetPosition = elementPosition - headerHeight;

                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: offsetPosition, autoKill: true },
                        ease: "power2.inOut",
                        onComplete: () => {
                            gsap.fromTo(
                                targetElement,
                                { opacity: 0, y: 30 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.6,
                                    ease: "power2.out",
                                }
                            );
                        },
                    });
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menuContainer = document.getElementById("menu-container");
    const menuLinks = menuContainer.querySelectorAll("a");
    let menuOpen = false;

    function openMenu() {
        menuContainer.classList.remove("hidden");
        gsap.fromTo(
            menuContainer,
            { y: "-100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 0.6, ease: "power4.out" }
        );
        menuOpen = true;
    }

    function closeMenu() {
        gsap.to(menuContainer, {
            y: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power4.in",
            onComplete: () => menuContainer.classList.add("hidden"),
        });
        menuOpen = false;
    }

    menuBtn.addEventListener("click", () => {
        menuOpen ? closeMenu() : openMenu();
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (menuOpen) {
                closeMenu();
            }
        });
    });
});