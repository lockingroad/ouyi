import Link from 'next/link';

export function TopHeader() {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* 左侧：公司名称 */}
        <div className="text-2xl font-bold text-[#0056b3]">
          <Link href="/">河北欧意风机</Link>
        </div>
        
        {/* 右侧：全国服务热线 */}
        <div className="text-right">
          <div className="text-gray-600 text-sm mb-1">全国服务热线：</div>
          <div className="text-2xl font-bold text-[#cc0000]">
            郭建民 13931816112
          </div>
        </div>
      </div>
    </div>
  );
}
