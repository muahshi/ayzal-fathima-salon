import React from 'react';
import { Scissors, Sparkles, Droplets, Palette, Crown, Gem } from 'lucide-react';
import BIZ from '../siteConfig';

// TODO (MUBI/CLIENT): Salon ka koi published AED price list nahi mila online,
// isliye yahan fake numbers nahi daale — galat price dikhana client ke liye
// nuksaandeh hoga. Client se real price list lekar "price" field fill kar dena.
const prices = [
  { service: "Ladies Haircut", price: "On Request", icon: Scissors },
  { service: "Threading", price: "On Request", icon: Sparkles },
  { service: "Hair Spa / Treatment", price: "On Request", icon: Droplets },
  { service: "Hair Color / Keratin", price: "On Request", icon: Palette },
  { service: "Manicure & Pedicure", price: "On Request", icon: Gem },
  { service: "Bridal Makeup", price: "On Request", icon: Crown },
];

export default function Pricing() {
  const waMsg = encodeURIComponent("Hi! I'd like to know the pricing for your salon services.");
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Our Services & Pricing</h3>
          <h2 className="text-3xl md:text-5xl font-luxury font-bold text-white">Quality Services, Fair Prices</h2>
          <p className="text-zinc-500 text-sm mt-4 font-modern">Message us on WhatsApp for the current price list — pricing depends on hair length &amp; treatment.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {prices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={`https://wa.me/${BIZ.phoneE164}?text=${waMsg}`}
                target="_blank" rel="noreferrer"
                className="bg-[#0a0a0a] border border-white/5 p-8 rounded-xl hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mb-6 relative">
                  <Icon className="w-full h-full text-fuchsia-500 absolute z-10 drop-shadow-[0_0_15px_rgba(217,70,239,0.8)] group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                </div>
                <h4 className="text-sm font-luxury font-bold text-white mb-4">{item.service}</h4>
                <div className="text-sm font-modern font-bold text-fuchsia-400 mb-6 uppercase tracking-widest">
                  {item.price}
                </div>
                <button className="text-fuchsia-500 text-xs font-bold uppercase tracking-widest group-hover:text-fuchsia-400">
                  Ask on WhatsApp
                </button>
              </a>
            );
          })}
        </div>
        <p className="text-center text-zinc-600 text-xs mt-8">*Full service list: {BIZ.services.join(', ')}.</p>
      </div>
    </section>
  );
}
