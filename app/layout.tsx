import Navigation from '../components/navigation';

export const metadata = {
  description: 'The best movies on the best framework',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // RootLayout은 자식 객체를 받는다
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

/**
 * Next는 가장 먼저 layout.tsx를 렌더링하고
 * 현재 url을 확인하여 중첩 레이아웃이 있는지 확인 후 자식 컴포넌트를 렌더링한다.
 *
 * <Layout>
 *  <AboutUsLayout>
 *    <AboutUs />
 *  </AboutUsLayout>
 * </Layout>
 */
