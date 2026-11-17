export function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    const navHeight = 72;
    const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
}
