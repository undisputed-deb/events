// src/data/events.js

// IMPORTANT: Image paths here are simple filenames, matching your src/assets files.
// These filenames will be imported and resolved into URLs by home.jsx and eventdetail.jsx.
export const events = [
  {
    id: '1',
    title: 'The Great Nosh NYC Picnic Festival',
    date: 'Sat, Oct 1',
    time: '11:00 AM EDT',
    location: 'Pier 57, New York, NY', // Full location for detail page
    city: 'New York',
    image: 'food.png', // Mapped to food.png
    description: 'Join us for New York City\'s premier outdoor culinary experience! The Great Nosh Picnic Festival brings together dozens of the city\'s best food trucks, local chefs, and artisan food vendors. Enjoy live music, family-friendly activities, and a vibrant atmosphere. Taste international cuisines, gourmet delights, and innovative street food creations. Perfect for foodies, families, and anyone looking for a delicious day out in the heart of the city.',
    price: 'Free Entry',
    category: 'Festival',
    tags: ['food', 'festival', 'street food', 'family', 'nyc', 'outdoor'],
    organizer: 'NYC Bites',
    followers: 2100,
    status: '',
    features: [ // Unique features for this event
      { title: 'Culinary Delights', description: 'Explore over 50 unique food vendors and trucks.', icon: 'fas fa-utensils' },
      { title: 'Live Entertainment', description: 'Enjoy continuous live music from local bands and DJs.', icon: 'fas fa-music' },
      { title: 'Family Fun Zone', description: 'Activities and games designed for all ages.', icon: 'fas fa-child' },
      { title: 'Craft Beverages', description: 'Discover local breweries and artisanal drink makers.', icon: 'fas fa-beer' },
    ],
    agenda: [
      { time: '11:00 AM', item: 'Gates Open & Food Service Begins' },
      { time: '12:00 PM', item: 'Live Performance: Jazz Trio' },
      { time: '02:00 PM', item: 'Cooking Demo: Chef Maria Rossi' },
      { time: '04:00 PM', item: 'Live Performance: Indie Rock Band' },
      { time: '07:00 PM', item: 'Festival Closes' },
    ],
    speakers: [], // No specific speakers for a picnic festival
    faqs: [
      { question: 'Is parking available?', answer: 'Limited street parking. Public transport highly recommended.' },
      { question: 'Can I bring my pet?', answer: 'Pets are not allowed inside the festival grounds (service animals excluded).' },
    ]
  },
  {
    id: '2',
    title: 'Koinonia USA - Sound of Revival',
    date: 'Thu, Aug 14',
    time: '6:00 PM EST',
    location: 'New York Event Hall, 123 Event St, New York, NY',
    city: 'New York',
    image: 'sound.png', // Mapped to sound.png
    description: 'Experience a powerful evening of spiritual upliftment and inspiration at the Koinonia USA Sound of Revival. This conference brings together renowned speakers, gospel artists, and a community of believers for an unforgettable experience. Dive deep into sessions designed to renew your spirit, strengthen your faith, and empower you for personal and communal growth.',
    price: 'Free Admission',
    category: 'Conference',
    tags: ['revival', 'spiritual', 'conference', 'faith', 'gospel', 'community'],
    organizer: 'Koinonia Ministries',
    followers: 3500,
    status: '',
    features: [
      { title: 'Inspirational Speakers', description: 'Hear powerful messages from leading spiritual voices.', icon: 'fas fa-microphone-alt' },
      { title: 'Live Gospel Music', description: 'Experience soul-stirring performances from acclaimed artists.', icon: 'fas fa-music' },
      { title: 'Community Fellowship', description: 'Connect with a vibrant community of fellow attendees.', icon: 'fas fa-hand-holding-heart' },
    ],
    agenda: [
      { time: '06:00 PM', item: 'Doors Open & Worship Begins' },
      { time: '06:30 PM', item: 'Keynote Address: Dr. David E. Jones' },
      { time: '07:30 PM', item: 'Gospel Performance: The Heavenly Voices' },
      { time: '08:30 PM', item: 'Main Sermon: Pastor Eleanor Vance' },
      { time: '09:30 PM', item: 'Altar Call & Closing Remarks' },
    ],
    speakers: [
      { name: 'Dr. David E. Jones', bio: 'Renowned theologian and author, specializing in spiritual revival.', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { name: 'Pastor Eleanor Vance', bio: 'Dynamic speaker and community leader, passionate about faith and empowerment.', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    ],
    faqs: [
      { question: 'Is registration required?', answer: 'While admission is free, registration is highly encouraged for seating purposes.' },
      { question: 'Will there be childcare?', answer: 'Childcare services are not provided for this event.' },
    ]
  },
  {
    id: '3',
    title: 'Yoga & Wellness Retreat',
    date: 'Fri, Sep 5',
    time: 'All Day',
    location: 'Upstate Mountains, NY',
    city: 'New York',
    image: 'yoga.png', // Mapped to yoga.png
    description: 'Recharge your mind, body, and spirit with our immersive 3-day Yoga & Wellness Retreat in the serene Upstate Mountains. Disconnect from daily stresses and reconnect with yourself through daily yoga sessions, guided meditation workshops, mindful eating, and invigorating nature walks. Our expert instructors will guide you through practices designed to enhance your physical well-being, mental clarity, and spiritual balance.',
    price: 'From $450.00',
    category: 'Workshop',
    tags: ['wellness', 'yoga', 'retreat', 'health', 'mindfulness', 'nature'],
    organizer: 'Serenity Now',
    followers: 420,
    status: 'Almost full',
    features: [
      { title: 'Daily Yoga Classes', description: 'Morning and evening sessions tailored for all skill levels.', icon: 'fas fa-om' },
      { title: 'Guided Meditation', description: 'Discover peace and clarity with guided mindfulness practices.', icon: 'fas fa-brain' },
      { title: 'Nutritious Meals', description: 'Enjoy healthy, locally sourced, and delicious vegetarian meals.', icon: 'fas fa-leaf' },
      { title: 'Nature Immersion', description: 'Explore beautiful hiking trails and tranquil natural surroundings.', icon: 'fas fa-tree' },
    ],
    agenda: [
      { time: 'Day 1', item: 'Arrival & Welcome Circle, Evening Gentle Yoga, Group Dinner' },
      { time: 'Day 2', item: 'Morning Vinyasa, Meditation Workshop, Nature Walk, Afternoon Restorative Yoga' },
      { time: 'Day 3', item: 'Sunrise Yoga, Closing Ceremony, Departure' },
    ],
    speakers: [
      { name: 'Anya Sharma', bio: 'Certified Yoga Instructor and Mindfulness Coach.', image: 'https://randomuser.me/api/portraits/women/66.jpg' },
    ],
    faqs: [
      { question: 'What should I bring?', answer: 'Comfortable clothing, personal toiletries, and a reusable water bottle.' },
      { question: 'Is transportation provided?', answer: 'Attendees are responsible for their own transportation to the retreat location.' },
    ]
  },
  {
    id: '4',
    title: 'Digital Marketing Summit 2025',
    date: 'Sat, Jun 21',
    time: '9:00 AM EDT',
    location: 'Javits Center, New York, NY',
    city: 'New York',
    image: 'digitalmark.png', // Mapped to digitalmark.png
    description: 'The premier Digital Marketing Summit of 2025 brings together industry leaders, innovators, and strategists for an immersive day of learning and networking. Discover the latest trends in SEO, content marketing, social media advertising, analytics, and more. Our expert-led sessions are designed to equip you with actionable insights to elevate your digital strategy and drive measurable results. Don\'t miss this opportunity to connect with peers and gain a competitive edge.',
    price: 'From $299.00',
    category: 'Conference',
    tags: ['marketing', 'digital', 'summit', 'business', 'tech', 'networking'],
    organizer: 'TechConnect Events',
    followers: 1250,
    status: 'Almost full',
    features: [
      { title: 'Expert Keynotes', description: 'Learn from top digital marketing gurus and thought leaders.', icon: 'fas fa-chart-line' },
      { title: 'Actionable Workshops', description: 'Hands-on sessions for practical skill development.', icon: 'fas fa-wrench' },
      { title: 'Industry Networking', description: 'Connect with hundreds of professionals and potential partners.', icon: 'fas fa-network-wired' },
      { title: 'Latest Tools & Tech', description: 'Explore cutting-edge software and platforms in our expo hall.', icon: 'fas fa-tools' },
    ],
    agenda: [
      { time: '09:00 AM', item: 'Registration & Welcome Coffee' },
      { time: '09:30 AM', item: 'Opening Keynote: "The Future of AI in Marketing"' },
      { time: '10:30 AM', item: 'Breakout Sessions (SEO, Content, Social Media)' },
      { time: '12:00 PM', item: 'Networking Lunch' },
      { time: '01:30 PM', item: 'Panel Discussion: "Measuring ROI in Digital Campaigns"' },
      { time: '03:00 PM', item: 'Workshops (Google Ads, Email Marketing)' },
      { time: '04:30 PM', item: 'Closing Remarks & Networking Reception' },
    ],
    speakers: [
      { name: 'Markus Thorne', bio: 'CEO of DigitalEdge Analytics, specializing in SEO strategies.', image: 'https://randomuser.me/api/portraits/men/65.jpg' },
      { name: 'Sarah Chen', bio: 'Award-winning content strategist and author of "Content That Converts".', image: 'https://randomuser.me/api/portraits/women/78.jpg' },
    ],
    faqs: [
      { question: 'Is virtual attendance possible?', answer: 'Yes, a virtual pass option is available for live streaming all main sessions.' },
      { question: 'Will presentation slides be shared?', answer: 'Yes, slides will be accessible to all registered attendees post-event.' },
    ]
  },
  {
    id: '5',
    title: 'Summer Music Festival: Indie Vibes',
    date: 'Thu, Aug 14',
    time: '2:00 PM EDT',
    location: 'Central Park, New York, NY',
    city: 'New York',
    image: 'music.png', // Mapped to music.png
    description: 'Dive into the heart of summer with the Indie Vibes Music Festival! Three days of non-stop music featuring the best independent artists from around the globe. Set against the iconic backdrop of Central Park, this festival offers a unique blend of diverse musical genres, vibrant art installations, delicious food trucks, and a laid-back, community-focused atmosphere. Discover your new favorite band and create unforgettable summer memories.',
    price: 'From $75.00',
    category: 'Concert',
    tags: ['music', 'festival', 'indie', 'live', 'outdoor', 'summer'],
    organizer: 'SoundWave Promotions',
    followers: 890,
    status: '',
    features: [
      { title: 'Diverse Lineup', description: 'Explore various indie genres, from folk to electronic.', icon: 'fas fa-headphones-alt' },
      { title: 'Art & Installations', description: 'Immersive visual art integrated throughout the festival grounds.', icon: 'fas fa-palette' },
      { title: 'Gourmet Food Trucks', description: 'A curated selection of the city\'s best food and drink options.', icon: 'fas fa-pizza-slice' },
    ],
    agenda: [
      { time: 'Day 1 (Aug 14)', item: 'Gates Open, Acoustic Stage Performances, Headliner: The Echo Bloom (8 PM)' },
      { time: 'Day 2 (Aug 15)', item: 'Electronic Stage Showcase, Indie Rock Battles, Headliner: Neon Skyline (9 PM)' },
      { time: 'Day 3 (Aug 16)', item: 'Chillout Sessions, Folk Jam, Closing Act: Aurora Borealis (7 PM)' },
    ],
    speakers: [], // N/A for music festival
    faqs: [
      { question: 'Can I bring outside food/drinks?', answer: 'No outside food or beverages are permitted, except for sealed water bottles.' },
      { question: 'Is re-entry allowed?', answer: 'Yes, re-entry is permitted with a valid wristband.' },
    ]
  },
  {
    id: '6',
    title: 'All Your Friends: The Indie Party',
    date: 'Sat, Nov 10',
    time: '8:00 PM EST',
    location: 'The Bowery Electric, New York, NY',
    city: 'New York',
    image: 'indie-party.png', // Mapped to indie-party.png
    description: 'Get ready for the ultimate indie celebration at "All Your Friends: The Indie Party"! This exclusive launch event features cutting-edge indie bands and renowned DJs, promising a night of electrifying music and vibrant energy. Dance the night away with fellow indie enthusiasts in one of New York\'s most iconic venues. Expect surprise guest appearances and a setlist packed with your favorite anthems and new discoveries.',
    price: 'From $25.00',
    category: 'Concert',
    tags: ['music', 'party', 'indie', 'nightlife', 'live music', 'nyc'],
    organizer: 'Local Sound Collective',
    followers: 780,
    status: 'Just added',
    features: [
      { title: 'Exclusive DJ Sets', description: 'Hear unique mixes from top indie and electronic DJs.', icon: 'fas fa-compact-disc' },
      { title: 'Live Band Performances', description: 'Discover emerging indie bands on the rise.', icon: 'fas fa-guitar' },
      { title: 'Vibrant Atmosphere', description: 'An energetic and welcoming space for music lovers.', icon: 'fas fa-cocktail' },
    ],
    agenda: [
      { time: '08:00 PM', item: 'Doors Open & DJ Set (Warm-up)' },
      { time: '09:00 PM', item: 'Live Performance: The Midnight Echoes' },
      { time: '10:30 PM', item: 'DJ Set: Indie Mix Marathon' },
      { time: '12:00 AM', item: 'Special Guest Performance' },
      { time: '02:00 AM', item: 'Party Continues' },
    ],
    speakers: [], // N/A for party
    faqs: [
      { question: 'Is there a dress code?', answer: 'Casual, comfortable, and expressive! Come as you are.' },
      { question: 'What\'s the age limit?', answer: 'This event is 21+ only, valid ID required.' },
    ]
  },
  {
    id: '7',
    title: 'Tech Innovations Summit',
    date: 'Wed, Jul 30',
    time: '6:00 PM CDT',
    location: 'Tech Hub Chicago, 456 Innovation Ave, Chicago, IL',
    city: 'Chicago',
    image: 'innovationweb.png', // Mapped to innovationweb.png
    description: 'The Tech Innovations Summit is Chicago\'s premier event for entrepreneurs, developers, and tech enthusiasts. Join us for a dynamic evening of keynote speeches, panel discussions, and networking sessions focusing on the latest advancements in AI, blockchain, cybersecurity, and sustainable technology. Connect with industry leaders, discover groundbreaking startups, and gain insights into the future of the digital world. This is a must-attend for anyone passionate about technology and its impact.',
    price: 'From $15.00',
    category: 'Meetup',
    tags: ['tech', 'innovation', 'startup', 'business', 'chicago', 'networking'],
    organizer: 'Windy City Tech',
    followers: 600,
    status: 'Almost full',
    features: [
      { title: 'Future Tech Insights', description: 'Explore cutting-edge topics in AI, blockchain, and more.', icon: 'fas fa-robot' },
      { title: 'Startup Showcase', description: 'Discover innovative new companies and their disruptive ideas.', icon: 'fas fa-rocket' },
      { title: 'Expert Q&A', description: 'Directly engage with industry experts during interactive sessions.', icon: 'fas fa-comments' },
    ],
    agenda: [
      { time: '06:00 PM', item: 'Registration & Networking Reception' },
      { time: '06:30 PM', item: 'Opening Keynote: "AI and the Future of Work"' },
      { time: '07:15 PM', item: 'Panel Discussion: "Cybersecurity in the Age of Data"' },
      { time: '08:00 PM', item: 'Startup Pitch Competition' },
      { time: '09:00 PM', item: 'Closing Remarks & Open Networking' },
    ],
    speakers: [
      { name: 'Dr. Anya Patel', bio: 'AI Ethicist & Founder of CogniGuard.', image: 'https://randomuser.me/api/portraits/women/55.jpg' },
      { name: 'Ben Carter', bio: 'CEO of BlockChain Solutions Inc.', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
    ],
    faqs: [
      { question: 'Is food provided?', answer: 'Light appetizers and beverages will be served during the networking reception.' },
      { question: 'Are there student discounts?', answer: 'Yes, students can register with a valid student ID for a discounted rate.' },
    ]
  },
  {
    id: '8',
    title: 'Boston Contemporary Art Gala',
    date: 'Thu, Sep 18',
    time: '7:00 PM EDT',
    location: 'Museum of Fine Arts, Boston, MA',
    city: 'Boston',
    image: 'artgala.png', // Mapped to artgala.png
    description: 'Immerse yourself in a night of artistic brilliance at the Boston Contemporary Art Gala. This exclusive event features the unveiling of new works from celebrated and emerging contemporary artists, set within the stunning galleries of the Museum of Fine Arts. Enjoy champagne, gourmet hors d\'oeuvres, and live ambient music as you mingle with artists, collectors, and art enthusiasts. A unique opportunity to appreciate groundbreaking art and support the local arts community.',
    price: 'From $30.00',
    category: 'Exhibition',
    tags: ['art', 'gallery', 'boston', 'culture', 'exhibition', 'gala'],
    organizer: 'Boston Art Collective',
    followers: 950,
    status: '',
    features: [
      { title: 'New Art Unveilings', description: 'Be among the first to view newly commissioned contemporary artworks.', icon: 'fas fa-paint-brush' },
      { title: 'Artist Meet & Greet', description: 'Opportunity to meet and converse with featured artists.', icon: 'fas fa-user-friends' },
      { title: 'Curated Experience', description: 'A thoughtfully curated exhibition in a magnificent setting.', icon: 'fas fa-sparkles' },
    ],
    agenda: [
      { time: '07:00 PM', item: 'Doors Open, Champagne & Hors d\'oeuvres' },
      { time: '07:30 PM', item: 'Curator\'s Welcome & Opening Remarks' },
      { time: '08:00 PM', item: 'Live Ambient Music Performance' },
      { time: '09:00 PM', item: 'Featured Artist Talk: Emily Thorne' },
      { time: '10:30 PM', item: 'Event Concludes' },
    ],
    speakers: [
      { name: 'Emily Thorne', bio: 'Acclaimed contemporary artist, known for her mixed-media installations.', image: 'https://randomuser.me/api/portraits/women/23.jpg' },
    ],
    faqs: [
      { question: 'Is there a dress code?', answer: 'Cocktail attire is encouraged.' },
      { question: 'Can I purchase artwork?', answer: 'Many pieces will be available for purchase; inquire with gallery staff.' },
    ]
  },
  {
    id: '9',
    title: 'London Fashion Week Showcase',
    date: 'Sat, Sep 20',
    time: 'All Day',
    location: 'Olympia London, London, UK',
    city: 'London',
    image: 'fashion.png', // Mapped to fashion.png
    description: 'Step into the world of high fashion at the London Fashion Week Showcase. This exclusive event provides a unique opportunity to witness the cutting-edge collections from both established and emerging designers. Featuring runway shows, designer talks, pop-up boutiques, and interactive fashion exhibits, it\'s a must-attend for fashion enthusiasts, industry professionals, and trendsetters. Discover what\'s next in global fashion.',
    price: 'From $150.00',
    category: 'Fashion',
    tags: ['fashion', 'london', 'design', 'showcase', 'runway', 'style'],
    organizer: 'LFW Events',
    followers: 2500,
    status: 'Almost full',
    features: [
      { title: 'Exclusive Runway Shows', description: 'See the latest collections direct from the designers.', icon: 'fas fa-tshirt' },
      { title: 'Designer Insights', description: 'Attend talks and Q&A sessions with top fashion creatives.', icon: 'fas fa-microphone' },
      { title: 'Pop-up Boutiques', description: 'Shop limited-edition pieces directly from the designers.', icon: 'fas fa-shopping-bag' },
    ],
    agenda: [
      { time: '10:00 AM', item: 'Gates Open & Exhibition Access' },
      { time: '11:00 AM', item: 'Runway Show: Emerging Designers' },
      { time: '01:00 PM', item: 'Designer Talk: "Sustainable Fashion Futures"' },
      { time: '03:00 PM', item: 'Runway Show: Established Brands' },
      { time: '05:00 PM', item: 'Networking Reception' },
    ],
    speakers: [
      { name: 'Dr. Evelyn Reed', bio: 'Celebrated fashion historian and sustainable design advocate.', image: 'https://randomuser.me/api/portraits/women/88.jpg' },
    ],
    faqs: [
      { question: 'Is photography allowed?', answer: 'Photography is permitted for personal use, but flash photography is prohibited during runway shows.' },
      { question: 'Are children allowed?', answer: 'Children under 16 must be accompanied by an adult.' },
    ]
  },
  {
    id: '10',
    title: 'Los Angeles Film Festival',
    date: 'Mon, Oct 1 - Sun, Oct 7',
    time: 'Various Times',
    location: 'Dolby Theatre, Los Angeles, CA',
    city: 'Los Angeles',
    image: 'film.png', // Mapped to film.png (assuming you rename flim.png to film.png)
    description: 'Immerse yourself in a week-long celebration of cinematic artistry at the Los Angeles Film Festival. Featuring world premieres, independent masterpieces, and thought-provoking documentaries, this festival offers a unique platform for filmmakers and film enthusiasts alike. Attend screenings, engaging Q&A sessions with directors and actors, and exclusive industry panels. Discover the next big stories and connect with the vibrant world of cinema.',
    price: 'From $40.00',
    category: 'Film',
    tags: ['film', 'festival', 'la', 'movies', 'cinema', 'premiere'],
    organizer: 'LA Film Collective',
    followers: 1800,
    status: '',
    features: [
      { title: 'World Premieres', description: 'Be the first to see highly anticipated new films.', icon: 'fas fa-ticket-alt' },
      { title: 'Director Q&A', description: 'Engage directly with visionary filmmakers.', icon: 'fas fa-comments' },
      { title: 'Independent Showcases', description: 'Discover groundbreaking works from independent artists.', icon: 'fas fa-video' },
    ],
    agenda: [
      { time: 'Day 1', item: 'Opening Gala & Red Carpet, Premiere Screening' },
      { time: 'Days 2-6', item: 'Daily Screenings (Various Venues), Panel Discussions, Workshops' },
      { time: 'Day 7', item: 'Awards Ceremony & Closing Night Film' },
    ],
    speakers: [
      { name: 'Ava Rodriguez', bio: 'Acclaimed independent film director, recipient of multiple festival awards.', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
    ],
    faqs: [
      { question: 'Can I buy individual tickets?', answer: 'Yes, tickets for individual screenings are available, but passes offer better value for multiple films.' },
      { question: 'Are there virtual screenings?', answer: 'A selection of films will be available for online viewing post-festival for pass holders.' },
    ]
  },
  {
    id: '11',
    title: 'Seattle Coffee Expo',
    date: 'Sat, Nov 9',
    time: '9:00 AM - 5:00 PM PST',
    location: 'Seattle Convention Center, Seattle, WA',
    city: 'Seattle',
    image: 'seattle.png', // Mapped to seattle.png
    description: 'Embark on a sensory journey at the Seattle Coffee Expo, the ultimate destination for coffee lovers and industry professionals. Explore a vast array of unique roasts from local and international coffee houses, witness expert barista competitions, and learn advanced brewing techniques in interactive workshops. Connect with growers, roasters, and fellow enthusiasts. From bean to cup, discover everything coffee has to offer in the Emerald City.',
    price: 'From $20.00',
    category: 'Food & Drink',
    tags: ['coffee', 'expo', 'beverages', 'food', 'seattle', 'culinary'],
    organizer: 'Pacific Northwest Coffee Co.',
    followers: 650,
    status: 'Just added',
    features: [
      { title: 'Global Coffee Tastings', description: 'Sample unique blends and single-origin coffees from around the world.', icon: 'fas fa-mug-hot' },
      { title: 'Barista Competitions', description: 'Witness skilled baristas craft intricate coffee art and perfect pours.', icon: 'fas fa-trophy' },
      { title: 'Brewing Workshops', description: 'Learn new techniques from experts, from pour-over to espresso.', icon: 'fas fa-flask' },
    ],
    agenda: [
      { time: '09:00 AM', item: 'Doors Open & Tasting Floors Open' },
      { time: '10:00 AM', item: 'Keynote: "The Future of Sustainable Coffee"' },
      { time: '11:00 AM', item: 'Barista Throwdown Competition Round 1' },
      { time: '01:00 PM', item: 'Espresso Artistry Workshop' },
      { time: '03:00 PM', item: 'Panel: "Direct Trade & Coffee Ethics"' },
      { time: '05:00 PM', item: 'Expo Closes' },
    ],
    speakers: [
      { name: 'Maria Gonzalez', bio: 'Founder of Ethical Beans Coffee and advocate for direct trade practices.', image: 'https://randomuser.me/api/portraits/women/35.jpg' },
    ],
    faqs: [
      { question: 'Are children allowed?', answer: 'Children are welcome, but tasting tickets are for adults 18+ only.' },
      { question: 'Is food available?', answer: 'Yes, there are food vendors offering pastries and light meals.' },
    ]
  },
  {
    id: '12',
    title: 'Denver Mountain Sports Festival',
    date: 'Sun, Dec 1',
    time: '10:00 AM - 6:00 PM MST',
    location: 'Colorado Convention Center, Denver, CO',
    city: 'Denver',
    image: 'mountain.png', // Mapped to mountain.png
    description: 'Gear up for adventure at the Denver Mountain Sports Festival, your ultimate guide to outdoor excitement! Explore the latest in skiing, snowboarding, hiking, climbing, and cycling gear. Attend inspiring presentations from professional athletes, learn new skills in interactive clinics, and connect with fellow outdoor enthusiasts. Perfect for adventurers of all levels, from beginners to seasoned pros, looking to embrace the Rocky Mountain lifestyle.',
    price: 'Free Entry',
    category: 'Sports & Outdoors',
    tags: ['mountains', 'sports', 'outdoors', 'festival', 'denver', 'adventure'],
    organizer: 'Rocky Mountain Adventures',
    followers: 1400,
    status: '',
    features: [
      { title: 'Gear Showcase', description: 'Discover the newest equipment from top outdoor brands.', icon: 'fas fa-skiing' },
      { title: 'Pro Athlete Talks', description: 'Get inspired by stories and tips from mountain sports legends.', icon: 'fas fa-mountain' },
      { title: 'Skill Clinics', description: 'Learn knot tying, basic first aid, and more from certified instructors.', icon: 'fas fa-compass' },
    ],
    agenda: [
      { time: '10:00 AM', item: 'Doors Open & Expo Floor Access' },
      { time: '11:00 AM', item: 'Keynote: "Conquering Peaks: My Journey"' },
      { time: '12:00 PM', item: 'Climbing Wall Demo & Beginner Clinic' },
      { time: '02:00 PM', item: 'Panel: "Sustainable Outdoor Practices"' },
      { time: '04:00 PM', item: 'Gear Raffle & Prizes' },
      { time: '06:00 PM', item: 'Festival Closes' },
    ],
    speakers: [
      { name: 'Alex Honnold', bio: 'World-renowned rock climber and environmental advocate.', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    ],
    faqs: [
      { question: 'Is parking available?', answer: 'On-site parking garage is available (fees apply).' },
      { question: 'Can I bring my dog?', answer: 'Only service animals are allowed inside the convention center.' },
    ]
  },
  {
    id: '13',
    title: 'Austin Tech & Music Showcase',
    date: 'Fri, Jan 17, 2026',
    time: '6:00 PM - 10:00 PM CDT',
    location: 'Austin Convention Center, Austin, TX',
    city: 'Austin',
    image: 'austin.png', // Mapped to austin.png
    description: 'Experience the unique fusion of innovation and artistry at the Austin Tech & Music Showcase. This event celebrates Austin\'s vibrant culture by bringing together groundbreaking tech startups and electrifying live music performances. Connect with leading innovators, explore interactive tech demos, and then unwind with a lineup of talented local musicians. It\'s an evening designed to spark creativity, foster connections, and showcase the best of what Austin has to offer.',
    price: 'From $60.00',
    category: 'Conference',
    tags: ['tech', 'music', 'live', 'austin', 'startup', 'culture'],
    organizer: 'SXSW Innovate',
    followers: 3200,
    status: 'Almost full',
    features: [
      { title: 'Interactive Tech Demos', description: 'Experience the latest innovations firsthand.', icon: 'fas fa-laptop-code' },
      { title: 'Live Music Performances', description: 'Enjoy diverse genres from Austin\'s talented artists.', icon: 'fas fa-guitar' },
      { title: 'Startup Pitches', description: 'Hear inspiring ideas from emerging tech companies.', icon: 'fas fa-lightbulb' },
    ],
    agenda: [
      { time: '06:00 PM', item: 'Doors Open & Tech Expo' },
      { time: '06:30 PM', item: 'Opening Remarks & Keynote' },
      { time: '07:00 PM', item: 'Startup Pitch Round 1' },
      { time: '07:45 PM', item: 'Live Music: The Electric City' },
      { time: '08:30 PM', item: 'Startup Pitch Round 2' },
      { time: '09:15 PM', item: 'Live Music: Soulful Echoes' },
      { time: '10:00 PM', item: 'Event Concludes' },
    ],
    speakers: [
      { name: 'Lena Khan', bio: 'Founder of "InnovateATX" and venture capitalist.', image: 'https://randomuser.me/api/portraits/women/19.jpg' },
    ],
    faqs: [
      { question: 'Is there an age restriction?', answer: 'This event is open to all ages, but some content may be geared towards adults.' },
      { question: 'Can I present my startup?', answer: 'Applications for pitching are closed for this event, but opportunities are available for future showcases.' },
    ]
  },
  {
    id: '14',
    title: 'Dallas Startup Pitch Competition',
    date: 'Tue, Dec 3',
    time: '1:00 PM CDT',
    location: 'Dallas Convention Center, Dallas, TX',
    city: 'Dallas',
    image: 'dallas.png', // Mapped to dallas.png
    description: 'Witness the future of innovation at the Dallas Startup Pitch Competition! See daring entrepreneurs present their groundbreaking ideas to a panel of seasoned investors and industry leaders. This high-energy event showcases the vibrant startup ecosystem of Dallas, offering invaluable networking opportunities for founders, investors, and aspiring entrepreneurs. Discover the next big thing and be part of the excitement!',
    price: 'Free with RSVP',
    category: 'Conference',
    tags: ['startup', 'pitch', 'business', 'tech', 'dallas', 'investing'],
    organizer: 'Lone Star Innovators',
    followers: 900,
    status: 'Just added',
    features: [
      { title: 'High-Stakes Pitches', description: 'Watch startups compete for funding and recognition.', icon: 'fas fa-bullhorn' },
      { title: 'Investor Insights', description: 'Learn what investors look for in new ventures.', icon: 'fas fa-chart-pie' },
      { title: 'Networking Hub', description: 'Connect with founders, mentors, and investors.', icon: 'fas fa-users' },
    ],
    agenda: [
      { time: '01:00 PM', item: 'Doors Open & Investor Registration' },
      { time: '01:30 PM', item: 'Opening Remarks & Pitch Guidelines' },
      { time: '02:00 PM', item: 'Startup Pitches Round 1' },
      { time: '03:00 PM', item: 'Panel Discussion: "Building Scalable Startups"' },
      { time: '04:00 PM', item: 'Startup Pitches Round 2' },
      { time: '05:00 PM', item: 'Judges Deliberation & Networking Mixer' },
      { time: '06:00 PM', item: 'Awards Ceremony' },
    ],
    speakers: [
      { name: 'Thomas Jefferson', bio: 'Managing Partner at Velocity Ventures.', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
      { name: 'Dr. Clara Miller', bio: 'Tech entrepreneur and angel investor.', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
    ],
    faqs: [
      { question: 'How can I apply to pitch?', answer: 'Applications open annually in September for the following year\'s competition.' },
      { question: 'Is the event open to the public?', answer: 'Yes, it is free to attend with an RSVP, but seats are limited.' },
    ]
  },
  {
    id: '15',
    title: 'San Francisco Web Dev Workshop',
    date: 'Mon, Oct 27',
    time: '10:00 AM PST',
    location: 'SF Innovation Hub, 789 Tech Drive, San Francisco, CA',
    city: 'San Francisco',
    image: 'web.png', // Mapped to web.png
    description: 'Master the latest in web development at our intensive San Francisco Web Dev Workshop. This full-day session is designed for aspiring and experienced developers looking to sharpen their skills in modern frameworks, best practices, and innovative tools. Engage in hands-on coding challenges, learn directly from senior developers, and network with the vibrant tech community of the Bay Area. Elevate your coding game and build the future of the web!',
    price: 'From $199.00',
    category: 'Workshop',
    tags: ['web dev', 'coding', 'workshop', 'tech', 'san francisco', 'development'],
    organizer: 'CodeMasters SF',
    followers: 720,
    status: 'Almost full',
    features: [
      { title: 'Hands-on Coding Labs', description: 'Apply new concepts immediately with practical exercises.', icon: 'fas fa-laptop-code' },
      { title: 'Expert-Led Sessions', description: 'Learn advanced techniques from seasoned web development veterans.', icon: 'fas fa-user-tie' },
      { title: 'Networking Opportunities', description: 'Connect with fellow developers and potential collaborators.', icon: 'fas fa-users-class' },
    ],
    agenda: [
      { time: '10:00 AM', item: 'Registration & Welcome' },
      { time: '10:30 AM', item: 'Morning Session: "Modern JavaScript & React Hooks"' },
      { time: '12:30 PM', item: 'Lunch & Peer Networking' },
      { time: '01:30 PM', item: 'Afternoon Session: "Backend with Node.js & APIs"' },
      { time: '03:30 PM', item: 'Live Coding Challenge & Q&A' },
      { time: '05:00 PM', item: 'Workshop Concludes' },
    ],
    speakers: [
      { name: 'Dr. Alex Kim', bio: 'Lead Software Engineer at Innovate Labs, specializing in full-stack development.', image: 'https://randomuser.me/api/portraits/men/25.jpg' },
    ],
    faqs: [
      { question: 'What prior experience is needed?', answer: 'Basic understanding of JavaScript and HTML/CSS is recommended.' },
      { question: 'Do I need to bring a laptop?', answer: 'Yes, please bring your own laptop with a code editor pre-installed.' },
    ]
  },
];