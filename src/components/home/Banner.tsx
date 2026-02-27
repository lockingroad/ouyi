'use client';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const banners = [
    {
      id: 1,
      image: '/images/banner/1.jpg',
      alt: '河北欧意科技集团有限公司 - 专业玻璃钢风机制造商'
    },
    {
      id: 2,
      image: '/images/banner/2.jpg',
      alt: '先进生产设备，雄厚技术力量'
    }
  ];

  return (
    <div className="w-full h-100 bg-gray-200 mb-6 relative overflow-hidden flex items-center justify-center">
      {/* 暂时使用占位符，因为没有真实的轮播图 */}
      <div className="text-ce1ersolute z-10">
        <h2 className="text-4xl font-bold text-[#0056b3] mb-4">河北欧意风机</h2>
        <p className="text-xl text-gray-700">专业生产玻璃钢风机、轴流风机、离心风机</p>
      </div>
      
      {/* 实际应用中这里应该放真实的轮播图 */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="h-full relative">
              <div className="w-full h-full bg-linear-to-r from-gray-300 to-gray-400 opacity-50"></div>
              {/* <img 
                src={banner.image} 
                alt={banner.alt} 
                className="w-full h-full object-cover"
              /> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-4" /> */}
        {/* <CarouselNext className="right-4" /> */}
      </Carousel>
    </div>
  );
}
