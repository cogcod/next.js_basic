/* 
  route groups : 폴더 이름을 괄호로 묶는다 => (home)
  괄호로 묶었기 때문에 url은 생성되지 않는다
*/

import { Metadata } from 'next';

/**
 *  [ metadata ]
 *    - <head></head>에 들어갈 내용
 *    - page 또는 layout 파일에서만 작성 가능
 *    - 각 페이지마다 다르게 설정하거나 중첩 가능
 * */
export const metadata: Metadata = {
  title: 'Home',
};
// --> 'use client' 컴포넌트에서는 사용 불가!

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  // return fetch(URL).then((response) => response.json());

  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}

/**
 * [ 기존 fetch 방식 ]
 *  - 'use client'를 선언하므로 meta data를 사용할 수 없음
 *  - client에서 React가 작동하기 때문에 항상 API를 써서 백엔드와 통신해야함
 *    >> 그렇지 않으면 브라우저에서 아무나 DB 정보를 알 수 있기 때문에
 *  - isLoading을 스스로 구현해야 함
 */

/**
 * [ Server Side 방식 ]
 *  - 브라우저 network에서 api를 확인할 수 없게됨!
 *  - Next.js는 처음 fetch된 데이터를 기억한뒤, 이후에 API 요청을 하지 않는다
 *  - API의 첫번째 요청에 대한 Loading 상태가 있을 수 있음
 */
