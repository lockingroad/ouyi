import { Sidebar } from "@/components/layout/Sidebar";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, User } from "lucide-react";

export const metadata = {
  title: '联系我们 - 河北欧意风机',
  description: '河北欧意科技集团有限公司联系方式，联系人：郭建民，电话：13931816112',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-8">
      {/* 页面顶部面包屑 */}
      <div className="container mx-auto mb-4 text-sm text-gray-500">
        当前位置：<Link href="/" className="hover:text-[#0056b3]">首页</Link> &gt; <span>联系我们</span>
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
              <h1 className="text-2xl font-bold text-[#0056b3]">联系我们</h1>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
                <h2 className="text-xl font-bold mb-6 text-gray-800">河北欧意科技集团有限公司</h2>
                
                <div className="space-y-4 text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 mt-1 text-[#0056b3] shrink-0" />
                    <div>
                      <span className="font-bold w-24 inline-block">联系人：</span>
                      <span>郭建民</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 text-[#0056b3] shrink-0" />
                    <div>
                      <span className="font-bold w-24 inline-block">手机/微信：</span>
                      <span className="text-2xl font-bold text-[#cc0000]">13931816112</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 text-[#0056b3] shrink-0" />
                    <div>
                      <span className="font-bold w-24 inline-block">电子邮箱：</span>
                      <span>暂无</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 text-[#0056b3] shrink-0" />
                    <div>
                      <span className="font-bold w-24 inline-block">营业时间：</span>
                      <span>周一至周日 8:00-18:00，全天候接听来电</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-[#0056b3] shrink-0" />
                    <div>
                      <span className="font-bold w-24 inline-block">公司地址：</span>
                      <span>河北省衡水市枣强县富强北路 366 号</span>
                    </div>
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
