import img1Front from './assets/images/1-cart-front.jpeg';
import img1Back from './assets/images/1-cart-back.jpeg';
import img2Front from './assets/images/2-cart-front.jpeg';
import img2Back from './assets/images/2-cart-back.jpeg';
import img3Front from './assets/images/3-cart-front.jpeg';
import img3Back from './assets/images/3-cart-back.jpeg';

export const products = [
  { 
    id: '1', 
    img: img1Front, 
    images: [img1Front, img1Back],
    name: 'BASANT', 
    category: '2-PIECE SET', 
    price: '$120.00',
    description: 'A timeless 2-piece statement crafted in premium cotton — because details matter.',
    features: [
      'Plain kameez with subtle pearl embellishments',
      'Digital print Farshi Shalwar',
      'Crafted in premium cotton',
      'Colour: RUST'
    ]
  },
  { 
    id: '2', 
    img: img2Front, 
    images: [img2Front, img2Back],
    name: 'MEHWAR', 
    category: 'SUMMER COLLECTION', 
    price: '$145.00',
    description: 'An elegant choice for your daily wear and routine, featuring comfortable loose fits designed for the modern Pakistani woman.',
    tags: ['Farshi Salwar', 'Summer collection', 'Eid collection', 'Outfit for DailyWear', 'Outfit for routine', 'Pakistani fits', 'Loose fits'],
    legal: 'All images featured in this post are the intellectual property of Asbella. Any unauthorized use, reproduction, or distribution may result in legal action.'
  },
  { 
    id: '3', 
    img: img3Front, 
    images: [img3Front, img3Back],
    name: 'BLUSH PINK', 
    category: '2PC LAWN', 
    price: '$180.00',
    description: 'Minimal Embroidery 2pc Lawn. A beautifully crafted suit that is perfect for Eid & everyday wear.',
    features: [
      'Minimal Embroidery 2pc Lawn',
      'Available in Stitched & Unstitched',
      'Perfect for Eid & everyday wear'
    ],
    tags: ['Minimal lawn suit', '2pc lawn suit', 'Stitched lawn suit', 'Eid lawn collection']
  },
];
