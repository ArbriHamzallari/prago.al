"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

const fieldClass =
  "w-full rounded-xl border border-sand bg-white px-4 py-3.5 font-sans text-sm text-charcoal placeholder:text-stone outline-none focus:border-vishnje focus:ring-2 focus:ring-vishnje/20";

export function EstimateSection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Estimate request", {
      location: String(formData.get("location") || ""),
      bedrooms: Number(formData.get("bedrooms") || 0),
      name: String(formData.get("name") || ""),
      contact: String(formData.get("contact") || "")
    });
    // TODO: connect to backend / send to stay@prago.al
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <Section id="estimate" bg="vishnje">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="text-cream">
          <SerifHeading size="h1" className="!text-cream">
            Curious what your property could earn?
          </SerifHeading>
          <p className="mt-5 font-sans text-lg leading-relaxed text-cream">
            Free estimate. No commitment. We&apos;ll show you the numbers.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl bg-cream p-8 text-charcoal shadow-card"
        >
          <div className="grid gap-4">
            <select name="location" required className={fieldClass} defaultValue="">
              <option value="" disabled className="text-stone">
                Property location
              </option>
              <option value="Tirana">Tirana</option>
              <option value="Saranda">Saranda</option>
              <option value="Ksamil">Ksamil</option>
              <option value="Vlora">Vlora</option>
              <option value="Other">Other</option>
            </select>
            <input
              required
              min={1}
              type="number"
              name="bedrooms"
              placeholder="Bedrooms"
              className={fieldClass}
            />
            <input required type="text" name="name" placeholder="Your name" className={fieldClass} />
            <input
              required
              type="text"
              name="contact"
              placeholder="Email or WhatsApp"
              className={fieldClass}
            />
            <Button type="submit" variant="primary" className="w-full">
              Get my free estimate
            </Button>
            {submitted && (
              <p className="font-sans text-sm font-medium text-vishnje">
                Thanks — we&apos;ll be in touch within 24h.
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
