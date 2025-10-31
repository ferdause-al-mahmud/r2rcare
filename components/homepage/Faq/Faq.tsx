"use client";

import React, { useState } from "react";

const faqs = [
  {
    id: "item-1",
    q: "What is Nexify, and how can it help my business?",
    a: `Vel metus senectus ullamcorper sollicitudin auctor placerat maximus nec.
Curabitur ligula metus platea velit, tellus vulputate enim in tempor.
Praesent sollicitudin ac efficitur primis urna. Mollis justo montes
ultrices posuere phasellus conubia venenatis.`,
  },
  {
    id: "item-2",
    q: "Can I integrate nexify with my existing tools?",
    a: `Yes — Nexify provides REST APIs and integrations (Zapier, webhooks, and built-in connectors)
so you can integrate with your current tools easily.`,
  },
  {
    id: "item-3",
    q: "What is the difference between the standard and pro plans?",
    a: `Standard covers the core feature set and basic limits. Pro expands usage
limits, adds advanced reporting, and includes priority support.`,
  },
  {
    id: "item-4",
    q: "How secure is my data with nexify?",
    a: `We use encryption in transit and at rest, access controls, and frequent
audits to ensure top-tier data protection.`,
  },
];

const Faq: React.FC = () => {
  // default open the first item
  const [openId, setOpenId] = useState<string | null>("item-1");

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1290px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#161C52]">
            Frequently Asked{" "}
            <span className="ml-2 italic font-serif text-[#77429A]">
              Questions
            </span>
          </h2>
          <p className="mt-3 max-w-[700px] mx-auto text-sm md:text-base text-[#66667a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Accordion container */}
        <div className="mx-auto w-full max-w-[790px]">
          <div className="space-y-6">
            {faqs.map((f) => {
              const isOpen = openId === f.id;

              return (
                <div key={f.id} className="w-full">
                  {/* Trigger */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${f.id}-content`}
                    onClick={() => toggle(f.id)}
                    className={
                      // pill style, open uses purple background with white text
                      `w-full flex cursor-pointer items-center gap-4 rounded-full px-6 py-4 text-left text-sm md:text-base font-medium transition-all duration-250 outline-none focus:ring-4 
                      ${
                        isOpen
                          ? "bg-[#77429A] text-white shadow"
                          : "bg-white text-[#161C52] border border-[#efeef2]"
                      }`
                    }
                  >
                    {/* left chevron circle - background/color switch */}
                    <span
                      aria-hidden
                      className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-250
                        ${isOpen ? "bg-[#E6D7FF]" : "bg-[#6B3C8B]"}`}
                    >
                      {/* chevron - color swapped depending on open state */}
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-[#6B3C8B]"
                            : "rotate-0 text-white"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>

                    {/* question */}
                    <span
                      className={`flex-1 text-left ${
                        isOpen ? "text-white" : "text-[#161C52]"
                      }`}
                    >
                      {f.q}
                    </span>
                  </button>

                  {/* Content */}
                  <div
                    id={`${f.id}-content`}
                    role="region"
                    aria-labelledby={`${f.id}-trigger`}
                    className={`overflow-hidden transition-all duration-300`}
                    style={{
                      // animate height: use maxHeight for transition
                      maxHeight: isOpen ? 2400 : 0,
                      opacity: isOpen ? 1 : 0,
                      paddingTop: isOpen ? 12 : 0,
                      paddingBottom: isOpen ? 12 : 0,
                    }}
                  >
                    <div className="text-sm text-[#4b4b5d] leading-relaxed px-2 md:px-6">
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
