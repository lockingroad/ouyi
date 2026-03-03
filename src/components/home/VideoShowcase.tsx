'use client';

import React from 'react';

export function VideoShowcase() {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center border-b-2 border-[#0056b3] mb-4 pb-2">
        <h2 className="text-xl font-bold text-[#0056b3]">企业风采</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative overflow-hidden rounded border border-gray-200 bg-black">
          <video
            src="/videos/fengji1.mp4"
            controls
            className="w-full aspect-video object-contain"
            poster="/images/products/轴流风机/w-zhouliu-fengji.jpg"
          >
            您的浏览器不支持视频播放
          </video>
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm text-center py-1 px-2">
            风机生产展示
          </div>
        </div>
        <div className="relative overflow-hidden rounded border border-gray-200 bg-black">
          <video
            src="/videos/fengji2.mp4"
            controls
            className="w-full aspect-video object-contain"
            poster="/images/products/离心风机/w-lixin-fengji.jpg"
          >
            您的浏览器不支持视频播放
          </video>
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm text-center py-1 px-2">
            玻璃钢风机展示
          </div>
        </div>
      </div>
      {/* 产品图片画廊 */}
      <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-2">
        {[
          { src: '/images/gallery/1.jpeg', alt: '轴流风机' },
          { src: '/images/gallery/2.jpeg', alt: '轴流风机2' },
          { src: '/images/gallery/3.jpeg', alt: '离心风机' },
          { src: '/images/gallery/4.jpeg', alt: '离心风机2' },
          { src: '/images/gallery/5.jpeg', alt: '壁式风机' },
          { src: '/images/gallery/6.jpeg', alt: '壁式风机2' },
        ].map((item, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded border border-gray-200">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
