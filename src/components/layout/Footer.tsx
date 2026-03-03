import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#333] text-gray-300 py-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-600 pb-6 mb-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4">联系我们</h3>
            <p className="mb-2"><strong>公司名称：</strong>河北欧意科技集团有限公司</p>
            <p className="mb-2"><strong>联系人：</strong>郭建民</p>
            <p className="mb-2"><strong>联系电话：</strong>13931816112</p>
            <p className="mb-2"><strong>厂址：</strong>河北省衡水市枣强县富强北路 366 号</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4">快捷导览</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              <li><Link href="/" className="hover:text-white">网站首页</Link></li>
              <li><Link href="/about" className="hover:text-white">关于我们</Link></li>
              <li><Link href="/products" className="hover:text-white">产品展示</Link></li>
              <li><Link href="/contact" className="hover:text-white">联系我们</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-xs">
          <p>© {new Date().getFullYear()} 河北欧意科技集团有限公司 版权所有.</p>
          <p className="mt-2">主营产品：玻璃钢风机、轴流风机、离心风机等</p>
        </div>
      </div>
    </footer>
  );
}
