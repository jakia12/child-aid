// Shared donation data with rich fake fields inspired by real charity sites
export const DONATIONS = [
  {
    id: 1,
    slug: "education-for-every-child",
    img: "/images/donate/donate-2-1.png",
    category: "EDUCATION",
    title: "Education for Every Child",
    shortDescription:
      "Provide books, tuition, and safe classrooms so children can learn and build brighter futures.",
    story:
      "Across rural regions, children walk miles to reach overcrowded classrooms with limited books and no electricity. Your gift equips learning centers with trained teachers, solar lighting, and age-appropriate materials so students can thrive.",
    impactBullets: [
      "$25 supplies a backpack and notebooks for one child",
      "$60 funds after‑school tutoring for a month",
      "$250 equips a classroom with solar study lamps",
    ],
    percent: 42,
    raised: 4407,
    goal: 10000,
    donors: 183,
    location: "Rural Bihar, India",
    lastUpdated: "2025-09-18",
  },
  {
    id: 2,
    slug: "safe-homes-for-families",
    img: "/images/donate/donate-2-2.png",
    category: "SHELTER",
    title: "Safe Homes for Families",
    shortDescription:
      "Help displaced families find secure housing and the support they need during crises.",
    story:
      "When families flee conflict or flooding, shelter becomes the first line of dignity. We provide transitional housing kits, mattresses, hygiene supplies, and case management to help families rebuild safely.",
    impactBullets: [
      "$35 provides a warm blanket and sleeping mat",
      "$120 funds a complete family hygiene kit",
      "$650 assembles a transitional shelter kit",
    ],
    percent: 92,
    raised: 9200,
    goal: 10000,
    donors: 512,
    location: "Sylhet, Bangladesh",
    lastUpdated: "2025-08-30",
  },
  {
    id: 3,
    slug: "healthcare-for-children",
    img: "/images/donate/donate-2-3.png",
    category: "HEALTH",
    title: "Healthcare for Children",
    shortDescription:
      "Fund medical checkups, vaccines, and essential medicines for vulnerable children.",
    story:
      "Preventable illnesses claim young lives every day. Our mobile health camps deliver immunizations, deworming, and growth monitoring to remote communities, connecting children to the care they deserve.",
    impactBullets: [
      "$15 covers routine childhood vaccines",
      "$45 treats acute malnutrition for a week",
      "$180 supports a full mobile clinic day",
    ],
    percent: 58,
    raised: 5800,
    goal: 10000,
    donors: 264,
    location: "Kisumu County, Kenya",
    lastUpdated: "2025-09-05",
  },
  {
    id: 4,
    slug: "meals-for-hungry-communities",
    img: "/images/donate/donate-2-4.png",
    category: "FOOD",
    title: "Meals for Hungry Communities",
    shortDescription:
      "Deliver daily meals and emergency food kits to children and families facing hunger.",
    story:
      "Rising prices push nutritious food out of reach. School meal programs and emergency parcels ensure children receive the calories and micronutrients needed for healthy development.",
    impactBullets: [
      "$12 provides fortified meals for a child for one week",
      "$55 supplies an emergency food kit to a family",
      "$320 supports a school canteen for a month",
    ],
    percent: 78,
    raised: 7800,
    goal: 10000,
    donors: 401,
    location: "Sindh, Pakistan",
    lastUpdated: "2025-07-22",
  },
  {
    id: 5,
    slug: "clean-water-access",
    img: "/images/donate/donate-2-1.png",
    category: "WATER",
    title: "Clean Water Access",
    shortDescription:
      "Build wells and provide filtration systems to give families safe, life-saving drinking water.",
    story:
      "Children miss school fetching water from unsafe sources. By constructing community borewells and installing household filters, we reduce disease and restore time for learning and play.",
    impactBullets: [
      "$20 provides water purification tablets for a month",
      "$95 funds a household water filter",
      "$2,500 drills a community borewell",
    ],
    percent: 65,
    raised: 3250,
    goal: 5000,
    donors: 149,
    location: "Northern Ghana",
    lastUpdated: "2025-09-27",
  },
  {
    id: 6,
    slug: "emergency-relief-fund",
    img: "/images/donate/donate-1-3.png",
    category: "CHARITY",
    title: "Emergency Relief Fund",
    shortDescription:
      "Support urgent responses to natural disasters and humanitarian crises worldwide.",
    story:
      "When disaster strikes, speed saves lives. Your unrestricted gift positions our teams to deploy medical aid, safe water, and child protection services in the critical first hours.",
    impactBullets: [
      "$30 stocks a family first-aid kit",
      "$110 provides emergency cash assistance",
      "$950 equips a rapid response unit",
    ],
    percent: 78,
    raised: 7800,
    goal: 10000,
    donors: 367,
    location: "Global",
    lastUpdated: "2025-10-01",
  },
];

export function getDonationById(id) {
  const numericId = Number(id);
  return DONATIONS.find((d) => d.id === numericId) || null;
}

export function formatCurrency(amount) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  } catch (e) {
    return `$${amount}`;
  }
}
