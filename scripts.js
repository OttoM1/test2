




document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in, .kuva-otto img"); 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0 }); 

    fadeElements.forEach(el => observer.observe(el)); 
});


document.addEventListener("visibilitychange", () => {
    constvideo = document.getElementById("background-video");
    if (document.visibilityState === "visible") {}
});







document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add class when in view
            } else {
                entry.target.classList.remove("show"); // Remove class when out of view
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    fadeElements.forEach(el => observer.observe(el));
});