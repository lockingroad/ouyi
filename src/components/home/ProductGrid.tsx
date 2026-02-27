import Image from 'next/image';
import Link from 'next/link';

export function ProductGrid() {
  const products = [
    {
      id: 1,
      name: '4-72离心风机',
      image: '/images/products/4-72离心风机/w-472-lixin-fengji.jpg',
      category: '4-72离心风机'
    },
    {
      id: 2,
      name: '屋顶风机',
      image: '/images/products/屋顶风机/w-wuding-fengji.jpg',
      category: '屋顶风机'
    },
    {
      id: 3,
      name: '斜流风机',
      image: '/images/products/斜流风机/w-xieliu-fengji.jpg',
      category: '斜流风机'
    },
    {
      id: 4,
      name: '离心风机',
      image: '/images/products/离心风机/w-lixin-fengji.jpg',
      category: '离心风机'
    },
    {
      id: 5,
      name: '轴流风机',
      image: '/images/products/轴流风机/w-zhouliu-fengji.jpg',
      category: '轴流风机'
    },
    {
      id: 6,
      name: '高压风机',
      image: '/images/products/高压风机/w-gaoya-fengji.jpg',
      category: '高压风机'
    }
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center border-b-2 border-[#0056b3] mb-4 pb-2">
        <h2 className="text-xl font-bold text-[#0056b3]">产品展示</h2>
        <Link href="/products" className="text-sm text-gray-500 hover:text-[#0056b3]">更多 &gt;&gt;</Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 group hover:border-[#0056b3] transition-colors bg-white">
            <Link href={`/products/${product.id}`} className="block">
              <div className="aspect-square relative overflow-hidden bg-white p-2">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="py-3 px-2 text-center border-t border-gray-100 bg-gray-50 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                <h3 className="text-sm font-medium truncate">{product.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
