// ===== INTRO SCREEN =====
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const name = document.querySelector(".intro-name");
  const portfolio = document.getElementById("portfolio");

  // Jab name ki animation khatam ho jaye
  name.addEventListener("animationend", () => {
    intro.style.display = "none"; // intro hide
    portfolio.classList.add("show"); // portfolio show
  });
});

// ===== ACTIVE LINK ON SCROLL =====
const navLinks = document.querySelectorAll(".menu-link");
const sections = document.querySelectorAll("section[id]");
const headerHeight = document.querySelector(".header").offsetHeight;

function scrollActive() {
  const scrollY = window.scrollY + headerHeight + 10; 

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(`.menu a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add("active-link");
    } else {
      link?.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ===== SMOOTH SCROLL WITH OFFSET =====
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      const offset = target.offsetTop - headerHeight - 10; 
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
});

// ===== ABOUT SECTION ANIMATION =====
const about = document.querySelector(".about");
window.addEventListener("scroll", () => {
  if (!about) return;
  const aboutTop = about.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.85;
  if (aboutTop < triggerPoint) {
    about.classList.add("show");
  }
});

// ===== MENU TOGGLE =====
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const toggleIcon = toggle.querySelector("i");

// toggle menu on click
toggle.addEventListener("click", () => {
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-times");
  } else {
    toggleIcon.classList.remove("fa-times");
    toggleIcon.classList.add("fa-bars"); 
  }
});

// close menu when any link is clicked
document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    toggleIcon.classList.remove("fa-times");
    toggleIcon.classList.add("fa-bars");
  });
});

// ===== SKILLS SECTION ANIMATION =====
// Get all skill categories and progress bars
const skillCategories = document.querySelectorAll(".skills-category");
const progressBars = document.querySelectorAll(".progress-bar div");

function animateSkills() {
  skillCategories.forEach(cat => {
    const top = cat.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.8) {
      cat.classList.add("show"); // fade in card
    }
  });

  progressBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      const width = bar.dataset.progress; // get data-progress
      bar.style.width = width; // animate width
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
