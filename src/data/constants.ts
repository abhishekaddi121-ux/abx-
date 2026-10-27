import { ServiceItem, FaqItem, PortfolioItem } from '../types/index.ts';

export const BRAND_CONFIG = {
  name: 'ABX Digital Studio',
  tagline: 'High-Performance Growth & Creative Engine',
  description:
    'Full-service digital marketing agency scaling brands through precision Google Ads, Meta Ads, high-conversion AI creatives, bespoke web development, and revenue-driven SEO.',
  whatsappNumber: '+91 9142866835',
  whatsappUrl: 'https://wa.me/919142866835',
  supportAvailability: 'Fast Response via WhatsApp · Monday to Saturday',
  logoUrl: '/assets/aistudio/76e698a1-fa8d-4c0a-8f39-84cc81564703_e0ce9fdf.png',
};

export const IMAGES = {
  brandLogo: '/assets/aistudio/76e698a1-fa8d-4c0a-8f39-84cc81564703_e0ce9fdf.png',
  heroStudioOffice: '/assets/aistudio/c7d907c4-71c4-48ea-a0e2-b3d11eab63b5_c20c7752.png',
  heroEntrepreneur: '/assets/aistudio/c7d907c4-71c4-48ea-a0e2-b3d11eab63b5_c20c7752.png',
  agencyOfficePhoto: '/assets/aistudio/c7d907c4-71c4-48ea-a0e2-b3d11eab63b5_c20c7752.png',
  storyOwner: '/images/story_business_owner_1792828611075.jpg',
  showcaseVideo: '/images/showcase_video_creative_1792828611381.jpg',
  showcaseSocial: '/images/showcase_social_branding_1792828611190.jpg',
  aboutMission: '/images/about_mission_focus_1792828971431.jpg',
  aboutVision: '/images/about_vision_future_1792828972139.jpg',
  designerPhoto: '/images/service_graphic_designer_1792830168685.jpg',
  socialCreatorPhoto: '/images/service_content_creator_1792830169249.jpg',
  youtubeStudioPhoto: '/images/service_youtube_production_1792830169017.jpg',
  heroTeam: '/images/agency_creative_team_1792827504834.jpg',
  paidMedia: '/images/agency_paid_media_1792827506016.jpg',
  webDesign: '/images/agency_web_design_1792827505705.jpg',
  growthMeeting: '/images/agency_growth_meeting_1792827507140.jpg',
  portfolioHeroStudio: '/images/portfolio_hero_studio_1792830677849.jpg',
  portfolioMobileMeta: '/images/portfolio_mobile_meta_1792830699541.jpg',
  portfolioWebConcept: '/images/portfolio_web_concept_1792830712434.jpg',
  faqHeroConsultant: '/images/faq_hero_consultant_1792831110051.jpg',
  contactHeroConsultation: '/images/contact_consultation_1793023670251.jpg',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'google-ads',
    slug: 'google-ads',
    title: 'Google Ads Management',
    shortDescription:
      'Intent-driven search, Performance Max, display, and YouTube ad campaigns configured for high ROAS and lower CPA.',
    fullDescription:
      'We architect granular search architectures, high-converting copy variants, and rigorous conversion tracking to capture purchase-ready search traffic across Google Search, Shopping, and YouTube networks.',
    icon: 'Search',
    deliverables: [
      'Keyword Intent Architecture & Match-Type Structuring',
      'Performance Max & Shopping Feed Optimization',
      'Negative Keyword Scrubbing & Bid Management',
      'Conversion Tracking & Server-Side Tagging',
    ],
    kpiHighlight: 'Average +140% ROAS improvement within 90 days',
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    shortDescription:
      'High-converting social ad funnels combining targeted audience segmentation, creative testing matrices, and scale.',
    fullDescription:
      'From top-of-funnel creative testing to aggressive retargeting campaigns, we deploy dynamic Meta advertising frameworks that predictably generate leads and e-commerce revenue.',
    icon: 'Target',
    deliverables: [
      'Dynamic Creative Testing Matrices (DCT)',
      'Lookalike & High-Intent Retargeting Funnels',
      'UGC Scripting & Ad Hook Iterations',
      'CAPI (Conversions API) Implementation',
    ],
    kpiHighlight: 'Scalable acquisition pipelines with controlled CPA',
  },
  {
    id: 'ai-creatives',
    slug: 'ai-creatives',
    title: 'AI Creatives & Automation',
    shortDescription:
      'Next-generation automated visual workflows, AI video synthesis, and rapid asset generation at scale.',
    fullDescription:
      'Leverage artificial intelligence to generate dozens of high-performing creative variations, personalized motion assets, and localization scripts in minutes rather than weeks.',
    icon: 'Cpu',
    deliverables: [
      'Multi-Variant AI Ad Image Generation',
      'AI Video Avatars & Voiceover Synthesis',
      'Automated Creative Iterations & Resizing',
      'High-CTR Visual Hook Production',
    ],
    kpiHighlight: '10x creative output volume with zero turnaround bottleneck',
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    title: 'Graphic Design & Brand Identity',
    shortDescription:
      'World-class visual identity systems, promotional collateral, ad banners, and corporate presentation decks.',
    fullDescription:
      'We craft distinct visual languages that stand out in crowded feeds. Every layout, color palette, and vector asset is engineered to establish immediate brand authority.',
    icon: 'Palette',
    deliverables: [
      'Brand Identity Guidelines & Design Tokens',
      'High-Converting Social Media Graphics',
      'Display Advertising Banners & Carousels',
      'Vector Graphics & Marketing Collateral',
    ],
    kpiHighlight: 'Cohesive multi-channel visual authority',
  },
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    shortDescription:
      'Lightning-fast, mobile-first websites and landing pages engineered for search ranking and maximum conversions.',
    fullDescription:
      'Custom web architectures built with modern React, Tailwind, and performant frameworks. We prioritize sub-second load times, mobile thumb ergonomics, and frictionless conversion funnels.',
    icon: 'Globe',
    deliverables: [
      'Modern Jamstack & React Web Applications',
      'Responsive Conversion-Optimized Landing Pages',
      'Speed & Core Web Vitals Optimization',
      'Seamless Form & CRM Integrations',
    ],
    kpiHighlight: '98+ Google Lighthouse Performance Score baseline',
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortDescription:
      'Data-backed technical SEO, content authority strategies, and local optimization for dominant organic ranking.',
    fullDescription:
      'Drive predictable organic traffic through structural site architecture, search intent cluster mapping, high-authority backlink development, and technical crawlability tuning.',
    icon: 'TrendingUp',
    deliverables: [
      'Technical SEO Audit & Schema Markup',
      'Topic Cluster & Keyword Gap Analysis',
      'On-Page Optimization & Internal Linking',
      'Local Map Pack & High-Intent Optimization',
    ],
    kpiHighlight: 'Sustainable organic traffic and zero ad spend reliance',
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Marketing',
    shortDescription:
      'Maintain a consistent online presence with content planning, branded posts, creative ideas, and social media support.',
    fullDescription:
      'Maintain a consistent online presence with content planning, branded posts, creative ideas, and social media support across your key customer touchpoints.',
    icon: 'Share2',
    deliverables: [
      'Monthly Content Calendar & Strategic Pillars',
      'Editorial Copywriting & Branded Templates',
      'Reels & Short-Form Video Strategy',
      'Active Community Nurturing & Engagement',
    ],
    kpiHighlight: 'Consistent brand authority and community retention',
  },
  {
    id: 'youtube-ads',
    slug: 'youtube-ads',
    title: 'YouTube Ads',
    shortDescription:
      'Reach relevant audiences with video advertising strategies designed to introduce your brand, products, or services.',
    fullDescription:
      'Reach relevant audiences with video advertising strategies designed to introduce your brand, products, or services with measurable engagement and conversion tracking.',
    icon: 'Video',
    deliverables: [
      'In-Stream & Bumper Ad Strategy',
      'Video Hook Scripting & Storyboards',
      'Audience Affinity & Intent Targeting',
      'Conversion Attribution & YouTube Analytics',
    ],
    kpiHighlight: 'High engagement rates and scalable brand recall',
  },
  {
    id: 'google-business-profile',
    slug: 'google-business-profile',
    title: 'Google Business Profile',
    shortDescription:
      'Set up or improve your business profile information, service details, photos, and customer-facing business information.',
    fullDescription:
      'Set up or improve your business profile information, service details, photos, and customer-facing business information to maximize local search discoverability.',
    icon: 'MapPin',
    deliverables: [
      'Complete Business Profile Verification & Setup',
      'Local Category & Keyword Optimization',
      'Product & Service Showcase Cataloging',
      'Customer Review Management Architecture',
    ],
    kpiHighlight: 'Prominent local Google Maps pack placement',
  },
];

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General Questions' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'ads', label: 'Google & Meta Ads' },
  { id: 'creative', label: 'Graphic Design & AI Videos' },
  { id: 'web', label: 'Website Development' },
  { id: 'seo', label: 'SEO & Google Business Profile' },
  { id: 'process', label: 'Pricing & Project Process' },
];

