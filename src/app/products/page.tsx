import { Sidebar } from "@/components/layout/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { productsData } from "@/data/products";

export const metadata = {
  title: '产品展示 - 河北欧意风机',
  description: '河北欧意科技集团有限公司主要生产各类玻璃钢风机系列产品，包括：轴流风机、离心风机、屋顶风机、斜流风机等。',
};

// Next.js App Router 允许在 Server Components 接收 searchParams
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const currentCategory = (resolvedParams.category as string) || '全部分类';

  // 根据分类过滤产品
  const filteredProducts = currentCategory === '全部分类' 
    ? productsData 
    : productsData.filter(p => p.category === currentCategory);

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto mb-4 text-sm text-gray-500">
        当前位置：<Link href="/" className="hover:text-[#0056b3]">首页</Link> &gt; <span>产品展示</span>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* 左侧边栏 */}
        <aside className="w-full md:w-1/4 shrink-0">
          <Sidebar />
        </aside>

        {/* 右侧主内容区 */}
        <main className="w-full md:w-3/4">
          <div className="bg-white border border-gray-200 min-h-125">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center bg-gray-50">
              <h1 className="text-xl font-bold text-[#0056b3] border-l-4 border-[#0056b3] pl-3">
                {currentCategory === '全部分类' ? '产品展示' : currentCategory}
              </h1>
              <span className="text-sm text-gray-500">共 {filteredProducts.length} 个产品</span>
            </div>
            
            <div className="p-6">
              {/* 产品网格 */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="border border-gray-200 group hover:border-[#0056b3] transition-colors bg-white">
                      <Link href={`/products/${product.id}`} className="block">
                        <div className="aspect-square relative overflow-hidden bg-white p-2 border-b border-gray-100">
                          <Image 
                            src={product.image} 
                            alt={product.name}
                            fill
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="py-3 px-2 text-center bg-gray-50 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                          <h3 className="text-sm font-medium truncate">{product.name}</h3>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                  <p>该分类下暂无产品</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
