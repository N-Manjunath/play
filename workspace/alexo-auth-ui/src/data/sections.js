const sections = [
  {
    id: 'featured',
    title: 'Featured',
    countLabel: '10+',
    categoryId: null, // always visible
    items: [
      {
        id: 'mac14',
        title: 'Macbook 14',
        price: 450000,
        condition: 'new',
        rating: '10/10',
        location: 'Gulberg Phase 4, Lahore',
        date: '22 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'iphone14pm',
        title: 'Iphone 14 Pro Max',
        price: 600000,
        condition: 'used',
        rating: '08/10',
        location: 'Gulberg Phase 4, Lahore',
        date: '22 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1661347330538-6386bc0b7deb?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'watch',
        title: 'Smart Watch Series 8',
        price: 35000,
        condition: 'new',
        rating: '09/10',
        location: 'DHA, Lahore',
        date: '20 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1518442072089-1e3b3aee9d24?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'mobiles',
    title: 'Mobile',
    countLabel: '100+',
    categoryId: 'mobiles',
    items: [
      {
        id: 's23ultra',
        title: 'Galaxy S23 Ultra',
        price: 380000,
        condition: 'used',
        rating: '09/10',
        location: 'Model Town, Lahore',
        date: '19 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1670272501711-44dd2b32d679?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'iphone15',
        title: 'iPhone 15',
        price: 520000,
        condition: 'new',
        rating: '10/10',
        location: 'Gulberg, Lahore',
        date: '21 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1695048132929-4691b1870b83?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'laptops',
    title: 'Laptops',
    countLabel: '50+',
    categoryId: 'laptops',
    items: [
      {
        id: 'dellxps',
        title: 'Dell XPS 13',
        price: 240000,
        condition: 'used',
        rating: '08/10',
        location: 'Johar Town, Lahore',
        date: '18 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'macair',
        title: 'MacBook Air M2',
        price: 300000,
        condition: 'new',
        rating: '10/10',
        location: 'DHA, Lahore',
        date: '23 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'vehicles',
    title: 'Vehicles',
    countLabel: '20+',
    categoryId: 'vehicles',
    items: [
      {
        id: 'civic',
        title: 'Honda Civic 2019',
        price: 5200000,
        condition: 'used',
        rating: '09/10',
        location: 'Bahria Town, Lahore',
        date: '15 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'corolla',
        title: 'Toyota Corolla 2021',
        price: 4800000,
        condition: 'used',
        rating: '09/10',
        location: 'Gulshan, Karachi',
        date: '12 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1549921296-3a6b3d1d2f84?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'bikes',
    title: 'Bikes',
    countLabel: '30+',
    categoryId: 'bikes',
    items: [
      {
        id: 'yamaha',
        title: 'Yamaha YZF-R3',
        price: 750000,
        condition: 'used',
        rating: '08/10',
        location: 'Nazimabad, Karachi',
        date: '10 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1533139502658-0198f920d8ae?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'honda125',
        title: 'Honda CG 125 2022',
        price: 180000,
        condition: 'used',
        rating: '09/10',
        location: 'Saddar, Lahore',
        date: '08 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'accessories',
    title: 'Accessories',
    countLabel: '70+',
    categoryId: 'accessories',
    items: [
      {
        id: 'airpods',
        title: 'AirPods Pro 2',
        price: 65000,
        condition: 'new',
        rating: '10/10',
        location: 'DHA, Karachi',
        date: '24 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'powerbank',
        title: 'Anker Powerbank 20k',
        price: 8000,
        condition: 'new',
        rating: '10/10',
        location: 'Askari 11, Lahore',
        date: '22 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'furniture',
    title: 'Home & Furniture',
    countLabel: '40+',
    categoryId: 'furniture',
    items: [
      {
        id: 'sofa',
        title: 'L-Shaped Sofa',
        price: 90000,
        condition: 'used',
        rating: '08/10',
        location: 'G-11, Islamabad',
        date: '05 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'table',
        title: 'Dining Table Set',
        price: 55000,
        condition: 'used',
        rating: '09/10',
        location: 'Johar Town, Lahore',
        date: '02 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1582582494700-6fe0f2d70b66?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'gaming',
    title: 'Gaming',
    countLabel: '25+',
    categoryId: 'gaming',
    items: [
      {
        id: 'ps5',
        title: 'PlayStation 5',
        price: 180000,
        condition: 'used',
        rating: '09/10',
        location: 'Bahria Town, Lahore',
        date: '11 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1606813907291-76a360f3fef8?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'xbox',
        title: 'Xbox Series X',
        price: 170000,
        condition: 'used',
        rating: '09/10',
        location: 'Pechs, Karachi',
        date: '09 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'fashion',
    title: 'Fashion',
    countLabel: '80+',
    categoryId: 'fashion',
    items: [
      {
        id: 'sneakers',
        title: 'Nike Air Max',
        price: 22000,
        condition: 'new',
        rating: '10/10',
        location: 'Saddar, Karachi',
        date: '14 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1521106581851-da5b4a08d0f5?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'jacket',
        title: 'Leather Jacket',
        price: 15000,
        condition: 'new',
        rating: '10/10',
        location: 'Cantt, Lahore',
        date: '16 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'pets',
    title: 'Pets',
    countLabel: '12+',
    categoryId: 'pets',
    items: [
      {
        id: 'persian',
        title: 'Persian Cat',
        price: 30000,
        condition: 'new',
        rating: '10/10',
        location: 'Gulshan-e-Iqbal, Karachi',
        date: '01 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'labrador',
        title: 'Labrador Puppy',
        price: 45000,
        condition: 'new',
        rating: '10/10',
        location: 'DHA, Lahore',
        date: '03 Sep',
        imageUrl:
          'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
];

export default sections;