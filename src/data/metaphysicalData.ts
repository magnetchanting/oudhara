import { ChakraInfo, TalismanProduct, AuraQuizItem } from '../types';

export const ASSETS = {
  logo: "https://i.imgur.com/Hibii5P.png",
  localLogo: "/logo.png",
  heroBracelet: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEKi71mFpO5NhS14M6bkNCTDqr-YmX9RmP6WzZhDdnTKreBXBykM9aWI-0f8yjEA0Js0qaDIGh7hezrfa3Dj8V6Q9VYwjUX90v1U_mJ7t1YHovc9NpOWDQZILeuOYkegYBVj2VibNa1YiOTUO9ESPxJg6FlW9cY2gtt2Bn-SNHSJtUquByFAehSygUguWyMvyKF8mgNjR3499nOcYF8jUvh8tyNFUKteAPu0rrpBJONjCOpQcQg-k",
  chakraYogi: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHqKw9mi9LemUW5eGsmzm1QGv_mfpoX_0AlfKEMBtwgOsofZ-7Z9Syorka9SvhTrSQZGqqbpnqv940LOgAWKRzMAGuQnO6d8pMjRArsJGLobLzeVRTpk8zz9cWp_ojALBVaEn8jTMkwk9LWWdiHMpF0naBBADI_pyArNszhvNTSKfG_vre3TOIc4vBwva-NV_tatMMyM6OGcHcfbQOSeJkXmiT8Vdf-Hjp9sEaYQiKpYC5b0M4cFU",
  pixiuCenterpiece: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSXqgn9OsJtMafjJhxN0DQJBZ4r3XNcWcozAt82mFJ5gm-Pq-xPhUYPlWpOAKGbZwFKsEZ85qeNnv7tDDzNdn5fEDFBQOv9Z8gTdpvE14etBrpmB7znGNIM4qnpVXYdSNnF1yE20_spRqwqLfJVaMwNTYEiSXdUBffTh9oyRJ-CT8CmC4_TsxC9VbN_kc7z513SgXryXAF14Ql9vMbPyAU6Y6wLqe3SUlv4bghuYhMxgZt1Q23dmk",
  monkArtisan: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6M2vppIJrFxO44AJlCJG_De9lCnzzjvJsImF3J7Bz0Q-oeT71S5Dc0XpnSbuk0BnV7n9OhDiQ0_FdTfuLvc7SeDfhk66e6pbdn8xjqND-pJLtAQC5AE98oHnKu19MVOUhwl1bgnRPjDM_FyWoYmRVzv3SGbohIckPC_54xKVRXajMq83wquieXVlsODpdsJIGzcwQSkYWuf-JsgZGkszeTTY1dnGKethqr2WqNz6du6qSA8F71Z4"
};

