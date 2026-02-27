import Link from 'next/link';

export function AboutUs() {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center border-b-2 border-[#0056b3] mb-4 pb-2">
        <h2 className="text-xl font-bold text-[#0056b3]">关于我们</h2>
        <Link href="/about" className="text-sm text-gray-500 hover:text-[#0056b3]">更多 &gt;&gt;</Link>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 shrink-0">
          <div className="aspect-4/3 bg-gray-200 relative overflow-hidden">
            {/* 使用灰色占位图 */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              公司厂房图
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 text-sm text-gray-700 leading-loose">
          <p className="mb-3 indent-8">
            <strong className="text-black">河北欧意科技集团有限公司</strong>成立于2012年，注册资金1.5亿，占地面积8万平米，是一家集研发、制造、销售为一体的玻璃钢产品制造技术企业。企业员工380人，其中,中级职称12人,初级技术人员2人。我公司和北京玻璃钢研究设计院、机械电子工业部第四设计院、天津化工设计院、清华大学等十几个科研单位和大专院校有长期协作关系，技术力量雄厚，年生产能力达到3亿元。
          </p>
          <p className="indent-8">
            我公司坚持“依科技求发展，重质量拓市场，抓管理促效益，靠人才增后劲”的发展方针，以人为本，治理整顿，深入开展企业内部的各项管理工作，以技术进步为先导狠抓产品质量，使我们公司在享有很高的声誉。公司秉承&quot;顾客至上，锐意进取&quot;的经营理念为广大客户提供优良的服务。
          </p>
        </div>
      </div>
    </div>
  );
}
