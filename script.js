// ------------------ Product Data (stored in JS) ------------------
const products = [
  {
    id: 1,
    name: "Sony Alpha A7 IV",
    category: "Cameras",
    brand: "Sony",
    price: 2499,
    images: [
      "sony alpha a7 iv (1).jpg",
      "sony alpha a7 iv (2).jpg",
      "sony alpha a7 iv (3).jpg" 
    ],
    summary: "Full-frame mirrorless, 33MP, 4K video",
    details: `
      The Sony Alpha A7 IV represents the perfect balance between photo and video excellence. 
      It features a 33-megapixel Exmor R back-illuminated CMOS sensor paired with the advanced BIONZ XR processor, delivering outstanding image clarity, wide dynamic range, and exceptional low-light performance. 
      With support for 10-bit 4:2:2 4K recording at up to 60p, it’s a dream machine for hybrid creators who demand flexibility between stills and cinematic footage.
      
      The A7 IV features Real-Time Eye AF for humans, animals, and birds, offering precise subject tracking even in challenging conditions. Its 759 phase-detection autofocus points cover nearly the entire frame for superior subject acquisition. 
      Photographers benefit from 5-axis in-body image stabilization (up to 5.5 stops), while videographers enjoy advanced S-Cinetone and S-Log3 color profiles for professional-grade post-production control.
      
      The redesigned ergonomic grip, improved weather sealing, and intuitive menu system ensure comfort and reliability during long shoots. With dual card slots (SD/CFexpress Type A), 10fps continuous shooting, and wireless transfer via Wi-Fi and Bluetooth, the Sony A7 IV delivers a complete professional experience in a compact mirrorless body.
    `
  },
  {    id: 2,
    name: "Canon EOS R8",
    category: "Cameras",
    brand: "Canon",
    price: 1799,
    images: [
      "Canon EOS R8 (1).jpg",
      "Canon EOS R8 (2).jpg",
      "Canon EOS R8 (3).jpg"
    ],
    summary: "Lightweight full-frame mirrorless camera",
    details: `
      The Canon EOS R8 is a lightweight full-frame mirrorless camera that offers the perfect blend of portability, performance, and precision. 
      Featuring a 24.2MP full-frame CMOS sensor and Canon’s powerful DIGIC X processor, it captures detailed images with incredible color accuracy and low noise even in dimly lit environments.
      
      Designed for creators on the move, the R8 supports 4K 60p oversampled from 6K for crisp cinematic video, along with 10-bit HDR PQ and Canon Log 3 for flexible post-production workflows. 
      Its Dual Pixel CMOS AF II technology offers 1,053 autofocus zones and subject detection for people, animals, and vehicles, ensuring reliable tracking in fast-paced situations.
      
      Weighing only 461g, it’s ideal for vloggers, travelers, and event photographers who need full-frame power in a compact form. The fully articulating touchscreen, intuitive menu system, and Wi-Fi/Bluetooth connectivity make operation effortless. 
      With features like focus breathing correction, vertical video recording, and enhanced audio support, the Canon EOS R8 stands as a true all-rounder for modern creators.
    `
  },
  {
    id: 3,
    name: "Yashica Retro 35",
    category: "Cameras",
    brand: "Yashica",
    price: 399,
    images: [
      "Yashica Retro 35 (1).jpg",
      "Yashica Retro 35 (2).jpg",
      "Yashica Retro 35 (3).jpg"
    ],
    summary: "Classic-styled compact camera",
    details: `
      The Yashica Retro 35 brings back the nostalgic essence of classic film cameras in a modern digital form. 
      Combining retro aesthetics with today’s technology, it features a 12MP 1/3.2-inch CMOS sensor, delivering sharp and vibrant images that retain that analog charm. 
      Its fixed 35mm equivalent lens provides natural perspective shots, ideal for street, travel, and lifestyle photography.
      
      With built-in creative filters like Black & White, Sepia, and Vintage Film, you can achieve distinctive moods directly from the camera. 
      The tactile controls and solid metal body design give an authentic, old-school shooting experience, while the rechargeable battery and lightweight build make it easy to carry anywhere.
      
      Additional features include Full HD video recording, face detection, self-timer, and multiple shooting modes to enhance creativity. 
      The Yashica Retro 35 isn’t just a camera—it’s a statement piece for photographers who appreciate simplicity, character, and the timeless appeal of film-inspired design.
    `
  },
  {
    id: 4,
    name: "Sony FE 24-70mm f/2.8 GM",
    category: "Camera Lenses",
    brand: "Sony",
    price: 1699,
    images: [
      "Sony FE 85mm f1.4 GM (1).jpg",
      "Sony FE 85mm f1.4 GM (2).jpg",
      "Sony FE 85mm f1.4 GM (3).jpg"
    ],
    summary: "Professional-grade zoom lens for Sony full-frame cameras",
    details: `
      The Sony FE 24-70mm f/2.8 GM is a flagship G Master zoom lens that delivers uncompromising optical performance for professionals. 
      Covering a versatile focal range from wide to portrait telephoto, it ensures exceptional sharpness and contrast throughout the frame, even at its maximum f/2.8 aperture.
      
      The lens features advanced XA (Extreme Aspherical) and ED (Extra-low Dispersion) elements, minimizing aberrations and maintaining edge-to-edge clarity. 
      Nano AR Coating II reduces flare and ghosting, ensuring superb results even in challenging lighting.
      
      With a fast and silent autofocus system powered by Direct Drive SSM, it’s perfect for both photography and video work. The circular 9-blade diaphragm produces beautifully smooth bokeh, enhancing subject separation in portraits and detail shots.
      
      Built for professionals, the lens body features robust weather sealing and fluorine-coated front elements to resist dust and moisture. 
      Whether you're capturing landscapes, weddings, or studio portraits, the Sony FE 24-70mm f/2.8 GM stands as a must-have workhorse lens in any Sony photographer’s kit.
    `
  },
  {
    id: 5,
    name: "Tamron 70-180mm f/2.8 Di III VXD",
    category: "Camera Lenses",
    brand: "Tamron",
    price: 799,
    images: [
      "Tamron 70-180mm (1).jpg",
      "Tamron 70-180mm (2).jpg",
      "Tamron 70-180mm (3).jpg"
    ],
    summary: "Lightweight telephoto zoom lens for mirrorless cameras",
    details: `
      The Tamron 70-180mm f/2.8 Di III VXD redefines what a compact telephoto zoom lens can do. 
      Designed specifically for Sony E-mount full-frame mirrorless cameras, it offers a constant f/2.8 aperture throughout the zoom range, delivering stunning clarity and beautiful bokeh in every frame.
      
      The lens features Tamron’s cutting-edge VXD (Voice-coil eXtreme-torque Drive) linear motor, offering ultra-fast and silent autofocus performance — ideal for sports, portraits, and event photography. 
      Despite its lightweight design (only 810g), it delivers optical quality on par with premium professional lenses.
      
      The optical construction includes several LD (Low Dispersion) and XLD (Extra Low Dispersion) elements to minimize chromatic aberrations. It’s also moisture-resistant, with a fluorine coating on the front element for added protection against fingerprints and smudges.
      
      Whether shooting handheld at dusk or capturing distant subjects, the Tamron 70-180mm delivers powerful telephoto performance in a travel-friendly package, making it one of the best values in its class.
    `
  },
  {
    id: 6,
    name: "Rode Wireless GO II",
    category: "Pro Audio",
    brand: "Rode",
    price: 299,
    images: [
      "Rode Wireless GO II (1).jpg",
      "Rode Wireless GO II (2).jpg",
      "Rode Wireless GO II (3).jpg"
    ],
    summary: "Compact dual-channel wireless microphone system",
    details: `
      The Rode Wireless GO II is the ultimate compact wireless microphone system for content creators, filmmakers, and journalists. 
      It includes two transmitters with built-in omnidirectional microphones and a dual-channel receiver, allowing you to record two speakers simultaneously with crystal-clear audio.
      
      With a range of up to 200 meters (line of sight) and onboard recording capability, it ensures no audio dropouts — even in busy RF environments. 
      The system supports 24-bit audio and features a built-in safety channel, offering a backup track at -20dB for added security.
      
      Compatible with cameras, smartphones, and computers, it provides flexibility for interviews, podcasts, and YouTube production. 
      The rechargeable lithium-ion batteries offer up to 7 hours of operation, while the compact design clips easily onto clothing or camera rigs.
      
      The Rode Central companion app allows firmware updates, custom gain control, and file export, making this wireless system as versatile as it is powerful. 
      It’s a professional-grade audio tool that fits right in your pocket.
    `
  },
  {
    id: 7,
    name: "SanDisk 128GB Extreme PRO SDXC",
    category: "Memory Cards & Media",
    brand: "SanDisk",
    price: 49,
    images: [
      "sandisk (1).jpg",
      "sandisk (2).jpg",
      "sandisk (3).jpg"
    ],
    summary: "High-speed memory card for 4K video and burst photography",
    details: `
      The SanDisk 128GB Extreme PRO SDXC UHS-II memory card is engineered for photographers and videographers who demand reliability, speed, and endurance. 
      With read speeds up to 300MB/s and write speeds up to 260MB/s, it enables fast data transfers, uninterrupted 4K UHD video capture, and high-speed burst shooting.
      
      Ideal for professional cameras and camcorders, it supports V90 video speed class for seamless 4K and 8K recording. 
      Its rugged design is shockproof, temperature-proof, waterproof, and X-ray-proof, ensuring your valuable data remains safe in the harshest conditions.
      
      Whether shooting sports, wildlife, or commercial projects, the SanDisk Extreme PRO delivers uncompromising performance and peace of mind. 
      Backed by a lifetime limited warranty, it’s a must-have for every creator who values both speed and security.
    `
  },
  {
    id: 8,
    name: "Manfrotto Befree Advanced Tripod",
    category: "Tripods & Supports",
    brand: "Manfrotto",
    price: 199,
    images: [
      "Manfrotto Befree Advanced Tripod (1).jpg",
      "Manfrotto Befree Advanced Tripod (2).jpg",
      "Manfrotto Befree Advanced Tripod (3).jpg"
    ],
    summary: "Lightweight and portable travel tripod",
    details: `
      The Manfrotto Befree Advanced Tripod is the ultimate travel companion for photographers seeking stability and portability. 
      Crafted from high-quality aluminum, it supports loads up to 8kg while remaining light enough to carry on any adventure.
      
      The tripod features Manfrotto’s M-lock twist system for quick setup and takedown, and a 494 ball head with independent pan and friction control for precise composition. 
      Its ergonomic design ensures smooth movement and strong grip even on uneven terrain.
      
      With a folded length of just 40cm, it fits easily into backpacks and carry-on luggage. 
      The Befree Advanced also comes with a padded carrying bag and a dedicated hook for counterweight stability during windy conditions. 
      Designed for professionals and hobbyists alike, it provides the reliability needed for landscape, travel, and studio photography.
    `
  },
  {
    id: 9,
    name: "Godox SL-60W LED Light",
    category: "Lighting & Studio",
    brand: "Godox",
    price: 129,
    images: [
      "Godox SL-60W.jpg",
      "Godox SL-60W2.jpg",
      "Godox SL-60W3.jpg"
    ],
    summary: "Continuous LED light for photo and video studios",
    details: `
      The Godox SL-60W is a professional-grade continuous LED light that provides consistent, flicker-free illumination for photo and video production. 
      Offering 60 watts of output power and a color temperature of 5600K (daylight-balanced), it delivers bright, natural light ideal for portrait, product, and studio work.
      
      The SL-60W is compatible with Bowens-mount modifiers, allowing you to attach softboxes, beauty dishes, and reflectors for creative lighting control. 
      Its high color rendering index (CRI 95+) ensures accurate color reproduction for skin tones and product photography.
      
      The unit also features silent cooling technology and a wireless remote for convenient brightness adjustment from a distance. 
      Durable metal housing and compact design make it suitable for both home studios and professional setups. 
      Whether you’re shooting YouTube videos, interviews, or cinematic scenes, the Godox SL-60W provides reliable light quality at an affordable price.
    `
  },
  {
    id: 10,
    name: "Lowepro Fastpack BP 250 AW II",
    category: "Camera Bags & Cases",
    brand: "Lowepro",
    price: 179,
    images: [
      "Lowepro Fastpack BP 250 (1).jpg",
      "Lowepro Fastpack BP 250 (2).jpg",
      "Lowepro Fastpack BP 250 (3).jpg"
    ],
    summary: "Spacious and protective camera backpack",
    details: `
      The Lowepro Fastpack BP 250 AW II is a versatile, travel-ready camera backpack built to protect your gear while keeping it accessible. 
      Designed for photographers who move fast, it accommodates a DSLR or mirrorless setup with multiple lenses, a 15-inch laptop, tablet, and accessories.
      
      Its smart design features customizable padded dividers, quick side access for your camera, and top compartments for personal items. 
      The all-weather AW cover protects your gear from rain, dust, and sand, while the durable polyester construction ensures long-term reliability.
      
      Ergonomically padded shoulder straps and a ventilated back panel provide comfort during extended wear. 
      The bag’s security buckles and discreet styling make it ideal for travel, city shooting, or outdoor adventures. 
      Whether you’re a travel vlogger or professional photographer, the Lowepro Fastpack BP 250 AW II keeps your equipment safe, organized, and always within reach.
    `
  },

  /* --- NEW ITEMS (11 through 40) --- */

  {
    id: 11,
    name: "Nikon Z6 II",
    category: "Cameras",
    brand: "Nikon",
    price: 1999,
    images: [
      "Nikon Z6 II (1).jpg",
      "Nikon Z6 II (2).jpg",
      "Nikon Z6 II (3).jpg"
    ],
    summary: "Versatile full-frame mirrorless hybrid",
    details: `
      The Nikon Z6 II is a high-performance full-frame mirrorless camera designed for hybrid shooters who need both speed and image quality. 
      Featuring a 24.5MP backside-illuminated sensor, dual EXPEED processors, and improved autofocus algorithms, it delivers smooth continuous shooting and robust subject tracking.
      
      Video features include 4K UHD up to 60p (with crop), 10-bit N-Log output via HDMI, and clean HDMI for external recorders. The in-body 5-axis stabilization helps keep handheld footage steady and sharp.
      
      Robust weather sealing, dual card slots (CFexpress/SD), and a comfortable, balanced body make the Z6 II suitable for professional assignments and travel. Excellent color science and low-light capability round out its strengths.
    `
  },
  {
    id: 12,
    name: "Fujifilm X-T5",
    category: "Cameras",
    brand: "Fujifilm",
    price: 1599,
    images: [
      "Fujifilm X-T5 (1).jpg",
      "Fujifilm X-T5 (2).jpg",
      "Fujifilm X-T5 (3).jpg"
    ],
    summary: "APS-C mirrorless with classic controls & film simulations",
    details: `
      The Fujifilm X-T5 blends classic tactile controls with modern imaging performance. It uses a 40MP X-Trans CMOS 5 HR sensor that produces highly detailed images with Fujifilm’s renowned color science.
      
      Photographers love its rich film simulation modes, mechanical dials, and compact but sturdy body. It offers 6.2K video capture, IBIS, and strong AF tracking for both stills and motion work.
      
      Ideal for portraits, travel, and editorial work, the X-T5 pairs beautifully with Fujifilm’s extensive range of XF lenses and offers an enjoyable, photographic shooting experience.
    `
  },
  {
    id: 13,
    name: "Panasonic Lumix S5 II",
    category: "Cameras",
    brand: "Panasonic",
    price: 1699,
    images: [
      "Panasonic Lumix S5 II (1).jpg",
      "Panasonic Lumix S5 II (2).jpg",
      "Panasonic Lumix S5 II (3).jpg"
    ],
    summary: "Compact full-frame hybrid optimized for video",
    details: `
      The Panasonic Lumix S5 II is a compact full-frame mirrorless camera built with video creators in mind. 
      It offers advanced video features like 4K 60p 10-bit internal recording, V-Log, and a suite of movie-oriented functions such as waveform and vectorscope overlays.
      
      The camera balances robust stills capability with professional video tools, delivering excellent color and dynamic range. Dual native ISO and improved AF make low-light workflows more reliable.
      
      With weather sealing, strong stabilization, and a lightweight body, the S5 II is an attractive option for run-and-gun filmmakers and hybrid content creators.
    `
  },
  {
    id: 14,
    name: "Leica Q2",
    category: "Cameras",
    brand: "Leica",
    price: 4299,
    images: [
      "Leica Q2 (1).jpg",
      "Leica Q2 (2).jpg",
      "Leica Q2 (3).jpg"
    ],
    summary: "Premium full-frame compact with fixed 28mm lens",
    details: `
      The Leica Q2 is a high-end full-frame compact camera with an iconic fixed Summilux 28mm f/1.7 ASPH lens, delivering exceptional sharpness and Leica’s signature color rendering. 
      Its 47.3MP sensor captures incredible detail and tonality, making it suitable for professionals who want ultimate image quality in a discreet form factor.
      
      The Q2’s durable, weather-sealed alloy body and minimalist controls emphasize craftsmanship and simplicity. Built-in stabilization and fast autofocus make it practical for street and travel photography without compromising image fidelity.
      
      For photographers who value build quality, optics, and a pure shooting experience, the Leica Q2 is a timeless tool.
    `
  },
  {
    id: 15,
    name: "OM System (Olympus) OM-D E-M5 Mark III",
    category: "Cameras",
    brand: "OM System",
    price: 899,
    images: [
      "OM System (Olympus) OM-D E-M5 Mark III (1).jpg",
      "OM System (Olympus) OM-D E-M5 Mark III (2).jpg",
      "OM System (Olympus) OM-D E-M5 Mark III (3).jpg"
    ],
    summary: "Micro Four Thirds mirrorless for lightweight mobility",
    details: `
      The OM System OM-D E-M5 Mark III (formerly Olympus) is a compact, feature-packed Micro Four Thirds camera geared toward travel and outdoor photographers. 
      It features in-body 5-axis stabilization, a reliable 20MP sensor, and fast autofocus for everyday shooting.
      
      Lightweight construction, weather sealing, and long battery life make it an excellent companion for long trips. The extensive MFT lens ecosystem keeps the kit small yet versatile.
      
      The E-M5 Mark III offers creative shooting modes, advanced image stabilization for long exposures, and high-quality JPEG output for photographers who prefer minimal post-processing.
    `
  },
  {
    id: 16,
    name: "Canon RF 24-105mm f/4L IS USM",
    category: "Camera Lenses",
    brand: "Canon",
    price: 1099,
    images: [
      "Canon RF 24-105mm f4L IS USM (1).jpg",
      "Canon RF 24-105mm f4L IS USM (2).jpg",
      "Canon RF 24-105mm f4L IS USM (3).jpg"
    ],
    summary: "Versatile all-purpose zoom for Canon RF mount",
    details: `
      The Canon RF 24-105mm f/4L IS USM is a practical, high-quality zoom lens ideal for everyday shooting, events, and travel. 
      It offers constant f/4 performance, effective optical image stabilization, and fast, quiet Nano USM autofocus.
      
      The lens produces consistent sharpness across the zoom range and includes robust weather sealing typical of Canon L-series optics. 
      It’s a favorite walkaround lens for hybrid shooters who value focal flexibility without frequent lens changes.
    `
  },
  {
    id: 17,
    name: "Sigma 35mm f/1.4 DG HSM Art",
    category: "Camera Lenses",
    brand: "Sigma",
    price: 899,
    images: [
      "Sigma 35mm f1.4 DG HSM Art (2).jpg",
      "Sigma 35mm f1.4 DG HSM Art (1).jpg",
      "Sigma 35mm f1.4 DG HSM Art (3).jpg"
    ],
    summary: "High-performance wide prime for portraits & street",
    details: `
      The Sigma 35mm f/1.4 DG HSM Art is renowned for its excellent sharpness, micro-contrast, and beautiful rendering — making it a top choice for portrait and street photographers. 
      With a fast f/1.4 aperture it excels in low-light conditions and produces smooth out-of-focus backgrounds.
      
      The robust optical design minimizes aberrations while delivering high resolution across the frame. It’s available for multiple mounts and offers reliable AF performance for stills and video.
    `
  },
  {
    id: 18,
    name: "Canon RF 85mm f/1.2L USM",
    category: "Camera Lenses",
    brand: "Canon",
    price: 2799,
    images: [
      "Canon RF 24-105mm f4L IS USM (1).jpg",
      "Canon RF 24-105mm f4L IS USM (2).jpg",
      "Canon RF 24-105mm f4L IS USM (3).jpg"
    ],
    summary: "Ultra-fast short tele for stunning portraits",
    details: `
      The Canon RF 85mm f/1.2L USM is an elite medium-telephoto prime lens delivering exceptional bokeh, subject isolation, and edge-to-edge sharpness. 
      Designed for professional portraiture, it offers an ultra-wide f/1.2 aperture for creative depth-of-field control and superb low-light capabilities.
      
      Its advanced optics, weather sealing, and robust build quality make it a career lens for portrait and wedding photographers who demand the absolute best in rendering and performance.
    `
  },
  {
    id: 19,
    name: "Sony FE 85mm f/1.4 GM",
    category: "Camera Lenses",
    brand: "Sony",
    price: 1799,
    images: [
      "Sony FE 24-70mm.jpg",
      "Sony FE 24-70mm2.jpg",
      "Sony FE 24-70mm3.jpg"
    ],
    summary: "Premium short tele portrait lens for Sony",
    details: `
      The Sony FE 85mm f/1.4 GM delivers gorgeous bokeh, remarkable sharpness, and natural rendering optimized for portraiture and headshots. 
      Its advanced optical formula and aspherical elements minimize aberrations while the fast autofocus ensures reliable subject acquisition in varied environments.
      
      Built to pro standards with weather sealing and durable craftsmanship, it’s a go-to lens for creatives demanding studio-quality results on location.
    `
  },
  {
    id: 20,
    name: "Tamron 28-75mm f/2.8 Di III RXD",
    category: "Camera Lenses",
    brand: "Tamron",
    price: 649,
    images: [
      "Tamron 28-75mm f2.8 Di III RXD (1).jpg",
      "Tamron 28-75mm f2.8 Di III RXD (2).jpg",
      "Tamron 28-75mm f2.8 Di III RXD (3).jpg"
    ],
    summary: "Affordable fast standard zoom for mirrorless",
    details: `
      The Tamron 28-75mm f/2.8 Di III RXD provides an excellent balance of image quality, compactness, and affordability for mirrorless systems. 
      The constant f/2.8 aperture across the zoom range keeps performance consistent and enables attractive background separation.
      
      Lightweight and portable, it’s a popular choice for wedding photographers, enthusiasts, and run-and-gun videographers who need reliable optics without heavy weight.
    `
  },
  {
    id: 21,
    name: "Aputure 120d II",
    category: "Lighting & Studio",
    brand: "Aputure",
    price: 749,
    images: [
      "Aputure 120d II (1).jpg",
      "Aputure 120d II (2).jpg",
      "Aputure 120d II (3).jpg"
    ],
    summary: "High-output daylight LED for film & studio",
    details: `
      The Aputure 120d II is a powerful daylight-balanced LED fixture that provides cinema-quality light output and color accuracy. 
      Known for its punchy performance relative to size, it pairs well with light modifiers and softboxes via a Bowens mount.
      
      With smooth dimming, quiet cooling, and wireless control via Sidus Link, the 120d II is a favorite among indie filmmakers, studios, and content creators who need professional continuous light.
    `
  },
  {
    id: 22,
    name: "Profoto B10",
    category: "Lighting & Studio",
    brand: "Profoto",
    price: 1799,
    images: [
      "Profoto B10 (1).jpg",
      "Profoto B10 (2).jpg",
      "Profoto B10 (3).jpg"
    ],
    summary: "Portable battery-powered studio strobe",
    details: `
      The Profoto B10 is a compact, battery-powered studio strobe engineered for photographers who need studio light quality on location. 
      It offers accurate color, fast recycling, and Profoto’s ecosystem of modifiers for creative control.
      
      Easy to pack and extremely reliable, the B10 is popular for editorial and on-location portrait shoots where mobility and consistent light quality matter.
    `
  },
  {
    id: 23,
    name: "Neewer 660 LED Panel",
    category: "Lighting & Studio",
    brand: "Neewer",
    price: 79,
    images: [
      "Neewer 660 LED Panel (1).jpg",
      "Neewer 660 LED Panel (2).jpg",
      "Neewer 660 LED Panel (3).jpg"
    ],
    summary: "Budget RGB/bi-color LED panel kit",
    details: `
      The Neewer 660 LED panel kit provides a cost-effective lighting solution for content creators, vloggers, and beginner studios. 
      Often bi-color or RGB capable, these panels offer flexible color temperature control and adjustable brightness for practical lighting setups.
      
      While not pro-grade like Aputure or Profoto, Neewer panels are great value for home studios and starter kits.
    `
  },
  {
    id: 24,
    name: "Gitzo Traveler Series 1",
    category: "Tripods & Supports",
    brand: "Gitzo",
    price: 899,
    images: [
      "Gitzo Traveler Series 1 (1).jpg",
      "Gitzo Traveler Series 1 (2).jpg",
      "Gitzo Traveler Series 1 (3).jpg"
    ],
    summary: "Professional carbon-fiber travel tripod",
    details: `
      Gitzo’s Traveler Series 1 tripods combine rock-solid carbon fiber build with compact portability. 
      Ideal for landscape and travel photographers who require lightweight yet extremely stable support for high-resolution cameras and long exposures.
      
      Features include an easy-fold design, high load capacity for its class, and premium leg locks for secure setup. Perfect for serious travelers.
    `
  },
  {
    id: 25,
    name: "Benro Adventure Travel Tripod",
    category: "Tripods & Supports",
    brand: "Benro",
    price: 249,
    images: [
      "Benro Adventure Travel Tripod (1).jpg",
      "Benro Adventure Travel Tripod (2).jpg",
      "Benro Adventure Travel Tripod (3).jpg"
    ],
    summary: "Sturdy, affordable travel tripod",
    details: `
      The Benro Adventure tripod is a durable and budget-friendly option offering good stability and compact folding length for travel photographers. 
      It includes user-friendly leg locks, a reliable head, and a comfortable carrying case.
    `
  },
  {
    id: 26,
    name: "Peak Design Travel Tripod (Aluminum)",
    category: "Tripods & Supports",
    brand: "Peak Design",
    price: 599,
    images: [
      "Peak Design Travel Tripod (Aluminum) (1).jpg",
      "Peak Design Travel Tripod (Aluminum) (2).jpg",
      "Peak Design Travel Tripod (Aluminum) (3).jpg"
    ],
    summary: "Innovative compact tripod for everyday carry",
    details: `
      Peak Design’s Travel Tripod offers exceptional engineering for photographers who demand a compact, strong, and fast-to-deploy support system. 
      Its unique leg design and easy setup make it an excellent daily-carry tripod for both mirrorless and compact DSLR setups.
    `
  },
  {
    id: 27,
    name: "Sennheiser MKE 600",
    category: "Pro Audio",
    brand: "Sennheiser",
    price: 329,
    images: [
      "Sennheiser MKE 600 (1).jpg",
      "Sennheiser MKE 600 (2).jpg",
      "Sennheiser MKE 600 (3).jpg"
    ],
    summary: "Shotgun microphone for camera-mounted use",
    details: `
      The Sennheiser MKE 600 is a professional shotgun microphone offering focused capture and low self-noise, ideal for ENG, interviews, and run-and-gun filmmaking. 
      It excels at rejecting off-axis sounds and delivering clear dialog capture when mounted on a camera or boom.
    `
  },
  {
    id: 28,
    name: "Zoom H6 Handy Recorder",
    category: "Pro Audio",
    brand: "Zoom",
    price: 349,
    images: [
      "Zoom H6 Handy Recorder (1).jpg",
      "Zoom H6 Handy Recorder (2).jpg",
      "Zoom H6 Handy Recorder (3).jpg"
    ],
    summary: "Multi-channel portable field recorder",
    details: `
      The Zoom H6 is a flexible multi-track recorder used by podcasters, musicians, and filmmakers for high-quality location recording. 
      It supports interchangeable mic capsules, four XLR inputs, and robust onboard preamps with clean gain.
      
      The H6 doubles as an audio interface and provides long battery life for extended field sessions.
    `
  },
  {
    id: 29,
    name: "Shure SM7B",
    category: "Pro Audio",
    brand: "Shure",
    price: 399,
    images: [
      "Shure SM7B (1).jpg",
      "Shure SM7B (2).jpg",
      "Shure SM7B (3).jpg"
    ],
    summary: "Broadcast-quality dynamic microphone",
    details: `
      The Shure SM7B is an industry-standard dynamic microphone favored by broadcasters, podcasters, and studio vocalists. 
      It offers smooth, flat response, excellent rejection of ambient noise, and robust build quality — perfect for close-up vocal work.
    `
  },
  {
    id: 30,
    name: "Lexar Professional 256GB SDXC",
    category: "Memory Cards & Media",
    brand: "Lexar",
    price: 89,
    images: [
      "Lexar Professional 256GB SDXC (1).jpg",
      "Lexar Professional 256GB SDXC (2).jpg",
      "Lexar Professional 256GB SDXC (3).jpg"
    ],
    summary: "High-capacity SDXC for long shoots",
    details: `
      The Lexar Professional 256GB SDXC card delivers high capacity and solid performance for extended 4K recording sessions and long burst shoots. 
      It’s optimized for sustained write speeds and reliable data integrity in professional workflows.
    `
  },
  {
    id: 31,
    name: "Samsung T7 Portable SSD 1TB",
    category: "Memory Cards & Media",
    brand: "Samsung",
    price: 129,
    images: [
      "Samsung T7 Portable SSD 1TB (1).jpg",
      "Samsung T7 Portable SSD 1TB (2).jpg",
      "Samsung T7 Portable SSD 1TB (3).jpg"
    ],
    summary: "Fast portable SSD for backups and transfers",
    details: `
      The Samsung T7 is a compact, high-speed external SSD ideal for photographers and videographers needing fast offload and backup on the go. 
      With NVMe performance over USB 3.2 Gen 2, it drastically reduces transfer times compared to HDDs.
    `
  },
  {
    id: 32,
    name: "ProGrade Digital 128GB CFexpress Type A",
    category: "Memory Cards & Media",
    brand: "ProGrade",
    price: 249,
    images: [
      "ProGrade Digital 128GB CFexpress Type A (1).jpg",
      "ProGrade Digital 128GB CFexpress Type A (3).jpg",
      "ProGrade Digital 128GB CFexpress Type A (2).jpg"
    ],
    summary: "Ultra-fast CFexpress for high-bitrate recording",
    details: `
      ProGrade CFexpress Type A cards are designed for the highest bitrate video recording and fast burst modes on modern mirrorless cameras. 
      Their blazing write speeds help sustain high-resolution RAW and 10-bit 4K+ workflows without dropped frames.
    `
  },
  {
    id: 33,
    name: "Peak Design Everyday Backpack 20L",
    category: "Camera Bags & Cases",
    brand: "Peak Design",
    price: 249,
    images: [
      "Peak Design Everyday Backpack 20L (1).jpg",
      "Peak Design Everyday Backpack 20L (2).jpg",
      "Peak Design Travel Tripod (Aluminum) (3).jpg"
    ],
    summary: "Modular everyday camera backpack",
    details: `
      The Peak Design Everyday Backpack combines modular internal dividers, quick-access pockets, and sleek styling for creators who carry camera gear daily. 
      Weatherproof materials and smart organization make it ideal for urban shooters and commuters.
    `
  },
  {
    id: 34,
    name: "Think Tank StreetWalker v2.0",
    category: "Camera Bags & Cases",
    brand: "Think Tank",
    price: 189,
    images: [
      "Think Tank StreetWalker v2 (1).jpg",
      "Think Tank StreetWalker v2 (3).jpg",
      "Think Tank StreetWalker v2 (2).jpg"
    ],
    summary: "Slim pro backpack for city photographers",
    details: `
      Think Tank’s StreetWalker v2.0 offers a low-profile design with excellent padding and camera protection. 
      It’s tailored for discreet carry, comfortable straps, and easy access to camera bodies and lenses.
    `
  },
  {
    id: 35,
    name: "Tenba DNA 15 Messenger",
    category: "Camera Bags & Cases",
    brand: "Tenba",
    price: 159,
    images: [
      "Tenba DNA 15 Messenger (1).jpg",
      "Tenba DNA 15 Messenger (2).jpg",
      "Tenba DNA 15 Messenger (3).jpg"
    ],
    summary: "Stylish messenger bag for laptop + camera",
    details: `
      The Tenba DNA messenger bag merges professional styling with trunk-style protection for a lightweight camera and laptop carry solution. 
      It’s a favorite among creative professionals who travel between shoots and client meetings.
    `
  },
  {
    id: 36,
    name: "Zhiyun Crane 3S Gimbal",
    category: "Accessories",
    brand: "Zhiyun",
    price: 999,
    images: [
      "Zhiyun Crane 3S Gimbal (1).jpg",
      "Zhiyun Crane 3S Gimbal (2).jpg",
      "Zhiyun Crane 3S Gimbal (3).jpg"
    ],
    summary: "Heavy-duty 3-axis gimbal for cinema cameras",
    details: `
      The Zhiyun Crane 3S is a professional 3-axis stabilizer built to carry heavier cinema rigs. 
      It offers precise motor control, modular accessories, and multiple mounting options for complex camera setups.
    `
  },
  {
    id: 37,
    name: "Tiffen Variable ND Filter 77mm",
    category: "Accessories",
    brand: "Tiffen",
    price: 199,
    images: [
      "Tiffen Variable ND Filter 77mm (1).jpg",
      "Tiffen Variable ND Filter 77mm (2).jpg",
      "Tiffen Variable ND Filter 77mm (3).jpg"
    ],
    summary: "High-quality variable neutral density filter",
    details: `
      The Tiffen Variable ND filter provides smooth exposure control without changing color balance, ideal for filmmakers and photographers who need adjustable light reduction during changing conditions.
    `
  },
  {
    id: 38,
    name: "Canon LP-E6NH Replacement Battery",
    category: "Accessories",
    brand: "Canon",
    price: 79,
    images: [
      "Canon LP-E6NH Replacement Battery (1).jpg",
      "Canon LP-E6NH Replacement Battery (2).jpg",
      "Canon LP-E6NH Replacement Battery (3).jpg"
    ],
    summary: "High-capacity OEM battery for Canon cameras",
    details: `
      The Canon LP-E6NH is a higher-capacity battery compatible with many Canon EOS models, offering more shots per charge and reliable power for long sessions.
    `
  },
  {
    id: 39,
    name: "Vello Wireless Shutter Release",
    category: "Accessories",
    brand: "Vello",
    price: 39,
    images: [
      "Vello Wireless Shutter Release (1).jpg",
      "Vello Wireless Shutter Release (2).jpg",
      "Vello Wireless Shutter Release (3).jpg"
    ],
    summary: "Compact wireless remote for shuttle-free shooting",
    details: `
      The Vello wireless shutter release is a simple, reliable remote for triggering cameras remotely — perfect for long exposures, group shots, and wildlife photography where camera movement must be minimized.
    `
  },
  {
    id: 40,
    name: "Sekonic L-308X Light Meter",
    category: "Accessories",
    brand: "Sekonic",
    price: 249,
    images: [
      "Sekonic L-308X Light Meter (1).jpg",
      "Sekonic L-308X Light Meter (2).jpg",
      "Sekonic L-308X Light Meter (3).jpg"
    ],
    summary: "Handheld incident/reflective light meter for precise exposure",
    details: `
      The Sekonic L-308X provides accurate incident and reflective light readings for photographers who require consistent exposure across studio and outdoor shoots. 
      It’s compact, easy to use, and invaluable for lighting control and repeatable setups.
    `
  }
];




