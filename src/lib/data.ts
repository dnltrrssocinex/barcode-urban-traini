// Barcode assets and brand constants
export const BARCODE_IMAGES = {
  // Attached user uploads
  logo: "https://vibe.filesafe.space/1790776132600168681/attachments/355d68ac-5497-43e3-8b3c-c60f1d526571.png",
  apparelHoodieBack:
    "https://vibe.filesafe.space/1790776132600168681/attachments/5b180cce-08fe-4787-999f-9b15eb149739.jpg",
  apparelHoodieFront:
    "https://vibe.filesafe.space/1790776132600168681/attachments/67edc35a-8f7e-4f8f-8a97-7da4088b4c99.jpg",
  apparelTee:
    "https://vibe.filesafe.space/1790776132600168681/attachments/192f6b0b-5f69-4a14-9c03-fd54ec742508.jpg",
  graphicLogo:
    "https://vibe.filesafe.space/1790776132600168681/attachments/f27eaa98-6827-4e4d-b17c-a7629b36f751.png",

  // Generated high-energy urban fitness imagery
  heroLifting:
    "https://vibe.filesafe.space/1790776132600168681/assets/22360527-b545-4215-8b05-0821ee6200b8.png",
  intenseWarehouse:
    "https://vibe.filesafe.space/1790776132600168681/assets/0575986a-1adc-4d12-bce4-3204f2f06314.png",
  headCoach:
    "https://vibe.filesafe.space/1790776132600168681/assets/dccdfac5-30fe-45f3-a206-e441a59c04a2.png",
  communityRopes:
    "https://vibe.filesafe.space/1790776132600168681/assets/63f118da-fe42-492f-83a9-a6d6d0518192.png",
};

export const TRAINING_SERVICES = [
  {
    id: "personal-training",
    name: "PERSONAL TRAINING",
    tagline: "ONE-ON-ONE ARCHITECTURE",
    desc: "Targeted programming engineered for rapid strength development, body recomposition, and structural durability. Customized to your movement mechanics.",
    duration: "60 MIN",
    capacity: "1-on-1 Focused",
    price: "$95 / session",
    tag: "High Accountability",
  },
  {
    id: "small-group",
    name: "SMALL GROUP TRAINING",
    tagline: "SQUAD DYNAMICS & INTENSITY",
    desc: "Capped at 6 athletes per session. Heavy barbells, sleds, and high-energy pacing where personal coaching meets collective adrenaline.",
    duration: "50 MIN",
    capacity: "Max 6 Athletes",
    price: "$45 / session",
    tag: "Most Popular",
  },
  {
    id: "strength-conditioning",
    name: "STRENGTH & CONDITIONING",
    tagline: "POWER, VELOCITY & ENGINE",
    desc: "Progressive overload cycles coupled with metabolic conditioning. Build real force production that translates straight to the field and the street.",
    duration: "60 MIN",
    capacity: "All Levels",
    price: "$180 / month",
    tag: "Core Program",
  },
  {
    id: "athletic-performance",
    name: "ATHLETIC PERFORMANCE",
    tagline: "SPEED, AGILITY & PLYOMETRICS",
    desc: "Rotational power, acceleration mechanics, decelerative control, and joint resilience for competitive sport and demanding lifestyles.",
    duration: "75 MIN",
    capacity: "Advanced Prep",
    price: "$120 / session",
    tag: "Performance",
  },
  {
    id: "fitness-assessment",
    name: "FITNESS ASSESSMENT & SCREEN",
    tagline: "COMPREHENSIVE BASELINE BENCHMARK",
    desc: "Complete functional movement audit, mobility diagnostics, baseline force metrics, and personalized trajectory roadmap.",
    duration: "45 MIN",
    capacity: "First-Timers",
    price: "$49 (Free with membership)",
    tag: "Starting Point",
  },
  {
    id: "specialty-session",
    name: "SPECIALTY TRAINING CLINICS",
    tagline: "OLYMPIC LIFTS & COMBAT CONDITIONING",
    desc: "Deep-dive workshops focused on barbell snatches, cleans, heavy sandbag carries, and high-threshold anaerobic resilience.",
    duration: "90 MIN",
    capacity: "Clinics",
    price: "$65 / clinic",
    tag: "Specialty",
  },
];

export const APPAREL_PRODUCTS = [
  {
    id: "heavyweight-barcode-hoodie",
    name: "BARCODE HEAVYWEIGHT OVERSIZED HOODIE",
    subtitle: "500 GSM French Terry Cotton - Concrete Ash",
    price: "$98.00",
    image: BARCODE_IMAGES.apparelHoodieBack,
    hoverImage: BARCODE_IMAGES.apparelHoodieFront,
    status: "Best Seller",
    details: "Drop shoulder cut, engineered for gym warmup and urban street transition.",
  },
  {
    id: "signature-urban-tee",
    name: "BARCODE ARCHITECTURE OVERSIZED TEE",
    subtitle: "280 GSM Combed Cotton - Off-White & Black",
    price: "$48.00",
    image: BARCODE_IMAGES.apparelTee,
    hoverImage: BARCODE_IMAGES.apparelHoodieFront,
    status: "Limited Batch",
    details: "High-density screenprint, sweat-resistant collar, durable athletic drape.",
  },
  {
    id: "barcode-stealth-pullover",
    name: "BARCODE RAW LOGO PULLOVER",
    subtitle: "Heavyweight Double-Knit Cotton - Stealth Black",
    price: "$92.00",
    image: BARCODE_IMAGES.apparelHoodieFront,
    hoverImage: BARCODE_IMAGES.apparelHoodieBack,
    status: "Core Essential",
    details: "Distressed silicone chest branding with reinforced thumbloops and metal aglets.",
  },
  {
    id: "concrete-training-cap",
    name: "BARCODE REVERSIBLE SKULL BEANIE & CAP",
    subtitle: "Moisture-Wicking Heavy Rib - Industrial Charcoal",
    price: "$34.00",
    image: BARCODE_IMAGES.graphicLogo,
    status: "Restocked",
    details: "Low-profile silhouette, embroidered monochrome barcode badge.",
  },
];

export const GYM_DETAILS = {
  address: "742 Industrial Blvd, Warehouse District, NY 10014",
  phone: "(555) 829-2272",
  email: "train@barcodefitness.com",
  hours: [
    { days: "Monday – Friday", time: "5:00 AM – 10:00 PM" },
    { days: "Saturday", time: "6:30 AM – 8:00 PM" },
    { days: "Sunday", time: "8:00 AM – 6:00 PM (Open Gym & Recovery)" },
  ],
};
