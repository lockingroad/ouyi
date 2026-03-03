export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
}

export const productsData: Product[] = [
  // 4-72离心风机
  { id: '1', name: '4-72离心风机(一)', category: '4-72离心风机', image: '/images/products/4-72离心风机/1.jpg' },
  { id: '2', name: '4-72离心风机(二)', category: '4-72离心风机', image: '/images/products/4-72离心风机/2.jpg' },
  { id: '3', name: '4-72离心风机(三)', category: '4-72离心风机', image: '/images/products/4-72离心风机/3.jpg' },
  { id: '38', name: '4-72离心风机(四)', category: '4-72离心风机', image: '/images/products/4-72离心风机/4.jpg' },
  { id: '39', name: '4-72离心风机(五)', category: '4-72离心风机', image: '/images/products/4-72离心风机/5.jpg' },
  
  // 斜流风机
  { id: '7', name: '斜流风机(一)', category: '斜流风机', image: '/images/products/斜流风机/w-xieliu-fengji.jpg' },
  { id: '8', name: '斜流风机(二)', category: '斜流风机', image: '/images/products/斜流风机/w-xieliu-fengji1.jpg' },

  // 离心风机
  { id: '9', name: '离心风机(一)', category: '离心风机', image: '/images/products/离心风机/1.jpg' },
  { id: '10', name: '离心风机(二)', category: '离心风机', image: '/images/products/离心风机/2.jpg' },
  { id: '11', name: '离心风机(三)', category: '离心风机', image: '/images/products/离心风机/3.jpg' },
  { id: '40', name: '离心风机(四)', category: '离心风机', image: '/images/products/离心风机/4.jpg' },
  { id: '41', name: '离心风机(五)', category: '离心风机', image: '/images/products/离心风机/5.jpg' },
  { id: '42', name: '离心风机(六)', category: '离心风机', image: '/images/products/离心风机/6.jpg' },

  // 轴流风机
  { id: '12', name: '轴流风机(一)', category: '轴流风机', image: '/images/products/轴流风机/1.jpg' },
  { id: '13', name: '轴流风机(二)', category: '轴流风机', image: '/images/products/轴流风机/2.jpg' },
  { id: '14', name: '轴流风机(三)', category: '轴流风机', image: '/images/products/轴流风机/3.jpg' },
  { id: '43', name: '轴流风机(四)', category: '轴流风机', image: '/images/products/轴流风机/4.jpg' },
  { id: '44', name: '轴流风机(五)', category: '轴流风机', image: '/images/products/轴流风机/5.jpg' },
  { id: '45', name: '轴流风机(六)', category: '轴流风机', image: '/images/products/轴流风机/6.jpg' },
  { id: '46', name: '轴流风机(七)', category: '轴流风机', image: '/images/products/轴流风机/7.jpg' },
  { id: '47', name: '轴流风机(八)', category: '轴流风机', image: '/images/products/轴流风机/8.jpg' },

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

  // 边墙风机
  { id: '22', name: '边墙风机(一)', category: '边墙风机', image: '/images/products/边墙风机/1.jpg' },
  { id: '23', name: '边墙风机(二)', category: '边墙风机', image: '/images/products/边墙风机/2.jpg' },
  { id: '24', name: '边墙风机(三)', category: '边墙风机', image: '/images/products/边墙风机/3.jpg' },
  { id: '25', name: '边墙风机(四)', category: '边墙风机', image: '/images/products/边墙风机/4.jpg' },

  // 方形壁式轴流风机
  { id: '26', name: '方形壁式轴流风机(一)', category: '方形壁式轴流风机', image: '/images/products/方形壁式轴流风机/1.jpg' },
  { id: '27', name: '方形壁式轴流风机(二)', category: '方形壁式轴流风机', image: '/images/products/方形壁式轴流风机/2.jpg' },
  { id: '28', name: '方形壁式轴流风机(三)', category: '方形壁式轴流风机', image: '/images/products/方形壁式轴流风机/3.jpg' },
  { id: '29', name: '方形壁式轴流风机(四)', category: '方形壁式轴流风机', image: '/images/products/方形壁式轴流风机/4.jpg' },

  // 离心式屋顶风机
  { id: '30', name: '离心式屋顶风机(一)', category: '离心式屋顶风机', image: '/images/products/离心式屋顶风机/1.jpg' },
  { id: '31', name: '离心式屋顶风机(二)', category: '离心式屋顶风机', image: '/images/products/离心式屋顶风机/2.jpg' },
  { id: '32', name: '离心式屋顶风机(三)', category: '离心式屋顶风机', image: '/images/products/离心式屋顶风机/3.jpg' },
  { id: '33', name: '离心式屋顶风机(四)', category: '离心式屋顶风机', image: '/images/products/离心式屋顶风机/4.jpg' },

  // 轴流式屋顶风机
  { id: '34', name: '轴流式屋顶风机(一)', category: '轴流式屋顶风机', image: '/images/products/轴流式屋顶风机/1.jpg' },
  { id: '35', name: '轴流式屋顶风机(二)', category: '轴流式屋顶风机', image: '/images/products/轴流式屋顶风机/2.jpg' },
  { id: '36', name: '轴流式屋顶风机(三)', category: '轴流式屋顶风机', image: '/images/products/轴流式屋顶风机/3.jpg' },
  { id: '37', name: '轴流式屋顶风机(四)', category: '轴流式屋顶风机', image: '/images/products/轴流式屋顶风机/4.jpg' },
];

export const categories = [
  '全部分类',
  '轴流风机',
  '离心风机',
  '斜流风机',
  '除臭风机',
  '隔音风机',
  '高压风机',
  '4-72离心风机',
  '边墙风机',
  '方形壁式轴流风机',
  '离心式屋顶风机',
  '轴流式屋顶风机'
];
