// Cuando tengas la invitación de Discord, pegala acá (por ejemplo "https://discord.gg/xxxx") y el botón se activa solo.
const DISCORD_INVITE = "";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const discordButton = document.querySelector("#discord-button");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    siteNav.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

if (discordButton && DISCORD_INVITE) {
  discordButton.disabled = false;
  discordButton.textContent = "UNIRME AL DISCORD";
  discordButton.addEventListener("click", () => {
    window.open(DISCORD_INVITE, "_blank", "noopener,noreferrer");
  });
}
