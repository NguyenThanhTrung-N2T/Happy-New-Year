// ===== Fireworks Animation =====
function createFirework() {
  const fireworksContainer = document.getElementById("fireworks");
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#f7b731",
    "#5f27cd",
    "#00d2d3",
    "#ff9ff3",
    "#ffd700",
    "#ff6b9d",
    "#c471f5",
  ];

  const x = Math.random() * window.innerWidth;
  const startY = window.innerHeight;
  const endY = Math.random() * (window.innerHeight * 0.4) + 100;

  // Create rocket trail
  const rocket = document.createElement("div");
  rocket.style.position = "fixed";
  rocket.style.left = x + "px";
  rocket.style.bottom = "0px";
  rocket.style.width = "3px";
  rocket.style.height = "3px";
  rocket.style.background = "#fff";
  rocket.style.borderRadius = "50%";
  rocket.style.boxShadow = "0 0 10px #fff";
  rocket.style.zIndex = "9999";
  fireworksContainer.appendChild(rocket);

  // Animate rocket going up
  rocket.animate(
    [
      { bottom: "0px", opacity: 1 },
      { bottom: window.innerHeight - endY + "px", opacity: 1 },
    ],
    {
      duration: 800,
      easing: "ease-out",
    },
  );

  // Explode at the top
  setTimeout(() => {
    rocket.remove();

    // Create large burst with many particles
    const particleCount = 50; // Increased from 30
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "firework";
      particle.style.left = x + "px";
      particle.style.top = endY + "px";
      particle.style.background = color;
      particle.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}`;
      particle.style.width = "6px";
      particle.style.height = "6px";

      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 100 + Math.random() * 150; // Increased velocity for larger burst
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;

      particle.style.setProperty("--tx", tx + "px");
      particle.style.setProperty("--ty", ty + "px");

      fireworksContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 2000);
    }

    // Add secondary smaller particles for more effect
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const sparkle = document.createElement("div");
        sparkle.style.position = "fixed";
        sparkle.style.left = x + "px";
        sparkle.style.top = endY + "px";
        sparkle.style.width = "3px";
        sparkle.style.height = "3px";
        sparkle.style.background = color;
        sparkle.style.borderRadius = "50%";
        sparkle.style.boxShadow = `0 0 10px ${color}`;
        sparkle.style.zIndex = "9999";

        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        fireworksContainer.appendChild(sparkle);

        sparkle.animate(
          [
            { transform: "translate(0, 0) scale(1)", opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 },
          ],
          {
            duration: 1500,
            easing: "ease-out",
          },
        );

        setTimeout(() => sparkle.remove(), 1500);
      }, i * 20);
    }
  }, 800);
}

// ===== Lanterns Animation =====
function createLantern() {
  const lanternsContainer = document.getElementById("lanterns");
  const lantern = document.createElement("div");
  lantern.className = "lantern";

  lantern.style.left = Math.random() * window.innerWidth + "px";
  lantern.style.animationDuration = 10 + Math.random() * 10 + "s";
  lantern.style.animationDelay = Math.random() * 5 + "s";

  lanternsContainer.appendChild(lantern);

  setTimeout(() => {
    lantern.remove();
  }, 20000);
}

// ===== Petals Animation =====
function createPetal() {
  const petalsContainer = document.getElementById("petals");
  const petal = document.createElement("div");
  petal.className = "petal";

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = 8 + Math.random() * 6 + "s";
  petal.style.animationDelay = Math.random() * 3 + "s";

  const size = 8 + Math.random() * 8;
  petal.style.width = size + "px";
  petal.style.height = size + "px";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 15000);
}

// ===== Celebration Button =====
function celebrate() {
  // Play celebration sound
  const sound = document.getElementById("celebrationSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch((e) => console.log("Audio play failed:", e));
  }

  // Create massive fireworks display (20 fireworks)
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createFirework();
    }, i * 200);
  }

  // Create second wave of fireworks
  setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createFirework();
      }, i * 150);
    }
  }, 2000);

  // Create final burst
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createFirework();
      }, i * 100);
    }
  }, 4000);

  // Add button animation
  const btn = document.getElementById("celebrateBtn");
  btn.style.animation = "none";
  setTimeout(() => {
    btn.style.animation = "";
  }, 10);

  // Create confetti effect
  createConfetti();

  // Create multiple waves of confetti
  setTimeout(() => {
    createConfetti();
  }, 1000);

  setTimeout(() => {
    createConfetti();
  }, 2000);
}

// ===== Confetti Effect =====
function createConfetti() {
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#f7b731",
    "#5f27cd",
    "#00d2d3",
    "#ff9ff3",
    "#ffd700",
    "#ff6b9d",
    "#c471f5",
  ];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.opacity = "1";
    confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";

    document.body.appendChild(confetti);

    const duration = 2000 + Math.random() * 2000;
    const endX = (Math.random() - 0.5) * 200;
    const endY = window.innerHeight + 100;

    confetti.animate(
      [
        {
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 1,
        },
        {
          transform: `translate(${endX}px, ${endY}px) rotate(${Math.random() * 720}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: duration,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    );

    setTimeout(() => {
      confetti.remove();
    }, duration);
  }
}

