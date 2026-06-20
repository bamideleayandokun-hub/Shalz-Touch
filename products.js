// Shalz Touch Creations - Products and Materials Database
// This database can easily be expanded by adding new product objects.

const products = [
  // --- HANDMADE CREATIONS ---
  {
    id: "hc-1",
    name: "Luxury Hand-Beaded Corset",
    category: "Creations",
    image: "images/WhatsApp Image 2026-06-16 at 20.55.39 (1).jpeg",
    description: "Stunning custom-fit corset fully embellished with premium pearls and glass beads. Perfect for weddings and special occasions."
  },
  {
    id: "hc-2",
    name: "Elegant Bridal Bead Necklace Set",
    category: "Creations",
    image: "images/WhatsApp Image 2026-06-16 at 20.52.51.jpeg",
    description: "Handcrafted traditional bridal set featuring high-quality coral and crystal bead layering. Includes necklace, bracelet, and earrings."
  },
  {
    id: "hc-3",
    name: "Vibrant Crystal Statement Bracelet",
    category: "Creations",
    image: "images/WhatsApp Image 2026-06-16 at 20.55.10.jpeg",
    description: "A sparkling, colorful bracelet woven with premium crystal beads. Catch light beautifully with every movement."
  },
  {
    id: "hc-4",
    name: "Royal Blue Pearl Crown Beadwork",
    category: "Creations",
    image: "images/WhatsApp Image 2026-06-16 at 20.55.39.jpeg",
    description: "Royal aesthetic custom beaded headpiece/crown, hand-sewn with absolute precision and premium bead choices."
  },
  {
    id: "hc-5",
    name: "Handcrafted Beaded Waist Chains",
    category: "creations",
    image: "images/WhatsApp Image 2026-06-16 at 20.52.52.jpeg",
    description: "Delicate and alluring waist beads crafted with standard African trade beads. Elastic and custom lengths available."
  },
  {
    id: "hc-6",
    name: "Emerald Green Choker Necklace",
    category: "creations",
    image: "images/WhatsApp Image 2026-06-16 at 20.55.40.jpeg",
    description: "Sophisticated choker crafted with deep emerald green crystal beads and gold-plated toggle clasps."
  },

  // --- BEAD MATERIALS & SUPPLIES ---
  {
    id: "bm-1",
    name: "Premium Seed Beads - Metallic Gold (500g)",
    category: "materials",
    image: "images/img_22_1781496791477.jpg",
    description: "Uniformly sized 11/0 metallic gold glass seed beads. Excellent for intricate jewelry weaving and embroidery."
  },
  {
    id: "bm-2",
    name: "Faceted Glass Crystals - Sky Blue (100pcs)",
    category: "materials",
    image: "images/img_5_1781496574216.jpg",
    description: "6mm sky blue bicone crystal beads with brilliant light reflection. Highly durable and consistently cut."
  },
  {
    id: "bm-3",
    name: "Genuine Coral Bead Strands - Red",
    category: "materials",
    image: "images/img_7_1781496612208.jpg",
    description: "Natural polished red coral beads in traditional shapes, perfect for styling wedding jewelry or custom creations."
  },
  {
    id: "bm-4",
    name: "Baroque Pearl Beads - Lustrous White (50pcs)",
    category: "materials",
    image: "images/img_12_1781496653079.jpg",
    description: "Cultured freshwater baroque pearl beads. Adds an elegant, natural, and premium finish to necklaces and earrings."
  },
  {
    id: "bm-5",
    name: "Premium Acrylic Pearl Beads Mix",
    category: "materials",
    image: "images/img_10_1781496647452.jpg",
    description: "Assorted sizes (4mm to 12mm) of high-luster acrylic white pearl beads. Ideal for corsets and dress embellishments."
  },

  // --- TOOLS & ACCESSORIES ---
  {
    id: "ta-1",
    name: "Non-Stretch Beading Thread - Clear (0.25mm)",
    category: "accessories",
    image: "images/img_9_1781496626793.jpg",
    description: "High-tensile strength nylon beading thread. Resists fraying and fits easily through standard needles."
  },
  {
    id: "ta-2",
    name: "Lobster Clasps & Jump Rings Set - Silver/Gold",
    category: "accessories",
    image: "images/img_18_1781496705212.jpg",
    description: "Stainless steel connector set including 50 lobster clasps and 100 jump rings for jewelry making."
  },
  {
    id: "ta-3",
    name: "Professional Beading Needles (Pack of 10)",
    category: "accessories",
    image: "images/img_25_1781496823108.jpg",
    description: "Flexible, ultra-thin long needles designed specifically for seed beads and multi-pass thread stitching."
  },
  {
    id: "ta-4",
    name: "Bead Sorting Trays & Scoop Set",
    category: "accessories",
    image: "images/img_26_1781496841712.jpg",
    description: "Triangular aluminum sorting trays with a mini metal scoop. Prevents beads from rolling away during production."
  }
];

// Export standard for clean browser loading if loaded via script tag
window.products = products;
