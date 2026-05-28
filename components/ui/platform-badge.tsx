import { getPlatformIcon, getPlatformLetter } from "@/lib/platform-icons";

export function PlatformBadge({
  name,
  className = "",
  size = "md"
}: {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const icon = getPlatformIcon(name);
  const sizeClass =
    size === "lg"
      ? "h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24"
      : size === "sm"
        ? "h-12 w-12 sm:h-14 sm:w-14"
        : "h-16 w-16 md:h-20 md:w-20";
  const svgSize = size === "lg" ? 28 : size === "sm" ? 22 : 30;

  return (
    <div
      className={`flex ${sizeClass} items-center justify-center rounded-full bg-white shadow-card ${className}`}
      title={icon?.title ?? name}
    >
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          width={svgSize}
          height={svgSize}
          fill={`#${icon.hex}`}
          aria-label={icon.title}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="font-serif text-2xl font-semibold text-vishnje">{getPlatformLetter(name)}</span>
      )}
    </div>
  );
}
