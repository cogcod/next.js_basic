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

import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
  params: { id: string };
}

// 동적 MetaData
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({
  params: { id }, // props.params.id
}: IParams) {
  // console.log('id=>', { id });

  // 1. 각 함수 순차실행
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  /**
   * 2. Promise.all로 병렬실행 (시간절약)
   * - getMovie와 getVideos 함수 순차실행을 Promise.all을 사용해서 병렬로 변경하기
   * - Promise.all은 array를 return하기 때문에 [movie, videos]로 받는다
   */
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  /**
   * 3. Suspense
   * - 각 컴포넌트 병렬 실행
   * - data를 fetch하기 전에 자동 await 시켜준다
   * - await 되는 동안 fallback props 내용 노출
   */
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