let cart = []
// Utility: gather unique categories and brands
const categories = [...new Set(products.map(p => p.category))].sort();
const brands = [...new Set(products.map(p => p.brand))].sort();

// Populate selectors and category quick-links
const categorySelect = document.getElementById('categorySelect');
const brandSelect = document.getElementById('brandSelect');
const productCategoriesDiv = document.getElementById('productCategories');

categories.forEach(cat => {
    const opt = document.createElement('option'); opt.value = cat; opt.textContent = cat; categorySelect.appendChild(opt);
    // add quick button
    const btn = document.createElement('button'); btn.className = 'btn btn-outline-secondary btn-sm'; btn.textContent = cat; btn.onclick = () => { categorySelect.value = cat; filterAndRender(); const modal = bootstrap.Modal.getInstance(document.getElementById('productsModal')); if (modal) modal.hide(); };
});

brands.forEach(b => { const opt = document.createElement('option'); opt.value = b; opt.textContent = b; brandSelect.appendChild(opt); });

// Products grid rendering
const productsRow = document.getElementById('productsRow');
function shuffle(arr) { return arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]); }

function renderProducts(list) {
    productsRow.innerHTML = '';
    if (list.length === 0) {
        productsRow.innerHTML = '<div class="col-12"><div class="alert alert-warning">No products match the selected filters.</div></div>';
        return;
    }

    list.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4 col-lg-3';
        col.innerHTML = `
          <div class="card product-card h-100" onclick="showDetails(${p.id})" style="cursor: pointer;">
            <img src="${p.images[0]}" class="card-img-top" alt="${p.name}">
            <div class="card-body d-flex flex-column">
  <h6 class="card-title">${p.name}</h6>
  <p class="card-text small">${p.brand} &middot; ${p.category}</p>
  <p class="card-text">${p.summary}</p>
  <div class="price-text"><strong>Price:</strong> $${p.price}</div>

  <!-- Bottom Row -->
  <div class="mt-auto d-flex justify-content-between align-items-center pt-2">

    <!-- Download Button -->
    <button id="downloadDocBtn" class="btn2" onclick="event.stopPropagation(); downloadDoc(${p.id})">
      <i class="fa-solid fa-download"></i>
    </button>

    <!-- Compare Checkbox -->
    <label class="compare-label" onclick="event.stopPropagation();">
      <input class="form-check-input compare-checkbox neon-checkbox" type="checkbox" value="${p.id}" id="cmp${p.id}">
      <span style="color:#fff; font-size: 0.9rem;">Compare</span>
      <div class="neon-checkbox__frame">
        <div class="neon-checkbox__box">
          <div class="neon-checkbox__check-container">
            <svg viewBox="0 0 24 24" class="neon-checkbox__check">
              <path d="M3,12.5l7,7L21,5"></path>
            </svg>
          </div>
          <div class="neon-checkbox__glow"></div>
          <div class="neon-checkbox__borders">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </label>
  </div>
</div>

          </div>
        `;
        productsRow.appendChild(col);
    });
}


