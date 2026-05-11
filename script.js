const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = nav ? Array.from(nav.querySelectorAll("a")) : [];
const revealElements = document.querySelectorAll(".reveal");
const profileImage = document.querySelector("[data-profile-image]");
const profileShell = document.querySelector("[data-profile-shell]");
const currentYear = document.querySelector("[data-current-year]");

const closeMenu = () => {
  if (!menuToggle || !nav) {
    return;
  }

  menuToggle.classList.remove("is-open");
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });
}

if (header) {
  const updateHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

if (profileImage && profileShell) {
  const handleMissingProfile = () => {
    profileShell.classList.add("image-missing");
  };

  if (!profileImage.getAttribute("src")) {
    handleMissingProfile();
  } else {
    profileImage.addEventListener("error", handleMissingProfile, { once: true });
  }
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const sectionMap = navLinks
  .map((link) => {
    const id = link.getAttribute("href");
    if (!id || !id.startsWith("#")) {
      return null;
    }
    return {
      link,
      section: document.querySelector(id)
    };
  })
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const current = sectionMap.find((item) => item.section === entry.target);
        if (!current || !entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => link.classList.remove("is-active"));
        current.link.classList.add("is-active");
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-20% 0px -45% 0px"
    }
  );

  sectionMap.forEach(({ section }) => {
    if (section) {
      navObserver.observe(section);
    }
  });
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