export const FAQS_DATA: FaqItem[] = [
  // GENERAL QUESTIONS
  {
    id: 'q1',
    category: 'general',
    question: 'What is ABX Digital Studio?',
    answer:
      'ABX Digital Studio provides digital marketing, creative design, AI-assisted video content, and website-related services to help businesses build and improve their online presence.',
  },
  {
    id: 'q2',
    category: 'general',
    question: 'Which services do you offer?',
    answer:
      'Our services include Google Ads, Meta Ads, social media marketing, graphic design, promotional banners, AI-assisted videos, website development, SEO support, YouTube Ads, and Google Business Profile assistance.',
  },
  {
    id: 'q3',
    category: 'general',
    question: 'Can small businesses work with ABX Digital Studio?',
    answer:
      'Yes. Small businesses, local shops, startups, and growing brands can contact us to discuss their requirements and identify suitable services for their goals and budget.',
  },
  {
    id: 'q4',
    category: 'general',
    question: 'How can I contact your team?',
    answer:
      'You can contact ABX Digital Studio through WhatsApp using the contact button on this website. Share your business details and project requirements to start the discussion.',
  },

  // DIGITAL MARKETING
  {
    id: 'q5',
    category: 'marketing',
    question: 'What is digital marketing?',
    answer:
      'Digital marketing promotes products and services through online channels such as search engines, social media, websites, and digital advertising platforms.',
  },
  {
    id: 'q6',
    category: 'marketing',
    question: 'Can you help my business get more online visibility?',
    answer:
      'We can discuss suitable marketing strategies, creative content, website improvements, and advertising options based on your business, audience, and objectives. Results depend on several factors and are not guaranteed.',
  },
  {
    id: 'q7',
    category: 'marketing',
    question: 'Do you manage social media content?',
    answer:
      'We can discuss social media creative requirements, promotional posts, banners, and content support based on the scope of your project.',
  },

  // GOOGLE ADS AND META ADS
  {
    id: 'q8',
    category: 'ads',
    question: 'What are Google Ads?',
    answer:
      'Google Ads allows businesses to advertise across supported Google properties and advertising placements. Campaigns can be planned around objectives such as relevant traffic, leads, or sales.',
  },
  {
    id: 'q9',
    category: 'ads',
    question: 'Can you help with Facebook and Instagram Ads?',
    answer:
      'Yes. We offer Meta Ads-related services and can discuss campaign planning, advertising creatives, audience targeting, and optimization according to your requirements.',
  },
  {
    id: 'q10',
    category: 'ads',
    question: 'How much budget do I need for advertising?',
    answer:
      'Your advertising budget depends on your industry, audience, location, competition, and goals. We can discuss a suitable starting budget. Advertising spend and agency service fees should be considered separately.',
  },
  {
    id: 'q11',
    category: 'ads',
    question: 'How soon will I see advertising results?',
    answer:
      'Timing varies by campaign, market, budget, landing page, and tracking setup. Some campaigns need testing and optimization before meaningful conclusions can be drawn. No particular result or timeline can be guaranteed.',
  },
  {
    id: 'q12',
    category: 'ads',
    question: 'Can you help if my Google Ads account has a policy issue?',
    answer:
      'We can review the issue you describe and discuss available troubleshooting or appeal steps. Resolution depends on the platform’s policies and review process; approval cannot be guaranteed.',
  },

  // GRAPHIC DESIGN AND AI VIDEOS
  {
    id: 'q13',
    category: 'creative',
    question: 'Can you design promotional banners and posters?',
    answer:
      'Yes. We can discuss promotional banners, business posters, advertising creatives, social media graphics, and branded design templates.',
  },
  {
    id: 'q14',
    category: 'creative',
    question: 'Do you create AI-assisted promotional videos?',
    answer:
      'We offer AI-assisted creative video services. The style, format, duration, and deliverables can be discussed according to your campaign or content requirements.',
  },
  {
    id: 'q15',
    category: 'creative',
    question: 'Can you create designs for different social media platforms?',
    answer:
      'Yes. We can discuss suitable creative sizes and formats for platforms such as Instagram, Facebook, YouTube, and other relevant channels.',
  },

  // WEBSITE DEVELOPMENT
  {
    id: 'q16',
    category: 'web',
    question: 'Can you create a website for my business?',
    answer:
      'Yes. We can discuss a business website based on your goals, required pages, design preferences, features, and content.',
  },
  {
    id: 'q17',
    category: 'web',
    question: 'Will my website work on mobile phones?',
    answer:
      'Responsive behavior is part of the website requirements we can discuss. The implementation should be checked across common screen sizes before delivery.',
  },
  {
    id: 'q18',
    category: 'web',
    question: 'Can you update an existing website?',
    answer:
      'We can discuss changes to an existing website after reviewing its platform, current setup, requested features, and available access.',
  },
  {
    id: 'q19',
    category: 'web',
    question: 'Will my website include a contact or WhatsApp button?',
    answer:
      'Contact buttons and WhatsApp links can be included where appropriate. The exact features will depend on the agreed project scope.',
  },

  // SEO AND GOOGLE BUSINESS PROFILE
  {
    id: 'q20',
    category: 'seo',
    question: 'What is SEO?',
    answer:
      'Search engine optimization improves a website’s structure, content, and relevance to help search engines understand its pages and potentially improve organic visibility.',
  },
  {
    id: 'q21',
    category: 'seo',
    question: 'Can you help set up or improve my Google Business Profile?',
    answer:
      'We can discuss business profile setup or improvement, including accurate business details, services, photos, and other relevant information, subject to Google’s eligibility and policies.',
  },
  {
    id: 'q22',
    category: 'seo',
    question: 'How long does SEO take to show results?',
    answer:
      'SEO usually requires ongoing work, and the timeline varies by website, competition, content quality, and other factors. Rankings and traffic outcomes cannot be guaranteed.',
  },

  // PRICING AND PROJECT PROCESS
  {
    id: 'q23',
    category: 'process',
    question: 'How much do your services cost?',
    answer:
      'Pricing depends on the service, complexity, deliverables, and project scope. Contact us with your requirements to discuss a suitable proposal. Do not display invented fixed prices.',
  },
  {
    id: 'q24',
    category: 'process',
    question: 'How do I start a project?',
    answer:
      'Contact us on WhatsApp, explain your business and goals, and tell us which service you need. We can then discuss the next steps and required information.',
  },
  {
    id: 'q25',
    category: 'process',
    question: 'What information should I provide before starting?',
    answer:
      'Share your business name, industry, target audience, project requirements, preferred timeline, available content or website link, and approximate budget if known.',
  },
  {
    id: 'q26',
    category: 'process',
    question: 'Do you guarantee leads, sales, or first-page Google rankings?',
    answer:
      'No specific advertising, sales, lead, or search-ranking result should be guaranteed. Outcomes depend on many factors, including the market, budget, competition, offer, website, and execution.',
  },
];

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'banners-posters', label: 'Banners & Posters' },
  { id: 'google-ads', label: 'Google Ads Creatives' },
  { id: 'meta-ads', label: 'Meta Ads Creatives' },
  { id: 'ai-videos', label: 'AI Videos' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'website-designs', label: 'Website Designs' },
  { id: 'social-media', label: 'Social Media Posts' },
];

