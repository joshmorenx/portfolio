import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to every `.reveal` element as it scrolls
 * into view. Runs once per page and degrades gracefully when
 * IntersectionObserver is unavailable.
 */
export function useScrollReveal(): void {
    useEffect(() => {
        const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

        if (typeof IntersectionObserver === 'undefined') {
            nodes.forEach((node) => node.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        nodes.forEach((node) => observer.observe(node));

        return () => observer.disconnect();
    }, []);
}

/** Returns the stagger delay (ms) for the n-th item of a group. */
export function stagger(index: number, step = 90, cap = 540): number {
    return Math.min(index * step, cap);
}
