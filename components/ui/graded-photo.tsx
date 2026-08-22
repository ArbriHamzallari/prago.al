import Image, { ImageProps } from "next/image";

// Ties the real (unstyled, unretouched) listing photography to the vishnje/cream palette with
// one consistent, reversible treatment — a touch of warmth/contrast plus a faint burgundy-tinted
// gradient pinned to one edge. Subtle enough to stay honest to the real photo underneath.
export function GradedPhoto({
  className = "",
  tint = true,
  tintFrom = "bottom",
  ...props
}: ImageProps & { tint?: boolean; tintFrom?: "bottom" | "top" }) {
  return (
    <>
      <Image
        {...props}
        className={`[filter:saturate(1.05)_contrast(1.03)_brightness(0.99)] ${className}`}
      />
      {tint && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${
            tintFrom === "bottom"
              ? "bg-gradient-to-t from-vishnje/[0.14] via-transparent to-transparent"
              : "bg-gradient-to-b from-vishnje/[0.14] via-transparent to-transparent"
          }`}
        />
      )}
    </>
  );
}
