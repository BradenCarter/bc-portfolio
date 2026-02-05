"use client";

import { useGradientHeadings } from "../hooks/useGradientHeadings";

type GradientHeadingsProps = {
  selector?: string;
  startColor?: string;
  endColor?: string;
};

/**
 * Client component that applies gradient colors to headings on the page.
 * Drop this component anywhere in your page to enable gradient headings.
 * 
 * @example
 * // Use default blue to mint gradient on h2s
 * <GradientHeadings />
 * 
 * @example
 * // Custom colors and selector
 * <GradientHeadings selector="h3" startColor="#ff0000" endColor="#00ff00" />
 */
export function GradientHeadings({
  selector = "h2",
  startColor = "var(--color-theme-color-blue)",
  endColor = "var(--color-theme-color-mint)",
}: GradientHeadingsProps) {
  useGradientHeadings(selector, { start: startColor, end: endColor });
  
  return null;
}