export const CHAKRA_LIST: ChakraInfo[] = [
  {
    id: 1,
    name: "Muladhara",
    sanskrit: "मूलाधार",
    english: "The Root Center",
    element: "Element: Earth & Fire",
    color: "#ff5252",
    bgColor: "rgba(255, 82, 82, 0.4)",
    ringColor: "rgba(255, 82, 82, 0.8)",
    topPercent: "75%",
    description: "Controls grounding, survival instincts, physical stability, and material accumulation. When polluted by negative terrestrial chatter, jealousy, or ancestral weight, sudden financial drain and chronic physical exhaustion manifest swiftly.",
    symptom: "Sudden financial leakages, unaccounted money loss, unexplained constant physical fatigue.",
    cure: "Obsidian absorbs and drains root fear, anchoring the golden Pixiu wealth lock firmly.",
    frequency: "396 Hz"
  },
  {
    id: 2,
    name: "Svadhisthana",
    sanskrit: "स्वाधिष्ठान",
    english: "The Sacral Gateway",
    element: "Element: Sacred Water",
    color: "#ff9100",
    bgColor: "rgba(255, 145, 0, 0.4)",
    ringColor: "rgba(255, 145, 0, 0.8)",
    topPercent: "61%",
    description: "Governs creative desire, emotional agility, personal charisma, and pleasure flow. Energetic veil stagnation results in loss of entrepreneurial fire, romantic disharmony, and apathy towards new opportunities.",
    symptom: "Lack of motivation, creative blockages, feelings of dullness and repetitive misfortune.",
    cure: "Golden Pixiu activates radiant personal magnetism, restoring joyful manifestation power.",
    frequency: "417 Hz"
  },
  {
    id: 3,
    name: "Manipura",
    sanskrit: "मणिपूर",
    english: "The Solar Power Center",
    element: "Element: Radiant Fire",
    color: "#ffc107",
    bgColor: "rgba(255, 193, 7, 0.4)",
    ringColor: "rgba(255, 193, 7, 0.8)",
    topPercent: "49%",
    description: "Seat of personal willpower, authority, vitality, and courageous execution. Heavily vulnerable to envy, evil eye (ඇස්වහ කටවහ), psychic projections, and workplace rivalry.",
    symptom: "Constant anxiety in public, imposter syndrome, digestive unease, being overlooked by peers.",
    cure: "Volcanic obsidian forms an impenetrable psychic shield reflecting ill-wishing outward.",
    frequency: "528 Hz"
  },
  {
    id: 4,
    name: "Anahata",
    sanskrit: "अनाहत",
    english: "The Heart Center",
    element: "Element: Vital Air",
    color: "#4caf50",
    bgColor: "rgba(76, 175, 80, 0.4)",
    ringColor: "rgba(76, 175, 80, 0.8)",
    topPercent: "37%",
    description: "The bridge between earthly existence and spiritual enlightenment. Absorbs interpersonal betrayal, grief residue, closed heart channels, and lingering distrust.",
    symptom: "Emotional tightness, inability to receive abundance with gratitude, trust trauma.",
    cure: "Six-Syllable Sanskrit mantras radiate universal compassion, softening auric tension.",
    frequency: "639 Hz"
  },
  {
    id: 5,
    name: "Vishuddha",
    sanskrit: "विशुद्ध",
    english: "The Throat Expression",
    element: "Element: Etheric Sound",
    color: "#00e5ff",
    bgColor: "rgba(0, 229, 255, 0.4)",
    ringColor: "rgba(0, 229, 255, 0.8)",
    topPercent: "26%",
    description: "Center of truth, negotiation power, vocal resonance, and contractual luck. Subtle blockages impair high-stakes discussions and lead to misunderstood intentions.",
    symptom: "Difficulty stating boundaries, miscommunication with financial partners, voice constriction.",
    cure: "Harmonizes verbal resonance, enabling persuasive leadership and honest prosperity.",
    frequency: "741 Hz"
  },
  {
    id: 6,
    name: "Ajna",
    sanskrit: "आज्ञा",
    english: "The Third Eye Insight",
    element: "Element: Transcendent Light",
    color: "#38bdf8",
    bgColor: "rgba(56, 189, 248, 0.4)",
    ringColor: "rgba(56, 189, 248, 0.8)",
    topPercent: "16%",
    description: "Governs clairvoyance, rapid intuitive judgments, and spiritual discernment. Smogged by information overload, digital radiation, and deceptive associates.",
    symptom: "Poor financial timing, repetitive bad decisions, mental foggy disorientation.",
    cure: "Clears cognitive smoke, allowing instant perception of genuine prosperity channels.",
    frequency: "852 Hz"
  },
  {
    id: 7,
    name: "Sahasrara",
    sanskrit: "सहस्रार",
    english: "The Crown Portal",
    element: "Element: Pure Consciousness",
    color: "#e0e7ff",
    bgColor: "rgba(224, 231, 255, 0.5)",
    ringColor: "rgba(224, 231, 255, 0.9)",
    topPercent: "6%",
    description: "Direct conduit to divine lineage, celestial grace, and karmic resolution. When opened under sacred monastic protection, undisturbed peace and abundance reign supreme.",
    symptom: "Existential detachment, chronic spiritual burnout, feeling severed from destiny.",
    cure: "Consecrated monastic rites connect the wearer to unbroken spiritual lineage blessings.",
    frequency: "963 Hz"
  }
];

export const AURA_STRESS_INDICATORS = [
  {
    title: "Persistent Exhaustion",
    icon: "battery_alert",
    color: "primary",
    desc: "Unexplained heaviness even after full sleep, caused by aura leaks letting prana deplete into ambient spaces."
  },
  {
    title: "Creative Apathy",
    icon: "block",
    color: "secondary",
    desc: "Inability to initiate new endeavors, mental lethargy, and loss of entrepreneurial fire due to energetic veil stagnation."
  },
  {
    title: "Psychic Turmoil",
    icon: "psychology",
    color: "primary",
    desc: "Susceptibility to negative conversational projections, restless racing thoughts, and loss of emotional equilibrium."
  },
  {
    title: "Wealth Dissipation",
    icon: "monetization_on",
    color: "secondary",
    desc: "Money leaves hands as fast as it enters; constant unexpected breakdowns and blocked financial abundance channels."
  }
];

