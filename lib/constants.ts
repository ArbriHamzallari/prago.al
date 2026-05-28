type Stat = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
};

export const STATS: Stat[] = [
  { label: "Properties under management", value: 14, suffix: "" },
  { label: "Average guest rating", value: 4.8, suffix: "★", decimals: 1 },
  { label: "Avg guest response time", value: 5, prefix: "<", suffix: " min" },
  { label: "Flat commission. No hidden fees", value: 20, suffix: "%" },
  { label: "Owner transparency", value: 100, suffix: "%" }
];

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

export const AUDIENCE_TABS = [
  {
    id: "homeowners",
    label: "Homeowners",
    headline: "Hand over the keys. Keep the income.",
    body: "Pricing, guests, cleanings, reviews. We run all of it. You watch the money land in your account.",
    bullets: [
      "AI pricing that adapts daily to demand",
      "24/7 guest replies in any language",
      "Professional cleaning and turnovers",
      "Monthly owner reports. No hidden lines."
    ]
  },
  {
    id: "landlords",
    label: "Landlords",
    headline: "Turn long-term rent into short-term cash.",
    body: "Same apartment. Triple the income. We run it like a hotel without putting a single hotel on you.",
    bullets: [
      "Full-service management from day one",
      "Listed everywhere guests book",
      "Smart locks and automated check-in",
      "20% flat. No surprises. Ever."
    ]
  },
  {
    id: "multi",
    label: "Multi-property owners",
    headline: "Scale your portfolio. Not your headaches.",
    body: "Two apartments or twenty. One dashboard, one contact, one team. The same five-star result on every door.",
    bullets: [
      "One portal for every property",
      "Consistent pricing across your portfolio",
      "Dedicated account manager",
      "Portfolio-wide performance insights"
    ]
  },
  {
    id: "investors",
    label: "Property investors",
    headline: "Get the yield. Skip the admin.",
    body: "Data-driven pricing. Honest reporting. Built for investors who count ROI, not check-in messages.",
    bullets: [
      "Revenue forecasting and occupancy tracking",
      "AI fills slow weeks before they cost you",
      "Professional photography included",
      "Honest numbers. No inflated promises."
    ]
  }
] as const;

export const SOFTWARE_ACCORDION = [
  {
    id: "overview",
    label: "OVERVIEW",
    description:
      "Your property at a glance. What is happening, what you are earning, what your guests are saying. All in one screen."
  },
  {
    id: "calendar",
    label: "CALENDAR",
    description:
      "Every booking from every platform in one place. Block dates. See turnovers. Never double-book again."
  },
  {
    id: "performance",
    label: "PERFORMANCE",
    description:
      "Occupancy, revenue, and ratings tracked over time. Know exactly how your apartment is performing this month."
  },
  {
    id: "housekeeping",
    label: "HOUSEKEEPING",
    description:
      "Cleaning schedules, turnover confirmations, and quality checks. All logged and visible in real time."
  },
  {
    id: "maintenance",
    label: "MAINTENANCE",
    description:
      "Report issues, track repairs, and keep your property in top condition without chasing contractors."
  }
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

export const AI_FEED_MESSAGES = [
  "Price updated. +18% for Aug 12 to 15.",
  "Guest replied in 2 min.",
  "Booking confirmed. Saranda.",
  "Rate adjusted for weekend demand.",
  "Clean completed. Unit 4B.",
  "Occupancy forecast. 82% next month."
] as const;

export const AI_FEATURES = [
  {
    title: "AI Dynamic Pricing",
    body: "Your nightly rate updates every day. Demand, events, season, competitors. Hotels have done this for decades. Now your apartment does too."
  },
  {
    title: "AI Guest Agent",
    body: "Every guest replied to in under 5 minutes. 24/7. In their language. Check-in, questions, upsells. All handled."
  },
  {
    title: "AI Revenue Optimization",
    body: "Predicts slow weeks ahead of time and fills them before they cost you a single lek."
  },
  {
    title: "Real Local Team",
    body: "AI does the heavy lifting. Our Albanian team does the cleaning, the keys, and the human touch that earns 5 stars."
  }
] as const;

// Placeholder interior photos — TODO: replace with real Prago property photos
export const INTERIOR_PHOTOS = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
] as const;

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=85";
