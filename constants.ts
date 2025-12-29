import { Dog, Cat, Home, Shield, Heart, MapPin, Clock, Award, CheckCircle } from 'lucide-react';
import { ServiceItem, Testimonial, FaqItem, BlogPost } from './types';

export const COMPANY_NAME = "Paws, Hooves & Homes";
export const PHONE_NUMBER = "(555) 123-4567";
export const EMAIL_ADDRESS = "hello@pawshoovesandhomes.com";

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
    price: 'From $25/visit',
    duration: '30 mins - Overnight',
    image: 'https://picsum.photos/id/237/800/600'
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
    price: 'From $22/visit',
    duration: '30 mins',
    image: 'https://picsum.photos/id/40/800/600'
  },
  {
    id: 'horse-care',
    title: 'Horse & Farm Care',
    shortDescription: 'Experienced equine care including feeding, turnout, and stable maintenance.',
    fullDescription: [
      'With over 10 years of equestrian experience, we handle rug changes, turnout/bring-in, mucking out, and feeding.',
      'We understand the specific needs of horses and can spot signs of colic or distress.'
    ],
    icon:  MapPin, // Using MapPin as a placeholder for a horse shoe/stable concept if specific icon unavailable
    features: ['Feeding & Haying', 'Stall Mucking', 'Turnout/Bring-in', 'Blanket changes'],
    price: 'From $40/visit',
    duration: 'Varies',
    image: 'https://picsum.photos/id/199/800/600'
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
    price: '$50/night',
    duration: 'Overnight',
    image: 'https://picsum.photos/id/164/800/600'
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
    imageUrl: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    clientName: "James P.",
    petName: "Luna & Max",
    petType: "Dog",
    content: "The daily photo updates give me such peace of mind while I'm at work. The best walkers in town!",
    rating: 5,
    imageUrl: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    clientName: "Emily R.",
    petName: "Whiskers",
    petType: "Cat",
    content: "They even got my shy cat to come out and play! Professional, insured, and truly caring.",
    rating: 5,
    imageUrl: "https://picsum.photos/100/100?random=3"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Are you insured and bonded?",
    answer: "Yes, we are fully insured and bonded through Pet Sitters Associates. Proof of insurance is available upon request during our meet-and-greet."
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
    title: "5 Tips for Leaving Your Dog Home Alone",
    excerpt: "How to prevent separation anxiety and keep your pup happy while you're out.",
    category: "Dog Care",
    date: "Oct 15, 2023",
    image: "https://picsum.photos/id/237/400/250"
  },
  {
    id: 2,
    title: "Winter Care for Horses",
    excerpt: "Essential tips for blanketing, feeding, and hoof care during the colder months.",
    category: "Horse Care",
    date: "Nov 02, 2023",
    image: "https://picsum.photos/id/199/400/250"
  },
  {
    id: 3,
    title: "Why You Need a House Sitter",
    excerpt: "More than just checking the mail—how house sitters lower insurance risks.",
    category: "House Sitting",
    date: "Dec 10, 2023",
    image: "https://picsum.photos/id/164/400/250"
  }
];