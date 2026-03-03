'use client';

import { useState } from 'react';
import { Banner } from "@/components/home/Banner";
import { Sidebar } from "@/components/layout/Sidebar";
import { AboutUs } from "@/components/home/AboutUs";
import { ProductGrid } from "@/components/home/ProductGrid";
import { VideoShowcase } from "@/components/home/VideoShowcase";

const tabs = [
  { id: 'home', label: '网站首页' },
  { id: 'about', label: '公司简介' },
  { id: 'products', label: '产品展示' },
  { id: 'video', label: '企业风采' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="bg-gray-50 pb-12">
      {/* 轮播图 - 全宽 */}
      <div className="container mx-auto mt-4">
        <Banner />
      </div>

      {/* Tab 导航栏 */}
      <div className="container mx-auto mb-4">
        <div className="flex border-b-2 border-[#0056b3]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#0056b3] text-white'
                  : 'bg-white text-gray-600 hover:text-[#0056b3] hover:bg-blue-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 左右分栏布局 */}
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* 左侧边栏 - 约占 25% */}
        <aside className="w-full md:w-1/4 shrink-0">
          <Sidebar />
        </aside>

        {/* 右侧主内容区 - 约占 75% */}
        <main className="w-full md:w-3/4">
          {/* Tab 内容区域 */}
          {activeTab === 'home' && (
            <>
              <AboutUs />
              <ProductGrid />
            </>
          )}
          {activeTab === 'about' && (
            <AboutUs />
          )}
          {activeTab === 'products' && (
            <ProductGrid />
          )}
          {activeTab === 'video' && (
            <VideoShowcase />
          )}
        </main>
      </div>
    </div>
  );
}
