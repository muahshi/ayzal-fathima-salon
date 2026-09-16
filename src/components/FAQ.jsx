import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BIZ from '../siteConfig';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "Where is Ayzal Fathima Beauty Salon located?", a: `We are located at ${BIZ.addressSingleLine}.` },
    { q: "What are your salon timings?", a: `${BIZ.hoursDisplay}.` },
    { q: "Do you provide bridal makeup?", a: "Yes, we offer bridal and party makeup services — message us on WhatsApp with your date to check availability." },
    { q: "What services do you offer?", a: `${BIZ.services.join(', ')}.` },
    { q: "How can I book an appointment?", a: "Simply tap the 'Book on WhatsApp' button or call us directly — no need to visit in person to book." },
    { q: "Is parking available?", a: "The salon is on Amman St in Al Qusais Industrial Area, with street parking nearby." },
    { q: "How much do your services cost?", a: "Pricing depends on hair length and treatment — message us on WhatsApp for the current price list." }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Your Questions Answered</h3>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white">FAQ</h2>
        </div>
        <div className="space-y-4 font-modern">
          {faqs.map((faq, i) => (
            <div key={i} className="super-glass rounded-xl overflow-hidden transition-all duration-300">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none">
                <span className="font-bold text-white text-sm tracking-wider">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-fuchsia-500 transition-transform duration-300 flex-shrink-0 ml-4 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-8 overflow-hidden transition-all duration-500 ${open === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
