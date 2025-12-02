export interface Destination {
  id: string;
  name: string;
  category: 'Beach' | 'Mountain' | 'City';
  image: string;
  price: number;
  rating: number;
  description: string;
  amenities: string[];
}

export interface TravelTip {
  id: string;
  title: string;
  content: string;
}