export const CONSECRATION_PHASES = [
  {
    step: "01",
    title: "Pancha-Gavya & Salt Bath",
    duration: "Duration: 24 Earth Hours",
    icon: "water_drop",
    accent: "primary",
    desc: "Initial mineral purification using mountain spring water and unrefined rock salt to erase residual manufacturing vibrations and human handling traces."
  },
  {
    step: "02",
    title: "Pirith & Seth Chanting",
    duration: "Chants: 108 Repetitions",
    icon: "self_improvement",
    accent: "secondary",
    desc: "Consecrated through 108 recitation cycles of the Maha Paritta protection chants by lineage masters, infusing protective matrix vibrations into the obsidian core."
  },
  {
    step: "03",
    title: "Lunar Meridian Charging",
    duration: "Alignment: Full Lunar Phase",
    icon: "brightness_2",
    accent: "primary",
    desc: "Artifacts are laid on pure Himalayan quartz clusters beneath the waxing gibbous or full moon zenith, aligning the Pixiu's receptive golden magnetic polarity."
  },
  {
    step: "04",
    title: "Personal Intention Lock",
    duration: "Final Seal: Sanctified Reliquary",
    icon: "lock_person",
    accent: "secondary",
    desc: "Sealed in an airtight consecrated red velvet reliquary with sandalwood sacred dust, preserving the energy seal until opened by its destined wearer."
  }
];

export const QUIZ_ITEMS: AuraQuizItem[] = [
  {
    id: "lethargy",
    text: "Unexplained lethargy despite adequate rest",
    points: 25,
    category: "Vital Prana Leak"
  },
  {
    id: "finance",
    text: "Recurrent unexpected financial leakages",
    points: 30,
    category: "Wealth Dissipation"
  },
  {
    id: "crowds",
    text: "Feeling heaviness or anxiety around certain crowds",
    points: 20,
    category: "Psychic Vulnerability"
  },
  {
    id: "haze",
    text: "Mental haze and loss of motivation for goals",
    points: 25,
    category: "Etheric Clouding"
  }
];

export const WEARING_RULES = [
  {
    badge: "L",
    title: "Left Hand for Wealth Influx",
    desc: "In vital meridian theory, energy enters through the left arm and departs via the right. Wear the Pixiu on your left wrist to welcome prosperity and auspicious luck into your energy sphere."
  },
  {
    icon: "north_east",
    title: "Dragon Head Facing Outward",
    desc: "Ensure the Pixiu’s head points toward your little finger (outward to the world). This allows the guardian dragon to gaze outward, drawing wealth and sniffing out threats before they reach you."
  },
  {
    icon: "touch_app",
    title: "Affectionate Connection",
    desc: "Regularly touch its back and golden body with clean hands to foster mutual resonance, but strictly avoid touching its eyes and mouth, through which it spots and seizes abundance."
  }
];

