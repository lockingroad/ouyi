import { Sidebar } from "@/components/layout/Sidebar";
import Link from "next/link";

export const metadata = {
  title: '关于我们 - 河北欧意风机',
  description: '河北欧意科技集团有限公司成立于2012年，是一家集研发、制造、销售为一体的玻璃钢产品制造技术企业。',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-8">
      {/* 页面顶部面包屑 */}
      <div className="container mx-auto mb-4 text-sm text-gray-500">
        当前位置：<Link href="/" className="hover:text-[#0056b3]">首页</Link> &gt; <span>关于我们</span>
      </div>

      {/* 左右分栏布局 */}
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* 左侧边栏 */}
        <aside className="w-full md:w-1/4 shrink-0">
          <Sidebar />
        </aside>

        {/* 右侧主内容区 */}
        <main className="w-full md:w-3/4">
          <div className="bg-white border border-gray-200">
            <div className="border-b border-gray-200 px-6 py-4">
              <h1 className="text-2xl font-bold text-[#0056b3]">关于我们</h1>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="prose max-w-none text-gray-700 leading-8">
                <p className="indent-8 mb-4">
                  <strong>河北欧意科技集团有限公司</strong>成立于2012年，注册资金1.5亿，占地面积8万平米，是一家集研发、制造、销售为一体的玻璃钢产品制造技术企业。企业员工380人，其中,中级职称12人,初级技术人员2人。我公司和北京玻璃钢研究设计院、机械电子工业部第四设计院、天津化工设计院、清华大学等十几个科研单位和大专院校有长期协作关系，技术力量雄厚，年生产能力达到3亿元。
                </p>
                
                <p className="indent-8 mb-4">
                  我公司坚持“依科技求发展，重质量拓市场，抓管理促效益，靠人才增后劲”的发展方针，以人为本，治理整顿，深入开展企业内部的各项管理工作，以技术进步为先导狠抓产品质量，使我们公司在享有很高的声誉。公司秉承&quot;顾客至上，锐意进取&quot;的经营理念为广大客户提供优良的服务。
                </p>
                
                <p className="indent-8 mb-4">
                  我公司主要生产各类玻璃钢风机系列产品，包括：<strong>轴流风机、离心风机、屋顶风机、斜流风机、除臭风机、隔音风机、高压风机</strong>等。产品广泛应用于化工、冶金、医药、电力、建材、环保等各个领域。
                </p>

                <p className="indent-8 mb-4">
                  我们始终致力于通过不断的技术创新，为客户提供更高效、更节能、更环保的通风设备解决方案。凭借先进的生产设备、完善的检测手段、严格的质量管理体系，欧意风机已成为国内众多大型企业的优质供应商。
                </p>

                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-6 items-center justify-center">
                  <div className="w-full md:w-1/2 aspect-video bg-gray-100 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-400">公司办公大楼</span>
                  </div>
                  <div className="w-full md:w-1/2 aspect-video bg-gray-100 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-400">现代化生产车间</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
