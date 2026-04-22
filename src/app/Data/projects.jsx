import { features } from "node:process";

// app/data/projects.js
const projects = [
  {
    id: "minddeft-technologies-pvt-ltd",
    title: "Minddeft Technologies Pvt Ltd",
    category: "UI / UX Design",

    thumbnail: "/images/minddeft.webp",
    banner: "/images/minddeft-banner.webp",
    Behance:
      "https://www.behance.net/gallery/247693737/Minddeft-Technologies-website-Design",

    colorselement: "#8046e8",

    summary:
      "A clean and modern corporate website design for Minddeft Technologies, focused on building trust, showcasing services, and improving user engagement through a structured and professional interface.",

    problem:
      "The existing website lacked clarity, modern aesthetics, and a strong user flow, making it difficult for users to understand services and take action.",

    solution:
      "I redesigned the website with a clean layout, strong visual hierarchy, and structured sections to clearly communicate services and improve user navigation.",

    outcome:
      "The redesigned experience enhances credibility, improves readability, and creates a more professional digital presence aligned with the company's goals.",

    elementImages: ["/images/e-minddeft-01.webp", "/images/e-minddeft-02.webp"],

    challenge:
      "Balancing a corporate and modern look while ensuring the website remains engaging and easy to navigate for diverse users.",

    flowImage: "/images/minddeft-IA.webp",

    colors: [
      { name: "Deep Blue", hex: "#8046e8" },
      { name: "Sky Blue", hex: "#38BDF8" },
      { name: "Light Gray", hex: "#E5E7EB" },
    ],

    typography: {
      fontName: "Inter",
    },

    features: [
      {
        title: "Clean Corporate Aesthetic",
        description:
          "Designed a minimal and professional interface to establish trust and credibility for a tech-focused audience.",
        points: [
          "Use of whitespace for clarity and readability.",
          "Consistent typography and spacing system.",
          "Subtle color accents to guide attention.",
        ],
        image: "/images/minddeft-feature-01.webp",
      },
      {
        title: "Structured Information Architecture",
        description:
          "Organized content into clear sections to improve usability and help users quickly understand services.",
        points: [
          "Service sections with clear descriptions.",
          "Logical content flow from introduction to CTA.",
          "Improved readability through hierarchy.",
        ],
        image: "/images/minddeft-feature-02.webp",
      },
      {
        title: "Responsive & User-Friendly Experience",
        description:
          "Ensured seamless usability across devices with responsive layouts and intuitive navigation.",
        points: [
          "Mobile-first responsive layouts.",
          "Sticky navigation for accessibility.",
          "Clear call-to-action placement.",
        ],
        image: "/images/minddeft-feature-03.webp",
      },
    ],

    figmaUrl:
      "https://www.figma.com/proto/xyz123/minddeft-design?node-id=0-1&scaling=scale-down&page-id=0%3A1",

    videoSrc: "/videos/minddeft-prototype.mp4",

    learnings: [
      {
        title: "Clarity Over Complexity",
        description:
          "Simplifying layouts and focusing on essential content improves user understanding and engagement.",
      },
      {
        title: "Corporate UX Matters",
        description:
          "Even simple corporate websites benefit greatly from strong hierarchy and structured design.",
      },
      {
        title: "Consistency is Key",
        description:
          "Maintaining consistent spacing, typography, and components creates a polished experience.",
      },
    ],

    tech: [
      "UI Design",
      "Responsive Design",
      "Interaction Design",
      "Photoshop",
      "Figma",
    ],

    behance:
      "https://www.behance.net/gallery/247693737/Minddeft-Technologies-website-Design",

    liveLink: "https://minddeft.com/",
  },
  {
    id: "barbaros-barbers-davos",
    title: "Barbaros Barbers Davos",
    category: "UI / UX Design",
    year: "2020",

    thumbnail: "/images/ui-1.jpg",
    banner: "/images/barbaros-barber-banner.jpg",
    flowImage: "/images/barbaros-IA.webp",

    summary:
      "Barbaros Barbers Davos is a premium landing page that blends traditional craftsmanship with a modern, dark-themed experience to build brand authority and drive bookings.",

    outcome:
      "The final design delivers a premium look and feel, improving brand perception and creating a strong visual identity online.",

    elementImages: ["/images/e-barbaros-01.jpg", "/images/e-barbaros-02.jpg"],

    challenge:
      "Create a high-end digital experience that showcases services and craftsmanship without overwhelming users or losing the brand's rugged yet refined identity.",

    solution:
      "Designed a sleek dark UI with strong hierarchy, impactful imagery, and clear CTAs to guide users smoothly from exploration to booking.",

    colors: [
      { name: "Racing Red", hex: "#E61E25" },
      { name: "Onyx Black", hex: "#0B0B0B" },
      { name: "Silver Mist", hex: "#C0C0C0" },
    ],

    typography: {
      fontName: "Playfair Display , Montserrat",
    },

    features: [
      {
        title: "Visual Proof Engine",
        description:
          "A curated selection of high-resolution images showcasing the shop's work.",
        points: [
          "Increases social proof",
          "sets expectations for quality",
          "reduces user anxiety",
        ],
        image: "/images/bb-features-01.webp",
      },
      {
        title: "Strategic Booking Flow",
        description:
          "High-contrast red Book Now buttons placed at the top and bottom of the page.",
        points: [
          "Optimizes conversion rates",
          "provides clear next steps",
          "minimizes navigation time",
        ],
        image: "/images/bb-features-02.webp",
      },
      {
        title: "Expertise Breakdown (Services)",
        description: "Icon-based cards explaining specific grooming services.",
        points: [
          "Enhances scannability",
          "educates the user on service variety",
          "helps with SEO keywords",
        ],
        image: "/images/bb-features-03.webp",
      },
    ],

    figmaUrl:
      "https://www.figma.com/proto/abc123/barbaros-barbers?node-id=0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A1",
    videoSrc: "/videos/barbaros-prototype.mp4",

    learnings: [
      {
        title: "The Power of Negative Space",
        description:
          "learned that in dark-themed designs, white space (or black space) is crucial to prevent the UI from feeling heavy or claustrophobic.",
      },
      {
        title: "Visual Hierarchy in Photography",
        description:
          "I discovered that the quality of the imagery dictates the perceived value of the design. Using professional, consistent lighting in photos is what makes a UI look Senior level.",
      },
      {
        title: "Simplifying UX Logic",
        description:
          "Initially, I wanted to show every detail at once, but I learned that progressive disclosure (showing information as the user scrolls) leads to a better user experience and less cognitive load.",
      },
    ],

    tech: [
      "UI Design",
      "Responsive Design",
      "Interaction Design",
      "Photoshop",
      "Figma",
    ],

    liveLink:
      "https://www.behance.net/gallery/130100457/Creative-Homepage-Design",
  },

  {
    id: "grapevine",
    title: "Grapevine",
    category: "UI / UX Design",

    thumbnail: "/images/ui-2.jpg",
    banner: "/images/grapevine-banner.jpg",

    colorselement: "#ff514a",

    summary:
      "A modern, dark-themed SaaS landing page designed for a data-driven financial platform, focusing on clarity, trust, and conversion through strong visual hierarchy and immersive dashboard visuals.",

    problem:
      "Financial platforms often struggle with presenting complex data in a simple and engaging way, leading to user confusion and lower conversion rates.",

    solution:
      "I designed a clean, structured layout with bold typography, clear sections, and dashboard-focused visuals to simplify information and guide users effectively.",

    outcome:
      "The final design improves readability, builds trust through a modern interface, and enhances user engagement with a strong focus on conversion.",

    elementsText:
      "The website elements focus on strong typography, clear hierarchy, and impactful visuals to create a balance between aesthetics and usability.",

    elementImages: [
      "/images/e-grapevine-01.webp",
      "/images/e-grapevine-02.webp",
    ],

    challenge:
      "Balancing complex financial data with a clean and minimal design while ensuring the interface remains intuitive and user-friendly.",

    flowImage: "/images/grapevine-IA.webp",

    colors: [
      { name: "Midnight Slate", hex: "#21202e" },
      { name: "Tomato Red", hex: "#ff514a" },
      { name: "Pure White", hex: "#ffffff" },
    ],

    typography: {
      fontName: "Inter",
    },

    features: [
      {
        title: "Data-Focused Visual Design",
        description:
          "Created a dashboard-inspired layout to visually communicate complex financial data in an intuitive way.",
        points: [
          "Use of charts and UI blocks for clarity.",
          "High contrast design for readability.",
          "Visual grouping of related data points.",
        ],
        image: "/images/grapevine-features-01.webp",
      },
      {
        title: "Conversion-Driven Layout",
        description:
          "Structured the page to guide users from awareness to action with clear CTAs and logical content flow.",
        points: [
          "Hero section with strong value proposition.",
          "Section-based storytelling approach.",
          "Strategic CTA placements.",
        ],
        image: "/images/grapevine-features-02.webp",
      },
      {
        title: "Modern SaaS Aesthetic",
        description:
          "Used dark UI with subtle gradients and glow effects to create a premium and tech-forward look.",
        points: [
          "Dark mode UI for modern appeal.",
          "Subtle gradients for depth.",
          "Consistent spacing and layout system.",
        ],
        image: "/images/grapevine-features-03.webp",
      },
    ],

    figmaUrl:
      "https://www.figma.com/proto/demo123/grapevine?node-id=0-1&scaling=scale-down&page-id=0%3A1",

    videoSrc: "/videos/grapevine-prototype.mp4",

    learnings: [
      {
        title: "Simplifying Complex Data",
        description:
          "Breaking down complex financial information into digestible UI components improves usability significantly.",
      },
      {
        title: "Hierarchy Drives UX",
        description:
          "Strong visual hierarchy ensures users can quickly scan and understand key information.",
      },
      {
        title: "SaaS Design Patterns",
        description:
          "Following proven SaaS UI patterns helps improve familiarity and user trust.",
      },
    ],

    tech: ["UI Design", "Web Design", "Figma", "Photoshop", "Illustrator"],

    behance: "https://www.behance.net/gallery/130396259/landing-page-Design",

    liveLink: "https://example-saas-landing.com",
  },
  {
    id: "rnmkr",
    title: "RNMKR",
    category: "UI / UX Design",

    thumbnail: "/images/ui-3.webp",
    banner: "/images/RNMKR-banner.webp",
    colorselement: "#D4AF37",
    flowImage: "/images/grapevine-IA.webp",

    summary:
      "A sleek, high-impact landing page designed for a premium, results-driven program. The interface combines a dark luxury aesthetic with gold accents, strong typography, and structured storytelling to build trust, highlight value, and drive conversions.",

    problem:
      "High-ticket programs often struggle with conveying value, trust, and credibility, especially when messaging lacks clarity and visual hierarchy.",

    solution:
      "I designed a conversion-focused layout with bold typography, premium visuals, and clear sectioning to guide users through the value proposition and encourage action.",

    outcome:
      "The final design enhances perceived value, builds trust, and improves engagement, increasing the likelihood of user conversion.",

    elementImages: ["/images/e-RNMKR-01.webp", "/images/e-RNMKR-02.webp"],

    challenge:
      "Creating a premium and trustworthy experience while maintaining a strong focus on conversion and clarity of messaging.",

    flowImage: "/images/rnmkr-IA.webp",

    colors: [
      { name: "Jet Black", hex: "#0A0A0A" },
      { name: "Luxury Gold", hex: "#D4AF37" },
      { name: "Soft Gray", hex: "#A1A1AA" },
    ],

    typography: {
      fontName: "Clash Display",
    },

    features: [
      {
        title: "Premium Visual Identity",
        description:
          "Designed a luxury-inspired interface using dark tones and gold accents to elevate brand perception.",
        points: [
          "Dark UI for a premium feel.",
          "Gold highlights to emphasize key elements.",
          "High contrast typography for impact.",
        ],
        image: "/images/rnmkr-feature-01.webp",
      },
      {
        title: "Conversion-Focused Layout",
        description:
          "Structured the page to guide users through a clear journey from introduction to action.",
        points: [
          "Strong hero section with value proposition.",
          "Clear section flow to maintain engagement.",
          "Strategic CTA placements throughout the page.",
        ],
        image: "/images/rnmkr-feature-02.webp",
      },
      {
        title: "Trust & Credibility Building",
        description:
          "Focused on reinforcing credibility through layout, spacing, and content hierarchy.",
        points: [
          "Testimonials and proof sections.",
          "Clean, structured content blocks.",
          "Consistent spacing system for readability.",
        ],
        image: "/images/rnmkr-feature-03.webp",
      },
    ],

    figmaUrl:
      "https://www.figma.com/proto/demo456/rnmkr?node-id=0-1&scaling=scale-down&page-id=0%3A1",

    videoSrc: "/videos/rnmkr-prototype.mp4",

    learnings: [
      {
        title: "Designing for High-Ticket Users",
        description:
          "Premium audiences expect clarity, confidence, and strong visual storytelling in design.",
      },
      {
        title: "Perceived Value Matters",
        description:
          "Visual design plays a critical role in influencing how users perceive the value of an offering.",
      },
      {
        title: "Conversion Through Structure",
        description:
          "A well-structured layout can significantly impact user decision-making and engagement.",
      },
    ],

    tech: [
      "UI Design",
      "Responsive Design",
      "Interaction Design",
      "Photoshop",
      "Figma",
    ],

    behance: "https://www.behance.net/gallery/247683441/RNMKR",

    liveLink: "https://example-rnmkr.com",
  },

  // Social Media Design
  {
    id: "instagram-campaign",
    title: "Instagram Campaign",
    category: "Visual Design",

    //Thumbnail
    thumbnail: "/images/Social01.webp",

    // 🔥 Hero banner
    banner: "/images/SocialBanner.webp",

    // 🔥 Short intro (use first paragraph)
    summary:
      "Transforming ideas into scroll-stopping visuals. My social media designs are built to spark curiosity, boost engagement, and make brands stand out in a crowded digital space.",

    // 🔥 Elements section
    elementsText:
      "The website elements focus on strong typography, clear hierarchy, and impactful imagery to create a memorable first impression while maintaining usability.",

    tags: ["Creative", "Modern", "Vibrant"],
    Sectitle: "A Visual Narrative.",
    conceptText:
      "The inspiration came from 1970s Swiss posters combined with modern glassmorphism. I wanted to create a visual language that felt both structured and ethereal, using heavy typography to anchor the floating glass elements.",
    elementImages: [
      "/images/e-grapevine-01.webp",
      "/images/e-grapevine-02.webp", // duplicate or second layout image
    ],
    assets: [
      "/images/social-echo-system-01.webp",
      "/images/social-echo-system-02.webp",
      "/images/social-echo-system-03.webp",
      "/images/social-echo-system-04.webp",
    ],
    details: [
      {
        image: "/images/social-micro.webp",
        label: "Grain & Texture",
      },
      {
        image: "/images/social-micro-02.webp",
        label: "Typography",
        description:
          "The typography is bold and geometric, inspired by the Swiss Style. I used a custom typeface with heavy weights to create a strong visual presence that contrasts with the lightness of the glass elements.",
      },
      {
        image: "/images/social-micro-03.webp",
        label: "Organic Imperfections",
        description:
          "To add a human touch and break the rigidity of the design, I introduced subtle imperfections like grain, scratches, and light leaks. These details give the visuals a tactile quality and enhance the overall narrative.",
      },
    ],

    fonts: {
      name: "Clash Display",
      family: "Sans-serif",
    },
    colors: [
      { name: "Cyber Indigo", hex: "#2D2397" },
      { name: "Electric Cyan", hex: "#00D2FF" },
      { name: "Neon Purple", hex: "#9D00FF" },
    ],
    loops: [
      {
        src: "/videos/hero-motion.mp4",
        label: "Brand Reveal",
        description: "Main interaction sequence.",
      },
      {
        src: "/videos/icon-animation.mp4",
        label: "Interface Motion",
        description: "Smooth transitions between app states.",
      },
      {
        src: "/videos/texture-loop.mp4",
        label: "Atmospheric Loop",
        description: "Dynamic lighting and grain movement.",
      },
    ],

    // 🔥 Tech / tools
    tech: ["UI Design", "Web Design", "Figma", "Photoshop", "Illustrator"],

    behance: "https://www.behance.net/gallery/130396259/landing-page-Design",
  },
  {
    id: "article-image",
    title: "Article Image",
    category: "Visual Design",

    //Thumbnail
    thumbnail: "/images/Social01.webp",

    // 🔥 Hero banner
    banner: "/images/article-image-mid.webp",

    // 🔥 Short intro (use first paragraph)
    summary:
      "Transforming ideas into scroll-stopping visuals. My social media designs are built to spark curiosity, boost engagement, and make brands stand out in a crowded digital space.",

    // 🔥 Elements section
    elementsText:
      "The website elements focus on strong typography, clear hierarchy, and impactful imagery to create a memorable first impression while maintaining usability.",

    tags: ["Creative", "Modern", "Vibrant"],
    Sectitle: "Designing for Clarity",
    conceptText:
      "Drawing from Swiss design principles, these visuals emphasize structure, readability, and intentional composition. The use of bold typography and minimal elements ensures each article image delivers its message instantly while maintaining a refined visual identity.",
    elementImages: [
      "/images/e-grapevine-01.webp",
      "/images/e-grapevine-02.webp", // duplicate or second layout image
    ],
    assets: [
      "/images/article-ecosystem-01.webp",
      "/images/article-ecosystem-02.webp",
      "/images/article-ecosystem-03.webp",
      "/images/article-ecosystem-04.webp",
    ],
    details: [
      {
        image: "/images/article-Macro-01.webp",
        label: "Grain & Texture",
      },
      {
        image: "/images/social-micro-02.webp",
        label: "Typography",
        description:
          "The typography is bold and geometric, inspired by the Swiss Style. I used a custom typeface with heavy weights to create a strong visual presence that contrasts with the lightness of the glass elements.",
      },
      {
        image: "/images/social-micro-03.webp",
        label: "Organic Imperfections",
        description:
          "To add a human touch and break the rigidity of the design, I introduced subtle imperfections like grain, scratches, and light leaks. These details give the visuals a tactile quality and enhance the overall narrative.",
      },
    ],

    fonts: {
      name: "Clash Display",
      family: "Sans-serif",
    },
    colors: [
      { name: "Electric Blue", hex: "#3B82F6" },
      { name: "Azure Glow", hex: "#0EA5E9" },
      { name: "Vivid Purple", hex: "#7C3AED" },
    ],
    loops: [
      {
        src: "/videos/hero-motion.mp4",
        label: "Brand Reveal",
        description: "Main interaction sequence.",
      },
      {
        src: "/videos/icon-animation.mp4",
        label: "Interface Motion",
        description: "Smooth transitions between app states.",
      },
      {
        src: "/videos/texture-loop.mp4",
        label: "Atmospheric Loop",
        description: "Dynamic lighting and grain movement.",
      },
    ],

    // 🔥 Tech / tools
    tech: ["UI Design", "Web Design", "Figma", "Photoshop", "Illustrator"],

    behance: "https://www.behance.net/gallery/130396259/landing-page-Design",
  },

  // Mobile App
  {
    id: "app-ui-design",
    title: "Application UI Design",
    category: "App Interfaces",

    //Thumbnail
    thumbnail: "/images/App01.webp",

    // 🔥 Hero banner
    banner: "/images/SocialBanner.webp",

    // 🔥 Short intro (use first paragraph)
    summary:
      "Transforming ideas into scroll-stopping visuals. My social media designs are built to spark curiosity, boost engagement, and make brands stand out in a crowded digital space.",

    // 🔥 Elements section
    elementsText:
      "The website elements focus on strong typography, clear hierarchy, and impactful imagery to create a memorable first impression while maintaining usability.",

    elementImages: [
      "/images/e-grapevine-01.webp",
      "/images/e-grapevine-02.webp", // duplicate or second layout image
    ],

    // 🔥 Tech / tools
    tech: ["UI Design", "Web Design", "Figma", "Photoshop", "Illustrator"],

    // liveLink: "https://www.behance.net/gallery/130396259/landing-page-Design",

    features: [
      {
        image: "/images/mobile-ui-1.webp",
        title: "Real-Time Crypto Swap Engine",
        description:
          "Easily swap assets with live rate calculations, slippage control, and transparent fee breakdown. The interface ensures users understand every detail before confirming transactions, reducing errors and building trust.",
      },
      {
        image: "/images/mobile-ui-2.webp",
        title: "Market Insights & Asset Tracking",
        description:
          "Stay updated with real-time market data, including price trends, gainers, and losers. Users can quickly scan performance and make informed decisions through clean, data-driven visuals.",
      },
      {
        image: "/images/mobile-ui-3.webp",
        title: "Portfolio Analytics Dashboard",
        description:
          "Visualize your investments with interactive charts, asset distribution, and profit tracking. The dashboard simplifies complex financial data into an intuitive overview for better financial management.",
      },
    ],
    lightImage: "/images/app-light.webp",
    darkImage: "/images/app-dark.webp",
    interactions: [
      {
        title: "Responsive Button Feedback",
        description:
          "Buttons provide instant visual feedback through smooth scaling and color transitions on hover and tap. This reinforces user actions and improves overall interaction clarity.",
        videoSrc: "/images/mobile-micro-01.webp",
      },
      {
        title: "Input Validation States",
        description:
          "Input fields dynamically respond with clear success and error states, guiding users in real-time. Subtle color changes and messages help reduce mistakes and enhance usability.",
        videoSrc: "/images/mobile-micro-02.webp",
      },
      {
        title: "Live Data & Status Indicators",
        description:
          "Market changes and transaction statuses update with smooth transitions and animated highlights. These micro-interactions keep users informed without overwhelming the interface.",
        videoSrc: "/images/mobile-micro-03.webp",
      },
    ],
    primaryColor: "#575cfc",
    progress: 3,

    components: [
      {
        title: "Custom Button",
        description:
          "A uniquely styled button component that stands out with its bold colors and smooth animations, designed to encourage user interaction and drive conversions.",
        image: "/images/button-component.webp",
      },
      {
        title: "Card Layout",
        description:
          "A card-based layout for displaying content in a visually appealing and organized manner, with consistent spacing, typography, and imagery to enhance readability and engagement.",
        image: "/images/card-component.webp",
      },
    ],
    lifestyleMockups: [
      {
        id: "lifestyle-01",
        img: "/images/lifestyle-01.webp",
        // label: "Lifestyle Render 01",
      },
      {
        img: "/images/lifestyle-02.webp",
        id: "lifestyle-02",
        label: "Lifestyle Render 02",
      },
    ],
  },
  // Logo Design
  {
    id: "brand-identity-design",
    title: "Brand Identity Design",
    category: "Brand Identity",
    summary:
      "UniCred is a modern FinTech brand for the academic sector, blending financial services with university credentials. Its identity features a geometric logo combining a shield and mortarboard, symbolizing security and achievement. A clean “Trust-Blue” visual system ensures clarity, reliability, and a professional dashboard experience.",

    //Thumbnail
    thumbnail: "/images/UniCredLogo.webp",

    constructionImage: "/images/Unicred-geometric.webp",

    //year
    year: "2025",

    Behance: "https://www.behance.net/gallery/247687015/Unicred-Logo-Design",

    // 🔥 Logo images
    logoPrimary: "/images/unicred-primary.webp",
    logoSecondary: "/images/unicred-secondary.webp",
    logoMono: "/images/unicred-mono.webp",

    mockups: [
      {
        image: "/images/unicred-mockup01.webp",
        label: "Signage",
      },
      {
        image: "/images/unicred-mockup02.webp",
        label: "Signage",
      },
      {
        image: "/images/unicred-mockup03.webp",
        label: "Signage",
      },
      {
        image: "/images/unicred-mockup04.webp",
        label: "Signage",
      },
    ],

    patternImage: "/images/unicred-pattern.webp",
    textureImage: "/images/unicred-texture-overlay.webp",

    landingPreview: "/images/UniCredLanding.webp",
    appIconImage: "/images/UniCredAppIcon.webp",

    dos: [
      "Maintain spacing around the logo equal to the cap height to avoid clutter.",
      "Use primary blue on light backgrounds for proper accessibility.",
      "Use Roboto Medium/Bold for headings to keep visual consistency.",
    ],
    donts: [
      "Don't stretch, skew, or rotate the logo - keep its original proportions.",
      "Use only approved light or dark backgrounds for clear visibility.",
      "Use a minimal shield icon for favicons to maintain clarity.",
    ],

    // 🔥 Hero banner
    banner: "/images/unuicred-banner.webp",

    liveLink: "https://www.behance.net/gallery/247687015/Unicred-Logo-Design",
  },
];

export default projects;
