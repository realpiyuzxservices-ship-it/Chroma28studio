import { EquipmentCategory } from '../types';

export const EQUIPMENT_CATALOG: EquipmentCategory[] = [
  {
    category: 'Cameras & Cinema Bodies',
    items: [
      { name: 'Sony FX6 Full-Frame Cinema Line Camera', description: '4K 120fps 10-bit 4:2:2, Dual Base ISO 800/12800, E-Mount', tag: 'Cinema Body' },
      { name: 'Sony FX3 Full-Frame Cinema Camera', description: 'Compact cinema body with active cooling, 4K 120p, S-Cinetone', tag: 'Cinema Body' },
      { name: 'Sony A7S III Mirrorless Camera', description: '12.1MP BSI sensor, uncompressed 16-bit RAW video output', tag: 'Full Frame' },
      { name: 'RED Komodo 6K Cinema Camera', description: 'Super 35 6K Global Shutter sensor, RF mount, REDCODE RAW', tag: '6K Cinema' }
    ]
  },
  {
    category: 'Lenses & Cinema Glass',
    items: [
      { name: 'Sony G Master Prime Lens Set (24, 35, 50, 85mm f/1.4)', description: 'Ultra-fast aperture, razor-sharp edge resolution', tag: 'Prime Set' },
      { name: 'Sony FE 24-70mm f/2.8 GM II Zoom Lens', description: 'Versatile flagship zoom lens for high-paced video shoots', tag: 'Zoom' },
      { name: 'DZOFilm VESPID Cinema Primes (16, 25, 35, 50, 75, 125mm T2.1)', description: 'Dedicated cinema lenses with 0.8 MOD focus gears', tag: 'Cine Primes' },
      { name: 'Sony FE 70-200mm f/2.8 GM OSS II', description: 'Telephoto zoom for sports, fashion runways, and tight portraits', tag: 'Telephoto' }
    ]
  },
  {
    category: 'Lighting & Modifiers',
    items: [
      { name: 'Aputure Light Storm LS 600d Pro', description: '600W Daylight COB LED with Bowens mount, Weatherproof', tag: 'High Output' },
      { name: 'Aputure LS 300x Bi-Color LED', description: '2700K-6500K tunable CCT with wireless Sidus Link app control', tag: 'Bi-Color' },
      { name: 'Nanlite Pavotube II 30C RGBWW Tube Lights (4-Light Kit)', description: '4-foot RGB tube lights with built-in battery and pixel FX', tag: 'RGB Tubes' },
      { name: 'Aputure Light Dome III Softboxes & Lantern Modifiers', description: 'Quick-setup deep parabolic softboxes with grid diffusers', tag: 'Modifiers' },
      { name: 'Godox Knowled M600D Daylight LED', description: '600W ultra-bright continuous daylight fixture', tag: 'Continuous' }
    ]
  },
  {
    category: 'Audio & Microphones',
    items: [
      { name: 'Shure SM7B Vocal Dynamic Microphones', description: 'Industry standard for broadcast, podcasting, and voiceovers', tag: 'Broadcast' },
      { name: 'Sennheiser MKH 416 Shotgun Microphone', description: 'Moisture-resistant interference tube shotgun mic for film dialog', tag: 'Shotgun' },
      { name: 'DJI Mic 2 Wireless Dual Microphone System', description: '32-bit float internal recording, intelligent noise canceling', tag: 'Wireless' },
      { name: 'Rodecaster Pro II Audio Production Studio', description: '4 XLR inputs, Revolution preamps, custom SMART pads', tag: 'Console' },
      { name: 'Neumann U87 Ai Studio Condenser Microphone', description: 'Legendary large-diaphragm multi-pattern studio microphone', tag: 'Vocal Studio' }
    ]
  },
  {
    category: 'Grip, Support & Monitors',
    items: [
      { name: 'DJI RS 3 Pro Gimbal Stabilizer Combo', description: 'Carbon fiber arms, LiDAR focusing system, 4.5kg payload', tag: 'Gimbal' },
      { name: 'Matthews Heavy Duty C-Stands & Turtle Base Kit', description: '40-inch chrome C-stands with grip heads and extension arms', tag: 'Grip' },
      { name: 'Atomos Ninja V+ 5.2" 8K HDMI/SDI Monitor Recorder', description: '1000-nit HDR display with ProRes RAW recording', tag: 'Monitor' },
      { name: 'Hollywood Garment Steamer & Clothes Rack Station', description: 'Heavy duty commercial steamer for fashion & model styling', tag: 'Styling' }
    ]
  }
];
