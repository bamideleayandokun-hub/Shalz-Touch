document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const header = document.querySelector(".header");

  const closeMenu = () => {
    if (!toggleBtn || !navMenu) return;
    navMenu.classList.remove("is-open");
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle("is-open");
      toggleBtn.classList.toggle("active");
      toggleBtn.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("is-open") && !header.contains(e.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  const testimonialCarousel = document.querySelector("#testimonialsCarousel");
  if (testimonialCarousel) {
    const cards = Array.from(
      testimonialCarousel.querySelectorAll(".testimonial-card"),
    );
    const prevBtn = testimonialCarousel.querySelector(".testimonial-nav-prev");
    const nextBtn = testimonialCarousel.querySelector(".testimonial-nav-next");
    const dots = Array.from(document.querySelectorAll(".testimonial-dot"));
    let activeIndex = 1;
    let touchStartX = 0;
    let touchEndX = 0;

    const showPrevious = () => {
      activeIndex = (activeIndex - 1 + cards.length) % cards.length;
      renderTestimonials();
    };

    const showNext = () => {
      activeIndex = (activeIndex + 1) % cards.length;
      renderTestimonials();
    };

    const renderTestimonials = () => {
      const total = cards.length;

      cards.forEach((card, index) => {
        card.classList.remove("is-active", "is-featured", "is-light");

        const offset = (index - activeIndex + total) % total;
        const normalizedOffset = offset === total - 1 ? -1 : offset;

        if (index === activeIndex) {
          card.classList.add("is-active", "is-featured");
        } else {
          card.classList.add("is-light");
        }

        if (window.innerWidth <= 768) {
          card.style.order = 0;
        } else if (normalizedOffset === -1) {
          card.style.order = 0;
        } else if (normalizedOffset === 0) {
          card.style.order = 1;
        } else {
          card.style.order = 2;
        }
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeIndex);
      });
    };

    prevBtn?.addEventListener("click", showPrevious);
    nextBtn?.addEventListener("click", showNext);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        activeIndex = index;
        renderTestimonials();
      });
    });

    testimonialCarousel.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0].clientX;
      },
      { passive: true },
    );

    testimonialCarousel.addEventListener(
      "touchend",
      (event) => {
        touchEndX = event.changedTouches[0].clientX;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) < 50) {
          return;
        }

        if (swipeDistance > 0) {
          showPrevious();
        } else {
          showNext();
        }
      },
      { passive: true },
    );

    window.addEventListener("resize", renderTestimonials);
    renderTestimonials();
  }
});
