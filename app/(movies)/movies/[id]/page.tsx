/**
 * [ 동적 라우트 ]
 * 동적 url로 사용할 폴더 안에 []중괄호로 묶은 폴더를 생성 후,
 * url params를 입력하면 해당 컴포넌트가 렌더링 된다
 * 이 때 해당 컴포넌트는 params, searchParams를 props으로 받을 수 있고,
 * 이 props를 이용하여 각각 다른 세부 페이지 내용을 보여줄 수 있다. 
 * 
 * ex) http://localhost:3000/movies/123123?region=kr&page=2
 *  {
        params: { id: '123123' },
        searchParams: { region: 'kr', page: '2' }
    }
 */

export default function MovieDetail({
  params: { id }, // props.params.id
}: {
  params: { id: string }; // 타입설정
}) {
  // console.log('props=>', props);
  // console.log('id=>', { id });
  return <h1>Movie {id}</h1>;
}
