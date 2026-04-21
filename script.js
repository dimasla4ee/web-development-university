function scrollToPlayer(id) {
    document.getElementById(id).scrollIntoView(
        {
            behavior: 'smooth'
        }
    );
}

const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => link.classList.remove("active"));

                const id = entry.target.id;
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    },
    {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0
    }
);

sections.forEach(section => observer.observe(section));