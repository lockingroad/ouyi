"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const banners = [
    {
      id: 1,
      image: "/images/gallery/1.jpeg",
      alt: "河北欧意科技集团有限公司 - 专业玻璃钢风机制造商",
    },
    {
      id: 2,
      image: "/images/banner/2.jpg",
      alt: "先进生产设备，雄厚技术力量",
    },
    {
      id: 3,
      image: "/images/gallery/2.jpeg",
      alt: "河北欧意科技集团有限公司产品展示",
    },
  ];

  return (
    <div className="w-full h-95 mb-6 relative overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="h-full relative">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-95 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent px-8 py-6">
                <h2 className="text-3xl font-bold text-white drop-shadow">
                  河北欧意风机
                </h2>
                <p className="text-lg text-white/90 mt-1">
                  专业生产玻璃钢风机、轴流风机、离心风机
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/70 hover:bg-white" />
        <CarouselNext className="right-4 bg-white/70 hover:bg-white" />
      </Carousel>
    </div>
  );
}
