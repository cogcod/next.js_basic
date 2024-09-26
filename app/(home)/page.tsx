'use client';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';
/* 
  route groups은 폴더 이름을 괄호로 묶는다 => (home)
  괄호로 묶었기 때문에 url은 생성되지 않는다
*/

/**
 *  [ metadata ]
 *    - <head></head>에 들어갈 내용
 *    - page 또는 layout 파일에서만 작성 가능
 *    - 각 페이지마다 다르게 설정하거나 중첩 가능
 * */
// export const metadata: Metadata = {
//   title: 'Home',
// };
// --> 'use client' 컴포넌트에서는 사용 불가!

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/movies',
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
}
