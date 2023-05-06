import { useEffect, useState } from "react";
export type ScrollDirection = "up" | "down" | "none";
export const useScrollDirection = () => {
  const threshold = 20;
  const [scrollDir, setScrollDir] = useState<ScrollDirection>("none");

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;
    let timeoutId: NodeJS.Timeout;

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? "down"
          : "up";
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;

        // Clear the timeout if it exists
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        // Set a new timeout to reset the scroll direction after 200ms of no scrolling
        timeoutId = setTimeout(() => {
          setScrollDir("none");
        }, 600);
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollDir;
};
