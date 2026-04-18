export interface Neighborhood {
  id: string;
  name: string;
  tagline: string;
  description: string;
  medianPrice: string;
  schools: string;
  commuteToDowntown: string;
  highlights: string[];
  tags: string[];
  image: string;
}

export const neighborhoods: Neighborhood[] = [
  {
    id: 'wexford',
    name: 'Wexford',
    tagline: 'SUBURBAN EXCELLENCE & TOP-RANKED SCHOOLS',
    description: 'Named after County Wexford in Ireland and established in 1828, Wexford is one of Pittsburgh\'s most sought-after suburban communities. Spanning across Pine Township, Marshall Township, McCandless, and Franklin Park, the 15090 zip code consistently ranks among the most desirable addresses in all of Pennsylvania. Money Magazine once named it the 28th Best Place to Live in the United States, and it\'s easy to see why.\n\nWexford is home to two powerhouse school districts — North Allegheny and Pine-Richland — both consistently ranked among the top in Pennsylvania. The Route 19 corridor puts Whole Foods, REI, Total Wine, and dozens of local restaurants within a 10-minute drive. North Park\'s 3,000 acres of trails, a stunning lake, golf courses, and recreation facilities are right in your backyard. With 71% of residents holding college degrees and a per capita income well above state and national averages, Wexford attracts families, executives, and professionals who want the best of suburban life without sacrificing access to Pittsburgh.',
    medianPrice: '$450,000',
    schools: 'North Allegheny & Pine-Richland (Both Top Ranked in PA)',
    commuteToDowntown: '25-35 minutes via I-79 / I-279',
    highlights: ['North Park (3,000 acres)', 'Treesdale Golf & Country Club', 'Soergel Orchards'],
    tags: ['North Park Trails', 'Whole Foods & REI', 'Top Schools', 'New Construction', 'Family Friendly', 'Low Crime'],
    image: '/Wexford.jpg',
  },
  {
    id: 'cranberry-township',
    name: 'Cranberry Township',
    tagline: 'PITTSBURGH\'S FASTEST GROWING COMMUNITY',
    description: 'Cranberry Township is one of the fastest-growing and most dynamic communities in all of Western Pennsylvania. Located in Butler County just north of Allegheny County, Cranberry has transformed from a rural township into a thriving suburban hub with world-class amenities, major employers, and one of the most vibrant retail and dining scenes north of Pittsburgh. With a population of over 34,000 and growing, this is a community that\'s constantly evolving.\n\nHome to the UPMC Lemieux Sports Complex, where Pittsburgh Penguins fans can watch the team practice for free, and the Streets of Cranberry shopping center, residents enjoy a level of amenity that rivals much larger cities. The Seneca Valley School District is consistently ranked in the top 15 in Pennsylvania. The township\'s 20+ miles of multi-use trails connect neighborhoods, parks, and the municipal center, making it ideal for active families. Cranberry is also a major employment center, with corporate headquarters for Westinghouse Electric, NOVA Chemicals, and dozens of tech and healthcare companies within its business parks.',
    medianPrice: '$519,000',
    schools: 'Seneca Valley School District (Top 15 in PA)',
    commuteToDowntown: '25 minutes via I-79',
    highlights: ['UPMC Lemieux Sports Complex', 'Streets of Cranberry', '20+ miles of trails'],
    tags: ['Penguins Practice Facility', 'New Construction', 'Corporate Hub', 'Top Schools', 'Trail System', 'Growing Community'],
    image: '/Cranberry.jpg',
  },
  {
    id: 'sewickley',
    name: 'Sewickley',
    tagline: 'HISTORIC BOROUGH WITH VILLAGE CHARM',
    description: 'Sewickley is Pittsburgh\'s crown jewel of suburban elegance. This historic borough along the Ohio River, just 12 miles northwest of downtown, is famous for its walkable village center, tree-lined streets, and a sense of community that feels like a European small town transplanted into western Pennsylvania. Broad Street and Beaver Street form the heart of the village, lined with upscale boutiques, award-winning restaurants, art galleries, and the beloved Penguin Bookshop.\n\nHollywood has taken notice too. Scenes from Jack Reacher, The Mothman Prophecies, and the Netflix series Sweet Magnolias were filmed right on these streets. Annual events like Light Up Night, the Sewickley Wine Walk, and the Summer Night Markets bring thousands of residents and visitors to the village. The Quaker Valley School District serves Sewickley\'s students with distinction, while Sewickley Academy, a renowned private institution, adds to the area\'s educational prestige. For buyers seeking a rare combination of historic character, walkability, river views, and top schools, Sewickley is truly one of a kind.',
    medianPrice: '$550,000',
    schools: 'Quaker Valley School District + Sewickley Academy (Private)',
    commuteToDowntown: '20 minutes via Route 65',
    highlights: ['Walkable village center', 'Ohio River views', 'Beaver Street boutiques & dining'],
    tags: ['Walkable Village', 'Historic Architecture', 'Ohio River Views', 'Boutique Shopping', 'Wine Walk', 'Light Up Night'],
    image: '/Sewickley.jpg',
  },
  {
    id: 'north-hills',
    name: 'North Hills',
    tagline: 'DIVERSE OPTIONS CLOSE TO DOWNTOWN',
    description: 'The North Hills is a broad, diverse region encompassing communities like McCandless Township, Ross Township, Allison Park, and Hampton Township. It\'s one of Pittsburgh\'s most established suburban corridors, offering everything from affordable starter homes to luxury estates, all within 15-20 minutes of downtown Pittsburgh via I-279. The region is anchored by North Park, a stunning 3,000-acre county park with a beautiful lake, extensive trail systems, golf courses, and year-round recreation that rivals any park in the Pittsburgh area.\n\nRoss Township, ranked in Money Magazine\'s Top 50 Best Places to Live in America, is home to the Ross Park Mall with over 170 retailers and a vibrant McKnight Road commercial corridor. The North Hills School District serves Ross Township with an A-minus rating from Niche and a 95% graduation rate at North Hills High School. McCandless offers larger lots, newer developments, and access to UPMC Passavant, one of the region\'s top hospitals. Whether you\'re a first-time buyer looking for value or a move-up buyer seeking space and community, the North Hills has a neighborhood to fit your needs.',
    medianPrice: '$380,000',
    schools: 'North Allegheny, North Hills, Pine-Richland & Hampton (Multiple Top-Rated Districts)',
    commuteToDowntown: '15-20 minutes via I-279',
    highlights: ['North Park (3,000 acres)', 'Ross Park Mall', 'McKnight Road corridor', 'UPMC Passavant'],
    tags: ['North Park', 'Ross Park Mall', 'Diverse Price Points', 'Established Community', 'Great Value', 'Family Friendly'],
    image: '/NorthHills.jpg',
  },
  {
    id: 'pittsburgh',
    name: 'Pittsburgh City Proper',
    tagline: 'URBAN LIVING IN A CULTURAL HUB',
    description: 'Pittsburgh is one of America\'s most underrated cities, and those who live here know it. Known as the City of Bridges (with 446 of them), Pittsburgh has transformed from its steel industry roots into a thriving hub of technology, healthcare, education, and culture. Neighborhoods like Shadyside, Squirrel Hill, Lawrenceville, and the Strip District each offer their own distinct personality, from Shadyside\'s walkable Walnut Street boutiques and Mellon Park to Squirrel Hill\'s vibrant dining scene and Carnegie Mellon University campus.\n\nPittsburgh\'s cost of living is significantly lower than comparable cities like Boston, Washington D.C., or Chicago, making it one of the best cities in America for value. Major employers include UPMC, Highmark, Carnegie Mellon University, the University of Pittsburgh, PNC Financial, and a rapidly growing tech sector. The Cultural District downtown hosts world-class theater, symphony, and arts. PNC Park, consistently voted one of the most beautiful ballparks in America, and PPG Paints Arena bring major league sports to the riverfront. For buyers seeking urban living with genuine affordability and a tight-knit community feel, Pittsburgh is the real deal.',
    medianPrice: '$233,000',
    schools: 'Pittsburgh Public Schools + numerous private options',
    commuteToDowntown: 'Walkable to downtown, Cultural District, and universities',
    highlights: ['Shadyside', 'Squirrel Hill', 'Lawrenceville', 'Strip District', 'PNC Park'],
    tags: ['City Living', 'Walkable Neighborhoods', 'Tech Hub', 'Cultural District', 'Affordable Urban', 'World-Class Universities'],
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800',
  },
];
