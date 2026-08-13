import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * The site's single, shared horizontal content grid — matches the footer's
 * and navigation's container exactly (max-w-7xl / 1280px, responsive
 * padding), so every section's left/right content edges line up.
 *
 * Full-bleed backgrounds (hero photography, banner images, section
 * background colors/gradients) must NOT be wrapped in this — only the
 * foreground content sitting on top of them should be. Wrap just the
 * content in <Container>, and let the background span its own outer
 * full-width element.
 *
 * w-full is required: when Container is used as a direct flex item (e.g.
 * inside a `flex flex-col` wrapper that vertically centers hero/banner
 * copy), the mx-auto pairing disables flexbox's default cross-axis
 * "stretch" behavior — an item with auto margins sizes to its content
 * instead of filling the available width. w-full forces it to fill first,
 * so max-w-7xl + mx-auto still cap and center it correctly either way.
 */
const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export default Container;
