'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  // 현재 pathname 알려주는 hook 추가
  const path = usePathname();
  // console.log(path);
  return (
    <nav>
      <ul>
        {/* a태그의 href는 브라우저의 네비게이션을 사용하게 됨*/}
        <li>
          <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{' '}
          {path === '/about-us' ? '🔥' : ''}
        </li>
      </ul>
    </nav>
  );
}
