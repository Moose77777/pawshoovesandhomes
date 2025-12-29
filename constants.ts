import { Dog, Cat, Home, Shield, Heart, MapPin, Clock, Award, CheckCircle } from 'lucide-react';
import { ServiceItem, Testimonial, FaqItem, BlogPost, GalleryItem } from './types';

export const COMPANY_NAME = "Paws, Hooves & Homes";
export const PHONE_NUMBER = "07711 865958";
export const EMAIL_ADDRESS = "philandhdiary@gmail.com";

export const SERVICES: ServiceItem[] = [
  {
    id: 'dog-sitting',
    title: 'Dog Sitting & Walking',
    shortDescription: 'Reliable walks and in-home companionship for your canine best friend.',
    fullDescription: [
      'Whether you need a mid-day walk or overnight care, we treat your dog like family.',
      'Includes feeding, fresh water, medication administration (if needed), and plenty of belly rubs.'
    ],
    icon: Dog,
    features: ['30-60 min walks', 'GPS tracked routes', 'Feeding & Water', 'Photo updates'],
    price: 'From £15/visit',
    duration: '30 mins - Overnight',
    image: '/images/20210825_144654.jpg' // Spaniel in heather
  },
  {
    id: 'cat-sitting',
    title: 'Cat Sitting',
    shortDescription: 'Stress-free care for your independent (or cuddly) felines at home.',
    fullDescription: [
      'Cats prefer the comfort of their own home. We provide visits to scoop litter, refresh water, and engage in playtime.',
      'Perfect for shy cats who need space or social cats who crave attention.'
    ],
    icon: Cat,
    features: ['Litter box cleaning', 'Interactive play', 'Feeding', 'Daily report cards'],
    price: 'From £12/visit',
    duration: '30 mins',
    image: '/images/20220816_105253.jpg' // Black cat yellow eyes
  },
  {
    id: 'horse-care',
    title: 'Horse & Farm Care',
    shortDescription: 'Experienced equine care including feeding, turnout, and stable maintenance.',
    fullDescription: [
      'With over 10 years of equestrian experience, we handle rug changes, turnout/bring-in, mucking out, and feeding.',
      'We understand the specific needs of horses and can spot signs of colic or distress.'
    ],
    icon:  MapPin, 
    features: ['Feeding & Haying', 'Stall Mucking', 'Turnout/Bring-in', 'Blanket changes'],
    price: 'From £25/visit',
    duration: 'Varies',
    image: '/images/20240224_122424.jpg' // Woman stroking horse
  },
  {
    id: 'house-sitting',
    title: 'House Sitting',
    shortDescription: 'Security and maintenance for your home while you travel.',
    fullDescription: [
      'Keep your home lived-in and secure. We collect mail, water plants, rotate lights, and ensure everything is safe.',
      'Available with or without pet care.'
    ],
    icon: Home,
    features: ['Mail collection', 'Plant watering', 'Security checks', 'Light rotation'],
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
    content: "Finding someone who actually knows horses is so hard. I trust them completely with Barnaby's complex feeding schedule.",
    rating: 5,
    imageUrl: "/images/20220507_160359.jpg"
  },
  {
    id: 2,
    clientName: "James P.",
    petName: "Luna & Max",
    petType: "Dog",
    content: "The daily photo updates give me such peace of mind while I'm at work. The best walkers in town!",
    rating: 5,
    imageUrl: "/images/20220814_114327.jpg"
  },
  {
    id: 3,
    clientName: "Emily R.",
    petName: "Whiskers",
    petType: "Cat",
    content: "They even got my shy cat to come out and play! Professional, insured, and truly caring.",
    rating: 5,
    imageUrl: "/images/20170529_175217.jpg"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Are you insured and bonded?",
    answer: "Yes, we are fully insured and DBS checked. Proof of insurance is available upon request during our meet-and-greet."
  },
  {
    question: "Do you offer meet-and-greets?",
    answer: "Absolutely! A complimentary meet-and-greet is required for all new clients to ensure we are a good match for your pets and to learn their routine."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 48 hours or more in advance are fully refundable. Cancellations within 48 hours may be subject to a 50% fee."
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
    excerpt: "From the expansive grounds of Belton House to the hidden trails of the Viking Way, discover the top local spots we love for dog walking in Lincolnshire.",
    category: "Dog Walking",
    date: "May 12, 2024",
    image: "/images/20210825_144654.jpg" // Spaniel in heather
  },
  {
    id: 2,
    title: "Spring Grazing Management: Preventing Laminitis",
    excerpt: "As the lush grass shoots up in the Vale of Belvoir, effective strip grazing and muzzle management are key for keeping our native ponies healthy.",
    category: "Horse Care",
    date: "Apr 05, 2024",
    image: "/images/20230927_102604.jpg" // Dark horse grazing
  },
  {
    id: 3,
    title: "Puppy Visits: Socialisation Tips for Grantham Owners",
    excerpt: "Bringing home a new puppy? We discuss the importance of early socialisation and how our pop-in visits support toilet training while you're at work.",
    category: "Puppy Care",
    date: "Mar 10, 2024",
    image: "/images/20240728_094132.jpg" // Black curly puppy
  },
  {
    id: 4,
    title: "Planning a Horse Riding Beach Trip to the Lincolnshire Coast",
    excerpt: "Tips for a safe and memorable day out at Mablethorpe or Holkham with your horse, from loading practice to checking tide times.",
    category: "Horse Riding",
    date: "Feb 28, 2024",
    image: "/images/20240707_112019.jpg" // Riders on beach
  },
  {
    id: 5,
    title: "Caring for Senior Dogs: Why Routine Matters",
    excerpt: "Older dogs often struggle with kennels. Our mobile pet care ensures your senior companion gets medication and comfort in their own bed.",
    category: "Senior Pets",
    date: "Jan 15, 2024",
    image: "/images/20220501_221053.jpg" // Two dogs sleeping
  },
  {
    id: 6,
    title: "The Security Benefits of House Sitting in Rural Lincolnshire",
    excerpt: "More than just pet care—how having a live-in sitter keeps your home secure, blinds rotated, and insurance valid while you travel.",
    category: "House Sitting",
    date: "Dec 02, 2023",
    image: "/images/20240505_091539.jpg" // Red Lab face / Home
  },
  {
    id: 7,
    title: "Why Professional Cat Sitting Beats a Cattery for Grantham Pets",
    excerpt: "Cats are territorial creatures. Discover why in-home visits reduce stress and keep your feline happy while you're away on holiday.",
    category: "Cat Care",
    date: "Nov 20, 2023",
    image: "/images/20220816_105253.jpg" // Black cat
  },
  {
    id: 8,
    title: "Winter Equine Care Guide: Managing Mud Fever",
    excerpt: "The clay soil around Grantham can be tough on hooves. Here’s how we manage turnout, rugging, and legs during the wet winter months.",
    category: "Horse Care",
    date: "Nov 05, 2023",
    image: "/images/20230920_142750.jpg" // Horse in rug
  },
  {
    id: 9,
    title: "Easing Separation Anxiety: A Pet Sitter’s Perspective",
    excerpt: "Returning to the office? Strategies to help your dog cope with alone time and how a midday walk can make all the difference.",
    category: "Pet Health",
    date: "Oct 12, 2023",
    image: "/images/20220924_194723.jpg" // Dogs on sofa
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  // Horses
  { id: 1, category: 'Horse', alt: 'Pony in stable', src: '/images/406323490_320392300890666_540026260773663677_n.jpg' },
  { id: 2, category: 'Horse', alt: 'Brown horse head', src: '/images/20220811_125357.jpg' },
  { id: 3, category: 'Horse', alt: 'Black horse head', src: '/images/20220811_125433.jpg' },
  { id: 4, category: 'Horse', alt: 'Rider in water', src: '/images/20230810_202830.jpg' },
  { id: 5, category: 'Horse', alt: 'Woman with horse', src: '/images/20231022_123907.jpg' },
  { id: 6, category: 'Horse', alt: 'Rider in yellow jacket', src: '/images/20231231_143719.jpg' },
  { id: 7, category: 'Horse', alt: 'Woman with horse and rosettes', src: '/images/20240217_122709.jpg' },
  { id: 8, category: 'Horse', alt: 'Horse with red noseband', src: '/images/20220320_135939.jpg' },
  { id: 9, category: 'Horse', alt: 'Brown horse standing', src: '/images/20220507_160359.jpg' },
  { id: 10, category: 'Horse', alt: 'Horses in rugs', src: '/images/20230903_161556.jpg' },
  { id: 11, category: 'Horse', alt: 'Horse in field', src: '/images/20240620_163612.jpg' },
  { id: 12, category: 'Horse', alt: 'Horse with red halter', src: '/images/20240728_102008.jpg' },
  { id: 13, category: 'Horse', alt: 'Rider in arena', src: '/images/20230527_083557.jpg' },
  { id: 14, category: 'Horse', alt: 'Brown horse side view', src: '/images/20220507_160412.jpg' },
  { id: 15, category: 'Horse', alt: 'Horse grazing with rug', src: '/images/20230920_142750.jpg' },
  { id: 16, category: 'Horse', alt: 'Horse eating hay', src: '/images/20240224_122329.jpg' },
  { id: 17, category: 'Horse', alt: 'Horse face close up', src: '/images/20231018_153724.jpg' },
  { id: 18, category: 'Horse', alt: 'Black and white horse', src: '/images/20240224_122619.jpg' },
  { id: 19, category: 'Horse', alt: 'Riders on beach', src: '/images/20240707_112019.jpg' },
  { id: 20, category: 'Horse', alt: 'Hugging horse', src: '/images/20231206_122359.jpg' },
  { id: 21, category: 'Horse', alt: 'Indoor arena riding', src: '/images/20240222_162332.jpg' },
  { id: 22, category: 'Horse', alt: 'Horse head window', src: '/images/20240223_164227.jpg' },
  { id: 23, category: 'Horse', alt: 'Horse head arch', src: '/images/20240223_164233.jpg' },
  { id: 24, category: 'Horse', alt: 'Horse head arch with rug', src: '/images/20240223_164303.jpg' },
  { id: 25, category: 'Horse', alt: 'Horse lying down', src: '/images/20240224_121510.jpg' },
  { id: 26, category: 'Horse', alt: 'Stroking horse', src: '/images/20240224_122424.jpg' },
  { id: 27, category: 'Horse', alt: 'Riding in field', src: '/images/20220813_173030.jpg' },
  { id: 28, category: 'Horse', alt: 'Horse with bonnet', src: '/images/20230614_114324.jpg' },
  { id: 29, category: 'Horse', alt: 'Dark horse grazing', src: '/images/20230927_102604.jpg' },
  { id: 30, category: 'Horse', alt: 'Horse standing field', src: '/images/20230813_173323.jpg' },
  { id: 31, category: 'Horse', alt: 'Woman standing with horse', src: '/images/20230919_105230.jpg' },

  // Cats
  { id: 32, category: 'Cat', alt: 'Grey fluffy cat', src: '/images/20190525_134954.jpg' },
  { id: 33, category: 'Cat', alt: 'Black cat in bin', src: '/images/20200813_222453.jpg' },
  { id: 34, category: 'Cat', alt: 'Grey cat patio', src: '/images/20210204_125301.jpg' },
  { id: 35, category: 'Cat', alt: 'Tortoiseshell cat', src: '/images/20210816_213338.jpg' },
  { id: 36, category: 'Cat', alt: 'Cat at door', src: '/images/20231023_163820.jpg' },
  { id: 37, category: 'Cat', alt: 'Grey cat looking up', src: '/images/20170529_175217.jpg' },
  { id: 38, category: 'Cat', alt: 'Orange cat face', src: '/images/20171228_192257.jpg' },
  { id: 39, category: 'Cat', alt: 'Cat in suitcase', src: '/images/20150917_232353.jpg' },
  { id: 40, category: 'Cat', alt: 'Kitten on chair', src: '/images/20180228_090509.jpg' },
  { id: 41, category: 'Cat', alt: 'Kitten on stairs', src: '/images/20180623_221854.jpg' },
  { id: 42, category: 'Cat', alt: 'Tabby on carpet', src: '/images/20200507_122722.jpg' },
  { id: 43, category: 'Cat', alt: 'Orange cat garden', src: '/images/20210609_205628.jpg' },
  { id: 44, category: 'Cat', alt: 'Cat on cabinet', src: '/images/20211116_195038.jpg' },
  { id: 45, category: 'Cat', alt: 'Grey cat decking', src: '/images/20220724_121213.jpg' },
  { id: 46, category: 'Cat', alt: 'Cat in planter', src: '/images/20220902_133200.jpg' },
  { id: 47, category: 'Cat', alt: 'Cat in basket', src: '/images/20230114_181256.jpg' },
  { id: 48, category: 'Cat', alt: 'Cat in bag', src: '/images/20231221_181755.jpg' },
  { id: 49, category: 'Cat', alt: 'Cat tunnel', src: '/images/20240120_185202.jpg' },
  { id: 50, category: 'Cat', alt: 'Cat grooming', src: '/images/20170705_201700.jpg' },
  { id: 51, category: 'Cat', alt: 'Black cat sleeping', src: '/images/20180206_221008.jpg' },
  { id: 52, category: 'Cat', alt: 'Cat by sink', src: '/images/20220108_131920.jpg' },
  { id: 53, category: 'Cat', alt: 'Black cat yellow eyes', src: '/images/20220816_105253.jpg' },
  { id: 54, category: 'Cat', alt: 'Cat peeking', src: '/images/20221025_071035.jpg' },
  { id: 55, category: 'Cat', alt: 'Kitten on lap', src: '/images/20240530_193754.jpg' },
  { id: 56, category: 'Cat', alt: 'Cats playing', src: '/images/20231029_213904.jpg' },
  { id: 57, category: 'Cat', alt: 'Kitten held', src: '/images/20240725_193557.jpg' },
  { id: 58, category: 'Cat', alt: 'Cat on bed', src: '/images/20240822_075836.jpg' },

  // Dogs
  { id: 60, category: 'Dog', alt: 'Red dog hallway', src: '/images/20181223_205739.jpg' },
  { id: 61, category: 'Dog', alt: 'Puppy in coat', src: '/images/20191208_135028.jpg' },
  { id: 62, category: 'Dog', alt: 'White fluffy dog', src: '/images/20221226_205628.jpg' },
  { id: 63, category: 'Dog', alt: 'White dog wet pavement', src: '/images/20231216_132223.jpg' },
  { id: 64, category: 'Dog', alt: 'Collie on rug', src: '/images/20230811_131151.jpg' },
  { id: 65, category: 'Dog', alt: 'German Shepherd snow', src: '/images/20210210_134958.jpg' },
  { id: 66, category: 'Dog', alt: 'Spaniel in heather', src: '/images/20210825_144654.jpg' },
  { id: 67, category: 'Dog', alt: 'Spaniel on grass', src: '/images/20220902_191910.jpg' },
  { id: 68, category: 'Dog', alt: 'GSD with stick', src: '/images/20220812_105650.jpg' },
  { id: 69, category: 'Dog', alt: 'Brindle dog back', src: '/images/20210627_112702.jpg' },
  { id: 70, category: 'Dog', alt: 'Two dogs sleeping', src: '/images/20220501_221053.jpg' },
  { id: 71, category: 'Dog', alt: 'Dog on stairs', src: '/images/20211226_125026.jpg' },
  { id: 72, category: 'Dog', alt: 'Red dog on bed', src: '/images/20220326_075727.jpg' },
  { id: 73, category: 'Dog', alt: 'Red dog sofa edge', src: '/images/20220101_133427.jpg' },
  { id: 74, category: 'Dog', alt: 'Woman and dogs sofa', src: '/images/20220924_194723.jpg' },
  { id: 75, category: 'Dog', alt: 'Fluffy dog sofa', src: '/images/20230325_100913.jpg' },
  { id: 76, category: 'Dog', alt: 'Airedale Terrier', src: '/images/20230528_131238.jpg' },
  { id: 77, category: 'Dog', alt: 'Great Dane', src: '/images/20220917_193352.jpg' },
  { id: 78, category: 'Dog', alt: 'Dog with bow tie', src: '/images/20230501_133419.jpg' },
  { id: 79, category: 'Dog', alt: 'Man with dogs', src: '/images/20240622_194239.jpg' },
  { id: 80, category: 'Dog', alt: 'Fluffy dog looking away', src: '/images/20240625_122359.jpg' },
  { id: 81, category: 'Dog', alt: 'Black curly puppy', src: '/images/20240728_094132.jpg' },
  { id: 82, category: 'Dog', alt: 'Tan puppy', src: '/images/20221008_131139.jpg' },
  { id: 83, category: 'Dog', alt: 'Black puppies sleeping', src: '/images/20240210_223933.jpg' },
  { id: 84, category: 'Dog', alt: 'Border terrier top view', src: '/images/20230615_091147.jpg' },
  { id: 85, category: 'Dog', alt: 'GSD blue toy', src: '/images/20220814_114327.jpg' },
  { id: 86, category: 'Dog', alt: 'GSD snake toy', src: '/images/20220716_105619.jpg' },
  { id: 87, category: 'Dog', alt: 'Spaniel face', src: '/images/20231215_155122.jpg' },
  { id: 88, category: 'Dog', alt: 'Dog on deck tennis ball', src: '/images/20230604_122354.jpg' },
  { id: 89, category: 'Dog', alt: 'Scruffy terrier face', src: '/images/20230910_134912.jpg' },
  { id: 90, category: 'Dog', alt: 'Dog on sofa looking back', src: '/images/20231202_173950.jpg' },
  { id: 91, category: 'Dog', alt: 'Spaniel chin rest', src: '/images/20240224_121518.jpg' },
  { id: 92, category: 'Dog', alt: 'Newfoundland puppy', src: '/images/20240525_121226.jpg' },
  { id: 93, category: 'Dog', alt: 'Red Lab face', src: '/images/20240505_091539.jpg' },
  { id: 94, category: 'Dog', alt: 'Dogs sleeping with people', src: '/images/20231225_201736.jpg' },
  { id: 95, category: 'Dog', alt: 'Red Lab sleeping', src: '/images/20240505_091602.jpg' },

  // Other
  { id: 99, category: 'Other', alt: 'Dog and Cat sleeping', src: '/images/20230615_091157.jpg' },
];