export const TALISMAN_PRODUCTS: TalismanProduct[] = [
  {
    id: "imperial-pixiu-12mm",
    name: "Imperial Golden Pixiu & Obsidian Talisman",
    sinhalaName: "රාජකීය රන් පික්සියු කළු ඔබ්සිඩියන් පළඳනාව",
    tagline: "Supreme Wealth Seal & Unyielding Psychic Ward",
    priceLKR: 9800,
    priceUSD: 34,
    rating: 4.98,
    reviewsCount: 428,
    image: ASSETS.heroBracelet,
    beadSizes: ["10mm (Subtle / Standard)", "12mm (Potent / Recommended)", "14mm (Grand / Executive)"],
    materials: [
      "100% Raw Volcanic Obsidian (Naturally Mined)",
      "24K Antique Electroplated Pure Brass Dragon Core",
      "Six-Syllable Tibetan Sanskrit Mantra Engraving",
      "High-Elasticity Quad-Core Protective Cord"
    ],
    consecrationDetails: "Sanctified via 108 Maha Paritta repetitions with individual recipient intention blessing.",
    chakraTarget: "Muladhara (Root) & Sahasrara (Crown)",
    description: "The definitive Avudara sovereign artifact. Pairing natural volcanic glass with the insatiable golden dragon guardian, this consecrated piece clears auric debris while magnetizing prosperity from all eight cardinal directions.",
    features: [
      "Individually blessed with recipient birth chart alignment",
      "Vacuum-absorbs geopathic radiation & malicious gossip (ඇස්වහ)",
      "Includes consecrated crimson reliquary & sandalwood seal",
      "Authenticity certificate bearing lineage monastery stamp"
    ]
  },
  {
    id: "double-pixiu-vault",
    name: "Twin Guardians Dual-Vault Talisman",
    sinhalaName: "ද්විත්ව පික්සියු සෞභාග්‍ය මාලාව",
    tagline: "Bi-Directional Wealth Gate & Total Energy Mirror",
    priceLKR: 12500,
    priceUSD: 42,
    rating: 4.96,
    reviewsCount: 284,
    image: ASSETS.pixiuCenterpiece,
    beadSizes: ["10mm (Balanced)", "12mm (Potent)"],
    materials: [
      "Dual Gilded Celestial Pixiu Dragons",
      "Matte & Polished Dual-Finish Obsidian",
      "Sanskrit Mani Beads with Gold Leaf Fill"
    ],
    consecrationDetails: "Subjected to 48-hour lunar alignment and Pirith chanting for double financial protection.",
    chakraTarget: "Muladhara (Root) & Manipura (Solar Plexus)",
    description: "Features two dragon guardians facing opposite directions to concurrently attract inbound prosperity and protect behind the wearer from backstabbers and financial deception.",
    features: [
      "Dual wealth lock: one gathers, one secures",
      "Enhanced protection in volatile commercial environments",
      "Includes sacred Sri Lankan Pirith cord infusion",
      "Handcrafted by third-generation lapidary artisans"
    ]
  },
  {
    id: "celestial-purification-kit",
    name: "Monastic Consecration & Renewal Kit",
    sinhalaName: "ආශිර්වාදිත පිරිසිදු කිරීමේ කට්ටලය",
    tagline: "Monthly Auric Reset & Quartz Charging Slab",
    priceLKR: 5800,
    priceUSD: 20,
    rating: 4.92,
    reviewsCount: 167,
    image: ASSETS.monkArtisan,
    beadSizes: ["Standard Sacred Vessel"],
    materials: [
      "Raw Himalayan Clear Quartz Cluster",
      "Pure Dead Sea & Mountain Unrefined Rock Salt",
      "Sacred Temple Sandalwood Incense Cones (12x)",
      "Brass Offering Vessel with Lineage Sigil"
    ],
    consecrationDetails: "Pre-energized during full moon zenith to restore worn talismans to pristine vibrancy.",
    chakraTarget: "All 7 Auric Gateways",
    description: "A complete home sanctification altar kit to cleanse accumulated shadow frequencies from your jewelry and meditation space every full moon.",
    features: [
      "Eliminates ambient negative residue without washing out blessings",
      "Includes step-by-step Poya/Full-Moon cleansing instruction scroll",
      "Sustainably harvested Himalayan quartz",
      "Dana proceeds support elder Buddhist hermitage"
    ]
  }
];

export const ELEMENT_GUIDE = [
  {
    element: "Wood (ශක්තිය)",
    lastDigits: [4, 5],
    color: "Deep Forest / Black Resonance",
    resonance: "Obsidian amplifies wood growth while Pixiu channels commercial breakthroughs.",
    recommendation: "Imperial 12mm Obsidian with Green Jade Accent"
  },
  {
    element: "Fire (තේජස)",
    lastDigits: [6, 7],
    color: "Amber Gold / Radiant Sun",
    resonance: "Volcanic subterranean heat balances Fire passion without burnout or psychic exhaustion.",
    recommendation: "Imperial 12mm 24K Gilded Dragon Core"
  },
  {
    element: "Earth (ස්ථාවරත්වය)",
    lastDigits: [8, 9],
    color: "Dark Volcanic Stone",
    resonance: "Root chakra Muladhara alignment locks accumulated savings and real estate stability.",
    recommendation: "Twin Guardians Dual-Vault Obsidian"
  },
  {
    element: "Metal (අධිෂ්ඨානය)",
    lastDigits: [0, 1],
    color: "Gilded 24K Gold / Silver",
    resonance: "High conductive gold core supercharges financial negotiation and authoritative voice.",
    recommendation: "Imperial 12mm or 14mm Executive Edition"
  },
  {
    element: "Water (ප්‍රඥාව)",
    lastDigits: [2, 3],
    color: "Vitreous Obsidian Glass",
    resonance: "Fluid intuitive mastery. Dissolves mental haze and grants sharp clairvoyant instinct.",
    recommendation: "Imperial 10mm or 12mm Sanskrit Mantra Edition"
  }
];
