import { Banner } from "@/components/home/Banner";
import { Sidebar } from "@/components/layout/Sidebar";
import { AboutUs } from "@/components/home/AboutUs";
import { ProductGrid } from "@/components/home/ProductGrid";

export default function Home() {
  return (
    <div className="bg-gray-50 pb-12">
      {/* 轮播图 - 全宽或容器宽 */}
      <div className="container mx-auto mt-4">
        <Banner />
      </div>

      {/* 左右分栏布局 */}
      <div className="container mx-auto flex flex-col md:flex-row gap-6 mt-4">
        {/* 左侧边栏 - 约占 25% */}
        <aside className="w-full md:w-1/4 shrink-0">
          <Sidebar />
        </aside>

        {/* 右侧主内容区 - 约占 75% */}
        <main className="w-full md:w-3/4">
          <AboutUs />
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}
