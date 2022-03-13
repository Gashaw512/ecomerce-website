// import { DESTRUCTION } from "dns";

export class Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.imageUrl = '';
    this.description = '';
  }
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Nike',
    imageUrl: '../../assets/images/Nike-1.jpg',
    price: 50,
    description: 'It Is Good for You',
  },
  {
    id: 2,
    name: 'Nike',
    imageUrl: '../../assets/images/Nike-1.jpg',
    price: 300,
    description: 'It Is Good for You',
  },
  {
    id: 3,
    name: 'Jordan',
    imageUrl: '../../assets/images/jordan-2.jpg',
    price: 280,
    description: 'It Is Good for You',
  },
  {
    id: 4,
    name: 'Jordan',
    imageUrl: '../../assets/images/jordan-3.jpg',     
    price: 90,
    description: 'It Is Good for You',
  },
  {
    id: 5,
    name: 'Jordan',
    imageUrl: '../../assets/images/Jordan.jpg',
    price: 70,
    description: 'It Is Good for You',
  },
  {
    id: 6,
    name: 'Nike',
    imageUrl: '../../assets/images/Nike-4.jpg',
    price: 300,
    description: 'It Is Good for You',
  },
  {
    id: 7,
    name: 'Nike',
    imageUrl: '../../assets/images/Nike-3.jpg',
    price: 400,
    description: 'It Is Good for You',
  },
  {
    id: 8,
    name: 'Nike',
    imageUrl: '../../assets/images/Nike-2.jpg',
    price: 80,
    description: 'It Is Good for You',
  },
  {
    id: 9,
    name: 'Jordan',
    imageUrl: '../../assets/images/jordan-2.jpg',
    price: 100,
    description: 'It Is Good for You',
  },
  {
    id: 10,
    name: 'Nike',
    imageUrl: '../../assets/images/Nike-2.jpg',
    price: 200,
    description: 'It Is Good for You',
  },
];
