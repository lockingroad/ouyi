import Link from 'next/link';
import { Phone, MapPin, User } from 'lucide-react';

const categories = [
  '轴流风机',
  '离心风机',
  '斜流风机',
  '除臭风机',
  '高压风机',
  '4-72离心风机',
  '边墙风机',
  '方形壁式轴流风机',
  '离心式屋顶风机',
  '轴流式屋顶风机'
];

export function Sidebar() {
  return (
    <div className="w-full">
      {/* 区块一：产品分类 */}
      <div className="border border-gray-200 bg-white mb-4">
        <div className="bg-[#0056b3] text-white py-2 px-4 font-bold text-lg">
          产品分类导航
        </div>
        <ul className="p-0 m-0 list-none">
          {categories.map((category) => (
            <li key={category} className="border-b border-gray-200 last:border-b-0">
              <Link 
                href={`/products?category=${encodeURIComponent(category)}`}
                className="block py-3 px-4 hover:bg-gray-50 hover:text-[#0056b3] transition-colors"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 区块二：联系方式 */}
      <div className="border border-gray-200 bg-white">
        <div className="bg-[#0056b3] text-white py-2 px-4 font-bold text-lg">
          联系方式
        </div>
        <div className="p-4 text-sm leading-relaxed space-y-3">
          <div className="font-bold text-base mb-2">河北欧意科技集团有限公司</div>
          <div className="flex items-start gap-2">
            <User className="w-4 h-4 mt-1 text-gray-500 shrink-0" />
            <div>
              <span className="text-gray-500">联系人：</span>
              郭建民
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-1 text-gray-500 shrink-0" />
            <div>
              <span className="text-gray-500">手机/微信：</span>
              <span className="text-[#cc0000] font-bold text-lg block">13931816112</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1 text-gray-500 shrink-0" />
            <div>
              <span className="text-gray-500">厂址：</span>
              河北省衡水市枣强县玻璃钢工业园
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
