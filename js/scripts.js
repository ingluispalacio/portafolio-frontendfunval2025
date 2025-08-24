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
  document.body.style.overflow = "hidden";

  const monitor = document.querySelector(".laptop .monitor .monitor-body ");
  if (monitor) {
    monitor.addEventListener("animationend", (e) => {
      if (e.animationName === "ShowText") {
        document.body.style.overflow = "";
      }
    });
  } else {
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 11000);
  }

  const progressBar = document.querySelector(".progress-bar");

  window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = scrollPercent + "%";
  });
});

function toggleDarkMode(event) {
  if (event) {
    event.stopPropagation(); // Detiene la propagación del evento
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
}

function turnOnLaptop(event) {
  if (event) {
    event.stopPropagation();
  }
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// También activar con scroll
// window.addEventListener("scroll", () => {
//   const projectsSection = document.getElementById("projects");
//   const rect = projectsSection.getBoundingClientRect();
//   const laptop = document.getElementById("laptop-container");

//   if (rect.top < window.innerHeight && rect.bottom >= 0) {
//     laptop.classList.add("zoomIn");
//   }
// });
