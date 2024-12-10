export function scrollTo(id: string) {
    const element = document.getElementById(id);
    const offsetTop = -60
    if (element) {
        window.scrollTo({ top: element.offsetTop + offsetTop, behavior: 'smooth' });
    }
}