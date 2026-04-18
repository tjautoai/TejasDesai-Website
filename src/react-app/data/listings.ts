/*
  HOW TO ADD A NEW LISTING:
  1. Add a new object to the allListings array below
  2. Set status: 'active' to show it in the main listings grid with full details
  3. When sold or rented, change status to 'sold' or 'rented'
     It will automatically move to the Recent Transactions section
  4. Add listing photos to the /public folder and reference them in the image field
*/

export interface Property {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  sqft: number;
  type: 'sale' | 'rental' | 'commercial';
  propertyType: 'residential' | 'commercial';
  neighborhood: string;
  image: string;
  status: 'active' | 'sold' | 'rented';
  hasVirtualTour: boolean;
  description?: string;
}

export const allListings: Property[] = [
  {
    id: 4,
    address: "Adams Shoppes, Suite 900",
    city: "Mars",
    state: "PA",
    zip: "16046",
    price: "Lease Rate Upon Request | 5-Year Lease Secured",
    priceValue: 0,
    beds: 0,
    baths: 0,
    sqft: 1400,
    type: 'commercial',
    propertyType: 'commercial',
    neighborhood: "Adams Township, Mars PA",
    image: "/adams-shoppes.jpg",
    status: 'rented',
    hasVirtualTour: false,
    description: "Commercial retail space at Adams Shoppes. 1,400 sqft unit with a 5-year lease secured in Adams Township, Mars PA."
  },
  {
    id: 3,
    address: '149 Melinda Court',
    city: 'Sewickley',
    state: 'PA',
    zip: '15143',
    price: '$3,200/mo',
    priceValue: 3200,
    beds: 5,
    baths: 4,
    sqft: 2916,
    type: 'rental',
    propertyType: 'residential',
    neighborhood: 'Sewickley',
    image: '/149-Melinda.jpg',
    status: 'rented',
    hasVirtualTour: false,
  },
  {
    id: 2,
    address: '609 Edison Drive',
    city: 'Wexford',
    state: 'PA',
    zip: '15090',
    price: '$420,000',
    priceValue: 420000,
    beds: 3,
    baths: 3,
    sqft: 1936,
    type: 'sale',
    propertyType: 'residential',
    neighborhood: 'Wexford',
    image: '/609-Edison.jpg',
    status: 'sold',
    hasVirtualTour: false,
  },
  {
    id: 1,
    address: '303 Trail Court East',
    city: 'Cranberry Township',
    state: 'PA',
    zip: '16066',
    price: '$490,000',
    priceValue: 490000,
    beds: 4,
    baths: 3,
    sqft: 3120,
    type: 'sale',
    propertyType: 'residential',
    neighborhood: 'Cranberry Township',
    image: '/303-Trail.jpg',
    status: 'sold',
    hasVirtualTour: false,
  }
];
