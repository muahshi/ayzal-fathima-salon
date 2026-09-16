// ================================================================
// AYZAL FATHIMA BEAUTY SALON — SITE CONFIG
// Saari real business details ek hi jagah. Kuch bhi update karna ho
// (phone, hours, price, TikTok link) to sirf yahi file edit karo,
// pura site automatically update ho jayega.
// ================================================================

const BUSINESS = {
  name: "Ayzal Fathima Beauty Salon",
  shortName: "Ayzal Fathima",
  tagline: "Ladies Beauty Salon in Al Qusais, Dubai",
  description:
    "Hair, skin, nails & bridal beauty services for women in Al Qusais Industrial Area, Dubai.",

  // --- Contact (Google Business / listing directories se verify kiya) ---
  phoneDisplay: "+971 55 392 9985",
  phoneE164: "971553929985", // wa.me aur tel: links ke liye, bina + aur space ke

  // --- Address (Google Maps listing se) ---
  addressLines: [
    "Shop 3, Sajaya 20 Building",
    "Amman St, Al Qusais Industrial Area",
    "Dubai, United Arab Emirates",
  ],
  addressSingleLine:
    "Shop 3, Sajaya 20 Building, Amman St, Al Qusais Industrial Area, Dubai, UAE",
  plusCode: "7CM5+V6 Dubai",

  // --- Hours (Google listing: daily 10 AM to 10 PM) ---
  hoursDisplay: "Open Daily: 10:00 AM – 10:00 PM",

  // --- Socials ---
  instagramHandle: "@ayzal_fatima_beauty_saloon",
  instagramUrl: "https://instagram.com/ayzal_fatima_beauty_saloon",
  // TODO (MUBI/CLIENT): Isse salon ka verified TikTok profile link nahi mil
  // saka public search me. Client se unka asli TikTok @handle lekar yahan
  // aur FloatingButtons.jsx + Footer.jsx me daal do. Tab tak yeh null hai
  // aur TikTok icon site pe show nahi hoga (galat/fake link dikhne se better).
  tiktokUrl: null, // e.g. "https://www.tiktok.com/@realhandle"

  // --- Google Maps links (asli maps link se resolve kiye gaye) ---
  googleMapsUrl:
    "https://www.google.com/maps/place/Ayzal+Fathima+Beauty+Salon+-+Shop3,+Sajaya+20+-+Amman+St+-+Al+Qusais+Industrial+Area+-+Dubai/data=!4m2!3m1!1s0x488fc382f551a971:0x8bb43a199a499fc7!18m1!1e1",
  googleMapsShortUrl: "https://maps.app.goo.gl/uefZqAoJV2UvU8XM6",
  // Ek-click "Write a Google Review" deep link (business ke Google feature-id
  // se banaya gaya). Client jab apni listing claim/verify karega, tab Google
  // Business Profile se official "Get more reviews" link generate karke isse
  // replace kar dena — woh 100% guaranteed kaam karega.
  googleReviewWriteUrl:
    "https://search.google.com/local/writereview?placeid=0x488fc382f551a971:0x8bb43a199a499fc7",
  googleMapsEmbedSrc:
    "https://maps.google.com/maps?q=Ayzal%20Fathima%20Beauty%20Salon%2C%20Sajaya%2020%2C%20Amman%20St%2C%20Al%20Qusais%20Industrial%20Area%2C%20Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // --- Services (Google/business listing se) ---
  services: [
    "Ladies Haircut & Styling",
    "Hair Coloring & Highlights",
    "Hair Treatment & Hair Spa",
    "Keratin & Straightening",
    "Blow Dry",
    "Bridal & Party Makeup",
    "Eyebrow Threading",
    "Eyelash Extensions",
    "Manicure",
    "Gel Pedicure",
    "Waxing",
    "Anti-Aging Facial",
  ],
};

export default BUSINESS;
