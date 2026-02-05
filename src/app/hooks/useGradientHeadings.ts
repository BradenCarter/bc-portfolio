"use client";
import { useEffect } from "react";

type GradientColors = {
  start: string;
  end: string;
};

/**
 * Applies a gradient color distribution across all matching elements.
 * Each element gets a color interpolated between start and end based on its position.
 * 
 * @param selector - CSS selector for elements to apply gradient to
 * @param colors - Start and end colors for the gradient
 * @param containerRef - Optional ref to scope the selector to a specific container
 */
export function useGradientHeadings(
  selector: string = "h2",
  colors: GradientColors = { start: "var(--color-theme-color-blue)", end: "var(--color-theme-color-mint)" }
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const total = elements.length;

    if (total === 0) return;

    elements.forEach((el, index) => {
      const percent = total > 1 ? index / (total - 1) : 0;
      const htmlEl = el as HTMLElement;
      
      // Use CSS color-mix for smooth interpolation between theme colors
      htmlEl.style.color = `color-mix(in oklch, ${colors.start} ${Math.round((1 - percent) * 100)}%, ${colors.end})`;
    });

    // Cleanup function to reset styles when component unmounts
    return () => {
      elements.forEach((el) => {
        (el as HTMLElement).style.color = "";
      });
    };
  }, [selector, colors.start, colors.end]);
}