// ===== Sparkle Effect on Hover =====
function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.style.position = "fixed";
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
  sparkle.style.width = "4px";
  sparkle.style.height = "4px";
  sparkle.style.background = "#ffd700";
  sparkle.style.borderRadius = "50%";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "9999";
  sparkle.style.boxShadow = "0 0 10px #ffd700";

  document.body.appendChild(sparkle);

  sparkle.animate(
    [
      {
        transform: "translate(0, 0) scale(1)",
        opacity: 1,
      },
      {
        transform: `translate(${(Math.random() - 0.5) * 50}px, ${(Math.random() - 0.5) * 50}px) scale(0)`,
        opacity: 0,
      },
    ],
    {
      duration: 1000,
      easing: "ease-out",
    },
  );

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

// ===== Mouse Trail Effect =====
let lastSparkleTime = 0;
document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastSparkleTime > 100) {
    if (Math.random() > 0.7) {
      createSparkle(e.clientX, e.clientY);
    }
    lastSparkleTime = now;
  }
});

// ===== Wish Cards Hover Effect =====
const wishCards = document.querySelectorAll(".wish-card");
wishCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.querySelector(".wish-icon").style.transform =
      "scale(1.2) rotate(10deg)";
  });

  card.addEventListener("mouseleave", function () {
    this.querySelector(".wish-icon").style.transform = "scale(1) rotate(0deg)";
  });
});

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to celebration button
  const celebrateBtn = document.getElementById("celebrateBtn");
  celebrateBtn.addEventListener("click", celebrate);

  // Initial fireworks
  setTimeout(() => {
    createFirework();
  }, 1000);

  setTimeout(() => {
    createFirework();
  }, 2000);

  // Continuous fireworks
  setInterval(() => {
    if (Math.random() > 0.7) {
      createFirework();
    }
  }, 3000);

  // Create lanterns periodically
  setInterval(() => {
    createLantern();
  }, 4000);

  // Create initial lanterns
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      createLantern();
    }, i * 1500);
  }

  // Create petals periodically
  setInterval(() => {
    createPetal();
  }, 500);

  // Create initial petals
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      createPetal();
    }, i * 200);
  }

  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add parallax effect to header
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector(".header");
    if (header) {
      header.style.transform = `translateY(${scrolled * 0.3}px)`;
      header.style.opacity = 1 - scrolled / 500;
    }
  });
});

// ===== Automatic celebration on page load =====
window.addEventListener("load", () => {
  setTimeout(() => {
    // Play welcome sound
    const sound = document.getElementById("celebrationSound");
    if (sound) {
      sound.play().catch((e) => console.log("Audio autoplay blocked:", e));
    }

    // Create welcome fireworks
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createFirework();
      }, i * 200);
    }

    createConfetti();
  }, 1500);
});
