// 해당 url에 필요한 레이아웃 추가
export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children} &copy; Next JS is great!</div>;
}
