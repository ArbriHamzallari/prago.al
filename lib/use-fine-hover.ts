"use client";

import { useEffect, useState } from "react";

// Gates hover-triggered motion to devices that actually have hover — otherwise a tap on
// touch fires a "hover" with no matching hover-off event, leaving the element stuck lifted.
export function useFineHover() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFine(mq.matches);
    const handler = () => setFine(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return fine;
}
