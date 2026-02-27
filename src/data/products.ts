export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
}

export const productsData: Product[] = [
  // 4-72离心风机
  { id: '1', name: '4-72离心风机(一)', category: '4-72离心风机', image: '/images/products/4-72离心风机/w-472-lixin-fengji.jpg' },
  { id: '2', name: '4-72离心风机(二)', category: '4-72离心风机', image: '/images/products/4-72离心风机/w-472-lixin-fengji1.jpg' },
  { id: '3', name: '4-72离心风机(三)', category: '4-72离心风机', image: '/images/products/4-72离心风机/w-472-lixin-fengji2.jpg' },
  
  // 屋顶风机
  { id: '4', name: '屋顶风机(一)', category: '屋顶风机', image: '/images/products/屋顶风机/w-wuding-fengji.jpg' },
  { id: '5', name: '屋顶风机(二)', category: '屋顶风机', image: '/images/products/屋顶风机/w-wuding-fengji1.jpg' },
  { id: '6', name: '屋顶风机(三)', category: '屋顶风机', image: '/images/products/屋顶风机/w-wuding-fengji2.jpg' },

  // 斜流风机
  { id: '7', name: '斜流风机(一)', category: '斜流风机', image: '/images/products/斜流风机/w-xieliu-fengji.jpg' },
  { id: '8', name: '斜流风机(二)', category: '斜流风机', image: '/images/products/斜流风机/w-xieliu-fengji1.jpg' },

  // 离心风机
  { id: '9', name: '离心风机(一)', category: '离心风机', image: '/images/products/离心风机/w-lixin-fengji.jpg' },
  { id: '10', name: '离心风机(二)', category: '离心风机', image: '/images/products/离心风机/w-lixin-fengji1.jpg' },
  { id: '11', name: '离心风机(三)', category: '离心风机', image: '/images/products/离心风机/w-lixin-fengji2.jpg' },

  // 轴流风机
  { id: '12', name: '轴流风机(一)', category: '轴流风机', image: '/images/products/轴流风机/w-zhouliu-fengji.jpg' },
  { id: '13', name: '轴流风机(二)', category: '轴流风机', image: '/images/products/轴流风机/w-zhouliu-fengji1.jpg' },
  { id: '14', name: '轴流风机(三)', category: '轴流风机', image: '/images/products/轴流风机/w-zhouliu-fengji2.jpg' },

  // 除臭风机
  { id: '15', name: '除臭风机', category: '除臭风机', image: '/images/products/除臭风机/w-chuchou-fengji.jpg' },

  // 隔音风机
  { id: '16', name: '隔音风机(一)', category: '隔音风机', image: '/images/products/隔音风机/w-geyin-fengji.jpg' },
  { id: '17', name: '隔音风机(二)', category: '隔音风机', image: '/images/products/隔音风机/w-geyin-fengji1.jpg' },
  { id: '18', name: '隔音风机(三)', category: '隔音风机', image: '/images/products/隔音风机/w-geyin-fengji3.jpg' },

  // 高压风机
  { id: '19', name: '高压风机(一)', category: '高压风机', image: '/images/products/高压风机/w-gaoya-fengji.jpg' },
  { id: '20', name: '高压风机(二)', category: '高压风机', image: '/images/products/高压风机/w-gaoya-fengji1.jpg' },
  { id: '21', name: '高压风机(三)', category: '高压风机', image: '/images/products/高压风机/w-gaoya-fengji2.jpg' },
];

export const categories = [
  '全部分类',
  '轴流风机',
  '离心风机',
  '屋顶风机',
  '斜流风机',
  '除臭风机',
  '隔音风机',
  '高压风机',
  '4-72离心风机'
];
