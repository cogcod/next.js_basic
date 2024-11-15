// Video(영화 관련 영상)만 렌더링하는 UI 컴포넌트

import { API_URL } from '../app/(home)/page';

async function getVideos(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error('something broke...');
  //   const response = await fetch(`${API_URL}/${id}/videos`);
  //   return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
