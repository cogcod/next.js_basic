'use client';
/* 
  # 해당 컴포넌트가 client에서 hydrated, interactive 하게 만들어줌
    --> backend에서 render > frontend에서 hydrate
  # 'use client'를 사용하지 않는 모든 컴포넌트는 server component
    --> 모든 컴포넌트는 server side render로 pre render됨 
    --> 하지만 위 명령어 사용시, 해당 컴포에서만 다루는 아주 작은 js파일을 다운받게 됨 
    --> 사용자가 JavaScript를 덜 다운받아도 되어서 속도 빨라짐 
*/

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// .modue.css 파일을 하나의 js 파일처럼 사용 -> 다른 css 파일과 클래스네임 충돌방지
// 실제로 랜덤한 클래스네임이 생성된다.
import styles from './navigation.module.css';

export default function Navigation() {
  // 현재 pathname 알려주는 hook 추가
  const path = usePathname();
  // console.log(path);
  return (
    <nav className={styles.nav}>
      <ul>
        {/* 
          a태그의 href는 브라우저의 네비게이션을 사용하게 됨 -> 새로고침 현상
          Link 컴포넌트가 JS에 의해 client side navigation을 수행해준다
        */}
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
