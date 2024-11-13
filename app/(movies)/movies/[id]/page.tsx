/**
 * [ 동적 라우트 ]
 * 동적 url로 사용할 폴더 안에 []중괄호로 묶은 폴더를 생성 후(ex_ [id]),
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

import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id }, // props.params.id
}: {
  params: { id: string }; // 타입설정
}) {
  // console.log('id=>', { id });
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  /**
   * getMovie와 getVideos 함수 순차실행을 Promise.all을 사용해서 병렬로 변경하기
   * Promise.all은 array를 return하기 때문에 [movie, videos]로 받기
   */
  console.log('start fetching');
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log('end fetching');
  return <h1>{movie.title}</h1>;
}
