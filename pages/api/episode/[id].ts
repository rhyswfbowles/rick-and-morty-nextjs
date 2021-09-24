import { NextApiRequest, NextApiResponse } from 'next';
import Redis from '../../../lib/redis';

const getEpisode = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await res.json();
  await Redis.set(`episode:${id}`, JSON.stringify(data));
  return data;
}

const episodeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let episode: LickApi.IEpisode;
  const cachedValue = await Redis.get(`episode:${req.query.id}`);
  
  if(cachedValue) {
    episode = JSON.parse(cachedValue);
  } else {
    episode = await getEpisode(req.query.id)
  }

  res.status(200).json(episode)
}

export default episodeHandler;
