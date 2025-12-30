import { Dog, Cat, Home, Shield, Heart, MapPin, Clock, Award, CheckCircle } from 'lucide-react';
import { ServiceItem, Testimonial, FaqItem, BlogPost, GalleryItem } from './types';

export const COMPANY_NAME = "Paws, Hooves & Homes";
export const PHONE_NUMBER = "07711 865958";
export const EMAIL_ADDRESS = "philandhdiary@gmail.com";

// SEO: Specific villages and areas to appear in the footer and schema
export const SERVICE_AREAS = [
  "Grantham", "Barrowby", "Great Gonerby", "Harlaxton", "Denton", 
  "Woolsthorpe", "Belton", "Manthorpe", "Barkston", "Syston", 
  "Ancaster", "Caythorpe", "Long Bennington", "Bottesford", 
  "Redmile", "Vale of Belvoir", "Colsterworth", "Corby Glen",
  "Stamford", "Bourne", "Sleaford"
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'dog-sitting',
    title: 'Dog Sitting & Walking',
    shortDescription: 'Reliable dog walking in Grantham and surrounding villages. We keep tails wagging.',
    fullDescription: [
      'Dogs thrive on routine, affection, and trust. Harriet isn\'t just a service provider—she\'s a dedicated dog walker serving Grantham, Barrowby, and the Vale of Belvoir.',
      'With decades of experience, she understands breed-specific needs, personality quirks, and the importance of consistent care. Your dog won\'t just be looked after; they\'ll be loved, walked on safe leads, played with, and treated as part of the family.'
    ],
    icon: Dog,
    features: ['30-60 min walks', 'GPS tracked routes', 'Feeding & Water', 'Photo updates via WhatsApp', 'Cuddles & Playtime'],
    price: 'From £15/visit',
    duration: '30 mins - Overnight',
    image: '/images/20210825_144654.jpg' // Spaniel in heather
  },
  {
    id: 'cat-sitting',
    title: 'Cat Sitting',
    shortDescription: 'The perfect alternative to a cattery. Stress-free care in your own home.',
    fullDescription: [
      'Cats are unique souls who often find catteries stressful. Whether you have a shy feline who needs space or a social butterfly who demands lap time, I adapt to their personality right here in Lincolnshire.',
      'I ensure litter trays are spotless, feeding routines are strictly followed, and your cat receives the specific type of affection they prefer. I treat them with the same respect and gentleness I gave my own cats for decades.'
    ],
    icon: Cat,
    features: ['Litter tray cleaning', 'Interactive play', 'Feeding & Fresh Water', 'Daily report cards', 'Cuddles (if permitted!)'],
    price: 'From £12/visit',
    duration: '30 mins',
    image: '/images/20220816_105253.jpg' // Black cat yellow eyes
  },
  {
    id: 'horse-care',
    title: 'Horse & Farm Care',
    shortDescription: 'Specialised equine services across Lincolnshire. 40+ years experience.',
    fullDescription: [
      'Horses require specialised knowledge. Harriet has spent years at dedicated horse yards near Grantham and Stamford, learning advanced care techniques and veterinary skills.',
      'She understands equine behaviour, nutrition, health concerns (like laminitis and mud fever), and the emotional bond between horse and owner. Your horse will receive the same expert, loving care Harriet gave her own beloved animals.'
    ],
    icon:  MapPin, 
    features: ['Feeding & Haying', 'Mucking out', 'Turnout/Bring-in', 'Rug changes', 'Health Checks'],
    price: 'From £25/visit',
    duration: 'Varies',
    image: '/images/20240224_122424.jpg' // Woman stroking horse
  },
  {
    id: 'house-sitting',
    title: 'House Sitting',
    shortDescription: 'Secure home and pet sitting while you are on holiday.',
    fullDescription: [
      'Your home is sacred. Your security matters. Harriet is meticulous—she\'ll care for your plants, collect your post, maintain security, and ensure everything is exactly as you left it.',
      'She goes above and beyond because attention to detail is woven into who she is. Enjoy your holiday knowing your property in Grantham or the surrounding area is safe and lived-in.'
    ],
    icon: Home,
    features: ['Post collection', 'Plant watering', 'Security checks', 'Curtains/Lights rotation', 'Clean & Tidy'],
    price: '£40/night',
    duration: 'Overnight',
    image: '/images/20240505_091539.jpg' // Red Lab on bed
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    clientName: "Sarah M.",
    petName: "Barnaby",
    petType: "Horse",
    content: "Finding someone in Lincolnshire who actually knows horses is so hard. I trust Harriet completely with Barnaby's complex feeding schedule.",
    rating: 5,
    imageUrl: "/images/20220507_160359.jpg"
  },
  {
    id: 2,
    clientName: "James P.",
    petName: "Luna & Max",
    petType: "Dog",
    content: "We live in Great Gonerby and the daily photo updates give me such peace of mind while I'm at work. The best walkers in town!",
    rating: 5,
    imageUrl: "/images/20220814_114327.jpg"
  },
  {
    id: 3,
    clientName: "Emily R.",
    petName: "Whiskers",
    petType: "Cat",
    content: "Much better than the local cattery. They even got my shy cat to come out and play! Professional, insured, and truly caring.",
    rating: 5,
    imageUrl: "/images/20170529_175217.jpg"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What areas of Lincolnshire do you cover?",
    answer: "We primarily serve Grantham and a 15-mile radius, including Barrowby, Great Gonerby, Harlaxton, and the Vale of Belvoir. We also cover Stamford, Bourne, and Sleaford for specialised horse care or longer bookings."
  },
  {
    question: "Are you insured and DBS checked?",
    answer: "Yes, we are fully insured with public liability cover and hold a current DBS check (formerly CRB). Proof of documents is available upon request during our meet-and-greet."
  },
  {
    question: "Do you offer meet-and-greets?",
    answer: "Absolutely! A complimentary meet-and-greet is required for all new clients in Grantham and surrounding villages to ensure we are a good match for your pets."
  },
  {
    question: "Do you administer medication?",
    answer: "Yes, we are experienced in administering oral and topical medications. Please discuss specific needs, such as insulin injections, during booking."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "5 Best Dog Walks Near Grantham for High-Energy Breeds",
    slug: "5-best-dog-walks-grantham",
    excerpt: "From the expansive grounds of Belton House to the hidden trails of the Viking Way, discover the top local spots we love for dog walking in Lincolnshire.",
    content: [
      "Finding the perfect spot to exercise high-energy breeds in Lincolnshire can be a delightful challenge. Grantham is blessed with some of the most beautiful countryside in the UK, offering a variety of terrains for every type of dog.",
      "1. Belton House Park: A classic for a reason. With over 1300 acres of parkland, it provides ample space for long-line walking. Remember to keep dogs on leads near the deer!",
      "2. The Grantham Canal: Perfect for older dogs or those who prefer flat terrain. The towpath offers miles of uninterrupted walking with plenty of sniffing opportunities along the banks.",
      "3. Wyndham Park: Ideal for socialization. If you have a puppy that needs to meet other dogs in a controlled environment, the open spaces here are perfect.",
      "4. The Viking Way: For the adventurous duo. This long-distance trail offers challenging routes that will tire out even the most energetic Spaniels or Collies.",
      "At Paws, Hooves & Homes, we vary our walking routes daily to ensure your dog receives both physical exercise and mental stimulation. A bored dog is often a destructive dog, so we make every walk an adventure."
    ],
    category: "Dog Walking",
    date: "May 12, 2024",
    image: "/images/20210825_144654.jpg" // Spaniel in heather
  },
  {
    id: 2,
    title: "Spring Grazing Management: Preventing Laminitis",
    slug: "spring-grazing-management-laminitis",
    excerpt: "As the lush grass shoots up in the Vale of Belvoir, effective strip grazing and muzzle management are key for keeping our native ponies healthy.",
    content: [
      "Spring in the Vale of Belvoir is beautiful, but for horse owners, it brings the dreaded risk of laminitis. The sudden flush of sugar-rich grass can be dangerous, particularly for native breeds and good doers.",
      "Management is key. I've spent 40 years managing paddocks to ensure equine health. Here are my top tips:",
      "1. Strip Grazing: Use electric fencing to limit fresh grass access. Move the fence by a small amount daily rather than giving a whole new paddock at once.",
      "2. Time of Day: Sugar levels in grass are highest in the afternoon on sunny days. Turn out very early in the morning or late at night if possible.",
      "3. Muzzles: They aren't cruel; laminitis is. A well-fitted muzzle allows a horse to exercise and socialize without gorging.",
      "If you are going away during this critical period, you need a sitter who understands these risks. I can manage strip grazing fences, check digital pulses, and ensure muzzles are checked for rubbing daily."
    ],
    category: "Horse Care",
    date: "Apr 05, 2024",
    image: "/images/20230927_102604.jpg" // Dark horse grazing
  },
  {
    id: 3,
    title: "Puppy Visits: Socialisation Tips for Grantham Owners",
    slug: "puppy-visits-socialisation-tips",
    excerpt: "Bringing home a new puppy? We discuss the importance of early socialisation and how our pop-in visits support toilet training while you're at work.",
    content: [
      "The first few months of a puppy's life are crucial. In Grantham, we have a great community of dog lovers, but ensuring your puppy meets the right dogs and people is vital.",
      "Socialisation isn't just about playing with other dogs. It's about exposure to sights, sounds, and surfaces. During my pop-in visits, I don't just let the puppy out to the toilet; I engage in basic handling exercises, play sounds (like traffic or doorbells) at low volumes, and encourage positive interactions.",
      "Consistency is key for toilet training. If you work full time, a midday visit breaks up the day and prevents accidents from becoming habits. We can maintain your specific command words and training routine to ensure seamless integration."
    ],
    category: "Puppy Care",
    date: "Mar 10, 2024",
    image: "/images/20240728_094132.jpg" // Black curly puppy
  },
  {
    id: 4,
    title: "Planning a Horse Riding Beach Trip to the Lincolnshire Coast",
    slug: "horse-riding-beach-trip-lincolnshire",
    excerpt: "Tips for a safe and memorable day out at Mablethorpe or Holkham with your horse, from loading practice to checking tide times.",
    content: [
      "There is nothing quite like galloping on the sand. Living in Grantham, we are lucky to be within driving distance of Mablethorpe and Holkham beaches.",
      "Preparation is everything. Ensure your horse loads confidently before the day of the trip. Check the tide times! You want to arrive as the tide is going out to maximize the firm sand availability.",
      "Parking can be tricky with a trailer or lorry, so research the specific car parks that allow horse boxes. Always bring fresh water to wash off salt and sand from your horse's legs and tack immediately after the ride to prevent irritation."
    ],
    category: "Horse Riding",
    date: "Feb 28, 2024",
    image: "/images/20240707_112019.jpg" // Riders on beach
  },
  {
    id: 5,
    title: "Caring for Senior Dogs: Why Routine Matters",
    slug: "caring-for-senior-dogs-routine",
    excerpt: "Older dogs often struggle with kennels. Our mobile pet care ensures your senior companion gets medication and comfort in their own bed.",
    content: [
      "As dogs age, their needs change. Their sight may fail, hearing may dim, and joints may stiffen. For these dogs, kennels can be an overwhelming and frightening experience.",
      "Keeping a senior dog in their own home maintains their familiarity map. They know where the water bowl is, where their bed is, and how to get to the garden. Disrupting this can cause significant anxiety.",
      "I specialize in senior dog care. I am patient with slower walkers, experienced in administering medication for arthritis or heart conditions, and happy to simply sit and provide companionship. Comfort is the priority."
    ],
    category: "Senior Pets",
    date: "Jan 15, 2024",
    image: "/images/20220501_221053.jpg" // Two dogs sleeping
  },
  {
    id: 6,
    title: "The Security Benefits of House Sitting in Rural Lincolnshire",
    slug: "security-benefits-house-sitting",
    excerpt: "More than just pet care—how having a live-in sitter keeps your home secure, blinds rotated, and insurance valid while you travel.",
    content: [
      "When you live in rural areas around Grantham or the Vale of Belvoir, an empty house can be a target. House sitting offers a dual benefit: happy pets and a secure home.",
      "Many home insurance policies are invalid if a property is left unoccupied for more than 30 days, or if checks aren't made regularly. By having a live-in sitter, your home remains 'occupied'.",
      "I rotate lights, open and close curtains, collect post, and put bins out. To an observer, life continues as normal. This visual deterrence is often more effective than an alarm system alone."
    ],
    category: "House Sitting",
    date: "Dec 02, 2023",
    image: "/images/20240505_091539.jpg" // Red Lab face / Home
  },
  {
    id: 7,
    title: "Why Professional Cat Sitting Beats a Cattery for Grantham Pets",
    slug: "cat-sitting-vs-cattery",
    excerpt: "Cats are territorial creatures. Discover why in-home visits reduce stress and keep your feline happy while you're away on holiday.",
    content: [
      "Cats are deeply attached to their territory. The smells, sights, and layout of their home provide them with security. Removing them to a cattery, no matter how luxurious, removes this security blanket.",
      "In-home cat sitting allows your cat to maintain their routine. They sleep in their favorite sunbeam and eat from their own bowl. For shy cats, this is crucial. For affectionate cats, it means they get 1-on-1 cuddles without the scent of other strange cats nearby.",
      "I also keep an eye on the house, water plants, and ensure the property is secure, providing value that goes beyond just feeding the cat."
    ],
    category: "Cat Care",
    date: "Nov 20, 2023",
    image: "/images/20220816_105253.jpg" // Black cat
  },
  {
    id: 8,
    title: "Winter Equine Care Guide: Managing Mud Fever",
    slug: "winter-equine-care-mud-fever",
    excerpt: "The clay soil around Grantham can be tough on hooves. Here’s how we manage turnout, rugging, and legs during the wet winter months.",
    content: [
      "The heavy clay soil in Lincolnshire is notorious for causing mud fever. Bacteria thrive in the wet, muddy conditions of our winter paddocks.",
      "Prevention is better than cure. I believe in barrier creams and, crucially, allowing legs to dry naturally where possible rather than over-washing which softens the skin. Rotating paddocks to avoid deep poaching of gateways is also essential.",
      "If you are away during winter, you need a sitter who will actually check legs, not just throw hay over the fence. I check for heat, swelling, and scabs daily."
    ],
    category: "Horse Care",
    date: "Nov 05, 2023",
    image: "/images/20230920_142750.jpg" // Horse in rug
  },
  {
    id: 9,
    title: "Easing Separation Anxiety: A Pet Sitter’s Perspective",
    slug: "easing-separation-anxiety-dogs",
    excerpt: "Returning to the office? Strategies to help your dog cope with alone time and how a midday walk can make all the difference.",
    content: [
      "Post-pandemic, many dogs in Grantham are struggling with separation anxiety as owners return to work. Symptoms can range from barking to destructive chewing.",
      "The key is gradual desensitization and breaking up the day. A midday visit from a professional walker resets the dog's internal clock. It burns off anxious energy and provides a social highlight to look forward to.",
      "Leaving a radio on, using puzzle feeders, and remaining calm when leaving and returning can also help settle a worried dog."
    ],
    category: "Pet Health",
    date: "Oct 12, 2023",
    image: "/images/20220924_194723.jpg" // Dogs on sofa
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  // Horses
  { id: 1, category: 'Horse', alt: 'Pony in stable Grantham', src: '/images/406323490_320392300890666_540026260773663677_n.jpg' },
  { id: 2, category: 'Horse', alt: 'Brown horse head Lincolnshire', src: '/images/20220811_125357.jpg' },
  { id: 3, category: 'Horse', alt: 'Black horse head profile', src: '/images/20220811_125433.jpg' },
  { id: 4, category: 'Horse', alt: 'Rider in water beach ride', src: '/images/20230810_202830.jpg' },
  { id: 5, category: 'Horse', alt: 'Woman with horse bonding', src: '/images/20231022_123907.jpg' },
  { id: 6, category: 'Horse', alt: 'Rider in yellow jacket hacking', src: '/images/20231231_143719.jpg' },
  { id: 7, category: 'Horse', alt: 'Woman with horse and rosettes show', src: '/images/20240217_122709.jpg' },
  { id: 8, category: 'Horse', alt: 'Horse with red noseband', src: '/images/20220320_135939.jpg' },
  { id: 9, category: 'Horse', alt: 'Brown horse standing Grantham', src: '/images/20220507_160359.jpg' },
  { id: 10, category: 'Horse', alt: 'Horses in rugs winter care', src: '/images/20230903_161556.jpg' },
  { id: 11, category: 'Horse', alt: 'Horse in field grazing', src: '/images/20240620_163612.jpg' },
  { id: 12, category: 'Horse', alt: 'Horse with red halter', src: '/images/20240728_102008.jpg' },
  { id: 13, category: 'Horse', alt: 'Rider in arena schooling', src: '/images/20230527_083557.jpg' },
  { id: 14, category: 'Horse', alt: 'Brown horse side view', src: '/images/20220507_160412.jpg' },
  { id: 15, category: 'Horse', alt: 'Horse grazing with rug', src: '/images/20230920_142750.jpg' },
  { id: 16, category: 'Horse', alt: 'Horse eating hay stable care', src: '/images/20240224_122329.jpg' },
  { id: 17, category: 'Horse', alt: 'Horse face close up', src: '/images/20231018_153724.jpg' },
  { id: 18, category: 'Horse', alt: 'Black and white horse', src: '/images/20240224_122619.jpg' },
  { id: 19, category: 'Horse', alt: 'Riders on beach holkham', src: '/images/20240707_112019.jpg' },
  { id: 20, category: 'Horse', alt: 'Hugging horse affection', src: '/images/20231206_122359.jpg' },
  { id: 21, category: 'Horse', alt: 'Indoor arena riding lesson', src: '/images/20240222_162332.jpg' },
  { id: 22, category: 'Horse', alt: 'Horse head stable window', src: '/images/20240223_164227.jpg' },
  { id: 23, category: 'Horse', alt: 'Horse head arch architecture', src: '/images/20240223_164233.jpg' },
  { id: 24, category: 'Horse', alt: 'Horse head arch with rug', src: '/images/20240223_164303.jpg' },
  { id: 25, category: 'Horse', alt: 'Horse lying down sleeping', src: '/images/20240224_121510.jpg' },
  { id: 26, category: 'Horse', alt: 'Stroking horse nose', src: '/images/20240224_122424.jpg' },
  { id: 27, category: 'Horse', alt: 'Riding in field summer', src: '/images/20220813_173030.jpg' },
  { id: 28, category: 'Horse', alt: 'Horse with bonnet fly protection', src: '/images/20230614_114324.jpg' },
  { id: 29, category: 'Horse', alt: 'Dark horse grazing paddock', src: '/images/20230927_102604.jpg' },
  { id: 30, category: 'Horse', alt: 'Horse standing field sunny', src: '/images/20230813_173323.jpg' },
  { id: 31, category: 'Horse', alt: 'Woman standing with horse', src: '/images/20230919_105230.jpg' },

  // Cats
  { id: 32, category: 'Cat', alt: 'Grey fluffy cat Grantham', src: '/images/20190525_134954.jpg' },
  { id: 33, category: 'Cat', alt: 'Black cat in bin funny', src: '/images/20200813_222453.jpg' },
  { id: 34, category: 'Cat', alt: 'Grey cat patio garden', src: '/images/20210204_125301.jpg' },
  { id: 35, category: 'Cat', alt: 'Tortoiseshell cat portrait', src: '/images/20210816_213338.jpg' },
  { id: 36, category: 'Cat', alt: 'Cat at door waiting', src: '/images/20231023_163820.jpg' },
  { id: 37, category: 'Cat', alt: 'Grey cat looking up', src: '/images/20170529_175217.jpg' },
  { id: 38, category: 'Cat', alt: 'Orange cat face close up', src: '/images/20171228_192257.jpg' },
  { id: 39, category: 'Cat', alt: 'Cat in suitcase travel', src: '/images/20150917_232353.jpg' },
  { id: 40, category: 'Cat', alt: 'Kitten on chair cute', src: '/images/20180228_090509.jpg' },
  { id: 41, category: 'Cat', alt: 'Kitten on stairs play', src: '/images/20180623_221854.jpg' },
  { id: 42, category: 'Cat', alt: 'Tabby on carpet home', src: '/images/20200507_122722.jpg' },
  { id: 43, category: 'Cat', alt: 'Orange cat garden summer', src: '/images/20210609_205628.jpg' },
  { id: 44, category: 'Cat', alt: 'Cat on cabinet climbing', src: '/images/20211116_195038.jpg' },
  { id: 45, category: 'Cat', alt: 'Grey cat decking outdoor', src: '/images/20220724_121213.jpg' },
  { id: 46, category: 'Cat', alt: 'Cat in planter garden', src: '/images/20220902_133200.jpg' },
  { id: 47, category: 'Cat', alt: 'Cat in basket sleeping', src: '/images/20230114_181256.jpg' },
  { id: 48, category: 'Cat', alt: 'Cat in bag hiding', src: '/images/20231221_181755.jpg' },
  { id: 49, category: 'Cat', alt: 'Cat tunnel toy', src: '/images/20240120_185202.jpg' },
  { id: 50, category: 'Cat', alt: 'Cat grooming tongue', src: '/images/20170705_201700.jpg' },
  { id: 51, category: 'Cat', alt: 'Black cat sleeping bed', src: '/images/20180206_221008.jpg' },
  { id: 52, category: 'Cat', alt: 'Cat by sink kitchen', src: '/images/20220108_131920.jpg' },
  { id: 53, category: 'Cat', alt: 'Black cat yellow eyes', src: '/images/20220816_105253.jpg' },
  { id: 54, category: 'Cat', alt: 'Cat peeking corner', src: '/images/20221025_071035.jpg' },
  { id: 55, category: 'Cat', alt: 'Kitten on lap cuddles', src: '/images/20240530_193754.jpg' },
  { id: 56, category: 'Cat', alt: 'Cats playing together', src: '/images/20231029_213904.jpg' },
  { id: 57, category: 'Cat', alt: 'Kitten held in hands', src: '/images/20240725_193557.jpg' },
  { id: 58, category: 'Cat', alt: 'Cat on bed bedroom', src: '/images/20240822_075836.jpg' },

  // Dogs
  { id: 60, category: 'Dog', alt: 'Red dog hallway Grantham', src: '/images/20181223_205739.jpg' },
  { id: 61, category: 'Dog', alt: 'Puppy in coat winter walk', src: '/images/20191208_135028.jpg' },
  { id: 62, category: 'Dog', alt: 'White fluffy dog christmas', src: '/images/20221226_205628.jpg' },
  { id: 63, category: 'Dog', alt: 'White dog wet pavement rain', src: '/images/20231216_132223.jpg' },
  { id: 64, category: 'Dog', alt: 'Collie on rug relaxing', src: '/images/20230811_131151.jpg' },
  { id: 65, category: 'Dog', alt: 'German Shepherd snow winter', src: '/images/20210210_134958.jpg' },
  { id: 66, category: 'Dog', alt: 'Spaniel in heather walk', src: '/images/20210825_144654.jpg' },
  { id: 67, category: 'Dog', alt: 'Spaniel on grass park', src: '/images/20220902_191910.jpg' },
  { id: 68, category: 'Dog', alt: 'GSD with stick playing', src: '/images/20220812_105650.jpg' },
  { id: 69, category: 'Dog', alt: 'Brindle dog back view', src: '/images/20210627_112702.jpg' },
  { id: 70, category: 'Dog', alt: 'Two dogs sleeping basket', src: '/images/20220501_221053.jpg' },
  { id: 71, category: 'Dog', alt: 'Dog on stairs home', src: '/images/20211226_125026.jpg' },
  { id: 72, category: 'Dog', alt: 'Red dog on bed comfort', src: '/images/20220326_075727.jpg' },
  { id: 73, category: 'Dog', alt: 'Red dog sofa edge', src: '/images/20220101_133427.jpg' },
  { id: 74, category: 'Dog', alt: 'Woman and dogs sofa cuddle', src: '/images/20220924_194723.jpg' },
  { id: 75, category: 'Dog', alt: 'Fluffy dog sofa happy', src: '/images/20230325_100913.jpg' },
  { id: 76, category: 'Dog', alt: 'Airedale Terrier garden', src: '/images/20230528_131238.jpg' },
  { id: 77, category: 'Dog', alt: 'Great Dane huge dog', src: '/images/20220917_193352.jpg' },
  { id: 78, category: 'Dog', alt: 'Dog with bow tie dapper', src: '/images/20230501_133419.jpg' },
  { id: 79, category: 'Dog', alt: 'Man with dogs walking', src: '/images/20240622_194239.jpg' },
  { id: 80, category: 'Dog', alt: 'Fluffy dog looking away', src: '/images/20240625_122359.jpg' },
  { id: 81, category: 'Dog', alt: 'Black curly puppy cute', src: '/images/20240728_094132.jpg' },
  { id: 82, category: 'Dog', alt: 'Tan puppy sitting', src: '/images/20221008_131139.jpg' },
  { id: 83, category: 'Dog', alt: 'Black puppies sleeping pile', src: '/images/20240210_223933.jpg' },
  { id: 84, category: 'Dog', alt: 'Border terrier top view', src: '/images/20230615_091147.jpg' },
  { id: 85, category: 'Dog', alt: 'GSD blue toy playing', src: '/images/20220814_114327.jpg' },
  { id: 86, category: 'Dog', alt: 'GSD snake toy garden', src: '/images/20220716_105619.jpg' },
  { id: 87, category: 'Dog', alt: 'Spaniel face close up', src: '/images/20231215_155122.jpg' },
  { id: 88, category: 'Dog', alt: 'Dog on deck tennis ball', src: '/images/20230604_122354.jpg' },
  { id: 89, category: 'Dog', alt: 'Scruffy terrier face', src: '/images/20230910_134912.jpg' },
  { id: 90, category: 'Dog', alt: 'Dog on sofa looking back', src: '/images/20231202_173950.jpg' },
  { id: 91, category: 'Dog', alt: 'Spaniel chin rest cute', src: '/images/20240224_121518.jpg' },
  { id: 92, category: 'Dog', alt: 'Newfoundland puppy bear', src: '/images/20240525_121226.jpg' },
  { id: 93, category: 'Dog', alt: 'Red Lab face portrait', src: '/images/20240505_091539.jpg' },
  { id: 94, category: 'Dog', alt: 'Dogs sleeping with people', src: '/images/20231225_201736.jpg' },
  { id: 95, category: 'Dog', alt: 'Red Lab sleeping bed', src: '/images/20240505_091602.jpg' },

  // Other
  { id: 99, category: 'Other', alt: 'Dog and Cat sleeping together', src: '/images/20230615_091157.jpg' },
];