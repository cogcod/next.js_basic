/**
 *  [ metadata ]
 *    - <head></head>에 들어갈 내용
 *    - page 또는 layout 파일에서만 작성 가능
 *    - 각 페이지마다 다르게 설정하거나 중첩 가능
 * */
export const metadata = {
  title: 'Home | Next Movies ',
};

export default function Page() {
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}

/* 
  route groups은 폴더 이름을 괄호로 묶는다 => (home)
  괄호로 묶었기 때문에 url은 생성하지 않는다
*/
