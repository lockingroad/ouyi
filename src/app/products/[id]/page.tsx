import { Sidebar } from "@/components/layout/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { productsData } from "@/data/products";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find(p => p.id === id);
  
  if (!product) {
    return {
      title: '产品未找到 - 河北欧意风机'
    };
  }

  return {
    title: `${product.name} - 河北欧意风机`,
    description: `河北欧意风机专业生产${product.name}等优质玻璃钢风机产品。`,
  };
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const product = productsData.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto mb-4 text-sm text-gray-500">
        当前位置：
        <Link href="/" className="hover:text-[#0056b3]">首页</Link> &gt;{' '}
        <Link href="/products" className="hover:text-[#0056b3]">产品展示</Link> &gt;{' '}
        <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#0056b3]">{product.category}</Link> &gt;{' '}
        <span>{product.name}</span>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* 左侧边栏 */}
        <aside className="w-full md:w-1/4 shrink-0">
          <Sidebar />
        </aside>

        {/* 右侧主内容区 */}
        <main className="w-full md:w-3/4">
          <div className="bg-white border border-gray-200">
            <div className="border-b border-gray-200 px-6 py-4 bg-gray-50">
              <h1 className="text-xl font-bold text-[#0056b3] border-l-4 border-[#0056b3] pl-3">
                {product.name}
              </h1>
            </div>
            
            <div className="p-6 md:p-8">
              {/* 产品大图和简介 */}
              <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b border-gray-200">
                <div className="w-full md:w-1/2">
                  <div className="aspect-square relative border border-gray-200 p-2">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      priority
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                  <div className="bg-gray-50 p-4 border border-gray-200 mb-6 space-y-2 text-sm text-gray-600">
                    <p><strong>产品分类：</strong>{product.category}</p>
                    <p><strong>产地：</strong>河北省衡水市枣强县</p>
                    <p><strong>品牌：</strong>欧意</p>
                  </div>
                  
                  <div className="border border-[#cc0000] p-4 text-center">
                    <p className="text-gray-600 mb-2">咨询热线</p>
                    <p className="text-2xl font-bold text-[#cc0000]">13931816112</p>
                    <p className="text-sm text-gray-500 mt-1">联系人：郭建民</p>
                  </div>
                </div>
              </div>

              {/* 产品详细说明 */}
              <div>
                <div className="bg-[#0056b3] text-white py-2 px-4 font-bold inline-block mb-4">
                  产品详情
                </div>
                <div className="prose max-w-none text-gray-700 leading-8">
                  <p>
                    河北欧意科技集团有限公司专业生产各型号<strong>{product.name}</strong>，采用优质玻璃钢材质，具有防腐防爆、运行平稳、噪音低、寿命长等特点。
                  </p>
                  <p>
                    该系列产品主要用于工厂、车间、仓库、办公室、住宅等场所的通风换气。也适用于冷冷风机、空调机组、蒸发式冷凝器、暖风机等设备的配套使用。
                  </p>
                  <div className="my-6">
                    <h3 className="text-lg font-bold text-[#0056b3] mb-2 border-b border-gray-200 pb-2">主要特点：</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>防腐蚀性能优良：采用高性能不饱和聚酯树脂和玻璃纤维制成，耐酸碱。</li>
                      <li>强度高，重量轻：玻璃钢材质比重轻，但强度极高。</li>
                      <li>运转平稳：经过严格的动静平衡测试，振动小。</li>
                      <li>低噪音：气动设计优化，运行噪音低。</li>
                      <li>维护方便：结构设计合理，便于日常检查与维护。</li>
                    </ul>
                  </div>
                  <p className="text-gray-500 text-sm italic mt-8 border-t border-gray-200 pt-4">
                    注：网站展示的产品图片仅供参考，具体产品规格、参数及定制需求，请致电联系我们。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
