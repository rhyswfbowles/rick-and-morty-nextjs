import { NextApiRequest, NextApiResponse } from 'next';
import Redis from '../../../lib/redis';

const getCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  await Redis.set(`character:${id}`, JSON.stringify(data));
  return data;
}

const characterHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let character: LickApi.ICharacter;
  const cachedValue = await Redis.get(`character:${req.query.id}`);
  
  if(cachedValue) {
    character = JSON.parse(cachedValue);
  } else {
    character = await getCharacter(req.query.id)
  }

  res.status(200).json(character)
}

export default characterHandler;
