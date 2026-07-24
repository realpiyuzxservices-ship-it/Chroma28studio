import { StudioSpace } from '../types';
import cycloramaImg from '../assets/images/cyclorama_infinity_wall_1784894791099.jpg';
import blackSideImg from '../assets/images/black_side_studio_1784894805473.jpg';
import kitchenImg from '../assets/images/chef_kitchen_studio_1784894227740.jpg';
import aquaImg from '../assets/images/aqua_shooting_space_1784894816476.jpg';

export const STUDIO_SPACES: StudioSpace[] = [
  {
    id: 'cyclorama',
    slug: 'cyclorama',
    name: 'Cyclorama Infinity Wall',
    shortDescription: 'Seamless white cyc wall for fashion, commercial photography, music videos, and high-end video shoots.',
    fullDescription: 'Our signature White Cyclorama studio in Antelias, Beirut features a seamless curved infinity wall, acoustic isolation, high-output grid rigging, and drive-in access for large commercial sets.',
    dimensions: '12m x 8m (96 sq. m)',
    ceilingHeight: '4.5m clear height',
    powerSupply: '3-phase 32A power',
    idealFor: ['Fashion Campaigns', 'E-commerce', 'Music Videos', 'Car & Large Prop Shoots'],
    primaryKeyword: 'white cyclorama studio Lebanon',
    metaTitle: 'Cyclorama Infinity Wall Studio Rental Beirut | Chroma28 Studio',
    metaDescription: 'Rent a professional seamless white cyclorama studio in Antelias, Beirut. High ceilings, 3-phase power, acoustic treatment, and full lighting package available.',
    features: [
      'Seamless 3-wall curved corner cyclorama',
      'High-level overhead lighting grid system',
      'Drive-in vehicle access and roll-up loading door',
      'Acoustically damped sound environment',
      'Climate controlled with silent HVAC'
    ],
    includedEquipment: [
      'Aputure 600d Pro Daylight LED Lights (2x)',
      'Aputure 300x Bi-Color LED Lights (2x)',
      'Overhead Softbox Grid & Light Modifiers',
      'Heavy Duty C-Stands & Boom Arms',
      'Colorama Paper Backdrop System'
    ],
    thumbnailUrl: cycloramaImg,
    heroImageUrl: cycloramaImg,
    galleryImages: [
      cycloramaImg,
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80'
    ],
    faqQuestion: 'What are the dimensions and power capacity of the Cyclorama Studio?',
    faqAnswer: 'The white cyclorama measures 12m x 8m with a 4.5m ceiling height and features 3-phase 32A industrial power for heavy lighting setups.'
  },
  {
    id: 'black-side',
    slug: 'black-side',
    name: 'The Black Side',
    shortDescription: 'Full blackout set & black cyc for dramatic lighting, neon visual art, and high-contrast video productions.',
    fullDescription: 'The Black Side is a light-controlled, zero-reflection blackout studio space optimized for high-contrast commercial photography, low-key cinematography, product reveals, and music videos.',
    dimensions: '10m x 7m (70 sq. m)',
    ceilingHeight: '4.2m ceiling height',
    powerSupply: 'Single & 3-phase power',
    idealFor: ['Low-Key Cinematography', 'Product Reveals', 'Visual Art', 'Performance Clips'],
    primaryKeyword: 'production studio Beirut',
    metaTitle: 'Blackout Studio Rental Beirut — The Black Side | Chroma28',
    metaDescription: 'Book The Black Side studio space in Antelias, Beirut. 100% light-controlled blackout environment with matte non-reflective backdrop for cinematic video.',
    features: [
      'Ultra-matte light absorbing walls and floor',
      '100% total blackout capability',
      'Ceiling-suspended rail grid',
      'RGB color lighting integration available',
      'Acoustic sound damping'
    ],
    includedEquipment: [
      'Nanlite Pavotube II 30C RGB Tubes (4x)',
      'Godox SZ150R Zoomable RGB Spotlights',
      'Black Velvet & Negative Fill Cutters',
      'Matthews C-Stands & Sandbags'
    ],
    thumbnailUrl: blackSideImg,
    heroImageUrl: blackSideImg,
    galleryImages: [
      blackSideImg,
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80'
    ],
    faqQuestion: 'Can I shoot 100% blackout video in The Black Side space?',
    faqAnswer: 'Yes, The Black Side provides total light lock and matte light-absorbing surfaces for precise contrast control.'
  },
  {
    id: 'kitchen',
    slug: 'kitchen',
    name: 'Cook & Shoot Kitchen Studio',
    shortDescription: 'Fully functional gourmet kitchen studio tailored for food photography, culinary videos, and FMCG commercials.',
    fullDescription: 'Engineered specifically for restaurants, food brands, and culinary creators in Lebanon. Features modern marble countertops, built-in cooktops, overhead camera rigging, andprep kitchen staging.',
    dimensions: '8m x 6m (48 sq. m)',
    ceilingHeight: '3.8m height',
    powerSupply: 'Dedicated high-amp kitchen circuits',
    idealFor: ['Food Photography', 'Recipe Videos', 'Cooking Shows', 'FMCG Commercials'],
    primaryKeyword: 'kitchen studio Beirut',
    metaTitle: 'Kitchen Studio Rental Beirut — Cook & Shoot | Chroma28',
    metaDescription: 'Fully equipped kitchen studio for food photography and cooking shows in Antelias, Beirut. Overhead rig, prep kitchen, induction stove, and studio lighting.',
    features: [
      'Modular mobile island with stone countertop',
      'Overhead 90-degree camera mirror rig for top-down shots',
      'Working induction cooktop and convection oven',
      'Separate food styling prep area with refrigeration',
      'Diffuse daylight simulation lighting windows'
    ],
    includedEquipment: [
      'Overhead Top-Down Rigging Arm for Sony/Canon',
      'Aputure Amaran 200x Softbox Array',
      'Professional Food Styling Props & Cutlery Set',
      'Color-Balanced High-CRI LED Spot Panels'
    ],
    thumbnailUrl: kitchenImg,
    heroImageUrl: kitchenImg,
    galleryImages: [
      kitchenImg,
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    faqQuestion: 'Does the Kitchen Studio have active running appliances for live cooking?',
    faqAnswer: 'Yes, the kitchen features fully operational induction stoves, ovens, running water, and prep refrigeration.'
  },
  {
    id: 'aqua',
    slug: 'aqua',
    name: 'Aqua Shooting Space',
    shortDescription: 'Specialized water FX studio for waterproof beauty, liquid splash photography, and creative visual campaigns.',
    fullDescription: 'The Aqua Shooting Space features a recessed water basin, overhead rain/shower system, waterproof backdrop barriers, and drainage systems designed for high-impact liquid shots.',
    dimensions: '7m x 6m (42 sq. m)',
    ceilingHeight: '4.0m height',
    powerSupply: 'GFCI waterproof protected power',
    idealFor: ['Beauty & Skincare Commercials', 'Liquid Splash Shots', 'Underwater FX', 'Fashion Visuals'],
    primaryKeyword: 'creative studio Beirut',
    metaTitle: 'Aqua Water FX Studio Rental Beirut | Chroma28 Studio',
    metaDescription: 'Unique Aqua water FX production studio in Beirut. Recessed basin, controlled overhead water fall, and waterproof safety power.',
    features: [
      'Recessed waterproof floor basin with fast drain',
      'Controlled flow overhead water system',
      'Waterproof sealed electrical connections',
      'Slip-resistant rubber staging safety zone'
    ],
    includedEquipment: [
      'Waterproof High-Speed LED Panels',
      'High-Speed Splash Trigger Sync Box',
      'Heavy Duty Drainage Pumps & Water Heater'
    ],
    thumbnailUrl: aquaImg,
    heroImageUrl: aquaImg,
    galleryImages: [
      aquaImg
    ],
    faqQuestion: 'Is heated water available in the Aqua Shooting Space?',
    faqAnswer: 'Yes, our Aqua studio provides temperature-controlled heated water for talent comfort during extended shoots.'
  },
  {
    id: 'conference-room',
    slug: 'conference-room',
    name: 'Conference Room',
    shortDescription: 'Modern corporate boardroom setup for video interviews, executive podcasts, corporate shoots, and live streaming.',
    fullDescription: 'Designed for corporate brand videos, remote client reviews, executive panel interviews, and pitch deck presentations. Features minimalist glass tables, architectural lighting, and 4K display monitors.',
    dimensions: '6m x 5m (30 sq. m)',
    ceilingHeight: '3.2m height',
    powerSupply: 'Clean surge-protected power',
    idealFor: ['Corporate Videos', 'Executive Interviews', 'Live Webinars', 'Client Pitch Sessions'],
    primaryKeyword: 'corporate video production Beirut',
    metaTitle: 'Corporate Conference Room Studio Beirut | Chroma28',
    metaDescription: 'Modern corporate conference room studio in Antelias, Beirut. Ideal for executive interviews, panel recordings, and live streams.',
    features: [
      'Minimalist executive boardroom table with seating for 10',
      '65-inch 4K color-calibrated display monitor',
      'Acoustically insulated glass partition walls',
      'High-speed fiber internet for 4K live streaming'
    ],
    includedEquipment: [
      'Shure MXA910 Ceiling Array Microphone System',
      'PTZ Optics 4K Live Stream Camera Array',
      'Soft Key Lighting Panels with Grid'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    faqQuestion: 'Can we run 4K live streaming directly from the Conference Room?',
    faqAnswer: 'Yes, the space is wired with dedicated symmetric 1Gbps fiber internet for seamless 4K live streaming.'
  },
  {
    id: 'makeup-area',
    slug: 'makeup-area',
    name: 'Makeup Area',
    shortDescription: 'Spacious hair, makeup, and wardrobe station with high-CRI Hollywood vanity mirrors and steam stations.',
    fullDescription: 'A private, comfortable green room and styling suite equipped with 3 high-CRI illuminated vanity mirrors, clothing racks, garment steamers, and privacy changing booths for models and talent.',
    dimensions: '5m x 4m (20 sq. m)',
    ceilingHeight: '3.0m height',
    powerSupply: 'Dedicated high-wattage hair appliance circuits',
    idealFor: ['Model Prep', 'Hair & Makeup Staging', 'Wardrobe Changes', 'Talent Green Room'],
    primaryKeyword: 'photo studio Antelias',
    metaTitle: 'Styling & Makeup Suite Beirut — Chroma28 Studio',
    metaDescription: 'Dedicated hair, makeup, and wardrobe green room in Antelias, Beirut. High CRI lighting, garment steamers, and private changing space.',
    features: [
      '3 workstation stations with high-CRI 95+ daylight LEDs',
      'Professional garment steamer & heavy-duty clothing racks',
      'Full-length 3-way wardrobe mirrors',
      'Private changing cubicles'
    ],
    includedEquipment: [
      'Dyson Hair Styling Station',
      'Jiffy Heavy Duty Commercial Garment Steamer',
      'Bar Stools & Ergonomic Styling Chairs'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80'
    ],
    faqQuestion: 'Is the Makeup Area included with studio rental?',
    faqAnswer: 'Yes, full access to the Makeup & Green Room suite is included with all studio booking packages.'
  },
  {
    id: 'recording-room',
    slug: 'recording-room',
    name: 'Recording Room',
    shortDescription: 'Acoustically isolated vocal booth and sound recording suite for voiceovers, dubbing, and music vocals.',
    fullDescription: 'Professionally treated vocal booth engineered with double-wall isolation, bass traps, diffusion panels, and zero background noise floor for pristine voiceover and vocal tracking.',
    dimensions: '4m x 3.5m (14 sq. m)',
    ceilingHeight: '2.8m height',
    powerSupply: 'Isolated ultra-clean audio power',
    idealFor: ['Voiceovers & ADR', 'Vocal Tracking', 'Audiobook Recording', 'Audio Post-Production'],
    primaryKeyword: 'podcast recording studio Beirut',
    metaTitle: 'Acoustic Vocal & Voiceover Recording Studio Beirut | Chroma28',
    metaDescription: 'Acoustically isolated voiceover and vocal recording studio booth in Antelias, Beirut. Neumann microphones and Universal Audio interface.',
    features: [
      'Floating floor double-wall acoustic isolation',
      'NC-15 ultra-quiet silent ventilation',
      'Talkback communication window to engineer desk',
      'Custom tuned bass traps & acoustic diffuser panels'
    ],
    includedEquipment: [
      'Neumann U87 Ai Studio Condenser Microphone',
      'Universal Audio Apollo Twin X Duo Interface',
      'Genelec 8040B Studio Monitor Speakers',
      'Beyerdynamic DT 770 Pro Headphones'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80'
    ],
    faqQuestion: 'What microphone models are installed in the Recording Room?',
    faqAnswer: 'We feature industry-standard Neumann U87 Ai and Shure SM7B microphones running through Universal Audio preamps.'
  },
  {
    id: 'gym',
    slug: 'gym',
    name: 'Gym Studio',
    shortDescription: 'Dedicated fitness aesthetic set with matte black weights, turf, and mood lighting for sports and wellness brands.',
    fullDescription: 'Custom fitness and movement studio space crafted with high-end gym equipment, rubberized flooring, functional training rigs, and dramatic sports lighting for activewear and supplement campaigns.',
    dimensions: '8m x 6m (48 sq. m)',
    ceilingHeight: '3.6m height',
    powerSupply: 'Standard & high output lighting power',
    idealFor: ['Activewear Commercials', 'Fitness Influencer Videos', 'Supplement Brands', 'Sports Photography'],
    primaryKeyword: 'studio rental Antelias',
    metaTitle: 'Gym & Fitness Production Studio Beirut | Chroma28',
    metaDescription: 'Fitness and activewear production studio set in Antelias, Beirut. Matte black weights, turf floor, and custom sports lighting.',
    features: [
      'Commercial grade rubber impact floor & turf runway',
      'Matte black dumbbells, kettlebells & squat rack',
      'Custom RGB backlit wall bars and mirrors',
      'High power air conditioning for active talent'
    ],
    includedEquipment: [
      'Nanlite MixPanel 150 RGB Soft Light Panels',
      'Gym Props Set (Dumbbells, Medicine Balls, Ropes)',
      'High-Speed Slow Motion LED Light Array'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
    ],
    faqQuestion: 'Can we rearrange or customize the gym equipment for our brand shoot?',
    faqAnswer: 'Yes, all weights and equipment are fully modular and can be repositioned for your scene composition.'
  },
  {
    id: 'podcast-room-1',
    slug: 'podcast-room-1',
    name: 'Podcast Room 1 (Warm Luxury Set)',
    shortDescription: 'Luxury lounge podcast setup featuring plush leather armchairs, wood acoustic slats, and multi-camera 4K recording.',
    fullDescription: 'Designed for high-end video podcasts, talk shows, and executive interviews. Features warm wooden slat paneling, ambient LED lighting, 4-person seating, and broadcast-grade Shure SM7B mics.',
    dimensions: '5m x 4.5m (22.5 sq. m)',
    ceilingHeight: '3.2m height',
    powerSupply: 'Clean audio power',
    idealFor: ['Video Podcasts', 'Talk Shows', 'Executive Interviews', 'YouTube Show Series'],
    primaryKeyword: 'podcast studio Beirut',
    metaTitle: 'Podcast Room 1 — Luxury Video Podcast Studio Beirut | Chroma28',
    metaDescription: 'Book Podcast Room 1 in Antelias, Beirut. 4-person video podcast set with 4K multi-camera switching, Shure SM7B mics, and acoustic wood paneling.',
    features: [
      'Acoustic real-wood slat wall backdrop with warm RGB rim lighting',
      'Seating for up to 4 guests on luxury leather armchairs',
      'Multi-camera 4K video recording with live switching',
      'Acoustically tuned sound dampening floor and ceiling'
    ],
    includedEquipment: [
      'Shure SM7B Microphones (4x) on Rode Studio Arms',
      'Rodecaster Pro II Audio Production Console',
      'Sony FX3 Cinema Cameras (3x Multi-Angle Setup)',
      'Blackmagic ATEM Mini Pro ISO Video Switcher'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80'
    ],
    faqQuestion: 'Do you provide ISO multi-track audio and video recordings for editing?',
    faqAnswer: 'Yes, every podcast session includes separate ISO audio tracks for each speaker and individual camera video files.'
  },
  {
    id: 'podcast-room-2',
    slug: 'podcast-room-2',
    name: 'Podcast Room 2 (Modern Creator Studio)',
    shortDescription: 'Minimalist neon & modern desk setup for YouTube podcasts, tech reviews, and 2-person dialogue shows.',
    fullDescription: 'Sleek, vibrant podcast studio set engineered for modern content creators, YouTubers, and influencers. Customizable RGB backlight tubes, low-profile microphones, and instant live video switching.',
    dimensions: '4.5m x 4m (18 sq. m)',
    ceilingHeight: '3.0m height',
    powerSupply: 'Standard clean power',
    idealFor: ['YouTube Podcasts', 'Tech Reviews', 'Influencer Interviews', 'Livestreams'],
    primaryKeyword: 'content creation studio Lebanon',
    metaTitle: 'Podcast Room 2 — Creator Podcast Studio Beirut | Chroma28',
    metaDescription: 'Modern creator podcast room in Antelias, Beirut. Custom RGB neon backdrop, 4K multi-cam setup, and immediate audio export.',
    features: [
      'Customizable RGB ambient backdrop tubing',
      'Custom matte black podcast table with hidden cable management',
      'Instant plug-and-play laptop/tablet integration',
      'Quiet HVAC for noise-free audio'
    ],
    includedEquipment: [
      'Shure MV7X Dynamic Microphones (2x)',
      'Sony Alpha 4K Cameras (2x)',
      'Focusrite Clarett Preamp Audio Interface',
      'Elgato Stream Deck for Scene Control'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80'
    ],
    faqQuestion: 'Can we customize the backlight colors in Podcast Room 2 to match our brand?',
    faqAnswer: 'Yes, all backdrop RGB light fixtures are app-controlled and can be matched to your exact brand color HEX codes.'
  }
];