export const PORTFOLIO_SAMPLES: PortfolioItem[] = [
  {
    id: '1',
    title: 'Business Promotion Banner',
    category: 'Banners & Posters',
    categorySlug: 'banners-posters',
    tagline: 'High-visibility corporate marketing banner with focused call-to-action architecture',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.storyOwner,
    deliverables: ['Multi-Ratio Display Banners', 'Typography Hierarchy System', 'Print & Digital Pre-Flight'],
    isVideo: false,
    objective: 'Drive brand authority and immediate lead capture across corporate digital networks and display exchanges.',
    creativeApproach: 'Deep navy background anchoring high-energy electric blue lighting and an energetic orange CTA block, ensuring zero scroll blindness.',
    tools: ['Figma', 'Adobe Illustrator', 'Display Ad Standards'],
    featured: false,
  },
  {
    id: '2',
    title: 'Product Advertising Creative',
    category: 'Google Ads Creatives',
    categorySlug: 'google-ads',
    tagline: 'Precision visual asset matrix tailored for Google Display and Performance Max feeds',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.paidMedia,
    deliverables: ['PMax Responsive Asset Sets', 'Headline & Hook Variations', 'High-ROAS Layouts'],
    isVideo: false,
    objective: 'Deliver purchase-ready creative variations aligned with Google Search intent and dynamic shopping signals.',
    creativeApproach: 'Product-focused focal point, clean negative space, and instant value propositions formatted for responsive multi-screen auto-scaling.',
    tools: ['Google Web Designer', 'Figma', 'Conversion Architecture'],
    featured: true,
  },
  {
    id: '3',
    title: 'Social Media Campaign',
    category: 'Meta Ads Creatives',
    categorySlug: 'meta-ads',
    tagline: 'Mobile-first vertical ad system engineered to stop feed scrolls within 1.5 seconds',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.portfolioMobileMeta,
    deliverables: ['9:16 Vertical Video Hooks', 'Dynamic Carousel Cards', 'Retargeting Story Packs'],
    isVideo: false,
    objective: 'Maximize mobile thumb-stopping power on Instagram & Facebook feeds with direct WhatsApp and website click funnels.',
    creativeApproach: 'Authentic lifestyle product context, native platform framing, bold captions, and ergonomic tap targets.',
    tools: ['Meta Creative Hub', 'Premiere Pro', 'Photoshop'],
    featured: true,
  },
  {
    id: '4',
    title: 'AI Promotional Video',
    category: 'AI Videos',
    categorySlug: 'ai-videos',
    tagline: 'Cinematic AI-assisted video narrative with fluid camera pans and voiceover pacing',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.showcaseVideo,
    deliverables: ['4K Video Concept Cut', 'Synthetic Voiceover Timing', 'Kinetic Typography Overlay'],
    isVideo: true,
    objective: 'Demonstrate cutting-edge brand storytelling without costly multi-week production crews and physical location rentals.',
    creativeApproach: 'Layering realistic visual motion prompts with custom sound design, color grading in brand blue/orange, and crisp pacing.',
    tools: ['AI Video Synthesis', 'DaVinci Resolve', 'Sound Design'],
    featured: true,
  },
  {
    id: '5',
    title: 'Premium Brand Poster',
    category: 'Graphic Design',
    categorySlug: 'graphic-design',
    tagline: 'Architectural brand identity poster with structured typographic proportion',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.designerPhoto,
    deliverables: ['Large-Format Vector Asset', 'Design Token Specifications', 'Brand Style Matrix'],
    isVideo: false,
    objective: 'Create an iconic print and physical studio artifact that communicates technological sophistication and premium craft.',
    creativeApproach: 'Swiss-inspired grid alignment, deep obsidian surfaces, and sharp geometric contrast with electric accents.',
    tools: ['Adobe Illustrator', 'InDesign', 'Vector Typography'],
    featured: false,
  },
  {
    id: '6',
    title: 'Business Website Concept',
    category: 'Website Designs',
    categorySlug: 'website-designs',
    tagline: 'Modern responsive web experience with sub-second performance and frictionless conversion paths',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.portfolioWebConcept,
    deliverables: ['Responsive Component System', 'Interactive Motion Framework', 'Mobile-First Layout'],
    isVideo: false,
    objective: 'Transform cold visitors into warm project consultations with intuitive navigation, dark aesthetic, and WhatsApp access.',
    creativeApproach: 'Clean dark navy cards, high-contrast typography, zero layout shifts, and micro-interactions that reward scrolling.',
    tools: ['React 19', 'Tailwind CSS', 'TypeScript', 'Vite'],
    featured: false,
  },
  {
    id: '7',
    title: 'Instagram Promotional Post',
    category: 'Social Media Posts',
    categorySlug: 'social-media',
    tagline: 'High-engagement multi-slide educational and promotional carousel system',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.showcaseSocial,
    deliverables: ['1080x1350 Carousel Deck', 'Swipe Hook Architecture', 'Branded Visual Templates'],
    isVideo: false,
    objective: 'Generate saves, shares, and profile visits through structured snackable value and cohesive visual styling.',
    creativeApproach: 'Bold question opener, sequential slide pacing, high-contrast callout boxes, and a clear save-for-later ending slide.',
    tools: ['Figma', 'Lightroom', 'Instagram Layout Standards'],
    featured: false,
  },
  {
    id: '8',
    title: 'YouTube Video Advertising Creative',
    category: 'Google Ads Creatives',
    categorySlug: 'google-ads',
    tagline: 'Skippable in-stream video ad with problem-solution hook in the first 5 seconds',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.youtubeStudioPhoto,
    deliverables: ['15s Non-Skip Storyboard', '30s In-Stream Master Cut', 'Companion Display Banner'],
    isVideo: true,
    objective: 'Beat the 5-second skip button on YouTube by introducing the core pain point and solution immediately.',
    creativeApproach: 'High-tempo visual pacing, clear voice narration, persistent brand bug, and synchronized companion banner link.',
    tools: ['After Effects', 'Premiere Pro', 'YouTube Video Specs'],
    featured: false,
  },
  {
    id: '9',
    title: 'Festival Promotion Design',
    category: 'Banners & Posters',
    categorySlug: 'banners-posters',
    tagline: 'High-conversion festive campaign banner blending cultural warmth with modern polish',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.heroEntrepreneur,
    deliverables: ['Festive Social Flyers', 'WhatsApp Broadcast Cards', 'Digital Display Units'],
    isVideo: false,
    objective: 'Fuel seasonal purchase intent and festive promotions with celebratory visual energy and clear discount triggers.',
    creativeApproach: 'Warm golden amber highlights balanced against deep midnight blue tones, celebratory motifs, and urgent CTA badges.',
    tools: ['Photoshop', 'Illustrator', 'Digital Marketing Design'],
    featured: false,
  },
  {
    id: '10',
    title: 'Modern Service Business Website',
    category: 'Website Designs',
    categorySlug: 'website-designs',
    tagline: 'Full-featured enterprise agency portal with integrated service catalog and lead capture',
    badge: 'Concept Project — Sample Design',
    image: IMAGES.webDesign,
    deliverables: ['Multi-Page Architecture', 'Lead Capture Modals', 'Speed & SEO Optimization'],
    isVideo: false,
    objective: 'Provide a scalable foundation for business services with comprehensive catalog pages, case study showcases, and fast response channels.',
    creativeApproach: 'Layered glassmorphism cards, subtle blue radial gradients, clear typographic hierarchy, and accessible color contrast.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    featured: false,
  },
];
