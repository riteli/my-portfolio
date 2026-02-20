export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  headerHeight: number = 60,
) => {
  e.preventDefault();

  if (href === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    return;
  }

  if (href.startsWith("#")) {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  }
};
