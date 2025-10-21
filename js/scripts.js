import { fillCardSkills } from "./skills.js";
import { fillCardProjects } from "./projects.js";

const pathname = window.location.pathname;

console.log("pathname", pathname);
document.addEventListener("DOMContentLoaded", function () {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector('input[type="checkbox"]').checked = true;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.querySelector('input[type="checkbox"]').checked = false;
  }
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#4f46e5",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 170,
        color: "#4f46e5",
        opacity: 0.7,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  if (pathname === "/"|| pathname === "/index.html" || pathname === "/portafolio-frontendfunval2025/" || pathname === "/portafolio-frontendfunval2025/index.html") {
    document.body.style.overflow = "hidden";

    const monitor = document.querySelector(".laptop .monitor .monitor-body ");
    if (monitor) {
      monitor.addEventListener("animationend", (e) => {
        if (e.animationName === "ShowText") {
          document.body.style.overflow = "";
          const navContent = document.getElementById("nav-content");
          navContent.classList.remove("opacity-0", "invisible");
          navContent.classList.add("opacity-100", "visible");
        }
      });
    } else {
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 9000);
    }
  }

  const progressBar = document.querySelector(".progress-bar");

  window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = scrollPercent + "%";
    if (pathname === "/" || pathname === "/index.html" || pathname === "/portafolio-frontendfunval2025/" || pathname === "/portafolio-frontendfunval2025/index.html") {
      const navbar = document.getElementById("navbar");

      if (window.scrollY > 50) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-white", "dark:bg-gray-900", "shadow-md");
      } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-white", "dark:bg-gray-900", "shadow-md");
      }
    }
  });
});
if (pathname === "/" || pathname === "/index.html" || pathname === "/portafolio-frontendfunval2025/" || pathname === "/portafolio-frontendfunval2025/index.html") {
  await fillCardSkills();

  const btnContact = document.getElementById("btn-contact");

  btnContact.addEventListener("click", (event) => {
    if (event) {
      event.stopPropagation();
    }
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
}
if (pathname === "/projects.html" || pathname === "/portafolio-frontendfunval2025/projects.html") {
  await fillCardProjects();
  const btnMenu = document.getElementById("menu-btn");
  btnMenu.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("hidden");
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href");

      if (target && target !== "#") {
        document.querySelector(target).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", (event) => {
  if (event) {
    event.stopPropagation();
  }
  const checkbox = document.querySelector('input[type="checkbox"]');
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.theme = "light";
    checkbox.checked = false;
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.theme = "dark";
    checkbox.checked = true;
  }
});

// window.addEventListener("scroll", () => {
//   const projectsSection = document.getElementById("projects");
//   const rect = projectsSection.getBoundingClientRect();
//   const laptop = document.getElementById("laptop-container");

//   if (rect.top < window.innerHeight && rect.bottom >= 0) {
//     laptop.classList.add("zoomIn");
//   }
// });
