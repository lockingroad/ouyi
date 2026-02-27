'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: '网站首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '产品展示', path: '/products' },
  { name: '联系我们', path: '/contact' },
];

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#0056b3] text-white">
      <div className="container mx-auto">
        <ul className="flex items-center m-0 p-0 list-none text-base font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            
            return (
              <li key={item.path} className="flex-1 text-center">
                <Link
                  href={item.path}
                  className={cn(
                    "block w-full py-4 transition-colors hover:bg-[#004494]",
                    isActive && "bg-[#004494] font-bold"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
