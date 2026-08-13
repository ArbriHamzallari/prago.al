import { ImageIcon } from "lucide-react";

// Stands in for real photography that hasn't been shot yet. Renders no <img> request at all —
// no 404, no stock photo — so the site stays honest about what it doesn't have yet. Swap back
// to next/image once the real asset lands (see rebuild-adaptation-plan.md).
export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={label} className={`flex items-center justify-center bg-sand ${className}`}>
      <ImageIcon className="h-8 w-8 text-stone/50" strokeWidth={1.5} />
    </div>
  );
}