// Initial render: random cards first
renderProducts(shuffle(products).slice(0, 8));

// Filtering
function filterAndRender() {
    const cat = categorySelect.value; 
    const br = brandSelect.value;
    const search = heroSearch.value.toLowerCase();

    let list = products.slice();

    // Search Filter
if (search.trim() !== "") {
    list = list.filter(p => 
        p.name.toLowerCase().includes(search) ||
        p.brand.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search)
    );
}


    // Category Filter
    if (cat !== 'all') {
        list = list.filter(p => p.category === cat);
    }

    // Brand Filter
    if (br !== 'all') {
        list = list.filter(p => p.brand === br);
    }

    renderProducts(list);
}

document.getElementById("heroSearch").addEventListener("input", filterAndRender);

categorySelect.addEventListener('change', filterAndRender);
brandSelect.addEventListener('change', filterAndRender);

// Details modal
function showDetails(id) {
  const p = products.find(x => x.id === id);

  const carouselItems = p.images.map((img, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="${img}" class="d-block w-100 rounded" alt="Product Image ${i + 1}">
    </div>
  `).join('');

  const body = document.getElementById('detailsBody');
  body.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${carouselItems}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <h5>${p.name}</h5>
        <p>${p.brand} &middot; ${p.category}</p>
        <p>${p.details}</p>
        <p><strong>Price:</strong> $${p.price}</p>
      </div>
    </div>
  `;

  // 🔹 Attach event listeners safely
  const downloadBtn = document.getElementById('detailsDownloadBtn');
  const addToCartBtn = document.getElementById('addToCartBtn');

  if (downloadBtn) downloadBtn.onclick = () => downloadDoc(id);
  if (addToCartBtn) addToCartBtn.onclick = () => addToCart(p);

  const modal = new bootstrap.Modal(document.getElementById('detailsModal'));
  modal.show();
}



// Download details as .doc (simple HTML inside a blob with MS Word mime)
function downloadDoc(id) {
    const p = products.find(x => x.id === id);
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${p.name}</title></head><body><h1>${p.name}</h1><p><em>${p.brand} &middot; ${p.category}</em></p><p>${p.details}</p><p>Price: $${p.price}</p></body></html>`;
    const blob = new Blob([html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `${p.name.replace(/\s+/g, '_')}.doc`; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

// Compare flow
document.getElementById('compareBtn').addEventListener('click', () => {
    // gather checked boxes
    const checked = Array.from(document.querySelectorAll('.compare-checkbox:checked')).map(i => parseInt(i.value));
  if (checked.length < 2) {
    const modal = new bootstrap.Modal(document.getElementById('compareWarningModal'));
    modal.show();
    return;
}

const selected = products.filter(p => checked.includes(p.id));
showCompare(selected);
});


function showCompare(list) {
    // Check if all selected products have same category
    const firstCategory = list[0]?.category;
    const sameCategory = list.every(p => p.category === firstCategory);

    if (!sameCategory) {
        // Show popup message
    const modal = new bootstrap.Modal(document.getElementById('categoryWarningModal')); 
    modal.show();
        return;
    }


    const body = document.getElementById('compareBody');

    // Build table
    let html = '<div class="table-responsive"><table class="table table-bordered compare-table bg-nav-cards"><thead class="bg-nav-cards"><tr><th>Feature</th>' 
        + list.map(p => `<th>${p.name}<br><small>${p.brand}</small></th>`).join('') 
        + '</tr></thead><tbody>';

    const rows = [
        ['Category', p => p.category],
        ['Brand', p => p.brand],
        ['Price', p => '$' + p.price],
        ['Summary', p => p.summary],
        ['Details', p => p.details]
    ];

    rows.forEach(r => {
        html += `<tr><th>${r[0]}</th>` 
            + list.map(p => `<td>${r[1](p)}</td>`).join('') 
            + '</tr>';
    });

    html += '</tbody></table></div>';

    body.innerHTML = html;

    const modal = new bootstrap.Modal(document.getElementById('compareModal')); 
    modal.show();
}




// Settings dropdown inside sidebar
const settingsToggle = document.querySelector(".settings-toggle");
const settingsMenu = document.querySelector(".settings-menu");

settingsToggle.addEventListener("click", (e) => {
  e.preventDefault();
  settingsToggle.classList.toggle("active");
  settingsMenu.classList.toggle("show");
});


document.addEventListener("DOMContentLoaded", function () {

  const loginNav = document.getElementById("loginNav");
  const profileNav = document.getElementById("profileNav");
  const navbarUsername = document.getElementById("navbarUsername");

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const profileSidebar = document.getElementById("profileSidebar");
  const profileBtn = document.getElementById("profileBtn");
  const closeSidebar = document.getElementById("closeSidebar");
  const logoutBtn = document.getElementById("logoutBtn");

  // Load user if already logged in
function checkUser() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    loginNav.classList.add("d-none");
    profileNav.classList.remove("d-none");
    navbarUsername.textContent = user.name;

    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;

    // Name first letter to circle
    document.getElementById("userInitial").textContent = user.name.charAt(0).toUpperCase();

    // Sidebar title me full name
    document.getElementById("sidebarUserName").textContent = user.name;
  }
}

// Sign UP Update Form

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("signupName").value.trim();
    let email = document.getElementById("signupEmail").value;
    let pass = document.getElementById("signupPassword").value;
    let repass = document.getElementById("signupRePassword").value;

    // ------------------ NAME VALIDATION ------------------
    // Only letters + spaces allowed
    let nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        var modal = new bootstrap.Modal(document.getElementById("nameWarningModal"));
        modal.show();
        return;
    }

    // ------------------ EMAIL VALIDATION ------------------
    // Email must start with a letter (no numbers/special chars at start)
    let emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
        var modal = new bootstrap.Modal(document.getElementById("emailWarningModal"));
        modal.show();
        return;
    }

    // ------------------ PASSWORD LENGTH ------------------
    // Minimum 6 characters
    let passRegex = /^.{6,}$/;
    if (!passRegex.test(pass)) {
        var modal = new bootstrap.Modal(document.getElementById("passwordLengthModal"));
        modal.show();
        return;
    }

    // ------------------ PASSWORD MATCH CHECK ------------------
    if (pass !== repass) {
        var modal = new bootstrap.Modal(document.getElementById("passwordWarningModal"));
        modal.show();
        return;
    }

    // ------------------ SAVE USER ------------------
    let user = { name, email, pass };
    localStorage.setItem("user", JSON.stringify(user));

    // ------------------ SUCCESS MODAL ------------------
    var signupModal = bootstrap.Modal.getInstance(document.getElementById("signupModal"));
    signupModal.hide();

    var successModal = new bootstrap.Modal(document.getElementById("signupSuccessModal"));
    successModal.show();
});




  // LOGIN FORM
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

if (!user || user.email !== email || user.pass !== pass) {
    var modal = new bootstrap.Modal(document.getElementById("loginWarningModal"));
    modal.show();
    return;
}

    loginNav.classList.add("d-none");
    profileNav.classList.remove("d-none");
    navbarUsername.textContent = user.name;
    localStorage.setItem("islogin",true);

    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;

    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
    document.getElementById("userInitial").textContent = user.name.charAt(0).toUpperCase();
document.getElementById("sidebarUserName").textContent = user.name;

  });


  // PROFILE SIDEBAR OPEN
  profileBtn.addEventListener("click", function () {
    profileSidebar.classList.add("show");
  });

  // CLOSE SIDEBAR
  closeSidebar.addEventListener("click", function () {
    profileSidebar.classList.remove("show");
  });

  // LOGOUT
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("islogin");
    loginNav.classList.remove("d-none");
    profileNav.classList.add("d-none");
    profileSidebar.classList.remove("show");
  });

});


  // After page load
    window.addEventListener("load", function() {
      document.body.classList.add("loaded");
    });

  // ========== CATEGORY CARDS CLICK FILTER (FROM MODAL) ==========
const modalCategoryCards = document.querySelectorAll('.category-card');

modalCategoryCards.forEach(card => {
    card.addEventListener('click', function () {
        const selectedCat = card.getAttribute('data-category');

        // Category dropdown set
        categorySelect.value = selectedCat;

        // Trigger filter
        filterAndRender();

        // Optional: Scroll to products
        document.getElementById("productsRow").scrollIntoView({ behavior: "smooth" });
    });
});

