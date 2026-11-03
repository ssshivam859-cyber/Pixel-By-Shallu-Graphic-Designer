
// ==================================
// PIXEL BY SHALLU — JAVASCRIPT
// ==================================

// PAGE LOADER

const loader = document.getElementById("loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);
});

// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuBtn.classList.toggle("open", isOpen);
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// CLOSE MENU ON LINK CLICK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", (event) => {
    if (
        !navLinks.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        navLinks.classList.remove("show");
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

// NAVBAR SCROLL EFFECT

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.background = "rgba(9,9,13,.97)";
    } else {
        header.style.background = "rgba(9,9,13,.88)";
    }

}, { passive: true });

// CURRENT YEAR

const yearElements = document.querySelectorAll(".footer-bottom");

yearElements.forEach(element => {
    element.innerHTML = element.innerHTML.replace(
        "2026",
        new Date().getFullYear()
    );
});
