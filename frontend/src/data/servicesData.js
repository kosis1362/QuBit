import {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  Cpu,
  TrendingUp,
  Palette,
  Server,
  Film,
  Users,
  Wrench,
  MonitorSmartphone,
  Sliders,
  CreditCard,
  Share2,
  ShieldCheck,
  Zap,
  Search,
  Layers,
  Lock,
  Gauge,
  BarChart3,
  FileCode,
  Laptop,
  CheckCircle2,
  Database,
  Terminal,
  Activity,
  Award,
  Video,
  Sparkles,
  Headphones
} from 'lucide-react';

export const WHAT_WE_DO_SERVICES = [
  {
    id: "web-design",
    title: "Corporate Website Design",
    shortDesc: "Custom, responsive, brand-focused corporate websites optimized for search engines and user conversion.",
    category: "WEB & DIGITAL PRESENCE",
    badge: "Core Web Service",
    metric: "100% Mobile & SEO Optimized",
    icon: Globe,
    heroHeadline: "Craft an exceptional corporate website design and elevate your brand authority with QuBit.",
    heroHeadlineL1: "Craft an exceptional corporate website design",
    heroHeadlineL2: "and elevate your brand authority with QuBit.",
    heroTitle: "Bespoke Corporate Website Design Engineered for Brand Authority & Growth",
    heroSubtitle: "We craft custom, responsive, and high-performance corporate websites that express your distinct brand narrative, engage executive decision-makers, and convert organic visitors into long-term enterprise clients.",
    illustration: null,
        heroImage: "/images/services/corporate_web_design_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND ATTRACTIVE FRONT-END DESIGN",
        desc: "At QuBit, we deliver mobile-friendly and attractive design for great user experience across desktop, tablet, and smartphone screens.",
        icon: MonitorSmartphone
      },
      {
        title: "INTUITIVE CONTENT MANAGEMENT SYSTEM",
        desc: "We integrate user-friendly CMS platforms allowing your non-technical team to manage pages, articles, and media effortlessly.",
        icon: Sliders
      },
      {
        title: "CORE WEB VITALS & FAST LOADING",
        desc: "Engineered with optimized code, asset compression, and clean DOM structures to ensure pages render in under a second.",
        icon: Zap
      },
      {
        title: "SEARCH ENGINE OPTIMIZATION (SEO)",
        desc: "Structured semantic HTML5 headings, meta tags, and schema.org markup pre-configured for maximum Google search visibility.",
        icon: Search
      },
      {
        title: "HIGH SECURITY & SSL CERTIFICATION",
        desc: "Automated HTTPS/TLS certificates, CSP headers, form honeypots, and DDoS protection ensure airtight corporate security.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED USER CONVERSION FLOWS",
        desc: "Strategic visual hierarchy, clear call-to-actions, and friction-free navigation turn casual site visitors into qualified business leads.",
        icon: Gauge
      }
    ],
    process: [
      { step: "01", title: "Discovery & Brand Alignment", desc: "Analyzing your competitive landscape, target demographics, and architectural specifications." },
      { step: "02", title: "Wireframing & Interactive Prototypes", desc: "Creating high-fidelity clickable Figma designs for iterative stakeholder review and approval." },
      { step: "03", title: "Clean Front-End Engineering", desc: "Coding modern semantic components using React, Next.js, and utility-first Tailwind CSS." },
      { step: "04", title: "Cross-Device QA & Speed Audits", desc: "Stress-testing across 20+ browser and device combinations with Lighthouse benchmark verification." },
      { step: "05", title: "Deployment & Team Handover", desc: "Zero-downtime DNS cutover, Google Analytics 4 integration, and CMS training session." }
    ],
    techStack: ["React", "Next.js 14", "Tailwind CSS", "Figma", "TypeScript", "Cloudflare", "Headless CMS"],
    faqs: [
      {
        q: "How long does a custom corporate website design take to launch?",
        a: "Standard enterprise corporate website projects typically launch within 3 to 6 weeks depending on page count, bespoke animations, and CMS complexity."
      },
      {
        q: "Will our website look and perform flawlessly on mobile phones?",
        a: "Yes. All our corporate websites are engineered mobile-first, ensuring fluid navigation, touch-optimized controls, and responsive imagery across all viewports."
      },
      {
        q: "Can our internal marketing team update text and images easily?",
        a: "Absolutely. We connect your site to an intuitive visual CMS so your content creators can publish blog posts, case studies, and team updates with zero coding required."
      }
    ]
  },
  {
    id: "ecommerce-solution",
    title: "E-commerce Solution",
    shortDesc: "Custom online storefronts with intuitive admin panels, secure payment gateways, and scalable architecture.",
    category: "DIGITAL COMMERCE",
    badge: "Enterprise Commerce",
    metric: "99.9% Transaction Reliability",
    icon: ShoppingCart,
    heroHeadline: "Set up an online store and take your business to the next level by selling products online.",
    heroHeadlineL1: "Set up an online store and take your business",
    heroHeadlineL2: "to the next level by selling products online.",
    heroTitle: "High-Conversion E-Commerce Stores Engineered for Frictionless Global Transactions",
    heroSubtitle: "Scale your digital revenue with custom storefronts equipped with sub-second checkout flows, multi-currency payment gateways, dynamic product search, and automated inventory sync across global channels.",
    illustration: "/images/services/ecommerce_illustration_transparent.png",
    bannerImage: "/images/services/ecommerce_hero_banner.png",
    featuresImage: "/images/services/ecommerce_key_features.jpg",
        heroImage: "/images/services/ecommerce_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND ATTRACTIVE FRONT-END DESIGN",
        desc: "At QuBit, we always deliver mobile-friendly and attractive design for great user experience.",
        icon: MonitorSmartphone
      },
      {
        title: "USER-FRIENDLY ADMIN PANEL",
        desc: "We develop a user-friendly admin panel to manage products, product categories, users, sales and orders of the e-commerce website.",
        icon: Sliders
      },
      {
        title: "PAYMENT GATEWAY INTEGRATION",
        desc: "Different types of payment gateways like Paypal, Stripe, CCAvenue can be integrated based on your needs.",
        icon: CreditCard
      },
      {
        title: "SOCIAL MEDIA INTEGRATION",
        desc: "Social media integration makes your site convenient to use and helps in gaining more customers.",
        icon: Share2
      },
      {
        title: "HIGH SECURITY",
        desc: "Security is a top priority in e-commerce websites and we never miss this at QuBit.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND PERFORMANCE",
        desc: "We ensure that every page in the website renders fast and efficiently from any device a visitor is surfing from.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "Catalog & Channel Architecture", desc: "Structuring product variants, categorization, logistics routing, and tax/currency rules." },
      { step: "02", title: "Checkout & UX Optimization", desc: "Designing frictionless user journey wireframes with 1-click checkout and trust badges." },
      { step: "03", title: "Custom Storefront Engineering", desc: "Building the custom store on Shopify, WooCommerce, or headless Next.js Commerce." },
      { step: "04", title: "Payment & Logistics Integration", desc: "Configuring payment gateway webhooks, shipping calculators, and email notifications." },
      { step: "05", title: "Load Testing & Live Launch", desc: "Simulating heavy traffic spikes, verifying end-to-end sandbox orders, and going live." }
    ],
    techStack: ["Shopify Plus", "WooCommerce", "Magento 2", "Stripe", "Next.js Commerce", "GraphQL", "Redis"],
    faqs: [
      {
        q: "Which e-commerce platform is right for our business?",
        a: "We assess your catalog volume, existing ERP, and customization needs to recommend the ideal platform—whether Shopify for fast deployment, WooCommerce for WordPress integration, or headless Next.js for high-volume bespoke stores."
      },
      {
        q: "How secure is customer payment processing?",
        a: "All payment transactions are encrypted end-to-end using TLS 1.3 and handled by certified PCI-DSS Level 1 payment processors. Sensitive credit card data never touches your web server."
      },
      {
        q: "Can you migrate our existing customer and product database?",
        a: "Yes. We execute automated zero-loss migrations preserving product catalogs, order history, customer accounts, and existing SEO URL redirects."
      }
    ]
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    shortDesc: "Scalable, cloud-native web applications tailored to streamline complex business operations and workflows.",
    category: "ENTERPRISE WEB APPS",
    badge: "Full-Stack Architecture",
    metric: "Sub-Second Response Latency",
    icon: Code2,
    heroHeadline: "Build scalable cloud-native web applications that streamline operations and power growth.",
    heroHeadlineL1: "Build scalable cloud-native web applications",
    heroHeadlineL2: "that streamline operations and power growth.",
    heroTitle: "Scalable Enterprise Web Applications Built for High-Throughput Performance",
    heroSubtitle: "We engineer cloud-native, modular web applications that automate intricate enterprise workflows, connect disparate legacy data silos, and deliver lightning-fast interactive experiences to thousands of concurrent users.",
    illustration: null,
        heroImage: "/images/services/web_app_hero.jpg",
    features: [
      {
        title: "TAILORED BUSINESS LOGIC & ARCHITECTURE",
        desc: "Custom-built web applications designed specifically around your unique operational rules, processes, and business logic.",
        icon: FileCode
      },
      {
        title: "USER-FRIENDLY MANAGEMENT DASHBOARDS",
        desc: "We develop intuitive administrative dashboards with real-time analytics, role management, and operational reporting.",
        icon: Sliders
      },
      {
        title: "RESTFUL & GRAPHQL API INTEGRATION",
        desc: "Reliable, high-speed API connections to link external services, legacy internal databases, and payment processors.",
        icon: Database
      },
      {
        title: "ROLE-BASED ACCESS & PERMISSIONS",
        desc: "Granular permission tiers, multi-factor authentication, and audit logs to govern enterprise access securely.",
        icon: Lock
      },
      {
        title: "HIGH SECURITY & DATA ENCRYPTION",
        desc: "End-to-end TLS encryption, automated vulnerability patching, and compliance with modern enterprise data standards.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND PERFORMANCE",
        desc: "In-memory caching with Redis, query indexing, and CDN edge distribution ensure rapid responses under heavy load.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "Domain Modeling & Scope Definition", desc: "Mapping entity relationship diagrams (ERD), API endpoints, and user state machines." },
      { step: "02", title: "Interface Design & Component Systems", desc: "Crafting atomic UI design systems with Tailwind CSS and accessible interactive states." },
      { step: "03", title: "Core Architecture & Backend APIs", desc: "Implementing resilient RESTful/GraphQL endpoints with database schema migrations." },
      { step: "04", title: "Continuous Integration & Automated Testing", desc: "Configuring Jest/Playwright suites and GitHub Actions CI pipelines with 90%+ code coverage." },
      { step: "05", title: "Cloud Deployment & Production Monitoring", desc: "Deploying to AWS/Docker with Prometheus metrics and automated rollback triggers." }
    ],
    techStack: ["React", "FastAPI", "Node.js", "PostgreSQL", "Docker", "Redis", "TypeScript"],
    faqs: [
      {
        q: "What tech stack do you recommend for enterprise web apps?",
        a: "We commonly build with React/Next.js on the frontend paired with FastAPI (Python) or Node.js on the backend, backed by PostgreSQL and Redis for low-latency caching."
      },
      {
        q: "Can the application integrate with our existing ERP or CRM?",
        a: "Yes. We specialize in building secure API adapters and webhooks that bridge modern web applications with legacy ERPs, SAP, Salesforce, and custom relational databases."
      },
      {
        q: "How do you handle data privacy and security compliance?",
        a: "We enforce role-based access control (RBAC), TLS 1.3 encryption in-transit and at-rest, automated input sanitization against SQLi/XSS, and audit trails."
      }
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "High-performance native iOS, Android, and cross-platform mobile apps with offline support.",
    category: "MOBILE ECOSYSTEMS",
    badge: "iOS & Android",
    metric: "60 FPS Fluid Interactions",
    icon: Smartphone,
    heroHeadline: "Launch high-performance iOS and Android apps that engage active users and drive conversions.",
    heroHeadlineL1: "Launch high-performance iOS and Android apps",
    heroHeadlineL2: "that engage active users and drive conversions.",
    heroTitle: "Intuitive iOS & Android Mobile Applications Built for Daily User Engagement",
    heroSubtitle: "We develop sleek, native-feel mobile applications across iOS and Android that combine tactile animations, offline synchronization, push notifications, and biometric security to deliver unforgettable mobile experiences.",
    illustration: null,
        heroImage: "/images/services/mobile_app_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND ATTRACTIVE MOBILE UI",
        desc: "At QuBit, we deliver mobile-friendly and attractive native interfaces for outstanding user experiences on iOS and Android.",
        icon: MonitorSmartphone
      },
      {
        title: "USER-FRIENDLY APP CONTROLS & SETTINGS",
        desc: "We develop intuitive navigation menus, profile dashboards, and configuration controls tailored for effortless one-handed use.",
        icon: Sliders
      },
      {
        title: "PAYMENT & IN-APP PURCHASE INTEGRATION",
        desc: "Different types of payment gateways like Apple Pay, Google Pay, Stripe, and in-app subscriptions integrated to match your needs.",
        icon: CreditCard
      },
      {
        title: "SOCIAL MEDIA & AUTHENTICATION INTEGRATION",
        desc: "Social login via Apple, Google, and Meta makes registration instant and helps in acquiring and retaining active app users.",
        icon: Share2
      },
      {
        title: "HIGH SECURITY & BIOMETRIC LOGIN",
        desc: "Security is a top priority with Face ID, Touch ID fingerprint authentication, and encrypted local keychain storage.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND BATTERY PERFORMANCE",
        desc: "We ensure fluid 60 FPS animation rendering, minimal CPU overhead, and aggressive background battery conservation.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "User Persona & User Flow Mapping", desc: "Defining navigation hierarchies, gesture mechanics, and offline edge cases." },
      { step: "02", title: "Human Interface Design & Prototyping", desc: "Creating Apple HIG and Google Material 3 compliant mobile interfaces in Figma." },
      { step: "03", title: "Cross-Platform / Native Engineering", desc: "Developing cross-platform modules in Flutter/React Native or pure Swift/Kotlin." },
      { step: "04", title: "Physical Device Lab Testing", desc: "Validating across iOS and Android device matrices for screen density, latency, and battery impact." },
      { step: "05", title: "App Store & Play Store Publishing", desc: "Guiding end-to-end submission compliance, metadata asset generation, and approval." }
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite", "GraphQL"],
    faqs: [
      {
        q: "Should we build cross-platform or native apps?",
        a: "For 90% of business applications, cross-platform frameworks like Flutter or React Native deliver 60 FPS native performance while saving 40% on engineering costs and publishing simultaneously to iOS and Android."
      },
      {
        q: "Do you assist with Apple App Store and Google Play approval?",
        a: "Yes. We oversee the complete publishing pipeline—including certificate signing, privacy manifests, rating questionnaires, and guideline reviews until your app is live."
      },
      {
        q: "Can the app function when users lose internet connectivity?",
        a: "Yes. We configure local SQLite/Hive databases with optimistic UI updates and background synchronization that queues changes and syncs as soon as connectivity returns."
      }
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    shortDesc: "Bespoke enterprise software following agile delivery, microservice architectures, and robust security.",
    category: "CUSTOM SOFTWARE",
    badge: "Agile Engineering",
    metric: "Zero-Downtime Deployment",
    icon: Cpu,
    heroHeadline: "Engineer custom, robust software solutions that eliminate friction and accelerate scale.",
    heroHeadlineL1: "Engineer custom, robust software solutions",
    heroHeadlineL2: "that eliminate friction and accelerate scale.",
    heroTitle: "Bespoke Enterprise Software Systems Architected for Scalability & Resilience",
    heroSubtitle: "We engineer customized, resilient software solutions that eliminate operational friction, automate manual workflows, and scale with your expanding business demands through disciplined agile execution.",
    illustration: null,
        heroImage: "/images/services/software_dev_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND ATTRACTIVE DESKTOP & WEB UI",
        desc: "At QuBit, we deliver intuitive, modern interfaces for enterprise tools that maximize user efficiency and minimize training time.",
        icon: MonitorSmartphone
      },
      {
        title: "USER-FRIENDLY ADMIN & SYSTEM PANEL",
        desc: "We develop comprehensive administrative panels to manage business rules, workflows, users, permissions, and operational data.",
        icon: Sliders
      },
      {
        title: "API & LEGACY DATABASE INTEGRATION",
        desc: "Different types of databases, third-party APIs, and enterprise ERP systems seamlessly integrated to eliminate data silos.",
        icon: Database
      },
      {
        title: "MULTI-CHANNEL COLLABORATION INTEGRATION",
        desc: "Automated notifications, webhook triggers, and team communication integrations keep departments synchronized in real time.",
        icon: Share2
      },
      {
        title: "HIGH SECURITY & AUDIT GOVERNANCE",
        desc: "Security is a top priority with end-to-end data encryption, granular access control, and complete audit logging.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND PERFORMANCE",
        desc: "We ensure multi-threaded backend processing, optimized SQL indexing, and instant response times across large datasets.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "Enterprise Systems Analysis", desc: "Evaluating current architectural constraints, technical debt, and compliance targets." },
      { step: "02", title: "Microservice & Schema Architecture", desc: "Designing decoupled microservices, database normalization, and message queue protocols." },
      { step: "03", title: "Agile Sprint Development", desc: "Executing two-week development sprints with bi-weekly stakeholder demo deployments." },
      { step: "04", title: "Rigorous Automated Testing", desc: "Conducting unit tests, integration validation, vulnerability scans, and regression runs." },
      { step: "05", title: "Blue-Green Zero-Downtime Rollout", desc: "Deploying to production with instant traffic switching and 24/7 observability." }
    ],
    techStack: ["Python", "Go", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "Kafka"],
    faqs: [
      {
        q: "How do you ensure enterprise software scalability?",
        a: "We architect distributed microservices with horizontal autoscaling, Redis message buffering, and partitioned database clusters capable of expanding alongside business demand."
      },
      {
        q: "Who owns the intellectual property and code repository?",
        a: "You retain 100% full ownership of all source code, design assets, and architectural IP upon project completion with zero proprietary lock-in."
      },
      {
        q: "What methodologies do you follow during development?",
        a: "We follow disciplined Scrum/Agile with 2-week sprints, transparent Jira roadmaps, weekly stakeholder progress demonstrations, and clean CI/CD automated testing."
      }
    ]
  },
  {
    id: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Data-driven organic search strategies, technical audits, and content optimization to dominate SERPs.",
    category: "GROWTH & VISIBILITY",
    badge: "Organic Growth",
    metric: "+320% Average Traffic Lift",
    icon: TrendingUp,
    heroHeadline: "Dominate search rankings and drive organic traffic that converts qualified visitors into customers.",
    heroHeadlineL1: "Dominate search rankings and drive organic traffic",
    heroHeadlineL2: "that converts qualified visitors into customers.",
    heroTitle: "Organic Search Optimization Engineered to Capture High-Intent Enterprise Revenue",
    heroSubtitle: "Elevate your market visibility with data-driven technical SEO audits, high-authority backlink acquisitions, semantic content structuring, and Core Web Vitals optimization that sustainably dominate Google search rankings.",
    illustration: null,
        heroImage: "/images/services/seo_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND SEARCH-FRIENDLY ARCHITECTURE",
        desc: "At QuBit, we ensure your site is completely mobile-friendly, crawlable, and structured for optimal indexing by Google bots.",
        icon: MonitorSmartphone
      },
      {
        title: "USER-FRIENDLY SEO DASHBOARD & REPORTING",
        desc: "We develop clear ranking dashboards to monitor keyword positions, organic impressions, click-through rates, and conversions.",
        icon: Sliders
      },
      {
        title: "ANALYTICS & GOOGLE SEARCH CONSOLE INTEGRATION",
        desc: "Different types of tracking tools like GA4, Google Search Console, and conversion pixels integrated based on your needs.",
        icon: BarChart3
      },
      {
        title: "SOCIAL SIGNALS & CONTENT INTEGRATION",
        desc: "Social media and OpenGraph metadata integration ensures your content shares attractively and builds organic backlinks.",
        icon: Share2
      },
      {
        title: "HIGH SECURITY & HTTPS PROTOCOL",
        desc: "Security is a critical Google ranking factor; we enforce strict HTTPS/TLS, clean redirects, and malware protection.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND CORE WEB VITALS",
        desc: "We ensure every page renders fast and efficiently, passing Google's LCP, FID, and CLS performance benchmarks.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "Technical Crawl & Competitive Gap Audit", desc: "Analyzing crawl errors, indexing roadblocks, keyword gaps, and backlink deficits." },
      { step: "02", title: "Information Architecture & Keyword Mapping", desc: "Mapping high-intent commercial keywords to strategic landing page silos." },
      { step: "03", title: "On-Page Code & Schema Optimization", desc: "Remediating Core Web Vitals, JSON-LD Schema markup, and metadata hierarchies." },
      { step: "04", title: "Authoritative Link Building Outreach", desc: "Securing tier-1 editorial placements and contextual backlinks from relevant industry publications." },
      { step: "05", title: "Continuous Monitoring & Conversion Auditing", desc: "Tracking SERP fluctuations, algorithmic changes, and organic lead conversions." }
    ],
    techStack: ["Google Search Console", "Ahrefs", "Semrush", "Screaming Frog", "Schema.org", "GA4"],
    faqs: [
      {
        q: "How soon can we expect organic search ranking improvements?",
        a: "Initial crawl and technical remediation gains often manifest within 4 to 8 weeks. Sustained ranking on high-competition commercial keywords typically accelerates over 3 to 6 months."
      },
      {
        q: "Do you practice safe, white-hat SEO techniques?",
        a: "Strictly 100% white-hat. We follow Google Search Essentials guidelines, protecting your domain from algorithmic penalties and ensuring durable long-term authority."
      },
      {
        q: "Can you fix technical crawl errors and slow Core Web Vitals?",
        a: "Yes. Our engineering team tackles server latency, JavaScript hydration bottlenecks, CLS layout shifts, and XML sitemap configurations directly in your codebase."
      }
    ]
  },
  {
    id: "graphic-design",
    title: "Graphics Designing",
    shortDesc: "Bespoke logos, marketing collateral, UI components, and brand identity systems that captivate.",
    category: "CREATIVE & BRAND IDENTITY",
    badge: "Brand Identity",
    metric: "100% Original Vector Art",
    icon: Palette,
    heroHeadline: "Create memorable brand identities and visual art that elevate your business across every channel.",
    heroHeadlineL1: "Create memorable brand identities and visual art",
    heroHeadlineL2: "that elevate your business across every channel.",
    heroTitle: "Bespoke Brand Identities & High-Impact Visual Communication Systems",
    heroSubtitle: "Transform how the world perceives your brand with custom logo systems, corporate identity guidelines, marketing collateral, UI design languages, and presentation decks engineered to inspire client trust and drive conversion.",
    illustration: null,
        heroImage: "/images/services/graphic_design_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND ATTRACTIVE BRAND DESIGNS",
        desc: "At QuBit, we deliver visually stunning, attractive designs that look flawless across digital displays and high-resolution print.",
        icon: MonitorSmartphone
      },
      {
        title: "USER-FRIENDLY BRAND ASSET LIBRARIES",
        desc: "We organize intuitive brand guidelines, color palettes, and typography kits so your team can apply brand assets effortlessly.",
        icon: Sliders
      },
      {
        title: "PRINT & DIGITAL FORMAT INTEGRATION",
        desc: "Different types of export formats like SVG, PDF, PNG, AI, and EPS prepared based on your exact digital and print needs.",
        icon: Palette
      },
      {
        title: "SOCIAL MEDIA CREATIVE INTEGRATION",
        desc: "Cohesive social media banners, post templates, and advertising creatives designed to boost engagement and brand awareness.",
        icon: Share2
      },
      {
        title: "HIGH SECURITY & ORIGINAL COPYRIGHT",
        desc: "100% original, copyright-cleared vector artwork created from scratch, guaranteeing your brand's unique legal identity.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND FAST TURNAROUND",
        desc: "We ensure agile design iterations with quick turnaround times without compromising on aesthetic quality.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "Brand Discovery & Moodboards", desc: "Defining emotional resonance, aesthetic direction, and competitor differentiation." },
      { step: "02", title: "Concept Sketches & Vector Ideation", desc: "Drafting dozens of conceptual sketches and refining the strongest geometric directions." },
      { step: "03", title: "Color Theory & Typographic Pairing", desc: "Selecting accessible color palettes (WCAG compliant) and distinctive typefaces." },
      { step: "04", title: "Collateral & Multi-Format Production", desc: "Extending the brand into pitch decks, brochures, social templates, and packaging." },
      { step: "05", title: "Brand System Guidelines & Export", desc: "Delivering a comprehensive brand book and organized production asset library." }
    ],
    techStack: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "After Effects", "Canva Pro"],
    faqs: [
      {
        q: "What file formats do we receive upon project delivery?",
        a: "You receive complete master source files (AI, EPS, Figma) alongside scalable vector assets (SVG, PDF) and web-optimized raster formats (PNG, JPG, WebP) in high resolution."
      },
      {
        q: "How many design revisions are included?",
        a: "We work collaboratively through structured feedback rounds until you are 100% satisfied with your visual identity and collateral designs."
      },
      {
        q: "Do you design corporate slide decks and investor presentations?",
        a: "Yes. We design executive-ready slide presentations in PowerPoint, Keynote, and Google Slides formatted with bespoke diagrams, typography, and charts."
      }
    ]
  },
  {
    id: "server-management",
    title: "Server Management",
    shortDesc: "24/7 cloud server administration, DevOps automation, firewall security, and proactive uptime monitoring.",
    category: "CLOUD INFRASTRUCTURE",
    badge: "24/7 Administration",
    metric: "99.99% Uptime Guarantee",
    icon: Server,
    heroHeadline: "Keep your cloud servers secure and available with 24/7 proactive system administration.",
    heroHeadlineL1: "Keep your cloud servers secure and available",
    heroHeadlineL2: "with 24/7 proactive system administration.",
    heroTitle: "Mission-Critical 24/7 Cloud Infrastructure Administration & DevOps Engineering",
    heroSubtitle: "Safeguard business continuity with proactive 24/7 server monitoring, automated disaster recovery, kernel hardening, container orchestration, and continuous security patching across multi-cloud environments.",
    illustration: null,
        heroImage: "/images/services/server_management_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND ATTRACTIVE MONITORING CONSOLES",
        desc: "At QuBit, we configure intuitive, modern monitoring dashboards that display live server health, CPU, and RAM metrics at a glance.",
        icon: MonitorSmartphone
      },
      {
        title: "USER-FRIENDLY SERVER CONTROL PANEL",
        desc: "We configure user-friendly server panels (cPanel, Plesk, Portainer) to manage databases, domains, and files easily.",
        icon: Sliders
      },
      {
        title: "CLOUD & BACKUP INTEGRATION",
        desc: "Different types of automated cloud backups like AWS S3, Google Cloud Storage, and off-site archives integrated for total peace of mind.",
        icon: Database
      },
      {
        title: "ALERT & NOTIFICATION INTEGRATION",
        desc: "Real-time Slack, SMS, and email incident notifications ensure your technical team is alerted instantaneously to any anomalies.",
        icon: Share2
      },
      {
        title: "HIGH SECURITY & FIREWALL DEFENSE",
        desc: "Security is our top priority: enterprise firewall setup, brute-force defense, malware scans, and DDoS mitigation protect your data.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND SERVER PERFORMANCE",
        desc: "We fine-tune Nginx, PHP-FPM, MySQL caching, and kernel parameters so your server handles heavy traffic loads with low latency.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "Infrastructure & Security Audit", desc: "Assessing server vulnerabilities, disk bottlenecks, open ports, and resource saturation." },
      { step: "02", title: "Kernel Hardening & Firewall Setup", desc: "Configuring CSF/IPTables, SSH keys, Fail2Ban, and automated intrusion prevention." },
      { step: "03", title: "Automated Backup & Disaster Recovery", desc: "Setting up daily encrypted offsite snapshots with automated restoration testing." },
      { step: "04", title: "Kernel & Web Server Fine-Tuning", desc: "Optimizing Nginx/Apache workers, PHP-FPM pools, and MySQL query cache." },
      { step: "05", title: "24/7 Proactive Telemetry Monitoring", desc: "Deploying Grafana/Prometheus agents with automated instant alerting to our NOC." }
    ],
    techStack: ["Linux (Ubuntu/RHEL)", "AWS EC2/S3", "Docker", "Kubernetes", "Nginx", "Grafana", "Prometheus"],
    faqs: [
      {
        q: "What cloud providers and operating systems do you support?",
        a: "We manage environments across AWS, DigitalOcean, Google Cloud, Microsoft Azure, Linode, and dedicated bare-metal servers running Ubuntu, Debian, RHEL, and CentOS."
      },
      {
        q: "How fast do you respond if a server experiences downtime?",
        a: "Our 24/7 Network Operations Center (NOC) responds to critical uptime alerts within 15 minutes, initiating automated failovers and root-cause resolution."
      },
      {
        q: "Can you migrate our server with zero website downtime?",
        a: "Yes. We execute low-TTL DNS cutovers and background database synchronization so your users experience zero interruption or data loss during migration."
      }
    ]
  },
  {
    id: "2d-animation",
    title: "2D Animation",
    shortDesc: "Engaging 2D character animations, explainer videos, and motion graphics that drive conversion.",
    category: "MOTION & MULTIMEDIA",
    badge: "Motion Graphics",
    metric: "4K 60 FPS Studio Output",
    icon: Film,
    heroHeadline: "Bring your brand stories and products to life with high-retention 2D animated explainers.",
    heroHeadlineL1: "Bring your brand stories and products to life",
    heroHeadlineL2: "with high-retention 2D animated explainers.",
    heroTitle: "Captivating 2D Explainer Videos & High-Retention Motion Graphics",
    heroSubtitle: "Demystify complex enterprise software, engage target demographics, and supercharge sales conversions with studio-grade 2D animated explainers, motion graphic visual effects, and bespoke character animations.",
    illustration: null,
        heroImage: "/images/services/animation_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND ATTRACTIVE ANIMATION DESIGNS",
        desc: "At QuBit, we deliver vibrant, attractive 2D animations optimized for smooth playback across smartphones, tablets, and widescreen displays.",
        icon: MonitorSmartphone
      },
      {
        title: "USER-FRIENDLY STORYBOARDING & SCRIPTING",
        desc: "We provide an easy, collaborative script and storyboard review process so you approve every scene and character before production.",
        icon: Sliders
      },
      {
        title: "VOICEOVER & SOUND DESIGN INTEGRATION",
        desc: "Professional human voiceover in multiple languages and licensed soundtrack design integrated seamlessly based on your project needs.",
        icon: Headphones
      },
      {
        title: "MULTI-CHANNEL VIDEO INTEGRATION",
        desc: "Formatted for immediate publishing across YouTube, LinkedIn, Instagram Reels, TikTok, and website landing pages.",
        icon: Share2
      },
      {
        title: "HIGH SECURITY & ORIGINAL ARTWORK",
        desc: "All character designs, visual assets, and animations are 100% original and custom-crafted with full commercial ownership rights.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND FAST PRODUCTION",
        desc: "We ensure disciplined sprint timelines that deliver studio-grade 4K 60FPS animation renders promptly without quality compromise.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "Scriptwriting & Narrative Conceptualization", desc: "Crafting a compelling 60-90 second narrative that highlights the core problem and solution." },
      { step: "02", title: "Character Design & Visual Storyboarding", desc: "Sketching frame-by-frame visual storyboards and tailored character model sheets." },
      { step: "03", title: "Voiceover Recording & Sound Engineering", desc: "Directing studio voice actors and producing custom Foley sound effects." },
      { step: "04", title: "Full Keyframe Animation & Dynamics", desc: "Rigging characters and animating smooth 60 FPS transitions in After Effects." },
      { step: "05", title: "Final 4K Mastering & Multi-Format Render", desc: "Color grading and rendering high-bitrate MP4, WebM, and vertical aspect ratios." }
    ],
    techStack: ["Adobe After Effects", "Illustrator", "Premiere Pro", "Audition", "Cinema 4D Lite", "Lottie"],
    faqs: [
      {
        q: "How long does a 60-second animated explainer video take to produce?",
        a: "A typical 60 to 90-second studio-quality 2D explainer video takes approximately 2 to 4 weeks from initial scriptwriting through final voiceover and animation mastering."
      },
      {
        q: "Can we use our own voiceover or script?",
        a: "Yes. You are welcome to supply your own voiceover audio or script draft, and our creative directors will adapt the storyboard to synchronize perfectly."
      },
      {
        q: "Do you deliver Lottie animations for website interfaces?",
        a: "Yes. We export lightweight, interactive vector JSON Lottie animations that load instantly within modern web and mobile application UIs."
      }
    ]
  },
  {
    id: "it-outsourcing",
    title: "IT Outsourcing",
    shortDesc: "Dedicated offshore developers and technical teams to scale your enterprise delivery capacity.",
    category: "ENGINEERING TALENT",
    badge: "Dedicated Teams",
    metric: "Top 3% Vetted Engineers",
    icon: Users,
    heroHeadline: "Scale your engineering team and tech capacity with dedicated, vetted offshore professionals.",
    heroHeadlineL1: "Scale your engineering team and tech capacity",
    heroHeadlineL2: "with dedicated, vetted offshore professionals.",
    heroTitle: "Flexible IT Outsourcing & Dedicated Offshore Engineering Squads",
    heroSubtitle: "Accelerate your product roadmap and bridge critical technical skill gaps with dedicated, elite software engineering squads, DevOps specialists, and QA engineers seamlessly embedded into your development sprints.",
    illustration: null,
        heroImage: "/images/services/it_outsourcing_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND ATTRACTIVE TALENT ONBOARDING",
        desc: "At QuBit, we deliver a rapid, seamless onboarding experience, integrating senior engineers into your existing workflows within days.",
        icon: MonitorSmartphone
      },
      {
        title: "USER-FRIENDLY SPRINT MANAGEMENT",
        desc: "We manage project velocity using your preferred tools (Jira, GitHub, Slack) to provide transparent daily tracking and accountability.",
        icon: Sliders
      },
      {
        title: "MULTI-TECH STACK TALENT INTEGRATION",
        desc: "Different types of technical specialists—from React and Python to Cloud DevOps and Mobile—assigned based on your exact stack needs.",
        icon: Cpu
      },
      {
        title: "COLLABORATION & STANDUP INTEGRATION",
        desc: "Time-zone aligned collaboration ensures our developers join your daily standups, sprint reviews, and live communication channels.",
        icon: Share2
      },
      {
        title: "HIGH SECURITY & NDA COMPLIANCE",
        desc: "Security is non-negotiable: all engineers work under strict IP protection, enterprise NDAs, secure VPNs, and hardware encryption.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND DELIVERY PERFORMANCE",
        desc: "We ensure elite development velocity with clean, well-tested code, reducing development overhead while boosting output.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "Talent Requirements & Tech Profiling", desc: "Identifying required seniority, language competencies, and time-zone coverage." },
      { step: "02", title: "Vetted Candidate Screening", desc: "Shortlisting candidates from our top 3% talent pool based on live coding evaluations." },
      { step: "03", title: "Client Interviews & Code Review", desc: "Conducting technical interviews with your engineering leadership for final selection." },
      { step: "04", title: "Sprint Onboarding & Tool Access", desc: "Configuring VPN access, repository permissions, and integrating into daily standups." },
      { step: "05", title: "Ongoing Velocity & Performance Management", desc: "Conducting weekly milestone retrospectives and proactive team management." }
    ],
    techStack: ["React/Node", "Python/Django", "AWS/Cloud", "Flutter/iOS", "DevOps/CI-CD", "PostgreSQL", "QA Automation"],
    faqs: [
      {
        q: "How quickly can a dedicated developer join our team?",
        a: "Pre-vetted developers can be onboarded and active in your sprint pipeline within 3 to 7 business days following your technical interview."
      },
      {
        q: "How do we communicate with our outsourced team daily?",
        a: "Your dedicated developers participate directly in your Slack, Teams, Jira, and GitHub channels, adhering to your sprint cadence and daily standups."
      },
      {
        q: "What happens if a developer is not the right fit?",
        a: "We offer a zero-risk replacement guarantee. If a candidate does not meet your expectations within the first 14 days, we replace them immediately."
      }
    ]
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDesc: "Routine security patching, speed optimization, regular backups, and technical support.",
    category: "MAINTENANCE & RELIABILITY",
    badge: "Continuous Care",
    metric: "15-Min Emergency SLA",
    icon: Wrench,
    heroHeadline: "Keep your website fast, secure, and reliable with proactive maintenance and 24/7 support.",
    heroHeadlineL1: "Keep your website fast, secure, and reliable",
    heroHeadlineL2: "with proactive maintenance and 24/7 support.",
    heroTitle: "Proactive Website Maintenance, Security Hardening & Continuous Care",
    heroSubtitle: "Eliminate downtime, security vulnerabilities, and broken functionality with comprehensive website maintenance plans including daily cloud backups, CMS updates, speed audits, and allocated on-demand developer support.",
    illustration: null,
        heroImage: "/images/services/maintenance_hero.jpg",
    features: [
      {
        title: "RESPONSIVE AND ATTRACTIVE SITE HEALTH",
        desc: "At QuBit, we ensure your site remains visually pristine, mobile-friendly, and free of layout defects across all updates.",
        icon: MonitorSmartphone
      },
      {
        title: "USER-FRIENDLY MAINTENANCE PORTAL",
        desc: "We provide an intuitive client support portal to submit update requests, track resolved tickets, and view monthly health reports.",
        icon: Sliders
      },
      {
        title: "AUTOMATED DAILY BACKUP INTEGRATION",
        desc: "Automated daily cloud backups stored in offsite secure servers with one-click restore capabilities integrated for peace of mind.",
        icon: Database
      },
      {
        title: "UPTIME & ALERT INTEGRATION",
        desc: "24/7 uptime monitoring checks your website every 60 seconds, triggering immediate developer response to any downtime.",
        icon: Share2
      },
      {
        title: "HIGH SECURITY & MALWARE PROTECTION",
        desc: "Security is a top priority: continuous vulnerability scans, immediate malware removal, and automated SSL renewals keep you protected.",
        icon: ShieldCheck
      },
      {
        title: "OPTIMIZED SPEED AND PERFORMANCE TUNING",
        desc: "We perform ongoing database cleaning, cache optimization, and asset compression to ensure your site continues to render fast.",
        icon: Zap
      }
    ],
    process: [
      { step: "01", title: "Comprehensive Health & Security Audit", desc: "Scanning existing codebases for outdated plugins, database bloat, and broken links." },
      { step: "02", title: "Automated Backup & Staging Mirror", desc: "Configuring daily off-site cloud backups and safe staging environments for test updates." },
      { step: "03", title: "Proactive Core & Dependency Updates", desc: "Updating CMS engines, security patches, and dependencies without breaking production." },
      { step: "04", title: "Continuous Telemetry & Uptime Monitoring", desc: "Checking website availability every 60 seconds with rapid incident response protocols." },
      { step: "05", title: "Monthly Maintenance & SEO Audit Reports", desc: "Delivering detailed transparency reports on site health, security events, and speed." }
    ],
    techStack: ["WordPress", "Shopify", "Laravel", "React", "Cloudflare", "UptimeRobot", "Sucuri"],
    faqs: [
      {
        q: "What is included in a monthly website maintenance plan?",
        a: "Plans include 24/7 uptime monitoring, daily cloud backups, core and plugin security updates, malware scanning, performance tuning, and dedicated monthly developer hours for content updates."
      },
      {
        q: "What happens if our website is attacked or goes down?",
        a: "Our emergency response protocol engages within 15 minutes to diagnose, mitigate threats, restore clean backups if needed, and restore 100% operational availability."
      },
      {
        q: "Can unused monthly developer hours roll over?",
        a: "Yes. Unused developer support hours in our professional tiers can roll over for up to 60 days, giving you flexibility for larger quarterly updates."
      }
    ]
  }
];
