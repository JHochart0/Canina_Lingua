import React, { useEffect } from "react";

// this hook is used to trigger the css animation when the element is shown after scrollin
function useRevealOnScroll(selector, refreshKey) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
        };
    }, [selector, refreshKey]);
}

export default useRevealOnScroll;