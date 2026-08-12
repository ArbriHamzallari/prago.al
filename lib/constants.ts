export const SERVICE_CATEGORIES = [
  {
    label: "LISTING MANAGEMENT",
    items: [
      "Listing creation & professional photography",
      "AI dynamic pricing & revenue management",
      "Multi-platform listing (Airbnb, Booking.com, Vrbo)"
    ]
  },
  {
    label: "GUEST MANAGEMENT",
    items: [
      "24/7 AI + human guest communication",
      "Guest screening & check-in (smart locks)",
      "Local experiences & concierge (tours, transfers)"
    ]
  },
  {
    label: "PROPERTY MANAGEMENT",
    items: [
      "Professional cleaning & turnovers",
      "Linen, toiletries & welcome minibar",
      "Maintenance & property care",
      "Monthly owner reports & full transparency"
    ]
  }
] as const;

export const SERVICES = [
  { title: "Listing creation & professional photography", ai: false },
  { title: "AI dynamic pricing & revenue management", ai: true },
  { title: "Multi-platform listing (Airbnb, Booking.com, Vrbo)", ai: false },
  { title: "24/7 AI + human guest communication", ai: true },
  { title: "Professional cleaning & turnovers", ai: false },
  { title: "Linen, toiletries & welcome minibar", ai: false },
  { title: "Guest screening & check-in (smart locks)", ai: false },
  { title: "Maintenance & property care", ai: false },
  { title: "Monthly owner reports & full transparency", ai: false },
  { title: "Local experiences & concierge (tours, transfers)", ai: false }
] as const;

export const FAQS = [
  {
    question: "How much do you charge?",
    answer: "20% flat. No setup fees, no platform fees, no surprises."
  },
  {
    question: "What does the 20% include?",
    answer: "Everything. Pricing, guests, cleaning coordination, reporting, and your owner portal."
  },
  {
    question: "How is Prago different from other managers?",
    answer: "AI pricing, AI guest response, and a real local team. Most managers in Albania do none of this."
  },
  {
    question: "Do I keep control of my property?",
    answer: "Yes. You approve the setup and can block dates anytime from your owner portal."
  },
  {
    question: "Which areas do you cover?",
    answer: "Tirana and the Albanian coast. Saranda, Ksamil, Vlora, and growing fast."
  },
  {
    question: "How fast can I go live?",
    answer: "Usually within a few days of our first visit."
  }
] as const;

/** E.164 for tel:/sms: links (no spaces). display is human-readable. */
export const CONTACT_PHONE = {
  display: "+355 68 666 9060",
  tel: "+355686669060"
} as const;

export const CONTACT_WHATSAPP = {
  url: "https://wa.me/message/VMQY23EBVHNWM1",
  label: "WhatsApp"
} as const;
